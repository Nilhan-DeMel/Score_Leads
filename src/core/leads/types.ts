/**
 * Core definition of a Lead Company.
 * Enforced by Project_Context.md
 */
export interface LeadCompanyProfile {
  name: string;
  domain: string; // Canonical registrable domain (e.g. acme.co.uk)
  website?: string; // Full URL if available
  source_text: string; // Excerpt/snippet where it was found
  confidence: number; // 0.0 to 1.0
  id: string; // Generated hash or unique ID
}

export interface ParseResult {
  leads: LeadCompanyProfile[];
  stats: {
    total_found: number;
    deduped_count: number;
    duration_ms: number;
  };
  warnings: string[];
}
