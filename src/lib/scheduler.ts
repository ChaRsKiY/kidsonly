import { scrapeParndorfHours } from './scraper';
import cron from 'node-cron';

// Cache for storing data
let cachedHours: any = null;
let lastUpdate: Date | null = null;

export function startScheduler() {
  // Start scraping on application startup
  console.log('Starting initial Parndorf hours scraping...');
  updateHoursData().then(() => {
    console.log('Initial data loading completed');
  });

  // Setup cron job for daily update at 9:00 AM
  cron.schedule('0 9 * * *', () => {
    console.log('Running scheduled Parndorf hours update at 9:00 AM...');
    updateHoursData();
  }, {
    timezone: "Europe/Vienna" // Vienna time
  });

  console.log('Cron job scheduled for daily updates at 9:00 AM Vienna time');
}

async function updateHoursData() {
  try {
    const data = await scrapeParndorfHours();
    cachedHours = data;
    lastUpdate = new Date();
    console.log('Parndorf hours updated successfully:', data);
  } catch (error) {
    console.error('Error updating Parndorf hours:', error);
  }
}

export function clearCache() {
  cachedHours = null;
  lastUpdate = null;
  console.log('Cache cleared');
}

export async function forceUpdate() {
  console.log('Force updating Parndorf hours...');
  await updateHoursData();
  return cachedHours;
}

export function getCachedHours() {
  return {
    data: cachedHours,
    lastUpdate
  };
}

export function isDataFresh(): boolean {
  if (!lastUpdate) return false;
  const now = new Date();
  const diffInHours = (now.getTime() - lastUpdate.getTime()) / (1000 * 60 * 60);
  return diffInHours < 24; // Data is considered fresh if less than 24 hours old
}
