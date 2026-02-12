# Feature Registry

> Lists all major modules/features and their entry files.  
> **Update when adding new features.**

---

| Module           | Entry File                     | Status     | Description                              |
| ---------------- | ------------------------------ | ---------- | ---------------------------------------- |
| Project Spec     | `Project_Context.md`           | ✅ Active  | Product spec + operating charter         |
| Agent Onboarding | `.agent/START_HERE.md`         | ✅ Active  | Agent landing page                       |
| Evidence System  | `Evidence/README.md`           | ✅ Active  | Evidence Pack spec + templates           |
| Repo Map         | `scripts/generate_repo_map.py` | ✅ Active  | Auto-generates repo structure map        |
| CI Pipeline      | `.github/workflows/ci.yml`     | ✅ Starter | Basic lint/typecheck/test stubs          |
| Lead Parser      | `src/parsing/index.ts`         | 🔲 Planned | Entity extraction + normalization        |
| Scoring Engine   | `src/scoring/index.ts`         | 🔲 Planned | Lead scoring logic                       |
| Company Profile  | `src/profile/index.ts`         | 🔲 Planned | Service delivery company profile builder |
| UI Shell         | `src/ui/App.tsx`               | 🔲 Planned | Mobile-first dark theme UI               |
| API Layer        | `src/api/index.ts`             | 🔲 Planned | API routes (if applicable)               |
| Auth             | `src/auth/index.ts`            | 🔲 Planned | Authentication (if/when needed)          |
