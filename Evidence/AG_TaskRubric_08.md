# AG Task Rubric — Prompt #08 (DEPLOY-001)

## Objective

Make Score_Leads deployable and shareable with Preview URLs per PR via Vercel and Firebase Hosting.

## Steps

1. **Pre-flight**: Checkout branch, confirm root location.
2. **MCP Grounding**: Research Vite static deploy + Vercel/Firebase GitHub Actions.
3. **Deploy Docs**: Create `.agent/DEPLOY.md` with step-by-step lanes.
4. **SPA Routing**: Configure `firebase.json` and `vercel.json` for React Router support.
5. **CI Workflows**: Implement Firebase Hosting preview/live actions (template style).
6. **Attributes**: Update implemented/potential attribute logs.
7. **Verification**: Run build, local preview, and tests.
8. **Evidence**: Create Prompt #08 report and ZIP.

## Acceptance Checks

- [ ] `.agent/DEPLOY.md` exists with both Vercel and Firebase instructions.
- [ ] `firebase.json` rewritten for SPA.
- [ ] `vercel.json` rewritten for SPA (or verified as default).
- [ ] GitHub workflow for Firebase previews exists.
- [ ] Build succeeds without errors.
- [ ] Local preview handles direct route access (no 404).

## Rollback Plan

- Delete new config files (`firebase.json`, `vercel.json`).
- Revert GitHub Actions changes.
- Reset documentation updates.
