import { scrapeParndorfHours } from './scraper';
import cron from 'node-cron';

// Кэш для хранения данных
let cachedHours: any = null;
let lastUpdate: Date | null = null;

export function startScheduler() {
  // Запускаем скрапинг при старте приложения
  console.log('Starting initial Parndorf hours scraping...');
  updateHoursData().then(() => {
    console.log('Initial data loading completed');
  });

  // Настраиваем крон-джоб для ежедневного обновления в 9:00 утра
  cron.schedule('0 9 * * *', () => {
    console.log('Running scheduled Parndorf hours update at 9:00 AM...');
    updateHoursData();
  }, {
    timezone: "Europe/Vienna" // Время по Вене
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
  return diffInHours < 24; // Данные считаются свежими если им меньше 24 часов
}
