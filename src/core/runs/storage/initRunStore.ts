import localforage from "localforage";
import { logger } from "../../logging/logger";

/**
 * Initialize the runs storage container using IndexedDB.
 */
export async function initRunStore() {
  try {
    localforage.config({
      name: "score-leads",
      storeName: "runs",
      description: "Storage for scored lead runs (Run History)",
    });
    logger.info("Runs", "storage_init_success");
  } catch (err) {
    logger.error("Runs", "storage_init_failed", { err });
  }
}
