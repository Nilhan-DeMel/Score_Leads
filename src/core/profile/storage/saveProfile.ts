import type { Profile } from "../types";
import { logger } from "../../logging/logger";

const STORAGE_KEY = "score_leads_service_profile";

export function saveProfile(profile: Profile): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    logger.info("Storage", "save_profile_success", {
      schemaVersion: profile.schemaVersion,
    });
  } catch (error) {
    logger.error("Storage", "save_profile_failed", { error });
    throw error;
  }
}
