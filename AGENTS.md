# AGENTS.md — Stateless Ops Hardening Rules

## Read-First Order (MUST)

1. `Project_Context.md` (or `Project_Context.txt` fallback)
2. `.agent/START_HERE.md`
3. `.agent/MAP.md`
4. `.agent/RULES.md` (if present)
5. `.agent/repo-map.md`

Agents MUST read these before making changes.
Agents MUST NOT skip read-first files.

## Single Source of Truth Commands (MUST)

- Install: `npm ci` (fallback: `npm install` only when CI install is unsuitable)
- Dev: `npm run dev`
- Test: `npm test`
- Build: `npm run build`
- E2E: `npm run e2e`

Agents MUST use these commands as authoritative.
Agents MUST NOT invent alternate command entry points without explicit project approval.

## Evidence Pack Rule (MUST)

For every prompt execution, agents MUST produce an evidence pack zip at:

- `Evidence/PROMPT#NN.zip`

Each evidence pack MUST include required artifacts for that prompt (report, logs, machine-readable metadata, trajectory, repo-map snapshot, and patch/diff when required).
Agents MUST ensure the final zip naming is canonical and contains no spaces.

## Git Workflow Rules (MUST)

- One feature/mission per branch.
- Open one PR per branch.
- Merge only after required gates pass (tests/build/e2e/preflight + evidence completeness).

Agents MUST keep commits small and logical.
Agents MUST NOT mix unrelated work in the same branch or PR.

## Cloud Account Rule (MUST)

When any cloud/google/firebase/vercel authentication or resource interaction is required, agents MUST use only:

- `repository-owner@example.test`

Agents MUST NOT use or create any other Google account session for this repository.
