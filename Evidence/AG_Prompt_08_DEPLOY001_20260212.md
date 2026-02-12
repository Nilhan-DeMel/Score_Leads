# AG Evidence Report — Prompt #08 (DEPLOY-001)

## Mission

Make Score_Leads deployable and shareable with Preview URLs per PR via Vercel (recommended) and Firebase Hosting.

## Delivered Features

### 1. Multi-Lane Hosting Config

- **Vercel**: Added `vercel.json` for SPA routing (rewrite all to `index.html`).
- **Firebase**: Added `firebase.json` and `.firebaserc` with SPA rewrites.

### 2. Automated Preview Workflows

- **Firebase Hosting Preview**: `.github/workflows/firebase-hosting-preview.yml` creates a temporary channel and URL for every PR.
- **Firebase Hosting Live**: `.github/workflows/firebase-hosting-live.yml` deploys to the main site upon merge to `main`.
- **Vercel Guide**: Integrated documentation for Vercel's zero-config Git previews.

### 3. Documentation & Onboarding

- **DEPLOY.md**: Comprehensive guide for Nilhan to set up both lanes, including secrets management.
- **COMMANDS.md**: Added `npm run deploy:preview` and direct `firebase deploy` shortcuts.

## Verification Results

### Build & Routing

- Production build (`npm run build`) passed successfully.
- Verified SPA routing config: all routes fallback to `index.html` for client-side navigation.

### Automated Suite

- 18/18 Vitest units passed.
- Local repo-map updated and verified.

## Files Changed

- `vercel.json` [NEW]
- `firebase.json` [NEW]
- `.firebaserc` [NEW]
- `.agent/DEPLOY.md` [NEW]
- `.github/workflows/firebase-hosting-*.yml` [NEW]
- `package.json` [MODIFY]
- `.agent/REFERENCE_NOTES.md` [MODIFY]
- `App_Attributes/*` [MODIFY]

## Recommended Lane

**Vercel** is recommended as the primary lane for previews due to its superior speed and zero-config Git integration. Firebase is provided as a robust "Google-native" alternative.
