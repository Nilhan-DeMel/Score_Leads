# AG Task Rubric — Prompt #11 (CONTEXT-SNAPSHOT)

## Objective

Produce a comprehensive, read-only context snapshot of the Score_Leads app to enable seamless resumption by any agent or developer.

## Steps

1. **Pre-flight**: Confirm read-only state, git status, and repo root.
2. **Indexing**: Run read-only commands (`git status`, `git log`, `tree`, `cat` docs) and capture to `Evidence/prompt11_commands.log`.
3. **Index Doc**: Create `Evidence/Score_Leads_Context_Index.md` (1-2 pages).
4. **Full Doc**: Create `Evidence/Score_Leads_Context_Full.md` (comprehensive walkthrough).
5. **Evidence Report**: Create `Evidence/AG_Prompt_11_ContextSnapshot_20260212.md`.
6. **Finalize**: Generate `Evidence/PROMPT#11.zip` including all snapshot artifacts and logs.

## Acceptance Checks

- [ ] No files outside of `Evidence/` are modified.
- [ ] `Score_Leads_Context_Index.md` provides an instant "get up to speed" summary.
- [ ] `Score_Leads_Context_Full.md` covers all 10 required sections (Summary, Map, Models, Flows, Tests, Deploys, Security, Evidence, Limits, Roadmap).
- [ ] `PROMPT#11.zip` exists and contains all required logs and docs.

## Rollback Plan

- Delete any files created in `Evidence/`.
- No code rollback required as this is a read-only mission.
