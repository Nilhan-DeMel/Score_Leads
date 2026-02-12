import type { LeadCompanyProfile } from "./types";

/**
 * Dedupes leads by domain.
 * Keeps the one with the highest confidence.
 */
export function dedupeLeads(leads: LeadCompanyProfile[]): LeadCompanyProfile[] {
  const map = new Map<string, LeadCompanyProfile>();

  for (const lead of leads) {
    const existing = map.get(lead.domain);
    if (!existing || lead.confidence > existing.confidence) {
      map.set(lead.domain, lead);
    }
  }

  return Array.from(map.values());
}
