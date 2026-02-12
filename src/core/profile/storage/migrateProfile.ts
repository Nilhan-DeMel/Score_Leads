import type { Profile } from "../types";

export function migrateProfile(data: unknown): Profile {
  // v1 -> v1 is a passthrough
  // In the future, this will handle upgrading schemaVersions
  return data as Profile;
}
