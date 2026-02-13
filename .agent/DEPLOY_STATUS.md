# Score_Leads Deployment Status

## Production URL

- **Live**: [https://score-leads.vercel.app](https://score-leads.vercel.app)
- **Deployment Lane**: Vercel Git (GitHub Integration)

## Infrastructure Overview

- **Vercel Project**: `score-leads`
- **Primary Branch**: `main`
- **Framework**: Vite/React
- **Region**: Global Edge

## Deployment Runbook

1. **Auto-Deploy**: Every push to the `main` branch triggers an automatic production deployment.
2. **Preview Deploys**: Pull requests to `main` generate unique preview URLs for QA.
3. **Manual Re-deploy**:
   - CLI: `vercel --prod`
   - Dashboard: [Vercel Score_Leads](https://vercel.com/nilhans-projects/score-leads/deployments)

## CI Verification

Successful deployments require:

- All Vitest unit tests pass (`npm test`)
- All Playwright E2E smoke tests pass (`npm run e2e`)
- CodeQL security scans are green.
