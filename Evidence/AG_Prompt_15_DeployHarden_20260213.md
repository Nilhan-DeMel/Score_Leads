# AG Evidence Report — Prompt #15 (DEPLOY-HARDEN-003)

## Mission

Harden the deployment by ensuring Vercel Git integration, public production access, and a clean working tree with auto-deploy proof.

## Verdict

- **GIT INTEGRATION**: ✅ **ACTIVE** (`Nilhan-DeMel/Score_Leads` -> `score-leads`)
- **PRODUCTION ACCESS**: ✅ **PUBLIC** (200 OK without auth)
- **WORKTREE**: ✅ **CLEAN** (no `.vercel/` tracked)
- **AUTO-DEPLOY**: ✅ **VERIFIED** (PR merge triggered deployment)

## Evidence Summary

### 1. Workspace Hygiene

- Modified `.gitignore` to explicitly ignore `.vercel/` and ensured it is untracked.
- Branch `deploy/deploy-003-vercel-gitlink` was merged to `main` via PR #12.

### 2. Vercel Linkage & Public Access

- Vercel project correctly linked to the GitHub repository.
- **Production URL**: [https://score-leads.vercel.app](https://score-leads.vercel.app)
- **HTTP Receipts**:
  - `/` -> 200 OK
  - `/results` -> 200 OK (SPA rewrite verified)
  - `/history` -> 200 OK

### 3. Auto-Deploy Proof

- Merge of PR #12 triggered an automatic production deployment on Vercel.
- Captured proof in `prompt15_vercel_deploy_proof.log`.

### 4. Documentation

- Created `.agent/DEPLOY_STATUS.md` as the definitive infrastructure runbook.
- Updated `App_Attributes.md` with `DEPLOY-HARDEN-003`.

## Final Pack

- All logs, DNS checks, and repository maps are bundled into **PROMPT#15.zip**.
