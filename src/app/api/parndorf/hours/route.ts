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
      
      // Patterns for recognition
      const dayPattern = /(Montag|Dienstag|Mittwoch|Donnerstag|Freitag|Samstag|Sonntag|Sonn- und Feiertage)(\s*–\s*(Montag|Dienstag|Mittwoch|Donnerstag|Freitag|Samstag|Sonntag))?/i;
      const timePattern = /\d{1,2}:\d{2}\s*[–\-\s]\s*\d{1,2}:\d{2}\s*Uhr/i;
      const geschlossenPattern = /Geschlossen/i;
      
      // Collect all table rows with their cells
      const tableRows: Array<{cells: string[], rowIndex: number}> = [];
      
      for (let i = 0; i < rows.length; i++) {
        const $row = $(rows[i]);
        const cells = $row.find('td, th').toArray();
        
        // Skip empty rows
        if (cells.length === 0) continue;
        
        const rowText = $row.text().trim();
        if (!rowText || rowText.includes('Öffnungszeiten')) continue;
        
        const cellTexts = cells.map(cell => $(cell).text().trim()).filter(text => text.length > 0);
        if (cellTexts.length > 0) {
          tableRows.push({ cells: cellTexts, rowIndex: i });
        }
      }
      
      // Track processed rows to avoid duplicates
      const processedRows = new Set<number>();
      
      // Process table row by row
      for (let i = 0; i < tableRows.length; i++) {
        // Skip already processed rows
        if (processedRows.has(i)) {
          continue;
        }
        
        const row = tableRows[i];
        const cells = row.cells;
        
        // Case 1: Standard structure - two cells (day | time)
        if (cells.length === 2) {
          const firstCell = cells[0];
          const secondCell = cells[1];
          
          // If first cell contains day and second contains time
          if (dayPattern.test(firstCell) && (timePattern.test(secondCell) || geschlossenPattern.test(secondCell))) {
            // Extract day from first cell
            const dayMatch = firstCell.match(dayPattern);
            if (dayMatch) {
              const dayText = dayMatch[0].trim();
              let hoursText = secondCell.trim();
              
              // Normalize time
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
        
        // Case 2: One cell or multiple cells - search for day and time in the row
        // Check if row contains both day and time
        let foundDays: string[] = [];
        let foundTimes: string[] = [];
        
        for (const cell of cells) {
          // Search for all days in cell (may be multiple)
          let cellText = cell;
          let match;
          const daysInCell: string[] = [];
          
          // Use global search to find all days
          const globalDayPattern = /(Montag|Dienstag|Mittwoch|Donnerstag|Freitag|Samstag|Sonntag|Sonn- und Feiertage)(\s*–\s*(Montag|Dienstag|Mittwoch|Donnerstag|Freitag|Samstag|Sonntag))?/gi;
          
          while ((match = globalDayPattern.exec(cellText)) !== null) {
            const dayText = match[0].trim();
            if (dayText && !daysInCell.includes(dayText)) {
              daysInCell.push(dayText);
            }
          }
          
          // Add found days
          for (const day of daysInCell) {
            if (!foundDays.includes(day)) {
              foundDays.push(day);
            }
          }
          
          // Search for all times in cell (may be multiple)
          const globalTimePattern = /\d{1,2}:\d{2}\s*[–\-\s]\s*\d{1,2}:\d{2}\s*Uhr/gi;
          let timeMatch;
          const timesInCell: string[] = [];
          
          while ((timeMatch = globalTimePattern.exec(cellText)) !== null) {
            const timeText = timeMatch[0].trim();
            if (timeText && !timesInCell.includes(timeText)) {
              timesInCell.push(timeText);
            }
          }
          
          // Add found times
          for (const time of timesInCell) {
            if (!foundTimes.includes(time)) {
              foundTimes.push(time);
            }
          }
          
          // Check for "Geschlossen"
          if (geschlossenPattern.test(cell)) {
            if (!foundTimes.includes('Geschlossen')) {
              foundTimes.push('Geschlossen');
            }
          }
        }
        
        // If row contains both days and times, create pairs
        if (foundDays.length > 0 && foundTimes.length > 0) {
          // If number of days and times match, create direct pairs
          if (foundDays.length === foundTimes.length) {
            for (let j = 0; j < foundDays.length; j++) {
              openingHours.push({ day: foundDays[j], hours: foundTimes[j] });
            }
          } else if (foundDays.length === 2 && foundTimes.length === 2) {
            // Special case: two days and two times
            openingHours.push({ day: foundDays[0], hours: foundTimes[0] });
            openingHours.push({ day: foundDays[1], hours: foundTimes[1] });
          } else {
            // General case: link in order
            for (let j = 0; j < Math.min(foundDays.length, foundTimes.length); j++) {
              openingHours.push({ day: foundDays[j], hours: foundTimes[j] });
            }
          }
          processedRows.add(i);
          continue;
        }
        
        // Case 3: Only days in row - search for next row with times
        if (foundDays.length > 0 && foundTimes.length === 0) {
          // Search for next row with times
          for (let j = i + 1; j < tableRows.length; j++) {
            const nextRow = tableRows[j];
            const nextTimes: string[] = [];
            const nextDays: string[] = [];
            
            // Check next row for days
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
            
            // If next row contains days, break search (this is a new group)
            if (nextDays.length > 0) {
              break;
            }
            
            // Search for times in next row
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
              // Link days with times in order
              if (foundDays.length === nextTimes.length) {
                for (let k = 0; k < foundDays.length; k++) {
                  openingHours.push({ day: foundDays[k], hours: nextTimes[k] });
                }
              } else if (foundDays.length === 2 && nextTimes.length === 2) {
                openingHours.push({ day: foundDays[0], hours: nextTimes[0] });
                openingHours.push({ day: foundDays[1], hours: nextTimes[1] });
            } else {
                // Link in order up to minimum
                for (let k = 0; k < Math.min(foundDays.length, nextTimes.length); k++) {
                  openingHours.push({ day: foundDays[k], hours: nextTimes[k] });
                }
              }
              processedRows.add(i); // Mark current row as processed
              processedRows.add(j); // Mark next row as processed
              break;
            }
          }
          // If pair found, row is already processed
          if (processedRows.has(i)) {
            continue;
          }
        }
        
        // Case 4: Only one value in cell - may be day or time
        // If it's a day, it will be processed in next iteration or in case 3
        // If it's a time, it will be ignored (should be linked to previous day)
        if (cells.length === 1 && cells[0]) {
          const singleCell = cells[0];
          
          // If it's a day without time
          if (dayPattern.test(singleCell) && !timePattern.test(singleCell) && !geschlossenPattern.test(singleCell)) {
            const dayMatch = singleCell.match(dayPattern);
            if (dayMatch) {
              const dayText = dayMatch[0].trim();
              
              // Search for next row with time
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
                  processedRows.add(i); // Mark current row as processed
                  processedRows.add(j); // Mark next row as processed
                  break;
                }
              }
            }
          }
        }
      }
    }

    // Function to normalize day (convert to unified format)
    const normalizeDay = (day: string): string => {
      if (!day) return '';
      return day.trim()
        .replace(/\s+/g, ' ') // Multiple spaces to one
        .replace(/[–\-—]/g, '–') // All dashes to en-dash
        .replace(/\s*–\s*/g, ' – ') // Normalize spaces around dash
        .trim();
    };
    
    // Function to normalize time
    const normalizeTime = (time: string): string => {
      if (!time) return '';
      return time.trim()
        .replace(/\s+/g, ' ')
        .replace(/[–\-—]/g, '–')
        .replace(/\s*–\s*/g, ' – ')
        .trim();
    };
    
    // Remove duplicates by day of week, keeping first occurrence
    // But if same day with different time is found, prefer more complete information
    const seenDays = new Map<string, {day: string, hours: string, index: number}>();
    for (let idx = 0; idx < openingHours.length; idx++) {
      const item = openingHours[idx];
      if (item.day && item.hours) {
        const normalizedDay = normalizeDay(item.day);
        const normalizedHours = normalizeTime(item.hours);
        
        if (!normalizedDay) continue;
        
        // If day hasn't been encountered yet, add it
        if (!seenDays.has(normalizedDay)) {
          seenDays.set(normalizedDay, { 
            day: normalizedDay, 
            hours: normalizedHours,
            index: idx
          });
        } else {
          // If day already encountered, check if new time is more complete
          const existing = seenDays.get(normalizedDay)!;
          // Prefer time with correct format (with en-dash)
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
    
    // Sort results for consistent output
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
    
    // Function to determine day order
    const getDayIndex = (dayStr: string): number => {
      const normalized = dayStr.toLowerCase();
      // For ranges take first day
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
        // If index is same (e.g., both contain Montag), sort by full text
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

