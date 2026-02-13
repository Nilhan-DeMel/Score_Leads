# AG Task Rubric — Prompt #15 (DEPLOY-HARDEN-003)

## Objective

Harden the deployment by ensuring Vercel Git integration, public production access, and clean working tree with auto-deploy verification.

## Steps

1. **Preflight**: Capture baseline status (`git`, `node`, `npm`, `build`, `test`, `e2e`).
2. **Branching**: Create `deploy/deploy-003-vercel-gitlink`.
3. **Workspace Cleanup**:
   - Ensure `.vercel/` is ignored and not tracked.
   - Update `.gitignore` if necessary.
4. **Vercel Git Integration**:
   - Verify/Connect `Nilhan-DeMel/Score_Leads` to the Vercel project.
   - Use CLI or Browser Automation.
5. **Connectivity Audit**:
   - Verify `score-leads.vercel.app` is public (200 OK without auth).
   - Check deep links (`/results`, `/history`).
6. **Auto-Deploy Proof**:
   - Create/Update `.agent/DEPLOY_STATUS.md`.
   - Commit and Push.
   - PR + Merge.
   - Verify Vercel trigger.
7. **Documentation**:
   - Update `App_Attributes.md` and `Potential_App_Attributes.md`.
8. **Evidence**:
   - Create `AG_Prompt_15_DeployHarden_YYYYMMDD-HHMM.md`.
   - Package `PROMPT#15.zip`.

## Acceptance Checks

- [ ] `score-leads.vercel.app` is public (200 OK).
- [ ] Vercel Dashboard shows Git connection to `Nilhan-DeMel/Score_Leads`.
- [ ] Working tree is clean (no `.vercel/` tracked).
- [ ] Merge triggers a Vercel deployment (proof captured).
- [ ] `PROMPT#15.zip` exists and contains all required logs.

## Rollback Plan

- Delete the branch `deploy/deploy-003-vercel-gitlink`.
- Revert `.gitignore` changes if any.
- Revert `.agent/DEPLOY_STATUS.md` changes.
