# Vercel Cron Job Setup

## Обзор

Настроен автоматический cron job через Vercel для ежедневного обновления часов работы обоих филиалов (Parndorf и Salzburg) каждый день в 9:00 утра по венскому времени.

## Конфигурация

### 1. Файл `vercel.json`

```json
{
  "crons": [
    {
      "path": "/api/cron/update-hours",
      "schedule": "0 7 * * *"
    }
  ]
}
```

**Расписание:**
- `"0 7 * * *"` - каждый день в 7:00 UTC
- Это соответствует 8:00 Vienna (CET, зимнее время) или 9:00 Vienna (CEST, летнее время)
- В большинстве случаев это будет примерно 9:00 утра по Vienna времени

**Примечание:** Vercel использует UTC время для cron jobs. Vienna находится в часовом поясе UTC+1 (зимой) или UTC+2 (летом). Использование 7:00 UTC обеспечивает обновление примерно в 8:00-9:00 Vienna времени в зависимости от сезона.

### 2. API Endpoint

**Путь:** `/api/cron/update-hours`

**Метод:** GET

**Функциональность:**
1. Проверяет авторизацию через заголовок `x-vercel-cron` (автоматически добавляется Vercel)
2. Вызывает парсинг часов работы для Parndorf (`/api/parndorf/hours`)
3. Вызывает парсинг часов работы для Salzburg (`/api/salzburg/hours`)
4. Выполняет revalidate страниц `/parndorf` и `/salzburg` для обновления кеша Next.js
5. Возвращает детальный отчет о выполнении

**Безопасность:**
- В production проверяет заголовок `x-vercel-cron` (автоматически добавляется Vercel)
- Опционально можно установить переменную окружения `CRON_SECRET` для дополнительной защиты
- В development режиме проверка авторизации менее строгая для тестирования

## Установка на Vercel

### 1. Автоматическая настройка

После деплоя на Vercel, cron job автоматически активируется благодаря файлу `vercel.json`.

### 2. Проверка настройки

1. Перейдите в Vercel Dashboard
2. Выберите ваш проект
3. Откройте вкладку "Cron Jobs"
4. Убедитесь, что cron job "update-hours" активен и запланирован

### 3. Мониторинг

**Логи:**
- Все логи cron job доступны в Vercel Dashboard → Functions → Logs
- Ищите записи с префиксом "Starting scheduled update of opening hours..."

**Проверка выполнения:**
- Перейдите на `/api/cron/update-hours` в браузере (только для проверки в development)
- Проверьте логи в Vercel Dashboard
- Проверьте время последнего обновления через `/api/parndorf/hours` и `/api/salzburg/hours`

## Тестирование

### Локальное тестирование

Для тестирования cron job локально:

```bash
# Запустите dev сервер
npm run dev

# В другом терминале вызовите endpoint
curl http://localhost:3000/api/cron/update-hours
```

**Примечание:** В development режиме проверка авторизации менее строгая, поэтому endpoint будет работать.

### Тестирование на Vercel

1. Деплой проекта на Vercel
2. Перейдите в Vercel Dashboard → Cron Jobs
3. Найдите ваш cron job и нажмите "Run Now" для ручного запуска
4. Проверьте логи выполнения

## Ответ API

**Успешный ответ:**
```json
{
  "success": true,
  "timestamp": "2025-01-23T07:00:00.000Z",
  "duration": "15234ms",
  "results": {
    "parndorf": {
      "success": true,
      "error": null
    },
    "salzburg": {
      "success": true,
      "error": null
    }
  },
  "message": "Scheduled update completed"
}
```

**Ответ с ошибками:**
```json
{
  "success": false,
  "timestamp": "2025-01-23T07:00:00.000Z",
  "duration": "45234ms",
  "results": {
    "parndorf": {
      "success": true,
      "error": null
    },
    "salzburg": {
      "success": false,
      "error": "Timeout: The operation was aborted"
    }
  },
  "message": "Scheduled update completed"
}
```

## Настройка времени

Для изменения времени выполнения cron job отредактируйте файл `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/cron/update-hours",
      "schedule": "0 8 * * *"  // 8:00 UTC = 9:00 Vienna (зимой) или 10:00 Vienna (летом)
    }
  ]
}
```

**Формат cron выражения:**
- `"0 7 * * *"` - каждый день в 7:00 UTC
- `"0 8 * * *"` - каждый день в 8:00 UTC
- `"0 9 * * 1-5"` - только в рабочие дни (понедельник-пятница) в 9:00 UTC
- `"0 */6 * * *"` - каждые 6 часов

## Переменные окружения (опционально)

Для дополнительной безопасности можно установить переменную окружения:

**`CRON_SECRET`** - секретный ключ для защиты cron endpoint

Если установлен, cron job будет требовать заголовок `Authorization: Bearer <CRON_SECRET>`.

**Установка в Vercel:**
1. Vercel Dashboard → Project → Settings → Environment Variables
2. Добавьте `CRON_SECRET` с любым секретным значением
3. Обновите деплой

## Troubleshooting

### Cron job не выполняется

1. Проверьте, что файл `vercel.json` присутствует в корне проекта
2. Убедитесь, что проект задеплоен на Vercel
3. Проверьте логи в Vercel Dashboard
4. Убедитесь, что endpoint `/api/cron/update-hours` доступен

### Timeout ошибки

Если возникают timeout ошибки:
- Увеличьте timeout в коде (текущие значения: 60s для Parndorf, 120s для Salzburg)
- Проверьте, что внешние сайты доступны
- Проверьте логи для детальной информации об ошибках

### Ошибки авторизации

- В production Vercel автоматически добавляет заголовок `x-vercel-cron`
- Если используете `CRON_SECRET`, убедитесь, что он правильно установлен в переменных окружения
- В development режиме проверка авторизации менее строгая

## Преимущества

1. **Автоматизация:** Не требует ручного вмешательства
2. **Надежность:** Vercel гарантирует выполнение cron jobs
3. **Мониторинг:** Легко отслеживать через Vercel Dashboard
4. **Масштабируемость:** Работает автоматически при любом количестве деплоев
5. **Логирование:** Все логи доступны в Vercel Dashboard

