import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return new Response('Unauthorized', {
        status: 401,
        });
    }
    
    try {
      revalidatePath("/parndorf");
      revalidatePath("/salzburg");
      console.log("Pages revalidated successfully");
    } catch (error) {
      console.error("Error revalidating pages:", error);
    }

    console.log("Cron job completed");

    return NextResponse.json({
      success: true,
      message: "Cron job completed",
    });
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

