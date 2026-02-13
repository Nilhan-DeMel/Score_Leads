# AG Task Rubric — Prompt #12 (DEPLOY-VERIFY-001)

## Objective

Verify the reachability and release status of Score_Leads v0.1.0 on the internet and GitHub.

## Steps

1. **Pre-flight**: Capture `git rev-parse`, `status`, `tag`, and `log` to `Evidence/prompt12_git_state.log`.
2. **URL Discovery**: Read `.agent/DEPLOY.md`, `LAUNCH_CHECKLIST.md`, and `Score_Leads_Context_Full.md` to find expected production URLs.
3. **Connectivity**: Run DNS (`nslookup`) and HTTP checks (`iwr`) for discovered URLs. Log to `prompt12_dns_checks.log` and `prompt12_http_checks.log`.
4. **CLI Validation**: Check `vercel` and `firebase` CLI authentication and status (if available).
5. **Release Audit**: Fetch remote tags and check for GitHub Release via `gh`. Log to `prompt12_tags.log` and `prompt12_gh_release.log`.
6. **Reporting**: Create `Evidence/AG_Prompt_12_DEPLOYVERIFY_YYYYMMDD-HHMM.md` with final YES/NO verdict.
7. **Packaging**: Generate `Evidence/PROMPT#12.zip` with all logs and artifacts.

## Acceptance Checks

- [ ] No files outside of `Evidence/` are modified.
- [ ] Every discovered URL has DNS and HTTP proof of status.
- [ ] Tag status (local vs origin) is clearly documented.
- [ ] GitHub Release presence/absence is verified.
- [ ] `PROMPT#12.zip` contains all required evidence logs.

## Rollback Plan

- Delete any files created in `Evidence/`.
- This is a read-only mission; no code rollback needed.
