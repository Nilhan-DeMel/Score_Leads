import type { ScoreSignal } from "../types";

/**
 * Scores region based on TLD or lead metadata.
 */
export function scoreRegionFromDomain(domain: string): ScoreSignal | null {
  if (!domain) return null;

  if (domain.endsWith(".uk") || domain.endsWith(".co.uk")) {
    return {
      id: "region-uk",
      label: "UK Region",
      points: 20,
      maxPoints: 20,
      confidence: 1.0,
      evidence: `Domain ${domain} identifies as UK.`,
    };
  }

  if (domain.endsWith(".us")) {
    return {
      id: "region-us",
      label: "US Region",
      points: 20,
      maxPoints: 20,
      confidence: 1.0,
      evidence: `Domain ${domain} identifies as US.`,
    };
  }

  return {
    id: "region-global",
    label: "Global/US Region",
    points: 15,
    maxPoints: 20,
    confidence: 0.8,
    evidence: `Standard domain ${domain} assumed Global/US.`,
  };
}
