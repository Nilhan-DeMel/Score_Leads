# 30_CONTEXT_MIN_LOOP — Kilo Repo-Scoped Rules

- Agents MUST execute the minimum safe loop:
  1. Read required context files.
  2. Make scoped changes only.
  3. Run required verification commands.
  4. Produce evidence artifacts and zip.
  5. Record exact outcomes (pass/fail + notes).
- Agents MUST preserve pre-existing uncommitted work safely.
- Agents MUST NOT introduce product feature changes for ops-hardening missions.
