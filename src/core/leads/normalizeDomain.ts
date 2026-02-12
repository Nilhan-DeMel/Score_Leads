import { getDomain } from "tldts";

/**
 * Normalizes a URL, email, or domain string into a canonical registrable domain.
 * Uses tldts for public-suffix awareness.
 */
export function normalizeDomain(input: string): string | null {
  if (!input) return null;

  // Clean input
  let clean = input.toLowerCase().trim();

  // If it's an email, take the part after @
  if (clean.includes("@")) {
    clean = clean.split("@").pop() || "";
  }

  // Use tldts to get the registrable domain (e.g. acme.co.uk from www.acme.co.uk)
  const domain = getDomain(clean);

  return domain || null;
}
