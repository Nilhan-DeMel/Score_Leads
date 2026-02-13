# AG Task Rubric — Prompt #13 (LAUNCH-EXEC-001)

## Objective

Make Score_Leads LIVE (v0.1.0) via Tagging, GitHub Release, and Deployment.

## Steps

1. **Pre-flight**: Capture git state. Log to `Evidence/prompt13_preflight.log`.
2. **Tagging**: Create `v0.1.0` tag and push to origin. Log to `Evidence/prompt13_tag.log`.
3. **GitHub Release**: Create release via `gh` CLI. Log to `Evidence/prompt13_release.log`.
4. **Deployment**:
   - Check `vercel` and `firebase` CLI availability.
   - If available, deploy.
   - If not, generate `Evidence/prompt13_vercel_manual_steps.md` checklist.
5. **Verification**: Check URLs (if deployment succeeded). Log to `Evidence/prompt13_http_verify.log`.
6. **Reporting**: Create `Evidence/AG_Prompt_13_LaunchExec_*.md` and `prompt13_evidence.json`.
7. **Packaging**: Zip everything into `Evidence/PROMPT#13.zip`.

## Acceptance Checks

- [ ] Tag `v0.1.0` exists on remote.
- [ ] GitHub Release `v0.1.0` exists.
- [ ] Deployment checklist provided (if CLI unavailable) OR app is live.
- [ ] `PROMPT#13.zip` created.
