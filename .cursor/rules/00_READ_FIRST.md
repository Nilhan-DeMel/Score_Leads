# 00_READ_FIRST — Kilo Repo-Scoped Rules

- Agents MUST read files in this order before any change:
  1. `Project_Context.md` (fallback: `Project_Context.txt`)
  2. `.agent/START_HERE.md`
  3. `.agent/MAP.md`
  4. `.agent/RULES.md` (if present)
  5. `.agent/repo-map.md`
- Agents MUST NOT skip read-first files.
- Agents MUST keep work within requested mission scope only.
