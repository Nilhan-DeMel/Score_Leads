# Score Leads

Deterministic, explainable lead scoring for turning messy prospect data into reviewable ICP-fit decisions.

Score Leads is a mobile-first React application that accepts free-form text, lists, and CSV data; extracts and normalizes company signals; applies configurable scoring rules; and preserves each run for later review and export. The project is deliberately deterministic: every score is assembled from visible fit, intent, region, website, and exclusion signals rather than an opaque model response.

## Engineering highlights

- **Multi-format ingestion:** email, URL, bare-domain, list, and CSV parsing with public-suffix-aware normalization and deduplication.
- **Explainable scoring:** composable rules produce a score breakdown, confidence, evidence, warnings, and a human-readable label.
- **Versioned local persistence:** profiles and scoring runs use explicit schemas, migrations, IndexedDB-backed storage, and JSON/CSV export.
- **Typed product surface:** React 19, TypeScript, Vite, React Router, Motion, and a responsive dark interface.
- **Agent-readable delivery:** architecture maps, decision records, task rubrics, repeatable evidence packs, and structured logging make the repository easy to inspect and continue.
- **Layered verification:** Vitest coverage for parsing, imports, scoring, storage, and application behavior; Playwright journeys; CodeQL; dependency review; and Firebase/Vercel deployment workflows.

## System flow

```text
Text / CSV / list
       |
       v
Extract -> normalize -> deduplicate
       |
       v
Apply ICP profile + deterministic scoring rules
       |
       v
Explain results -> persist run -> review / export
```

## Repository map

| Area | Responsibility |
| --- | --- |
| `src/core/leads` | Entity extraction, normalization, confidence, and deduplication |
| `src/core/import` | CSV/list parsing and canonical lead conversion |
| `src/core/scoring` | Configurable scoring rules and score aggregation |
| `src/core/profile` | ICP profile schema, migration, import, and persistence |
| `src/core/runs` | Versioned run storage and history |
| `src/ui` | Responsive application shell, pages, motion, and visual components |
| `e2e` | Browser-level scoring, profile, history, and exclusion journeys |
| `.agent` / `Evidence` | Agent onboarding, operating rules, decisions, and auditable delivery records |

## Run locally

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Verification

```bash
npm run lint
npm test
npm run build
npm run e2e
```

The current employer-release baseline passes ESLint, all 18 Vitest tests, 12 Playwright journeys across desktop and mobile browser profiles, and the production TypeScript/Vite build. The build reports a bundle-size optimization opportunity; it does not fail compilation.

## Scope and trust boundary

This repository demonstrates a complete deterministic scoring workflow and an evidence-heavy, agent-native engineering process. Its default ICP values and test leads are synthetic examples. A real deployment should supply organization-specific profile data, review scoring weights with domain experts, and keep provider credentials in deployment secrets rather than source control.

For agent onboarding and deeper implementation context, start with [`.agent/START_HERE.md`](.agent/START_HERE.md), [`.agent/MAP.md`](.agent/MAP.md), and [`Evidence/README.md`](Evidence/README.md).
