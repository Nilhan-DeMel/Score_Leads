import { defaultProfile } from "../defaultProfile";
import { saveProfile } from "./saveProfile";

export function resetProfile(): void {
  saveProfile(defaultProfile);
}
