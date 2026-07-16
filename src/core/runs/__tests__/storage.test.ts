import { describe, it, expect, vi, beforeEach } from "vitest";
import { saveRun } from "../storage/saveRun";
import { getRun } from "../storage/getRun";
import { listRuns } from "../storage/listRuns";
import localforage from "localforage";
import type { Run } from "../types";
import { defaultProfile } from "../../profile/defaultProfile";

// Mock localforage
vi.mock("localforage", () => {
  const store: Record<string, unknown> = {};
  return {
    default: {
      setItem: vi.fn(async (key: string, value: unknown) => {
        store[key] = value;
      }),
      getItem: vi.fn(async (key: string) => {
        return store[key] || null;
      }),
      removeItem: vi.fn(async (key: string) => {
        delete store[key];
      }),
      config: vi.fn(),
    },
  };
});

describe("Run Storage", () => {
  const mockRun: Run = {
    schemaVersion: "1.0.0",
    runId: "run-123",
    createdAt: new Date().toISOString(),
    name: "Test Run",
    profileSnapshot: defaultProfile,
    inputMeta: { kind: "text", leadCount: 1, rawSize: 10, warningsCount: 0 },
    leads: [],
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should save a run and update the index", async () => {
    await saveRun(mockRun);

    expect(localforage.setItem).toHaveBeenCalledWith("run:run-123", mockRun);
    expect(localforage.setItem).toHaveBeenCalledWith("runs:index", ["run-123"]);
  });

  it("should retrieve a saved run", async () => {
    await saveRun(mockRun);
    const run = await getRun("run-123");
    expect(run).toEqual(mockRun);
  });

  it("should list runs summaries", async () => {
    await saveRun(mockRun);
    const runs = await listRuns();
    expect(runs).toHaveLength(1);
    expect(runs[0].runId).toBe("run-123");
  });
});
