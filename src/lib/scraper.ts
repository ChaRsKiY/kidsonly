import * as cheerio from 'cheerio';

export interface OpeningHours {
  day: string;
  hours: string;
}

export interface ScrapedData {
  openingHours: OpeningHours[];
  lastUpdated: string;
}

export async function scrapeParndorfHours(): Promise<ScrapedData> {
  try {
    const response = await fetch('https://parndorffashionoutlet.com/marke/kids-only/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);
    
    const openingHours: OpeningHours[] = [];
    
    // Ищем таблицу с часами работы
    const hoursTable = $('table').filter((i, table) => {
      const tableText = $(table).text();
      return tableText.includes('Montag') || tableText.includes('Donnerstag') || tableText.includes('Freitag');
    });

    if (hoursTable.length > 0) {
      const rows = hoursTable.find('tr').toArray();
      
      for (let i = 0; i < rows.length; i++) {
        const $row = $(rows[i]);
        const text = $row.text().trim();
        
        if (text && !text.includes('Öffnungszeiten') && text.length > 5) {
          const lines = text.split('\n').filter(line => line.trim());
          
          // Обрабатываем случай, когда в одной строке есть несколько дней
          if (lines.length >= 2) {
            const firstLine = lines[0].trim();
            const secondLine = lines[1].trim();
            
            // Проверяем, содержит ли массив строк несколько дней в одной строке
            if (lines.length >= 4 && firstLine.includes('Montag – Donnerstag') && lines[1].includes('Freitag')) {
              // Специальный случай: в первой строке два дня, во второй - два времени
              const day1 = lines[0].trim(); // "Montag – Donnerstag"
              const day2 = lines[1].trim(); // "Freitag"
              const time1 = lines[2].trim(); // "9:30-19:00 Uhr"
              const time2 = lines[3].trim(); // "9:30-20:00 Uhr"
              
              // Добавляем обе пары
              openingHours.push({ day: day1, hours: time1 });
              openingHours.push({ day: day2, hours: time2 });
            } else {
              // Обычный случай - одна пара день-время
              const day = firstLine;
              const hours = secondLine;
              
              if (day && hours && !hours.includes('Geschlossen')) {
                openingHours.push({ day, hours });
              }
            }
          }
        }
      }
    }

    // Если не нашли в таблице, ищем в других элементах
    if (openingHours.length === 0) {
      $('*').each((i, element) => {
        const text = $(element).text();
        if (text.includes('Montag') && text.includes('Uhr')) {
          const lines = text.split('\n').filter(line => line.trim());
          lines.forEach(line => {
            if (line.includes('Montag') || line.includes('Freitag') || line.includes('Samstag')) {
              const parts = line.split(/(\d{1,2}:\d{2})/);
              if (parts.length >= 3) {
                const day = parts[0].trim();
                const hours = parts.slice(1).join('').trim();
                if (day && hours) {
                  openingHours.push({ day, hours });
                }
              }
            }
          });
        }
      });
    }

    // Если все еще не нашли, используем данные по умолчанию из сайта
    if (openingHours.length === 0) {
      openingHours.push(
        { day: "Montag – Donnerstag", hours: "9:30 – 19:00 Uhr" },
        { day: "Freitag", hours: "9:30 – 20:00 Uhr" },
        { day: "Samstag", hours: "9:00 – 18:00 Uhr" },
        { day: "Sonn- und Feiertage", hours: "Geschlossen" }
      );
    }

    // Удаляем дубликаты по дню недели
    const uniqueHours = openingHours.filter((item, index, self) => 
      index === self.findIndex(t => t.day === item.day)
    );

    return {
      openingHours: uniqueHours,
      lastUpdated: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error scraping Parndorf hours:', error);
    
    // Возвращаем данные по умолчанию в случае ошибки
    return {
      openingHours: [
        { day: "Montag – Donnerstag", hours: "9:30 – 19:00 Uhr" },
        { day: "Freitag", hours: "9:30 – 20:00 Uhr" },
        { day: "Samstag", hours: "9:00 – 18:00 Uhr" },
        { day: "Sonn- und Feiertage", hours: "Geschlossen" }
      ],
      lastUpdated: new Date().toISOString()
    };
  }
}
