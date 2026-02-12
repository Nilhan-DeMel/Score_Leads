# Go-Live Checklist — Score_Leads (v0.1.0)

Follow these steps to ensure a successful production launch.

## 🟢 A. Vercel Lane (Recommended)

1. **GitHub Connection**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard).
   - Click "Add New Project" and select the `Score_Leads` repository.
2. **Configuration**:
   - Set **Framework Preset**: `Vite`.
   - Set **Build Command**: `npm run build`.
   - Set **Output Directory**: `dist`.
3. **Branching**:
   - Set `main` as the Production Branch.
   - Enable automated PR Preview deployments.
4. **SPA Routing**:
   - Confirm `vercel.json` exists in root and contains the rewrite to `index.html`.
   - Verify by navigating directly to `/results` after deployment.

## 🔵 B. Firebase Lane (Secondary/Backup)

1. **Initial Setup**:
   - Run `firebase login`.
   - Run `firebase init hosting` (if not already mapped in `.firebaserc`).
2. **Secrets**:
   - Add `FIREBASE_SERVICE_ACCOUNT` as a GitHub Secret if using CI deployment.
3. **Workflow**:
   - Verify `.github/workflows/firebase-hosting-live.yml` is active on merge to `main`.
   - Test preview channel: `npm run deploy:preview`.

## 🛡️ C. Post-Launch QA

- [ ] **Mobile Smoke Test**: Open the app on a mobile device (or Safari/Chrome responsive mode).
- [ ] **Data Flow**:
  - Paste messy text (e.g., email signatures) -> Score leads.
  - Verify "Hot/Warm/Cold" labels are accurate.
  - Export to CSV and inspect the file.
- [ ] **Persistence**: Refresh the app and ensure history reflects the latest run.
- [ ] **CI Health**: Confirm all GitHub Actions (CI, CodeQL, Dependency Review) are 🟢 Green.

## 🛑 D. Rollback Plan

- **Vercel**: Select the previous deployment in the Vercel Dashboard and click "Promote to Production".
- **Git**: Revert the last merge commit on `main` and push.
