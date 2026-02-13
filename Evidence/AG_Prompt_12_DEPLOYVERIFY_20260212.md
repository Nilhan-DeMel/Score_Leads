# AG Evidence Report — Prompt #12 (DEPLOY-VERIFY-001)

## Mission

Verify (with hard evidence) the status of Score_Leads v0.1.0 deployment and GitHub release.

## Verdict

- **DEPLOYED**: 🛑 **NO**
- **Tag (v0.1.0)**: 🛑 **MISSING** (on local and origin)
- **GitHub Release**: 🛑 **MISSING**

## Evidence Summary

### 1. Reachability (DNS OK, HTTP 404)

- **DNS**: `score-leads.vercel.app` and `score-leads.firebaseapp.com` **resolve** correctly to edge IPs.
- **HTTP**: All candidates return **HTTP 404 Not Found**. Vercel specifically returns `DEPLOYMENT_NOT_FOUND`.
- **Conclusion**: The infrastructure is reserved (DNS), but the code has not been deployed to these slots yet.

### 2. Versioning & Tags

- **Git Tags**: `git tag -l` and `git ls-remote --tags origin` return **no v0.1.0 tag**.
- **GitHub Release**: `gh release view v0.1.0` returns "release not found".

### 3. Local Environment

- **CLIs**: `vercel` and `firebase` commands are not currently available in the PATH of the execution environment.

## 🚀 Minimum Next Steps for Nilhan

To complete the launch, Nilhan needs to follow these steps (referencing [.agent/LAUNCH_CHECKLIST.md](file:///D:/AI-Apps-In-Drive/App_Station/Score_Leads/.agent/LAUNCH_CHECKLIST.md)):

1. **Tag the Release**:
   ```bash
   git checkout main
   git tag -a v0.1.0 -m "v0.1.0 MVP Launch"
   git push origin v0.1.0
   ```
2. **Vercel Deploy**:
   - Link the repo to a new Vercel project named `score-leads`.
   - The DNS `score-leads.vercel.app` is already resolving, so it should link up immediately.
3. **GitHub Secrets**:
   - Ensure `FIREBASE_SERVICE_ACCOUNT` is added if using the Firebase lane.

## Final Pack

- All snapshots, HTTP logs, and DNS records are bundled into **PROMPT#12.zip**.
