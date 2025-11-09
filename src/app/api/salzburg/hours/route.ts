import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';


export async function GET(request: NextRequest) {
  let browser;
  
  try {
    console.log('Starting Salzburg hours scraping with Puppeteer...');
    
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    
    await page.goto('https://www.mcarthurglen.com/de/outlets/at/designer-outlet-salzburg/shops/kids-only/', {
      waitUntil: 'networkidle2'
    });
    
    console.log('Page loaded, looking for cookie consent button...');

    try {
      console.log('Looking for cookie consent button...');
      
      try {
        await page.waitForSelector('#onetrust-button-group-parent', { timeout: 5000 });
        console.log('Cookie consent container found');
      } catch (e) {
        console.log('Cookie consent container not found, trying alternative approach');
      }
      
      const cookieSelectors = [
        '#onetrust-accept-btn-handler',  
        'button:has-text("Alle Cookies annehmen")',
        'button:has-text("Accept all")',
        'button:has-text("Accept All")',
        'button:has-text("Akzeptieren")',
        'button:has-text("Accept")',
        '[data-testid*="cookie"]',
        '[data-testid*="accept"]',
        'button[class*="cookie"]',
        'button[class*="accept"]'
      ];
      
      let cookieButtonFound = false;
      
      for (const selector of cookieSelectors) {
        try {
          console.log(`Trying cookie selector: ${selector}`);
          await page.waitForSelector(selector, { timeout: 3000 });
          
          console.log(`Found cookie consent button with selector: ${selector}`);
          await page.click(selector);
          
          console.log('Cookie consent accepted, waiting for page to settle...');
          await new Promise(resolve => setTimeout(resolve, 3000));
          
          cookieButtonFound = true;
          break;
        } catch (e) {
          console.log(`Selector ${selector} not found`);
        }
      }
      
      if (!cookieButtonFound) {
        console.log('No cookie consent button found, proceeding...');
      }
      
    } catch (error) {
      console.log('Error handling cookie consent:', error);
    }
    
    console.log('Looking for opening times button...');
    
    await page.waitForSelector('[data-testid="opening-times-button"]', { timeout: 10000 });

    console.log('Found opening times button, clicking to open the list...');
    
    await page.click('[data-testid="opening-times-button"]');

    console.log('Clicked button, waiting for content to appear...');
    
    await page.waitForSelector('[data-testid="opening-times-content"]', { timeout: 12000 });
    
    console.log('Content appeared, waiting a bit more for all elements to load...');
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const openingHours = await page.evaluate(() => {
      const hours: { day: string; hours: string }[] = [];
      
      console.log('Looking for opening times content...');
      
      const elements = document.querySelectorAll('[data-testid="opening-times-content"]');
      console.log(`Found ${elements.length} opening times content elements`);
      
      if (elements.length === 0) {
        console.log('No elements found with data-testid, trying alternative selectors...');
        
        const idElements = document.querySelectorAll('#opening-times');
        console.log(`Found ${idElements.length} elements with ID opening-times`);
        
        if (idElements.length > 0) {
          idElements.forEach((element) => {
            const spans = element.querySelectorAll('span');
            if (spans.length >= 2) {
              const day = spans[0].textContent?.trim();
              const time = spans[spans.length - 1].textContent?.trim();
              
              if (day && time) {
                console.log(`Found via ID: ${day} - ${time}`);
                hours.push({ day, hours: time });
              }
            }
          });
        }
      } else {
        elements.forEach((element, index) => {
          console.log(`Processing element ${index + 1}...`);
          
          const flexDiv = element.querySelector('div.flex.w-full.items-center.justify-between.py-1');
          
          if (flexDiv) {
            console.log(`Found flex div in element ${index + 1}`);
            
            const spans = flexDiv.querySelectorAll('span');
            console.log(`Found ${spans.length} spans in element ${index + 1}`);
            
            if (spans.length >= 2) {
              const day = spans[0].textContent?.trim();
              const time = spans[spans.length - 1].textContent?.trim();
              
              if (day && time) {
                console.log(`Found: ${day} - ${time}`);
                hours.push({ day, hours: time });
              }
            }
          } else {
            console.log(`No flex div found in element ${index + 1}`);
          }
        });
      }
      
      console.log(`Total hours extracted: ${hours.length}`);
      return hours;
    });
    
    console.log('Extracted opening hours:', openingHours);
    
    return NextResponse.json({
      success: true,
      data: {
        openingHours,
        lastUpdated: new Date().toISOString()
      }
    });
    
  } catch (error) {
    console.error('Error scraping Salzburg hours:', error);
    
    return NextResponse.json({
      success: true,
      data: {
        openingHours: [],
        lastUpdated: new Date().toISOString()
      }
    });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
