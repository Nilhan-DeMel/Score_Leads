# Score_Leads — Implemented Features (App Attributes)

> Updated after every completed feature.
> This is the **Implemented** features log (SRS-in-motion).

---

## Implemented Features

### INIT-001: Agent-Native Scaffold

- **Status:** ✅ Implemented
- **Prompt:** AG_Prompt_01
- **Date:** 2026-02-12
- **Branch:** `init/agent-native-scaffold`
- **Description:** Full agent-native repository scaffolding including:
  - Agent onboarding pack (`.agent/` with START_HERE, MAP, COMMANDS, RULES, registries)
  - Evidence Pack system (templates, naming convention, README)
  - Repo map auto-generator script (`scripts/generate_repo_map.py`)
  - Dev Container config (`.devcontainer/devcontainer.json`)
  - GitHub CI workflow + PR/Issue templates
  - VS Code extension manifest + allowlist policy
  - Branch protection guidance document
  - ADR (Architectural Decision Record) template + system
- **Evidence:** `Evidence/AG_Prompt_01_InitScaffold_20260212-1211.md`

---

## Feature Log Format

```
### FEAT-XXX: Feature Name
- **Status:** ✅ Implemented | ✅ Implemented {with changes: ...}
- **Prompt:** AG/KC_Prompt_XX
- **Date:** YYYY-MM-DD
- **Branch:** `feat/branch-name`
- **Description:** What was built
- **Evidence:** Evidence Pack path
```
