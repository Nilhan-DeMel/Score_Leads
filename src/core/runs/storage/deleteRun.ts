import localforage from "localforage";
import { logger } from "../../logging/logger";

/**
 * Deletes a run and updates the index.
 */
export async function deleteRun(runId: string): Promise<void> {
  try {
    await localforage.removeItem(`run:${runId}`);

    const indexKey = "runs:index";
    const index = (await localforage.getItem<string[]>(indexKey)) || [];
    const newIndex = index.filter((id) => id !== runId);
    await localforage.setItem(indexKey, newIndex);

    logger.info("Runs", "delete_run_success", { runId });
  } catch (err) {
    logger.error("Runs", "delete_run_failed", { runId, err });
  }
}

/**
 * Wipes all run history.
 */
export async function clearRuns(): Promise<void> {
  try {
    const index = (await localforage.getItem<string[]>("runs:index")) || [];
    await Promise.all(index.map((id) => localforage.removeItem(`run:${id}`)));
    await localforage.removeItem("runs:index");
    logger.info("Runs", "clear_history_success");
  } catch (err) {
    logger.error("Runs", "clear_history_failed", { err });
  }
}
