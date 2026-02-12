import type { Profile } from "../types";
import { defaultProfile } from "../defaultProfile";
import { migrateProfile } from "./migrateProfile";
import { logger } from "../../logging/logger";

const STORAGE_KEY = "score_leads_service_profile";

export function loadProfile(): Profile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      logger.info("Storage", "load_profile_miss", { action: "use_default" });
      return defaultProfile;
    }
    const data = JSON.parse(raw);
    return migrateProfile(data);
  } catch (error) {
    logger.error("Storage", "load_profile_failed", { error });
    return defaultProfile;
  }
}
