import { extractEmails } from "./extractEmails";
import { extractUrls } from "./extractUrls";
import { extractBareDomains } from "./extractBareDomains";
import { normalizeDomain } from "./normalizeDomain";
import { guessCompanyName } from "./guessCompanyName";
import { dedupeLeads } from "./dedupeLeads";
import type { LeadCompanyProfile, ParseResult } from "./types";

/**
 * Main orchestrator for lead parsing.
 * Deterministic, offline, micro-modular.
 */
export function parseLeadText(text: string): ParseResult {
  const startTime = Date.now();
  const leads: LeadCompanyProfile[] = [];
  const warnings: string[] = [];

  // 1. Extract raw strings
  const emails = extractEmails(text);
  const urls = extractUrls(text);
  const bareDomains = extractBareDomains(text);

  // Helper to add lead
  const addLead = (
    raw: string,
    confidence: number,
    method: "URL" | "EMAIL" | "BARE",
  ) => {
    const domain = normalizeDomain(raw);
    if (!domain) return;

    // v1: Simple excerpt
    const sourceText = raw.length > 50 ? raw.slice(0, 47) + "..." : raw;

    leads.push({
      id: btoa(domain).replace(/=/g, ""), // v1 simple ID
      name: guessCompanyName(domain),
      domain,
      website:
        raw.startsWith("http") || raw.startsWith("www")
          ? raw
          : `https://${domain}`,
      source_text: sourceText,
      confidence,
      method,
    });
  };

  // 2. Process with confidence weights
  urls.forEach((url) => addLead(url, 1.0, "URL"));
  emails.forEach((email) => addLead(email, 0.8, "EMAIL"));
  bareDomains.forEach((domain) => addLead(domain, 0.4, "BARE"));

  // 3. Dedupe
  const dedupedLeads = dedupeLeads(leads);

  return {
    leads: dedupedLeads,
    stats: {
      total_found: leads.length,
      deduped_count: dedupedLeads.length,
      duration_ms: Date.now() - startTime,
    },
    warnings,
  };
}
