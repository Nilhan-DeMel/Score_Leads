import type { ScoreSignal } from "../types";

export function scoreGovEduPenalty(domain: string): ScoreSignal | null {
  if (!domain) return null;

  if (domain.endsWith(".gov") || domain.endsWith(".edu")) {
    return {
      id: "penalty-gov-edu",
      label: "Non-Commercial Domain",
      points: -30,
      maxPoints: 0,
      confidence: 1.0,
      evidence: `Domain ${domain} is government or educational (low commercial fit).`,
    };
  }

  return null;
}
