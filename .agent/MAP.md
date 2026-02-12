# MAP — Feature → Folder Mapping

> This map tells agents exactly where to find (or add) each feature.  
> **Update this file whenever you add a new module or move code.**

---

## Current Structure

| Feature / Module       | Folder / File                  | Status                      |
| ---------------------- | ------------------------------ | --------------------------- |
| **Project Spec**       | `Project_Context.md`           | ✅ Active — source of truth |
| **Agent Onboarding**   | `.agent/`                      | ✅ Active                   |
| **Evidence System**    | `Evidence/`                    | ✅ Active                   |
| **Repo Map Generator** | `scripts/generate_repo_map.py` | ✅ Active                   |
| **CI/CD**              | `.github/workflows/`           | ✅ Starter                  |
| **Dev Container**      | `.devcontainer/`               | ✅ Starter                  |
| **SRS Docs**           | `App_Attributes/`              | ✅ Active                   |

---

## Planned Structure (Not Yet Created)

| Feature / Module              | Target Folder        | Notes                                              |
| ----------------------------- | -------------------- | -------------------------------------------------- |
| **Lead Parsing / Extraction** | `src/parsing/`       | Entity detection, normalization                    |
| **Lead Scoring Engine**       | `src/scoring/`       | Fit signals, risk signals, score calc              |
| **Company Profile Builder**   | `src/profile/`       | Service delivery company profile from website/docs |
| **UI Shell**                  | `src/ui/`            | Mobile-first, dark theme, Vite entry               |
| **UI Components**             | `src/ui/components/` | Micro-modular UI pieces                            |
| **API / Server**              | `src/api/`           | API routes (if applicable)                         |
| **Data Models / Schemas**     | `src/models/`        | TypeScript interfaces, schemas                     |
| **Config**                    | `src/config/`        | App configuration, environment vars                |
| **Tests**                     | `tests/`             | Unit + integration tests                           |
| **Auth**                      | `src/auth/`          | Authentication (if/when needed)                    |

---

## Rules

- Each folder handles **1 concern** (micro-modular).
- Each file handles **1–2 functions** max.
- Update this map when adding/moving modules.
