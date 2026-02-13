# AG Task Rubric — Prompt #14 (DEPLOY-LIVE-002)

## Objective

Deploy Score_Leads to production (Live URL) using Vercel (CLI or Dashboard) or Firebase.

## Steps

1. **Pre-flight**: `git`, `node`, `npm` checks to `Evidence/prompt14_preflight.log`.
2. **Vercel CLI**:
   - Check availability (`where vercel`).
   - Install if missing (`npm i -g vercel`).
   - Check auth (`vercel whoami`).
   - Deploy (`vercel --prod`).
   - Log to `Evidence/prompt14_vercel_cli.log`.
3. **Vercel Dashboard (Fallback)**:
   - Use browser automation to import/deploy if CLI fails.
   - Log steps to `Evidence/prompt14_vercel_dashboard_steps.log`.
4. **Firebase (Fallback)**:
   - Only if Vercel fails.
   - `firebase deploy --only hosting`.
   - Log to `Evidence/prompt14_firebase.log`.
5. **Verification**:
   - HTTP checks for live URL.
   - Log to `Evidence/prompt14_http_verify.log`.
6. **Reporting**:
   - Create `Evidence/AG_Prompt_14_DeployLive_*.md`.
   - Package `PROMPT#14.zip`.

## Acceptance Checks

- [ ] Live URL (200 OK) obtained.
- [ ] Evidence logs for chosen lane.
- [ ] `PROMPT#14.zip` created.
