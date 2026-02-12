import localforage from "localforage";
import type { Run } from "../types";

/**
 * Retrieves a single run by ID.
 */
export async function getRun(runId: string): Promise<Run | null> {
  try {
    return await localforage.getItem<Run>(`run:${runId}`);
  } catch (err) {
    console.error("Failed to get run", err);
    return null;
  }
}
