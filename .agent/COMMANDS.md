# COMMANDS — Single Source of Truth

> Every script, command, and task runner available in this repo.
> **Update this file whenever you add or change a script.**

---

## Available Commands

### Repo Map Generator

```bash
node scripts/generate_repo_map.js
```

**What it does:** Scans the repo, outputs a directory tree + key files to `.agent/repo-map.md`.
**When to run:** After structural changes (new folders, moved files).
**Output:** `.agent/repo-map.md`
**Note:** Python version also available at `scripts/generate_repo_map.py` (requires Python 3).

---

### Dev Server (TODO — Not Yet Available)

```bash
npm run dev
```

**What it does:** Starts the Vite development server.
**When to run:** During active development.

### Tests (TODO — Not Yet Available)

```bash
npm test
```

**What it does:** Runs the test suite.
**When to run:** Before committing, during PR checks.

### Lint (TODO — Not Yet Available)

```bash
npm run lint
```

**What it does:** Runs linter checks.
**When to run:** Before committing, during PR checks.

### Type Check (TODO — Not Yet Available)

```bash
npm run typecheck
```

**What it does:** Runs TypeScript type checking.
**When to run:** Before committing, during PR checks.

### Build (TODO — Not Yet Available)

```bash
npm run build
```

**What it does:** Builds production bundle.
**When to run:** For deployment or validation.

---

## CI Workflows

| Workflow | File                       | Trigger             | What It Does                          |
| -------- | -------------------------- | ------------------- | ------------------------------------- |
| CI       | `.github/workflows/ci.yml` | Push / PR to `main` | Lint, typecheck, test (stubs for now) |

---

## Notes

- Commands marked **TODO** will become available when the toolchain is set up.
- All new scripts must be registered here.
- Prefer cross-platform commands (Python, Node) over shell-specific.
