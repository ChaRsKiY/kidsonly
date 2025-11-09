# Parndorf Hours Scraper

Этот проект автоматически извлекает актуальные часы работы магазина Kids Only в Parndorf с официального сайта каждый день в 9:00 утра.

## Как это работает

### 1. Автоматическое извлечение данных
- **Скрапер** (`src/lib/scraper.ts`) извлекает часы работы с сайта https://parndorffashionoutlet.com/marke/kids-only/
- **Планировщик** (`src/lib/scheduler.ts`) запускает скрапинг каждый день в 9:00 утра по венскому времени
- **API endpoint** (`src/app/api/parndorf/hours/route.ts`) предоставляет доступ к актуальным данным

### 2. Кэширование
- Данные кэшируются на 24 часа
- Если данные свежие, API возвращает кэшированные данные
- Если данные устарели, автоматически получаются новые

### 3. Отображение на сайте
- Страница Parndorf (`src/app/parndorf/`) автоматически загружает актуальные часы работы
- Показывается время последнего обновления
- В случае ошибки используются данные по умолчанию

## API Endpoints

### GET /api/parndorf/hours
Получить актуальные часы работы:
```bash
curl http://localhost:3000/api/parndorf/hours
```

Ответ:
```json
{
  "success": true,
  "data": {
    "openingHours": [
      { "day": "Montag – Donnerstag", "hours": "9:30 – 19:00 Uhr" },
      { "day": "Freitag", "hours": "9:30 – 20:00 Uhr" },
      { "day": "Samstag", "hours": "9:00 – 18:00 Uhr" },
      { "day": "Sonn- und Feiertage", "hours": "Geschlossen" }
    ],
    "lastUpdated": "2024-01-15T09:00:00.000Z"
  },
  "cached": true,
  "lastUpdate": "2024-01-15T09:00:00.000Z"
}
```

### POST /api/parndorf/hours
Принудительно обновить данные:
```bash
curl -X POST http://localhost:3000/api/parndorf/hours
```

## Тестирование

### Тест скрапера через API:
```bash
curl http://localhost:3000/api/test-scraper
```

### Запуск планировщика отдельно:
```bash
npm run scheduler
```

### Тест скрапера напрямую:
```bash
npm run test-scraper
```

## Структура файлов

```
src/
├── lib/
│   ├── scraper.ts          # Логика извлечения данных
│   └── scheduler.ts         # Планировщик задач
├── app/
│   ├── api/parndorf/hours/
│   │   └── route.ts         # API endpoint
│   └── parndorf/
│       ├── page.tsx         # Основная страница
│       └── ParndorfPageClient.tsx  # Клиентский компонент
└── components/
    └── SchedulerInit.tsx    # Инициализация планировщика
```

## Настройка

Планировщик автоматически запускается при старте приложения через компонент `SchedulerInit`.

Расписание: каждый день в 9:00 утра по венскому времени (`Europe/Vienna`).

## Обработка ошибок

- При ошибке скрапинга используются данные по умолчанию
- Данные кэшируются для предотвращения частых запросов
- Показывается статус загрузки на странице
- Логируются все ошибки в консоль

## Мониторинг

Для проверки работы системы:
1. Проверьте логи в консоли браузера
2. Используйте API endpoint для получения данных
3. Проверьте время последнего обновления на странице Parndorf
