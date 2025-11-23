// Test script for scraper testing
import { scrapeParndorfHours } from './src/lib/scraper';

async function testScraper() {
  try {
    console.log('Testing Parndorf hours scraper...');
    
    const result = await scrapeParndorfHours();
    console.log('Scraped data:', JSON.stringify(result, null, 2));
    
  } catch (error) {
    console.error('Error testing scraper:', error);
  }
}

testScraper();
