import { NextRequest, NextResponse } from 'next/server';
import * as cheerio from 'cheerio';


export async function GET(request: NextRequest) {
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
    
    const openingHours = [];
    
    const hoursTable = $('table').filter((i, table) => {
      const tableText = $(table).text();
      return tableText.includes('Montag') || tableText.includes('Donnerstag') || tableText.includes('Freitag') || tableText.includes('Dienstag');
    });

    if (hoursTable.length > 0) {
      const rows = hoursTable.find('tr').toArray();
      
      // Паттерны для распознавания
      const dayPattern = /(Montag|Dienstag|Mittwoch|Donnerstag|Freitag|Samstag|Sonntag|Sonn- und Feiertage)(\s*–\s*(Montag|Dienstag|Mittwoch|Donnerstag|Freitag|Samstag|Sonntag))?/i;
      const timePattern = /\d{1,2}:\d{2}\s*[–\-\s]\s*\d{1,2}:\d{2}\s*Uhr/i;
      const geschlossenPattern = /Geschlossen/i;
      
      // Собираем все строки таблицы с их ячейками
      const tableRows: Array<{cells: string[], rowIndex: number}> = [];
      
      for (let i = 0; i < rows.length; i++) {
        const $row = $(rows[i]);
        const cells = $row.find('td, th').toArray();
        
        // Пропускаем пустые строки
        if (cells.length === 0) continue;
        
        const rowText = $row.text().trim();
        if (!rowText || rowText.includes('Öffnungszeiten')) continue;
        
        const cellTexts = cells.map(cell => $(cell).text().trim()).filter(text => text.length > 0);
        if (cellTexts.length > 0) {
          tableRows.push({ cells: cellTexts, rowIndex: i });
        }
      }
      
      // Отслеживаем обработанные строки, чтобы избежать дубликатов
      const processedRows = new Set<number>();
      
      // Обрабатываем таблицу построчно
      for (let i = 0; i < tableRows.length; i++) {
        // Пропускаем уже обработанные строки
        if (processedRows.has(i)) {
          continue;
        }
        
        const row = tableRows[i];
        const cells = row.cells;
        
        // Случай 1: Стандартная структура - две ячейки (день | время)
        if (cells.length === 2) {
          const firstCell = cells[0];
          const secondCell = cells[1];
          
          // Если первая ячейка содержит день, а вторая - время
          if (dayPattern.test(firstCell) && (timePattern.test(secondCell) || geschlossenPattern.test(secondCell))) {
            // Извлекаем день из первой ячейки
            const dayMatch = firstCell.match(dayPattern);
            if (dayMatch) {
              const dayText = dayMatch[0].trim();
              let hoursText = secondCell.trim();
              
              // Нормализуем время
              if (geschlossenPattern.test(hoursText)) {
                hoursText = 'Geschlossen';
              } else {
                const timeMatch = hoursText.match(timePattern);
                if (timeMatch) {
                  hoursText = timeMatch[0].trim();
                }
              }
              
              openingHours.push({ day: dayText, hours: hoursText });
              processedRows.add(i);
              continue;
            }
          }
        }
        
        // Случай 2: Одна ячейка или несколько ячеек - ищем день и время в строке
        // Проверяем, есть ли в строке и день, и время
        let foundDays: string[] = [];
        let foundTimes: string[] = [];
        
        for (const cell of cells) {
          // Ищем все дни в ячейке (может быть несколько)
          let cellText = cell;
          let match;
          const daysInCell: string[] = [];
          
          // Используем глобальный поиск для нахождения всех дней
          const globalDayPattern = /(Montag|Dienstag|Mittwoch|Donnerstag|Freitag|Samstag|Sonntag|Sonn- und Feiertage)(\s*–\s*(Montag|Dienstag|Mittwoch|Donnerstag|Freitag|Samstag|Sonntag))?/gi;
          
          while ((match = globalDayPattern.exec(cellText)) !== null) {
            const dayText = match[0].trim();
            if (dayText && !daysInCell.includes(dayText)) {
              daysInCell.push(dayText);
            }
          }
          
          // Добавляем найденные дни
          for (const day of daysInCell) {
            if (!foundDays.includes(day)) {
              foundDays.push(day);
            }
          }
          
          // Ищем все времена в ячейке (может быть несколько)
          const globalTimePattern = /\d{1,2}:\d{2}\s*[–\-\s]\s*\d{1,2}:\d{2}\s*Uhr/gi;
          let timeMatch;
          const timesInCell: string[] = [];
          
          while ((timeMatch = globalTimePattern.exec(cellText)) !== null) {
            const timeText = timeMatch[0].trim();
            if (timeText && !timesInCell.includes(timeText)) {
              timesInCell.push(timeText);
            }
          }
          
          // Добавляем найденные времена
          for (const time of timesInCell) {
            if (!foundTimes.includes(time)) {
              foundTimes.push(time);
            }
          }
          
          // Проверяем на "Geschlossen"
          if (geschlossenPattern.test(cell)) {
            if (!foundTimes.includes('Geschlossen')) {
              foundTimes.push('Geschlossen');
            }
          }
        }
        
        // Если в строке есть и дни, и времена, создаем пары
        if (foundDays.length > 0 && foundTimes.length > 0) {
          // Если количество дней и времен совпадает, создаем прямые пары
          if (foundDays.length === foundTimes.length) {
            for (let j = 0; j < foundDays.length; j++) {
              openingHours.push({ day: foundDays[j], hours: foundTimes[j] });
            }
          } else if (foundDays.length === 2 && foundTimes.length === 2) {
            // Специальный случай: два дня и два времени
            openingHours.push({ day: foundDays[0], hours: foundTimes[0] });
            openingHours.push({ day: foundDays[1], hours: foundTimes[1] });
          } else {
            // Общий случай: связываем по порядку
            for (let j = 0; j < Math.min(foundDays.length, foundTimes.length); j++) {
              openingHours.push({ day: foundDays[j], hours: foundTimes[j] });
            }
          }
          processedRows.add(i);
          continue;
        }
        
        // Случай 3: Только дни в строке - ищем следующую строку с временами
        if (foundDays.length > 0 && foundTimes.length === 0) {
          // Ищем следующую строку с временами
          for (let j = i + 1; j < tableRows.length; j++) {
            const nextRow = tableRows[j];
            const nextTimes: string[] = [];
            const nextDays: string[] = [];
            
            // Проверяем следующую строку на наличие дней
            for (const cell of nextRow.cells) {
              const globalDayPattern = /(Montag|Dienstag|Mittwoch|Donnerstag|Freitag|Samstag|Sonntag|Sonn- und Feiertage)(\s*–\s*(Montag|Dienstag|Mittwoch|Donnerstag|Freitag|Samstag|Sonntag))?/gi;
              let dayMatch;
              while ((dayMatch = globalDayPattern.exec(cell)) !== null) {
                const dayText = dayMatch[0].trim();
                if (dayText && !nextDays.includes(dayText)) {
                  nextDays.push(dayText);
                }
              }
            }
            
            // Если следующая строка содержит дни, прерываем поиск (это новая группа)
            if (nextDays.length > 0) {
              break;
            }
            
            // Ищем времена в следующей строке
            for (const cell of nextRow.cells) {
              const globalTimePattern = /\d{1,2}:\d{2}\s*[–\-\s]\s*\d{1,2}:\d{2}\s*Uhr/gi;
              let timeMatch;
              while ((timeMatch = globalTimePattern.exec(cell)) !== null) {
                const timeText = timeMatch[0].trim();
                if (timeText && !nextTimes.includes(timeText)) {
                  nextTimes.push(timeText);
                }
              }
              
              if (geschlossenPattern.test(cell)) {
                if (!nextTimes.includes('Geschlossen')) {
                  nextTimes.push('Geschlossen');
                }
              }
            }
            
            if (nextTimes.length > 0) {
              // Связываем дни с временами по порядку
              if (foundDays.length === nextTimes.length) {
                for (let k = 0; k < foundDays.length; k++) {
                  openingHours.push({ day: foundDays[k], hours: nextTimes[k] });
                }
              } else if (foundDays.length === 2 && nextTimes.length === 2) {
                openingHours.push({ day: foundDays[0], hours: nextTimes[0] });
                openingHours.push({ day: foundDays[1], hours: nextTimes[1] });
            } else {
                // Связываем по порядку до минимума
                for (let k = 0; k < Math.min(foundDays.length, nextTimes.length); k++) {
                  openingHours.push({ day: foundDays[k], hours: nextTimes[k] });
                }
              }
              processedRows.add(i); // Помечаем текущую строку как обработанную
              processedRows.add(j); // Помечаем следующую строку как обработанную
              break;
            }
          }
          // Если нашли пару, строка уже обработана
          if (processedRows.has(i)) {
            continue;
          }
        }
        
        // Случай 4: Только одно значение в ячейке - может быть день или время
        // Если это день, он будет обработан в следующей итерации или в случае 3
        // Если это время, оно будет проигнорировано (должно быть связано с предыдущим днем)
        if (cells.length === 1 && cells[0]) {
          const singleCell = cells[0];
          
          // Если это день без времени
          if (dayPattern.test(singleCell) && !timePattern.test(singleCell) && !geschlossenPattern.test(singleCell)) {
            const dayMatch = singleCell.match(dayPattern);
            if (dayMatch) {
              const dayText = dayMatch[0].trim();
              
              // Ищем следующую строку с временем
              for (let j = i + 1; j < tableRows.length; j++) {
                const nextRow = tableRows[j];
                let nextTime: string | null = null;
                let hasNextDay = false;
                
                for (const cell of nextRow.cells) {
                  if (dayPattern.test(cell)) {
                    hasNextDay = true;
                    break;
                  }
                  
                  if (timePattern.test(cell)) {
                    const timeMatch = cell.match(timePattern);
                    if (timeMatch) {
                      nextTime = timeMatch[0].trim();
                    }
                  } else if (geschlossenPattern.test(cell)) {
                    nextTime = 'Geschlossen';
                  }
                }
                
                if (hasNextDay) {
                  break;
                }
                
                if (nextTime) {
                  openingHours.push({ day: dayText, hours: nextTime });
                  processedRows.add(i); // Помечаем текущую строку как обработанную
                  processedRows.add(j); // Помечаем следующую строку как обработанную
                  break;
                }
              }
            }
          }
        }
      }
    }

    // Функция для нормализации дня (приводим к единому формату)
    const normalizeDay = (day: string): string => {
      if (!day) return '';
      return day.trim()
        .replace(/\s+/g, ' ') // Множественные пробелы в один
        .replace(/[–\-—]/g, '–') // Все тире в длинное тире (en-dash)
        .replace(/\s*–\s*/g, ' – ') // Нормализуем пробелы вокруг тире
        .trim();
    };
    
    // Функция для нормализации времени
    const normalizeTime = (time: string): string => {
      if (!time) return '';
      return time.trim()
        .replace(/\s+/g, ' ')
        .replace(/[–\-—]/g, '–')
        .replace(/\s*–\s*/g, ' – ')
        .trim();
    };
    
    // Удаляем дубликаты по дню недели, сохраняя первое вхождение
    // Но если встречается тот же день с другим временем, предпочитаем более полную информацию
    const seenDays = new Map<string, {day: string, hours: string, index: number}>();
    for (let idx = 0; idx < openingHours.length; idx++) {
      const item = openingHours[idx];
      if (item.day && item.hours) {
        const normalizedDay = normalizeDay(item.day);
        const normalizedHours = normalizeTime(item.hours);
        
        if (!normalizedDay) continue;
        
        // Если день еще не встречался, добавляем его
        if (!seenDays.has(normalizedDay)) {
          seenDays.set(normalizedDay, { 
            day: normalizedDay, 
            hours: normalizedHours,
            index: idx
          });
        } else {
          // Если день уже встречался, проверяем, не является ли новое время более полным
          const existing = seenDays.get(normalizedDay)!;
          // Предпочитаем время с правильным форматом (с длинным тире)
          if (normalizedHours.includes(' – ') && !existing.hours.includes(' – ')) {
            seenDays.set(normalizedDay, {
              day: normalizedDay,
              hours: normalizedHours,
              index: idx
            });
          }
        }
      }
    }
    
    // Сортируем результаты для консистентного вывода
    const dayOrder = [
      'Montag',
      'Dienstag', 
      'Mittwoch',
      'Donnerstag',
      'Freitag',
      'Samstag',
      'Sonntag',
      'Sonn- und Feiertage'
    ];
    
    // Функция для определения порядка дня
    const getDayIndex = (dayStr: string): number => {
      const normalized = dayStr.toLowerCase();
      // Для диапазонов берем первый день
      for (let i = 0; i < dayOrder.length; i++) {
        if (normalized.includes(dayOrder[i].toLowerCase())) {
          return i;
        }
      }
      return 999;
    };
    
    const uniqueHours = Array.from(seenDays.values())
      .map(item => ({ day: item.day, hours: item.hours }))
      .sort((a, b) => {
        const aIndex = getDayIndex(a.day);
        const bIndex = getDayIndex(b.day);
        if (aIndex !== bIndex) {
          return aIndex - bIndex;
        }
        // Если индекс одинаковый (например, оба содержат Montag), сортируем по полному тексту
        return a.day.localeCompare(b.day);
      });

    if (uniqueHours.length === 0) {
      uniqueHours.push(
        { day: "Montag – Donnerstag", hours: "9:30 – 19:00 Uhr" },
        { day: "Freitag", hours: "9:30 – 20:00 Uhr" },
        { day: "Samstag", hours: "9:00 – 18:00 Uhr" },
        { day: "Sonn- und Feiertage", hours: "Geschlossen" }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        openingHours: uniqueHours,
        lastUpdated: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Error scraping Parndorf hours:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Failed to scrape Parndorf hours',
      message: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}

