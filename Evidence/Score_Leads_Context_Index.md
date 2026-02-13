# Score_Leads Context Index

> **Quick-reference for the Score_Leads repository (v0.1.0).**

## 🎯 What is this app?

Score_Leads is a deterministic, offline-first lead scoring utility. It parses business context (domains, emails, company names) from messy text or CSVs and scores them based on an ICP-grounded "Service Delivery Company Profile."

---

## ⚡ Quickstart Commands

- **Dev**: `npm run dev`
- **Build**: `npm run build`
- **Unit Tests**: `npm test`
- **E2E Tests**: `npm run e2e`
- **Repo Map**: `npm run repo-map`

---

## 🗺️ Core Logic Path Map

| Feature               | Path                               |
| :-------------------- | :--------------------------------- |
| **Parsing Engine**    | `src/core/parser/`                 |
| **Scoring Engine**    | `src/core/scoring/`                |
| **History/IndexedDB** | `src/core/runs/`                   |
| **UI Pages**          | `src/ui/pages/`                    |
| **Design System**     | `src/index.css` + `src/ui/layout/` |

---

## 🚢 Deployment & CI

- **Vercel**: Automated Git integration (Preview per PR, Live on `main`).
- **Firebase**: Backup lane with `pre-merge` channels via `npm run deploy:preview`.
- **CI Gates**: Every PR must pass `ci` (lint/build/test/e2e), `CodeQL` (security), and `Dependency Review`.

---

## 📚 Essential Reading (Start Here)

1. [README.md](file:///D:/AI-Apps-In-Drive/App_Station/Score_Leads/README.md) - Project overview & setup.
2. [.agent/START_HERE.md](file:///D:/AI-Apps-In-Drive/App_Station/Score_Leads/.agent/START_HERE.md) - Agent-native onboarding.
3. [App_Attributes.md](file:///D:/AI-Apps-In-Drive/App_Station/Score_Leads/App_Attributes/App_Attributes.md) - Full feature implementation log.
4. [.agent/LAUNCH_CHECKLIST.md](file:///D:/AI-Apps-In-Drive/App_Station/Score_Leads/.agent/LAUNCH_CHECKLIST.md) - Deployment steps.
5. [Evidence/Score_Leads_Context_Full.md](file:///D:/AI-Apps-In-Drive/App_Station/Score_Leads/Evidence/Score_Leads_Context_Full.md) - Deep-dive architectural context.
