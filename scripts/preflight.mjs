#!/usr/bin/env node

import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

function run(cmd) {
  try {
    return execSync(cmd, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    }).trim();
  } catch (error) {
    const stderr = error?.stderr?.toString()?.trim();
    const stdout = error?.stdout?.toString()?.trim();
    return (stderr || stdout || `command failed: ${cmd}`).trim();
  }
}

function parsePromptNumber(fileName) {
  const m = /^PROMPT#(\d+)\.zip$/i.exec(fileName);
  return m ? Number(m[1]) : null;
}

function listReadFirstFiles() {
  return [
    "Project_Context.md (fallback: Project_Context.txt)",
    ".agent/START_HERE.md",
    ".agent/MAP.md",
    ".agent/RULES.md (if present)",
    ".agent/repo-map.md",
  ];
}

function main() {
  const root = process.cwd();

  console.log("=== Score_Leads Preflight ===");
  console.log(`Repo root: ${root}`);

  console.log("\n[1] Git status summary");
  console.log(run("git status --short --branch"));

  console.log("\n[2] Current version + last commit");
  let version = "unknown";
  try {
    const pkg = JSON.parse(
      readFileSync(path.join(root, "package.json"), "utf8"),
    );
    version = pkg.version ?? "unknown";
  } catch {}
  console.log(`package version: ${version}`);
  console.log(`last commit: ${run("git log -1 --oneline")}`);

  console.log("\n[3] Key npm scripts");
  try {
    const pkg = JSON.parse(
      readFileSync(path.join(root, "package.json"), "utf8"),
    );
    const scripts = pkg.scripts || {};
    const keys = ["dev", "test", "build", "e2e", "preflight", "repo-map"];
    for (const key of keys) {
      console.log(`${key}: ${scripts[key] ?? "<missing>"}`);
    }
  } catch (err) {
    console.log(`unable to read package.json scripts: ${String(err)}`);
  }

  console.log("\n[4] Evidence folder + next PROMPT suggestion");
  const evidencePath = path.join(root, "Evidence");
  const evidenceExists = existsSync(evidencePath);
  console.log(`Evidence exists: ${evidenceExists}`);

  let nextPrompt = 1;
  if (evidenceExists) {
    const listing = run(
      "powershell -NoProfile -Command \"Get-ChildItem -Path 'Evidence' -File -Filter 'PROMPT#*.zip' | Select-Object -ExpandProperty Name\"",
    );
    const names = listing
      .split(/\r?\n/)
      .map((s) => s.trim())
      .filter(Boolean);
    const nums = names.map(parsePromptNumber).filter((n) => Number.isFinite(n));
    if (nums.length > 0) {
      nextPrompt = Math.max(...nums) + 1;
    }
    console.log(`PROMPT zips found: ${names.length}`);
  }
  console.log(
    `Suggested next evidence pack: Evidence/PROMPT#${String(nextPrompt).padStart(2, "0")}.zip`,
  );

  console.log("\n[5] Repo map regeneration");
  const mapCandidates = [
    {
      scriptKey: "repo-map",
      check: true,
      command: "npm run repo-map",
      output: ".agent/repo-map.md",
    },
    {
      scriptKey: null,
      check: existsSync(path.join(root, "scripts", "generate_repo_map.cjs")),
      command: "node scripts/generate_repo_map.cjs",
      output: ".agent/repo-map.md",
    },
    {
      scriptKey: null,
      check: existsSync(path.join(root, "scripts", "generate_repo_map.py")),
      command: "python scripts/generate_repo_map.py",
      output: ".agent/repo-map.md",
    },
  ];

  let executed = false;
  for (const candidate of mapCandidates) {
    if (!candidate.check) continue;
    if (candidate.scriptKey) {
      try {
        const pkg = JSON.parse(
          readFileSync(path.join(root, "package.json"), "utf8"),
        );
        if (!pkg.scripts || !pkg.scripts[candidate.scriptKey]) continue;
      } catch {
        continue;
      }
    }

    console.log(`Running: ${candidate.command}`);
    const out = run(candidate.command);
    if (out) console.log(out);
    const outputPath = path.join(root, candidate.output);
    console.log(
      `Repo map output: ${outputPath} (${existsSync(outputPath) ? "exists" : "missing"})`,
    );
    executed = true;
    break;
  }

  if (!executed) {
    console.log("No repo-map generator found; skipped regeneration.");
  }

  console.log("\n[6] Read-first files");
  for (const entry of listReadFirstFiles()) {
    console.log(`- ${entry}`);
  }

  console.log("\nPreflight complete.");
}

main();
