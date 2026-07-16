# AG Task Rubric 30 — Stateless Ops Hardening

## Scope Guardrails

- ONLY operational hardening, rules, docs, and evidence workflow updates.
- MUST NOT change product behavior, UI, scoring logic, or business logic.

## Mission Checklist (Granular)

### 1) Rubric update

- [ ] Replace this file with Prompt 30 authoritative checklist.
- [ ] Keep all steps small and verifiable.

### 2) Step 0 preflight capture

- [ ] Capture `git status`.
- [ ] Capture tool versions: `node -v`, `npm -v`, `git --version`.
- [ ] Capture Playwright version if present.
- [ ] Confirm package manager from `package-lock.json` => `npm`.
- [ ] If working tree is dirty, record safe options: commit/stash/reset while preserving existing work.

### 3) Branch discipline

- [ ] Create/switch to `infra/codex-kilo-stateless-ops-001`.

### 4) Persistent instruction layer 1

- [ ] Create/update root `AGENTS.md` in strict MUST/MUST NOT style.
- [ ] Include read-first files:
  - [ ] `Project_Context.md` or `Project_Context.txt`
  - [ ] `.agent/START_HERE.md`
  - [ ] `.agent/MAP.md`
  - [ ] `.agent/RULES.md` (if exists)
  - [ ] `.agent/repo-map.md`
- [ ] Include single source-of-truth commands: install/dev/test/build/e2e.
- [ ] Include evidence pack rule: always produce `Evidence/PROMPT#NN.zip` with required contents.
- [ ] Include git workflow rule: one feature per branch + PR merge gates.
- [ ] Include cloud account rule: `repository-owner@example.test` only.

### 5) Persistent instruction layer 2 (Kilo custom rules)

- [ ] Create repo-scoped custom rules directory per repo conventions/docs.
- [ ] Add strict MUST/MUST NOT rules files:
  - [ ] `00_READ_FIRST.md`
  - [ ] `10_GIT_AND_PR.md`
  - [ ] `20_EVIDENCE_PACKS.md`
  - [ ] `30_CONTEXT_MIN_LOOP.md`
  - [ ] `40_CLOUD_ACCOUNT.md`
- [ ] Mirror mission non-negotiables.

### 6) One-command preflight utility

- [ ] Add `scripts/preflight.mjs` (Windows-compatible, safe utility only).
- [ ] Add npm script `preflight` in `package.json`.
- [ ] Ensure output includes:
  - [ ] repo root confirmation
  - [ ] git status summary
  - [ ] current version + last commit
  - [ ] key scripts from `package.json`
  - [ ] Evidence folder existence + suggested next `PROMPT#` via `PROMPT#*.zip` scan
  - [ ] repo-map regeneration via existing generator if available + output path confirmation
  - [ ] read-first file list

### 7) Mandatory docs updates

- [ ] Update `App_Attributes/App_Attributes.md` with implemented item:
  - [ ] `STATLESS OPS HARDENING v1 (AGENTS.md + Kilo rules + preflight)`
- [ ] Update `App_Attributes/Potential_App_Attributes.md` with:
  - [ ] `Automated Evidence Pack linter (checks required files exist in zip)`
  - [ ] `CI check to confirm AGENTS.md + Kilo rules exist`

### 8) Verification run (headless) + capture

- [ ] Run `npm ci` (fallback to `npm install` only if CI unsuitable).
- [ ] Run `npm test`.
- [ ] Run `npm run build`.
- [ ] Run `npm run e2e` if present.
- [ ] Run `npm run preflight`.
- [ ] Capture outputs in evidence logs.
- [ ] If failures occur, fix ONLY mission-related items; document remaining failures with concrete next-step plan.

### 9) Evidence pack enforcement

- [ ] Create evidence report: `Evidence/AG_Prompt_30_StatelessOpsHarden_YYYYMMDD-HHMM.md`.
- [ ] Create `Evidence/prompt30_evidence.json` with `prompt_id=30`, branch, PR, commit.
- [ ] Create `Evidence/prompt30_commands.log` (all commands + outputs).
- [ ] Create `Evidence/prompt30_tests.log` (test/build/e2e/preflight outputs).
- [ ] Create `Evidence/prompt30_trajectory.log` (step-by-step actions).
- [ ] Create `Evidence/prompt30_repo-map.md` snapshot.
- [ ] Create `Evidence/prompt30_patch.diff` from `git diff`.
- [ ] Build `Evidence/PROMPT#30.zip` (no spaces, <10MB).
- [ ] Print `Evidence/` listing proving zip name + size.

### 10) Git commits and PR

- [ ] Commit in small logical groups (docs/rules/script/evidence).
- [ ] Open PR.
- [ ] Merge only after done-definition gates pass.
- [ ] Record PR URL and merge commit hash.

### 11) Cloud account constraint

- [ ] If any cloud/google/firebase/vercel interaction occurs, use ONLY `repository-owner@example.test` session.

## Completion Gate

- [ ] Final summary MUST include:
  - [ ] changed files/directories
  - [ ] verification outcomes (pass/fail + notes)
  - [ ] PR URL
  - [ ] merge commit hash
  - [ ] evidence paths including `Evidence/PROMPT#30.zip` and exact size
  - [ ] exact preflight/test/build/e2e commands
  - [ ] explicit statement: cloud account rule enforced: `repository-owner@example.test` only
