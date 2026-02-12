# Data Registry — Schemas & Interfaces

> Lists all data schemas, interfaces, and type definitions.  
> **Update when adding new data structures.**

---

| Schema / Interface | Location                           | Status     | Description                                          |
| ------------------ | ---------------------------------- | ---------- | ---------------------------------------------------- |
| Lead (canonical)   | `src/models/lead.ts`               | 🔲 Planned | `{ name, domain, website, source_text, confidence }` |
| Score Result       | `src/models/score.ts`              | 🔲 Planned | `{ score, confidence, justification, evidence }`     |
| Company Profile    | `src/models/company-profile.ts`    | 🔲 Planned | Service delivery company profile                     |
| Fit Signal         | `src/models/signals.ts`            | 🔲 Planned | Industry, size, geo, stack, budget cues              |
| Risk Signal        | `src/models/signals.ts`            | 🔲 Planned | Wrong region, too small, mismatch                    |
| Evidence Pack      | `Evidence/_template/evidence.json` | ✅ Active  | Evidence Pack JSON schema                            |

---

## Notes

- All interfaces should be TypeScript `interface` or `type` definitions
- Keep models in `src/models/` — one file per domain concept
- Export all types from `src/models/index.ts` (barrel export)
