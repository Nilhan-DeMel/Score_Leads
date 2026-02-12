import type { Profile } from "../types";

export function exportProfileJson(profile: Profile): string {
  return JSON.stringify(profile, null, 2);
}
