# Deployment Guide — Score_Leads

This project is a static React application built with Vite. It can be deployed to any static host, but we provide optimized "lanes" for Vercel and Firebase.

## SPA Routing

Because this app uses `react-router`, the hosting provider must be configured to serve `index.html` for all sub-paths. This prevents 404 errors when refreshing the page on routes like `/score` or `/results`.

---

## Option A: Vercel (Recommended for Previews)

Vercel is the fastest way to get Preview URLs on every Pull Request.

### Steps for Nilhan:

1. Go to [vercel.com](https://vercel.com).
2. Click **Add New** -> **Project**.
3. Import the `Score_Leads` repository.
4. Vercel should auto-detect "Vite" as the framework.
5. **Build Settings:**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **Deploy**.

### Features:

- **Automatic Previews:** Every PR and every push to a branch will generate a unique Preview URL.
- **Production:** High-performance edge network.

---

## Option B: Firebase Hosting

Firebase is excellent if you already use other Firebase services (Auth, Firestore) or prefer a Google-native stack.

### Steps for Nilhan:

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
   - Select your project.
   - Public directory: `dist`
   - Configure as SPA: **Yes**
   - Setup GitHub Actions: **No** (We have provided custom templates).
4. Deploy Live: `firebase deploy --only hosting`

### Preview Channels:

You can deploy a temporary version to a "channel" without affecting live:

```bash
firebase hosting:channel:deploy <channel-id>
```

---

## CI/CD: Automated Previews

We have provided a GitHub Action for Firebase Preview Channels:

- Location: `.github/workflows/firebase-hosting-preview.yml`
- **Required Secrets:**
  - `FIREBASE_SERVICE_ACCOUNT_SCORE_LEADS`: The service account JSON key for deployment.

---

## Deployment Commands

| Action            | Command                          |
| ----------------- | -------------------------------- |
| Build (Shared)    | `npm run build`                  |
| Preview Locally   | `npm run preview`                |
| Firebase (Live)   | `firebase deploy --only hosting` |
| Firebase (Branch) | `npm run deploy:preview`         |
