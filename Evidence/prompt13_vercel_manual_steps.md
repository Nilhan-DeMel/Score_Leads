# Manual Deployment Steps — Vercel

Since the Vercel CLI is not available in the current environment, please follow these steps to deploy Score_Leads to production.

## 1. Import Project

1. Go to [vercel.com/new](https://vercel.com/new).
2. Click **Import** next to the **Score_Leads** repository.
   - If not visible, ensure your GitHub account is connected to Vercel.

## 2. Configure Project

- **Project Name**: `score-leads` (or similar available name).
- **Framework Preset**: `Vite` (should be auto-detected).
- **Root Directory**: `./` (default).

## 3. Build Settings

Ensure these settings are correct (Vite defaults):

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install` (default)

## 4. Deploy

1. Click **Deploy**.
2. Wait for the build to complete (approx. 1-2 minutes).
3. Once complete, you will see a "Congratulations!" screen with a screenshot of the app.

## 5. Verify

1. Click **Visit**.
2. Determine your Production URL (e.g., `https://score-leads.vercel.app`).
3. Verify routing works by navigating to:
   - `https://score-leads.vercel.app/results` (Should show empty results, not 404).

## 6. Update Evidence

Return to the chat and confirm the URL so we can record it.
