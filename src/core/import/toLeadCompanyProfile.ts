import { parseLeadText } from "../leads/parseLeadText";
import type { LeadCompanyProfile } from "../leads/types";
import type { ImportedLead } from "./types";

/**
 * Converts a permissive imported row into the canonical scoring model.
 */
export function toLeadCompanyProfile(
  imported: ImportedLead,
): LeadCompanyProfile | null {
  const candidate = imported.domain || imported.email || imported.text;
  const parsed = parseLeadText(candidate).leads[0];

  if (!parsed) return null;

  return {
    ...parsed,
    name: imported.name?.trim() || parsed.name,
    source_text: imported.text,
  };
}
