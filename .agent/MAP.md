# MAP — Feature → Folder Mapping

> This map tells agents exactly where to find (or add) each feature.
> **Update this file whenever you add a new module or move code.**

---

## Current Structure

| Feature / Module                      | Folder / File                                 | Status    |
| ------------------------------------- | --------------------------------------------- | --------- |
| **Project Context** (source of truth) | `Project_Context.md`                          | ✅ Active |
| **Agent Onboarding**                  | `.agent/`                                     | ✅ Active |
| **Evidence Pack System**              | `Evidence/`                                   | ✅ Active |
| **Repo Map Generator**                | `scripts/generate_repo_map.cjs`               | ✅ Active |
| **Dev Container**                     | `.devcontainer/devcontainer.json`             | ✅ Active |
| **CI / PR Templates**                 | `.github/`                                    | ✅ Active |
| **VS Code Config**                    | `.vscode/`                                    | ✅ Active |
| **App Attributes (SRS)**              | `App_Attributes/`                             | ✅ Active |
| **UI Theme Tokens**                   | `src/index.css` + `.agent/UI_THEME.md`        | ✅ Active |
| **UI Shell Layout**                   | `src/ui/layout/AppShell.tsx`, `BottomNav.tsx` | ✅ Active |
| **UI Pages**                          | `src/ui/pages/` (Home, LeadInput, Results)    | ✅ Active |
| **UI Components**                     | `src/ui/components/GlassPanel.tsx`            | ✅ Active |
| **Motion / Animations**               | `src/ui/motion/` (PageTransition, presets)    | ✅ Active |
| **Icons**                             | `src/ui/icons/NavIcons.tsx`                   | ✅ Active |
| **Structured Logger**                 | `src/core/logging/logger.ts`                  | ✅ Active |
| **Routing**                           | React Router v7 (`src/App.tsx`)               | ✅ Active |

---

## Planned (Not Yet Created)

| Feature / Module    | Expected Location                     | Priority  |
| ------------------- | ------------------------------------- | --------- |
| Lead Parser         | `src/core/parser/`                    | 🔴 High   |
| Lead Normalizer     | `src/core/normalizer/`                | 🔴 High   |
| Scoring Engine      | `src/core/scoring/`                   | 🔴 High   |
| Evidence Extraction | `src/core/evidence/`                  | 🟡 Medium |
| Tests               | `src/__tests__/` + `vitest.config.ts` | 🔴 High   |
| API Layer           | `src/core/api/`                       | 🟡 Medium |
| State Management    | `src/core/store/`                     | 🟡 Medium |

---

## Key Entry Points

| Entry              | Path                                                        |
| ------------------ | ----------------------------------------------------------- |
| HTML               | `index.html`                                                |
| App root           | `src/main.tsx` → `src/App.tsx`                              |
| CSS entry          | `src/index.css` (Tailwind v4 + design tokens)               |
| Config: Vite       | `vite.config.ts`                                            |
| Config: TypeScript | `tsconfig.json` → `tsconfig.app.json`, `tsconfig.node.json` |
| Config: ESLint     | `eslint.config.js`                                          |
