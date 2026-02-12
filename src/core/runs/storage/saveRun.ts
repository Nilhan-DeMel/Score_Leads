import localforage from "localforage";
import type { Run } from "../types";
import { logger } from "../../logging/logger";

/**
 * Persists a run to IndexedDB.
 */
export async function saveRun(run: Run): Promise<void> {
  try {
    const key = `run:${run.runId}`;
    await localforage.setItem(key, run);

    // Also update the index (for faster listing)
    const indexKey = "runs:index";
    const existingIndex = (await localforage.getItem<string[]>(indexKey)) || [];

    if (!existingIndex.includes(run.runId)) {
      await localforage.setItem(indexKey, [run.runId, ...existingIndex]);
    }

    logger.info("Runs", "save_run_success", { runId: run.runId });
  } catch (err) {
    logger.error("Runs", "save_run_failed", { runId: run.runId, err });
    throw new Error("Failed to save run to history.");
  }
}
