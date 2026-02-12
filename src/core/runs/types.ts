import type { LeadCompanyProfile } from "../leads/types";
import type { ScoreBreakdown } from "../scoring/types";
import type { Profile } from "../profile/types";

/**
 * Versioned schema for a scoring session "Run".
 */
export interface RunV1 {
  schemaVersion: "1.0.0";
  runId: string; // uuid
  createdAt: string; // ISO date
  name: string; // Optional user-assigned name
  profileSnapshot: Profile; // Copy of profile used at the time
  inputMeta: {
    kind: "text" | "csv" | "list";
    leadCount: number;
    rawSize: number; // string length or row count
    warningsCount: number;
  };
  leads: ScoredLeadRunItem[];
}

export interface ScoredLeadRunItem {
  lead: LeadCompanyProfile;
  score: ScoreBreakdown;
}

export type Run = RunV1;
