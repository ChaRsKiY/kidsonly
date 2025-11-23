# Vercel Cron Job Setup

## Overview

An automatic cron job is configured via Vercel for daily updates of opening hours for both branches (Parndorf and Salzburg) every day at 9:00 AM Vienna time.

## Configuration

### 1. `vercel.json` File

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

**Schedule:**
- `"0 7 * * *"` - every day at 7:00 UTC
- This corresponds to 8:00 Vienna (CET, winter time) or 9:00 Vienna (CEST, summer time)
- In most cases, this will be approximately 9:00 AM Vienna time

**Note:** Vercel uses UTC time for cron jobs. Vienna is in timezone UTC+1 (winter) or UTC+2 (summer). Using 7:00 UTC ensures updates at approximately 8:00-9:00 Vienna time depending on the season.

### 2. API Endpoint

**Path:** `/api/cron/update-hours`

**Method:** GET

**Functionality:**
1. Checks authorization via `x-vercel-cron` header (automatically added by Vercel)
2. Calls opening hours parsing for Parndorf (`/api/parndorf/hours`)
3. Calls opening hours parsing for Salzburg (`/api/salzburg/hours`)
4. Performs revalidate of `/parndorf` and `/salzburg` pages to update Next.js cache
5. Returns detailed execution report

**Security:**
- In production, checks `x-vercel-cron` header (automatically added by Vercel)
- Optionally, you can set the `CRON_SECRET` environment variable for additional protection
- In development mode, authorization check is less strict for testing

## Vercel Setup

### 1. Automatic Configuration

After deploying to Vercel, the cron job is automatically activated thanks to the `vercel.json` file.

### 2. Configuration Check

1. Go to Vercel Dashboard
2. Select your project
3. Open the "Cron Jobs" tab
4. Ensure the "update-hours" cron job is active and scheduled

### 3. Monitoring

**Logs:**
- All cron job logs are available in Vercel Dashboard → Functions → Logs
- Look for entries with prefix "Starting scheduled update of opening hours..."

**Execution Check:**
- Navigate to `/api/cron/update-hours` in browser (only for development testing)
- Check logs in Vercel Dashboard
- Check last update time via `/api/parndorf/hours` and `/api/salzburg/hours`

## Testing

### Local Testing

To test the cron job locally:

```bash
# Start dev server
npm run dev

# In another terminal, call the endpoint
curl http://localhost:3000/api/cron/update-hours
```

**Note:** In development mode, authorization check is less strict, so the endpoint will work.

### Testing on Vercel

1. Deploy the project to Vercel
2. Go to Vercel Dashboard → Cron Jobs
3. Find your cron job and click "Run Now" for manual execution
4. Check execution logs

## API Response

**Success Response:**
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

**Error Response:**
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

## Time Configuration

To change the cron job execution time, edit the `vercel.json` file:

```json
{
  "crons": [
    {
      "path": "/api/cron/update-hours",
      "schedule": "0 8 * * *"  // 8:00 UTC = 9:00 Vienna (winter) or 10:00 Vienna (summer)
    }
  ]
}
```

**Cron Expression Format:**
- `"0 7 * * *"` - every day at 7:00 UTC
- `"0 8 * * *"` - every day at 8:00 UTC
- `"0 9 * * 1-5"` - only on weekdays (Monday-Friday) at 9:00 UTC
- `"0 */6 * * *"` - every 6 hours

## Environment Variables (Optional)

For additional security, you can set an environment variable:

**`CRON_SECRET`** - secret key for protecting the cron endpoint

If set, the cron job will require the `Authorization: Bearer <CRON_SECRET>` header.

**Setup in Vercel:**
1. Vercel Dashboard → Project → Settings → Environment Variables
2. Add `CRON_SECRET` with any secret value
3. Update deployment

## Troubleshooting

### Cron Job Not Executing

1. Check that `vercel.json` file is present in the project root
2. Ensure the project is deployed to Vercel
3. Check logs in Vercel Dashboard
4. Ensure the `/api/cron/update-hours` endpoint is accessible

### Timeout Errors

If timeout errors occur:
- Increase timeout in code (current values: 60s for Parndorf, 120s for Salzburg)
- Check that external sites are accessible
- Check logs for detailed error information

### Authorization Errors

- In production, Vercel automatically adds the `x-vercel-cron` header
- If using `CRON_SECRET`, ensure it's correctly set in environment variables
- In development mode, authorization check is less strict

## Benefits

1. **Automation:** No manual intervention required
2. **Reliability:** Vercel guarantees cron job execution
3. **Monitoring:** Easy to track via Vercel Dashboard
4. **Scalability:** Works automatically with any number of deployments
5. **Logging:** All logs available in Vercel Dashboard
