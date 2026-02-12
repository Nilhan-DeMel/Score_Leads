# GitHub Gates — Branch Protection & CI Policy

> Defines the branch protection and CI requirements for Score_Leads.

---

## Branch Protection Rules (for `main`)

### Required Settings

| Setting                         | Value       | Rationale                             |
| ------------------------------- | ----------- | ------------------------------------- |
| Require PR before merging       | ✅ Yes      | Prevents direct pushes; forces review |
| Required reviewers              | 1           | At least one approval needed          |
| Block merge on stale reviews    | ✅ Yes      | Re-approval needed after new commits  |
| Require conversation resolution | ✅ Yes      | All comments must be resolved         |
| Require status checks           | ✅ Yes      | CI must pass before merge             |
| Require linear history          | ⬜ Optional | Nice-to-have, not enforced initially  |

### Required Status Checks

| Check     | Workflow                        | Status     |
| --------- | ------------------------------- | ---------- |
| `ci`      | `.github/workflows/ci.yml`      | ✅ Active  |
| `codeql`  | `.github/workflows/codeql.yml`  | 🔲 Planned |
| `semgrep` | `.github/workflows/semgrep.yml` | 🔲 Planned |

---

## How to Configure (GitHub UI)

1. Go to **Settings → Branches → Add rule**
2. Branch name pattern: `main`
3. Enable:
   - ✅ Require a pull request before merging
   - ✅ Require approvals (1)
   - ✅ Dismiss stale pull request approvals when new commits are pushed
   - ✅ Require conversation resolution before merging
   - ✅ Require status checks to pass before merging
   - Select: `ci` workflow
4. Click **Save changes**

---

## Branch Naming Convention

| Type    | Pattern                   | Example                      |
| ------- | ------------------------- | ---------------------------- |
| Feature | `feat/short-description`  | `feat/lead-parser`           |
| Fix     | `fix/short-description`   | `fix/score-calc-bug`         |
| Init    | `init/short-description`  | `init/agent-native-scaffold` |
| Chore   | `chore/short-description` | `chore/update-deps`          |
| Docs    | `docs/short-description`  | `docs/api-reference`         |

---

## CI Failure Policy

- If CI fails on a PR: **fix before merge** (no exceptions)
- If CI is flaky: document in Evidence Pack, create a `fix/ci-flaky` issue
- If CI needs to be bypassed temporarily: document in Evidence Pack + `.agent/DECISIONS/` ADR
