# Evidence Pack — AG_Prompt_01: Init Agent-Native Scaffold

**Prompt ID:** AG_Prompt_01
**Branch:** `init/agent-native-scaffold`
**Merge Commit:** `2db540e`
**Feature Commit:** `2ff6b56`
**PR:** [https://github.com/Nilhan-DeMel/Score_Leads/pull/1](https://github.com/Nilhan-DeMel/Score_Leads/pull/1)
**Date:** 2026-02-12
**Agent:** Antigravity (AG)

---

## Summary

Initialized the Score_Leads repository with a complete agent-native scaffold enabling any stateless agent to fly in, understand repo shape, make safe changes, and fly out with verifiable proof. This is the foundational infrastructure for all future development.

---

## Files Added (31 files, 1634 insertions)

### Agent Onboarding Pack (`.agent/`)

| File                                    | Size   | Purpose                                           |
| --------------------------------------- | ------ | ------------------------------------------------- |
| `.agent/START_HERE.md`                  | 3.1 KB | 1-page repo overview + how to add features safely |
| `.agent/MAP.md`                         | 2.5 KB | Feature → folder mapping with planned structure   |
| `.agent/COMMANDS.md`                    | 1.9 KB | Single source of truth for all scripts            |
| `.agent/RULES.md`                       | 2.8 KB | Non-negotiable development rules                  |
| `.agent/DECISIONS/0001-adr-template.md` | 1.5 KB | ADR template + naming convention                  |
| `.agent/REGISTRY_FEATURES.md`           | 1.6 KB | Module/feature entry file registry                |
| `.agent/REGISTRY_DATA.md`               | 1.4 KB | Schema/interface locations                        |
| `.agent/REGISTRY_UI.md`                 | 1.7 KB | UI entry points + components map                  |
| `.agent/GITHUB_GATES.md`                | 2.5 KB | Branch protection + CI policy                     |
| `.agent/EXTENSIONS_ALLOWLIST.md`        | 2.8 KB | VS Code extension supply-chain policy             |
| `.agent/REFERENCE_NOTES.md`             | 3.8 KB | MCP-grounded reference notes                      |
| `.agent/repo-map.md`                    | 2.4 KB | Auto-generated repo structure map                 |

### Evidence Pack System

| File                                | Size   | Purpose                              |
| ----------------------------------- | ------ | ------------------------------------ |
| `Evidence/README.md`                | 2.3 KB | Spec, naming convention, size limits |
| `Evidence/_template/evidence.json`  | 720 B  | Structured evidence template         |
| `Evidence/_template/commands.log`   | 273 B  | Commands log template                |
| `Evidence/_template/tests.log`      | 327 B  | Tests log template                   |
| `Evidence/_template/trajectory.log` | 584 B  | Trajectory log template              |
| `Evidence/_template/repo-map.md`    | 191 B  | Repo map snapshot template           |
| `Evidence/AG_TaskRubric_01.md`      | 3.9 KB | Task rubric for this prompt          |

### Infrastructure

| File                                        | Size   | Purpose                                  |
| ------------------------------------------- | ------ | ---------------------------------------- |
| `.devcontainer/devcontainer.json`           | 665 B  | Node 20 LTS dev container                |
| `.github/workflows/ci.yml`                  | 1.4 KB | CI with repo map + evidence verification |
| `.github/pull_request_template.md`          | 1.1 KB | PR template with checklist               |
| `.github/ISSUE_TEMPLATE/feature_request.md` | 744 B  | Feature request template                 |
| `.github/ISSUE_TEMPLATE/bug_report.md`      | 607 B  | Bug report template                      |
| `.vscode/extensions.json`                   | 293 B  | Recommended extensions                   |
| `.vscode/settings.json`                     | 542 B  | Safe editor defaults                     |
| `.gitignore`                                | 359 B  | Node.js/TypeScript ignores               |
| `scripts/generate_repo_map.js`              | 4.7 KB | Repo map generator (Node.js)             |
| `scripts/generate_repo_map.py`              | 4.6 KB | Repo map generator (Python)              |

### SRS-in-Motion

| File                                         | Size   | Purpose                           |
| -------------------------------------------- | ------ | --------------------------------- |
| `App_Attributes/App_Attributes.md`           | 1.2 KB | Scaffold init logged as INIT-001  |
| `App_Attributes/Potential_App_Attributes.md` | 5.0 KB | 25+ potential features identified |

---

## Commands Run

```
$ git init
Initialized empty Git repository in D:/AI-Apps-In-Drive/App_Station/Score_Leads/.git/

$ node scripts/generate_repo_map.js
✅ Repo map generated: D:\AI-Apps-In-Drive\App_Station\Score_Leads\.agent\repo-map.md

$ git add -A
(31 files staged)

$ git commit -m "feat: initialize agent-native scaffold for Score_Leads"
[init/agent-native-scaffold 2ff6b56] feat: initialize agent-native scaffold ...
31 files changed, 1634 insertions(+)

$ git push -f origin init/agent-native-scaffold
To https://github.com/Nilhan-DeMel/Score_Leads.git
+ 000e0f5...2ff6b56 init/agent-native-scaffold -> init/agent-native-scaffold

$ gh pr create --base main --head init/agent-native-scaffold
https://github.com/Nilhan-DeMel/Score_Leads/pull/1

$ gh pr merge 1 --merge --admin
✓ Merged pull request Nilhan-DeMel/Score_Leads#1

$ git pull origin main
Fast-forward — 31 files, 1634 insertions
```

---

## Tests Run

| Test            | Result           | Notes                                                                      |
| --------------- | ---------------- | -------------------------------------------------------------------------- |
| Repo map script | ✅ Pass          | `node scripts/generate_repo_map.js` — generates valid `.agent/repo-map.md` |
| Git diff review | ✅ Pass          | Only intended scaffold files; no existing files modified                   |
| Markdown lint   | ⏭️ Not available | No markdown linter installed yet (INIT-003)                                |
| Unit tests      | ⏭️ Not available | No test framework yet (INIT-002/INIT-004)                                  |

---

## Risks

| Risk                                          | Level | Mitigation                                                    |
| --------------------------------------------- | ----- | ------------------------------------------------------------- |
| No test framework                             | Low   | Documented as INIT-002 + INIT-004 in Potential_App_Attributes |
| No lint toolchain                             | Low   | Documented as INIT-003 in Potential_App_Attributes            |
| Python script won't run (no Python installed) | Low   | Node.js version provided as primary; Python as fallback       |

---

## Deviations from Policy

| Deviation                                       | Justification                                                                                         |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Single commit instead of multiple small commits | This is an initialization scaffold — all files are interdependent and belong to a single logical unit |
| Branch protection not yet configured on GitHub  | Guidance document created (`.agent/GITHUB_GATES.md`); needs manual configuration in GitHub Settings   |
| No CodeQL/Semgrep workflows                     | Marked as planned (INIT-005, INIT-006); not critical for initial scaffold                             |

---

## Rollback Plan

```bash
# Revert the merge commit
git revert 2db540e

# Or hard reset to pre-scaffold state
git reset --hard afe9ac0
git push -f origin main
```

---

## Repo Map Snapshot

```
📁 Score_Leads/
├── 📁 .agent/ (11 items)
│   ├── 📁 DECISIONS/ (1 items)
│   │   └── 📄 0001-adr-template.md (1.5 KB)
│   ├── 📄 COMMANDS.md (1.9 KB)
│   ├── 📄 EXTENSIONS_ALLOWLIST.md (2.8 KB)
│   ├── 📄 GITHUB_GATES.md (2.5 KB)
│   ├── 📄 MAP.md (2.5 KB)
│   ├── 📄 REFERENCE_NOTES.md (3.8 KB)
│   ├── 📄 REGISTRY_DATA.md (1.4 KB)
│   ├── 📄 REGISTRY_FEATURES.md (1.6 KB)
│   ├── 📄 REGISTRY_UI.md (1.7 KB)
│   ├── 📄 RULES.md (2.8 KB)
│   └── 📄 START_HERE.md (3.1 KB)
├── 📁 .devcontainer/ (1 items)
│   └── 📄 devcontainer.json (665 B) ⭐
├── 📁 .github/ (3 items)
│   ├── 📁 ISSUE_TEMPLATE/ (2 items)
│   │   ├── 📄 bug_report.md (607 B)
│   │   └── 📄 feature_request.md (744 B)
│   ├── 📁 workflows/ (1 items)
│   │   └── 📄 ci.yml (1.4 KB) ⭐
│   └── 📄 pull_request_template.md (1.1 KB)
├── 📁 .vscode/ (2 items)
│   ├── 📄 extensions.json (293 B)
│   └── 📄 settings.json (542 B)
├── 📁 App_Attributes/ (2 items)
│   ├── 📄 App_Attributes.md (1.2 KB)
│   └── 📄 Potential_App_Attributes.md (5.0 KB)
├── 📁 Evidence/ (3 items)
│   ├── 📁 _template/ (5 items)
│   ├── 📄 AG_TaskRubric_01.md (3.9 KB)
│   └── 📄 README.md (2.3 KB) ⭐
├── 📁 scripts/ (2 items)
│   ├── 📄 generate_repo_map.js (4.7 KB)
│   └── 📄 generate_repo_map.py (4.6 KB)
├── 📄 .gitignore (359 B) ⭐
├── 📄 Project_Context.md (8.3 KB) ⭐
└── 📄 Project_Context.txt (8.3 KB)
```
