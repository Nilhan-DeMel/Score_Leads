import type { LeadCompanyProfile } from "../leads/types";

export interface ScoreSignal {
  id: string;
  label: string;
  points: number;
  maxPoints: number;
  confidence: number;
  evidence?: string;
  explanation?: string;
}

export interface ScoreBreakdown {
  total: number;
  fit: number;
  intent: number;
  signals: ScoreSignal[];
  warnings: string[];
  label?: string; // e.g. "Hot", "Warm", "Cold"
}

export interface ScoredLead extends LeadCompanyProfile {
  score: ScoreBreakdown;
}

export interface ScoringConfig {
  preferredRegions: string[];
  intentKeywords: {
    high: string[];
    medium: string[];
    low: string[];
  };
  weights: {
    fit: number;
    intent: number;
  };
}
