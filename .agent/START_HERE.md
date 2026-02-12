# START HERE — Score_Leads

> **Read this first.** If you are an agent or developer landing in this repo for the first time, this page gives you everything you need in 60 seconds.

---

## What Is This Repo?

**Score_Leads** is a mobile-first, dark-theme **sales lead scoring web app**. It accepts:

- A single lead (company)
- A batch of leads (list/table)
- Messy text (emails, domains, company names, URLs)

It **extracts** lead entities, **normalizes** them, and **scores** each lead by likelihood of purchasing from the service delivery company.

**Tech stack:** Node.js / TypeScript (target), Vite frontend, vanilla CSS, dark theme only.

---

## Repo Shape (Quick Map)

```
Score_Leads/
├── .agent/              # Agent onboarding, rules, registries, decisions
├── .devcontainer/       # Dev Container config (deterministic env)
├── .github/             # CI workflows, PR/Issue templates
├── .vscode/             # Editor settings + extension recommendations
├── App_Attributes/      # SRS-in-motion: implemented + potential features
├── Evidence/            # Evidence Packs (proof of work, <10MB each)
├── scripts/             # Utility scripts (repo map generator, etc.)
├── Project_Context.md   # SOURCE OF TRUTH — do NOT modify without instruction
└── Project_Context.txt  # Alternate format of Project_Context
```

See `.agent/MAP.md` for the full feature → folder mapping.

---

## How to Run

> **Note:** The app is in early initialization. No runnable code yet. When ready:

```bash
# 1. Clone and install
npm install

# 2. Run dev server
npm run dev

# 3. Run tests
npm test

# 4. Generate repo map
python scripts/generate_repo_map.py
```

**Dev Container:** Open in VS Code → "Reopen in Container" → everything is ready.

---

## How to Add a Feature Safely

1. **Read** `Project_Context.md` (source of truth) and this file
2. **Check** `.agent/MAP.md` + `REGISTRY_FEATURES.md` to understand where things live
3. **Branch:** Create a feature branch (`feat/your-feature-name`)
4. **Code:** Follow micro-modular rules (see `.agent/RULES.md`)
5. **Test:** Run available checks, document gaps
6. **Evidence:** Create an Evidence Pack in `Evidence/` (see `Evidence/README.md`)
7. **Docs:** Update `App_Attributes/App_Attributes.md` + `Potential_App_Attributes.md`
8. **PR:** Open PR using the template, include evidence link
9. **Merge:** After checks pass, merge to `main`

---

## Key Files to Know

| File                 | Purpose                                            |
| -------------------- | -------------------------------------------------- |
| `Project_Context.md` | Source of truth — product spec + operating charter |
| `.agent/RULES.md`    | Non-negotiable development rules                   |
| `.agent/COMMANDS.md` | All scripts and what they do                       |
| `.agent/MAP.md`      | Feature → folder mapping                           |
| `Evidence/README.md` | Evidence Pack format + naming convention           |
| `.agent/repo-map.md` | Auto-generated repo structure map                  |
