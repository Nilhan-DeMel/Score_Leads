import type { Profile } from "../types";
import { migrateProfile } from "./migrateProfile";

export function importProfileJson(json: string): Profile {
  try {
    const data = JSON.parse(json);
    if (!data.schemaVersion) {
      throw new Error("Invalid profile: Missing schemaVersion");
    }
    return migrateProfile(data);
  } catch (error) {
    throw new Error(
      `Failed to import profile: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
  }
}
