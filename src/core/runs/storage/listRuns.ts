import localforage from "localforage";
import type { Run } from "../types";

/**
 * Lists runs, most recent first.
 */
export async function listRuns(limit: number = 50): Promise<Partial<Run>[]> {
  try {
    const index = (await localforage.getItem<string[]>("runs:index")) || [];
    const sliced = index.slice(0, limit);

    const runs = await Promise.all(
      sliced.map(async (id) => {
        const run = await localforage.getItem<Run>(`run:${id}`);
        if (!run) return null;
        // Return summary version for the list
        const summary: Partial<Run> = {
          runId: run.runId,
          createdAt: run.createdAt,
          name: run.name,
          inputMeta: run.inputMeta,
        };
        return summary;
      }),
    );

    return runs.filter((r): r is Partial<Run> => r !== null);
  } catch (err) {
    console.error("Failed to list runs", err);
    return [];
  }
}
