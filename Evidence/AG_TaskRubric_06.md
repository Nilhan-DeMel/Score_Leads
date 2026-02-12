# AG Task Rubric #06 — Run History & Batch Import

## Goal

Implement Run History (IndexedDB), Batch CSV Import (Papa Parse), and Exports (CSV/JSON) to transition the app from a single-use tool to a persistent lead management platform.

## Proposed Changes

### Core Logic

#### Run Model

- `src/core/runs/types.ts`: Define `RunV1` schema with snapshots and lead results.

#### Persistence

- `src/core/runs/storage/`: Implement async storage using IndexedDB (via localForage).

#### Import

- `src/core/import/`: Implement CSV and List parsing logic.

#### Export

- `src/core/export/`: Implement CSV and JSON serializers.

### UI Components

- `LeadInputPage.tsx`: Add tabs for "Text", "Batch CSV", "Upload", and "List".
- `HistoryPage.tsx`: List previous runs with quick actions.
- `RunDetailPage.tsx`: Detailed view of a past run (reusing Results UI).
- `ResultsPage.tsx`: Add Export buttons.

### Documents

- `App_Attributes.md`: Log new capabilities.
- `Potential_App_Attributes.md`: Update roadmap.
- `REFERENCE_NOTES.md`: Document IndexedDB/CSV findings.

## Acceptance Checks

1. [ ] Can paste a CSV and have it auto-detected.
2. [ ] Can upload a `.csv` file and see a preview.
3. [ ] Leads are auto-saved to "History" after every scoring session.
4. [ ] Can view past runs and delete them.
5. [ ] Can export results to CSV and JSON.
6. [ ] 100% test pass for storage and parsing logic.

## Rollback Plan

- Revert to `main` branch.
- No database migrations required as we are using IndexedDB for the first time for runs (but existing LocalStorage for profile remains).

## Evidence & ZIP Plan

- Evidence Report: `Evidence/AG_Prompt_06_CORE004_RunsBatchExport_20260212.md`.
- ZIP: `Evidence/PROMPT#06.zip` (includes reports, logs, repo-map).
