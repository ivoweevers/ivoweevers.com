# Umami analytics — connect your dashboard

After the site code is deployed, follow these steps so data appears in Umami.

## 1. Create an Umami account

1. Go to **[https://cloud.umami.is](https://cloud.umami.is)** and sign up.
2. When prompted, choose the **EU** data region (recommended for EU-based sites).

## 2. Add your website in Umami

1. In the Umami dashboard, click **Add website** (or equivalent).
2. **Name:** e.g. `ivoweevers.com`
3. **Domain:** `ivoweevers.com` (and optionally `www.ivoweevers.com` if you use both — Umami usually accepts traffic from the domain you configure).
4. Save. Umami shows a **Website ID** (UUID) and the **tracking script** snippet.

## 3. Set environment variables

### Local development (optional)

In `PW Website/.env.local` (create from `.env.local.example` if needed):

```bash
NEXT_PUBLIC_UMAMI_WEBSITE_ID=paste-your-website-id-here
NEXT_PUBLIC_UMAMI_URL=https://cloud.umami.is/script.js
```

Restart `npm run dev`. Visit [http://localhost:3000](http://localhost:3000) and browse a few pages.

### Production (Vercel)

1. Open your project on **[vercel.com](https://vercel.com)** → **Settings** → **Environment Variables**.
2. Add:
   - `NEXT_PUBLIC_UMAMI_WEBSITE_ID` = your Website ID (Production only, or all environments if you want analytics on previews too).
   - `NEXT_PUBLIC_UMAMI_URL` = `https://cloud.umami.is/script.js` (optional; same default is baked into the app if omitted).
3. **Redeploy** the latest deployment (or push a commit) so the new variables are included in the build.

> **Note:** `NEXT_PUBLIC_*` variables are embedded at **build time**. Changing them requires a new deployment.

## 4. Verify tracking

1. Open your **live site** in a browser (or localhost if testing locally).
2. Open **DevTools** → **Network**, filter by `umami` or `send`.
3. You should see the script load from `cloud.umami.is` and small **POST** requests when you navigate or interact.
4. In the Umami dashboard, open your site → **Realtime** (or main overview). Page views usually appear within **seconds**.

## 5. Custom events (form submissions)

Successful form posts fire an event named **`form-submit`** with property **`endpoint`** (e.g. `/api/contact`). In Umami, check **Events** for that name after submitting a form.

## 6. Troubleshooting

| Issue | What to check |
|--------|----------------|
| No script on page | View page source — search for `script.js`. If missing, `NEXT_PUBLIC_UMAMI_WEBSITE_ID` was empty at build time. |
| No data in dashboard | Correct Website ID, domain matches Umami settings, ad blocker disabled for test, redeploy after env change. |
| Preview deployments | Leave `NEXT_PUBLIC_UMAMI_WEBSITE_ID` unset for Preview env to avoid polluting production stats. |

## Self-hosted Umami

If you run your own Umami server, set `NEXT_PUBLIC_UMAMI_URL` to your instance’s script URL, e.g. `https://analytics.yourdomain.com/script.js`.
