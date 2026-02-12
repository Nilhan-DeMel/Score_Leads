import type { ScoringConfig } from "../types";

export const defaultScoringConfig: ScoringConfig = {
  preferredRegions: ["US", "UK", "CA", "AU"],
  intentKeywords: {
    high: ["pricing", "demo", "contact us", "quote", "trial"],
    medium: ["solutions", "product", "features", "enterprise"],
    low: ["blog", "about", "team", "careers"],
  },
  weights: {
    fit: 50,
    intent: 50,
  },
};
