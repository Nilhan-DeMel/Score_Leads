# Task Rubric: AG Prompt #05 — CORE-003 Profile V1

## Objective

Implement a Service Delivery Company Profile (ICP Builder) to ground the Scoring Engine in the user's specific business context.

## Steps

1. **Pre-flight**: Git branch `core/core-003-profile-v1`, verify root location.
2. **MCP Grounding**: Research safe persistence and schema versioning.
3. **Data Model**: Define `ServiceProfileV1` and default values.
4. **Persistence**: Implement LocalStorage storage layer with migration/export/import.
5. **Keyword Utility**: Suggest keywords from pasted text (offline).
6. **UI Page**: Build the "Your Profile" page with dark glass aesthetics and tag editors.
7. **Scoring Upgrade**: Inject profile into `scoreLead` to enable contextual signals.
8. **Test**: Vitest for profile storage, invalid imports, and profile-based scoring logic.
9. **Docs**: Update attributes files.
10. **Evidence**: Full pack + PROMPT#05.zip.

## Files to Touch

- `src/core/profile/types.ts` (NEW)
- `src/core/profile/defaultProfile.ts` (NEW)
- `src/core/profile/storage/loadProfile.ts` (NEW)
- `src/core/profile/storage/saveProfile.ts` (NEW)
- `src/core/profile/storage/resetProfile.ts` (NEW)
- `src/core/profile/storage/exportProfileJson.ts` (NEW)
- `src/core/profile/storage/importProfileJson.ts` (NEW)
- `src/core/profile/storage/migrateProfile.ts` (NEW)
- `src/core/profile/suggest/suggestKeywordsFromText.ts` (NEW)
- `src/ui/pages/ProfilePage.tsx` (NEW)
- `src/ui/AppRoutes.tsx` (Update)
- `src/core/scoring/scoreLead.ts` (Update)
- `src/core/scoring/types.ts` (Update)
- `App_Attributes/App_Attributes.md` (Update)
- `App_Attributes/Potential_App_Attributes.md` (Update)

## Acceptance Checks

- [ ] Profile saves and persists across reloads (localStorage).
- [ ] Profile can be exported to JSON and re-imported.
- [ ] Invalid JSON import is handled gracefully with a toast/error.
- [ ] Scoring results change when keywords in the profile are modified.
- [ ] Exclude keywords in profile trigger penalties in leads containing them.
- [ ] `npm test` passes all 15+ tests.
- [ ] `npm run build` succeeds.
- [ ] UI is premium dark glass, matching existing design language.

## Rollback Plan

- Git checkout and discard changes if the scoring integration breaks existing Core-002 logic.
- Roll back to defaultProfile if storage state is corrupted.

## Evidence Plan

- Trajectory, commands, and test logs.
- Repo map snapshot.
- `AG_Prompt_05_CORE003_ProfileV1_YYYYMMDD-HHMM.md`
- `PROMPT#05.zip`
