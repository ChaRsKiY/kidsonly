import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  try {
    // Проверка авторизации: Vercel Cron Jobs автоматически добавляют заголовок x-vercel-cron
    // Также проверяем опциональный CRON_SECRET из переменных окружения
    const vercelCron = request.headers.get("x-vercel-cron");
    const authHeader = request.headers.get("authorization");
    const cronSecret = process.env.CRON_SECRET;

    // Если установлен CRON_SECRET, проверяем его через Authorization header
    // Если CRON_SECRET не установлен, проверяем только заголовок x-vercel-cron
    if (cronSecret) {
      if (authHeader !== `Bearer ${cronSecret}`) {
        return NextResponse.json(
          { error: "Unauthorized - Invalid CRON_SECRET" },
          { status: 401 }
        );
      }
    } else {
      // В production Vercel всегда добавляет заголовок x-vercel-cron для cron jobs
      // В development можно пропустить эту проверку для тестирования
      if (process.env.NODE_ENV === "production" && !vercelCron) {
        return NextResponse.json(
          { error: "Unauthorized - Not a Vercel Cron Job" },
          { status: 401 }
        );
      }
    }

    console.log("Starting scheduled update of opening hours for both branches...");
    const startTime = Date.now();

    // Получаем базовый URL из request или переменных окружения
    // В Vercel используем VERCEL_URL для production или nextUrl.origin для других случаев
    const baseUrl = 
      process.env.VERCEL_URL 
        ? `https://${process.env.VERCEL_URL}` 
        : process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin;
    
    console.log(`Using base URL: ${baseUrl}`);
    const timestamp = new Date().toISOString();

    // Вызываем парсинг для Parndorf
    let parndorfSuccess = false;
    let parndorfError: string | null = null;
    try {
      const parndorfUrl = `${baseUrl}/api/parndorf/hours`;
      console.log(`Fetching Parndorf hours from: ${parndorfUrl}`);
      
      // Создаем AbortController для timeout
      const parndorfController = new AbortController();
      const parndorfTimeout = setTimeout(() => parndorfController.abort(), 60000); // 60 секунд

      const parndorfResponse = await fetch(parndorfUrl, {
        method: "GET",
        headers: {
          "User-Agent": "Vercel-Cron-Job/1.0",
          "Cache-Control": "no-cache",
        },
        signal: parndorfController.signal,
      });
      
      clearTimeout(parndorfTimeout);
      
      if (parndorfResponse.ok) {
        const parndorfData = await parndorfResponse.json();
        console.log("Parndorf hours updated:", parndorfData.success);
        parndorfSuccess = parndorfData.success || false;
      } else {
        const errorText = await parndorfResponse.text();
        throw new Error(`Parndorf API returned ${parndorfResponse.status}: ${errorText}`);
      }
    } catch (error) {
      console.error("Error updating Parndorf hours:", error);
      parndorfError = error instanceof Error ? error.message : "Unknown error";
    }

    // Вызываем парсинг для Salzburg
    let salzburgSuccess = false;
    let salzburgError: string | null = null;
    try {
      const salzburgUrl = `${baseUrl}/api/salzburg/hours`;
      console.log(`Fetching Salzburg hours from: ${salzburgUrl}`);
      
      // Создаем AbortController для timeout (Salzburg использует Puppeteer, может быть медленнее)
      const salzburgController = new AbortController();
      const salzburgTimeout = setTimeout(() => salzburgController.abort(), 120000); // 120 секунд

      const salzburgResponse = await fetch(salzburgUrl, {
        method: "GET",
        headers: {
          "User-Agent": "Vercel-Cron-Job/1.0",
          "Cache-Control": "no-cache",
        },
        signal: salzburgController.signal,
      });
      
      clearTimeout(salzburgTimeout);
      
      if (salzburgResponse.ok) {
        const salzburgData = await salzburgResponse.json();
        console.log("Salzburg hours updated:", salzburgData.success);
        salzburgSuccess = salzburgData.success || false;
      } else {
        const errorText = await salzburgResponse.text();
        throw new Error(`Salzburg API returned ${salzburgResponse.status}: ${errorText}`);
      }
    } catch (error) {
      console.error("Error updating Salzburg hours:", error);
      salzburgError = error instanceof Error ? error.message : "Unknown error";
    }

    // Revalidate страницы для обновления кеша Next.js
    try {
      revalidatePath("/parndorf");
      revalidatePath("/salzburg");
      console.log("Pages revalidated successfully");
    } catch (error) {
      console.error("Error revalidating pages:", error);
    }

    const duration = Date.now() - startTime;

    const result = {
      success: parndorfSuccess && salzburgSuccess,
      timestamp,
      duration: `${duration}ms`,
      results: {
        parndorf: {
          success: parndorfSuccess,
          error: parndorfError,
        },
        salzburg: {
          success: salzburgSuccess,
          error: salzburgError,
        },
      },
      message: "Scheduled update completed",
    };

    console.log("Cron job completed:", JSON.stringify(result, null, 2));

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in cron job:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Cron job failed",
        message: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

