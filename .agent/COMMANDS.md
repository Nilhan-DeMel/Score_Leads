# COMMANDS — Single Source of Truth

> Every script, command, and task runner available in this repo.
> **Update this file whenever you add or change a script.**

---

## Available Commands

### Development

```bash
npm run dev
```

**What it does:** Starts Vite dev server on `localhost:5173`.
**When to run:** During development.

### Build

```bash
npm run build
```

**What it does:** TypeScript check + Vite production build to `dist/`.
**When to run:** Before deploying or to verify code compiles.

### Preview

```bash
npm run preview
```

**What it does:** Serves the production build locally for testing.
**When to run:** After `npm run build` to test the production bundle.

### Lint

```bash
npm run lint
```

**What it does:** Runs ESLint on the project.
**When to run:** Before committing to catch code issues.

### Repo Map Generator

```bash
npm run repo-map
# or directly:
node scripts/generate_repo_map.cjs
```

**What it does:** Scans the repo, outputs a directory tree + key files to `.agent/repo-map.md`.
**When to run:** After structural changes (new folders, moved files).
**Output:** `.agent/repo-map.md`
**Note:** Python version also available at `scripts/generate_repo_map.py` (requires Python 3).

---

## Scripts Location

| Script                   | Path                            | Runtime  |
| ------------------------ | ------------------------------- | -------- |
| Repo Map Generator       | `scripts/generate_repo_map.cjs` | Node.js  |
| Repo Map Generator (alt) | `scripts/generate_repo_map.py`  | Python 3 |

---

## npm Scripts Summary

| Command                  | Description                         |
| ------------------------ | ----------------------------------- |
| `npm run dev`            | Start Vite development server       |
| `npm run build`          | TypeScript check + production build |
| `npm run preview`        | Preview production build            |
| `npm run lint`           | Run ESLint                          |
| `npm run repo-map`       | Generate `.agent/repo-map.md`       |
| `npm run deploy:preview` | Deploy to Firebase Preview Channel  |
| `firebase deploy`        | Deploy Live to Firebase Hosting     |
