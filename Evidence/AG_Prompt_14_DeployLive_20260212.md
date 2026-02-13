# AG Evidence Report — Prompt #14 (DEPLOY-LIVE-002)

## Mission

Make Score_Leads LIVE on the internet (Hands-free execution).

## Verdict

- **DEPLOYED**: ✅ **YES**
- **Lane**: **Vercel CLI** (`npx vercel --prod --yes`)
- **Status**: **200 OK** (Verified)

## Live URLs

- **Production**: [https://score-leads.vercel.app](https://score-leads.vercel.app)
- **Deployment Alias**: `https://score-leads-q47wd1bw8-nilhans-projects.vercel.app`

## Execution Path

1. **Pre-flight**: Environment checked (`git`, `node`).
2. **CLI**: Used `npx vercel` (version 50.15.1).
3. **Auth**: Detected existing session for user `nilhan-8207`.
4. **Deploy**: Ran `npx vercel --prod --yes --name score-leads`.
   - Linked to project `nilhans-projects/score-leads`.
5. **Verification**:
   - `GET https://score-leads.vercel.app` returned **200 OK**.
   - App shell loaded successfully (`<html lang="en" class="dark">`).

## Next Steps for Nilhan

- **Click**: Open [https://score-leads.vercel.app](https://score-leads.vercel.app) on your phone!
- **Share**: The URL is public and ready for the world.

## Evidence Pack

- All deployment logs and HTTP verification receipts are in **PROMPT#14.zip**.
