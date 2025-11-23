# Cron Job Setup for Parndorf Hours

## Overview

The system automatically updates Parndorf opening hours data every day at 9:00 AM Vienna time using cron jobs.

## How It Works

### 1. Automatic Update
- **Schedule**: Every day at 9:00 AM (Europe/Vienna timezone)
- **Data Source**: parndorffashionoutlet.com website
- **Caching**: Data is stored in application memory

### 2. API Endpoints

#### GET `/api/parndorf/hours`
- Returns cached data
- Does not perform real-time scraping
- Fast response

#### POST `/api/parndorf/hours`
- Force data update
- Clears cache and fetches fresh data
- Used only for testing

### 3. Data Structure

```json
{
  "success": true,
  "data": {
    "openingHours": [
      {
        "day": "Montag – Donnerstag",
        "hours": "9:30-19:00 Uhr"
      },
      {
        "day": "Freitag", 
        "hours": "9:30-20:00 Uhr"
      },
      {
        "day": "Samstag",
        "hours": "9:00-18:00 Uhr"
      },
      {
        "day": "Sonn- und Feiertage",
        "hours": "Geschlossen"
      }
    ],
    "lastUpdated": "2025-10-23T09:00:00.000Z"
  },
  "cached": true,
  "lastUpdate": "2025-10-23T09:00:00.000Z"
}
```

## Testing

### 1. Test Page
Navigate to `/test-api` for interactive testing:
- Get cached data (GET)
- Force update (POST)

### 2. Test Cron Job
```bash
npm run test-cron
```
Runs a test cron job every 10 seconds.

### 3. Logs
The cron job outputs logs to the console:
```
Starting initial Parndorf hours scraping...
Cron job scheduled for daily updates at 9:00 AM Vienna time
Running scheduled Parndorf hours update at 9:00 AM...
Parndorf hours updated successfully: {...}
```

## Benefits

1. **Performance**: API responds instantly using cached data
2. **Reliability**: Data updates automatically without human intervention
3. **Resource Efficiency**: Scraping is performed only once per day
4. **Timing**: Update at 9:00 AM when the site is usually stable

## Monitoring

To monitor the cron job, check:
- Application logs
- Last update time in API response
- Cache status via `/test-api`

## Schedule Configuration

To change the schedule, edit the file `src/lib/scheduler.ts`:

```typescript
// Current schedule: every day at 9:00 AM
cron.schedule('0 9 * * *', () => {
  // ...
});

// Examples of other schedules:
// '0 */6 * * *' - every 6 hours
// '0 9 * * 1-5' - only on weekdays at 9:00 AM
// '0 9,15 * * *' - at 9:00 AM and 3:00 PM
```
