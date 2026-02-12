import type { LeadCompanyProfile } from "../leads/types";
import type { ScoreBreakdown, ScoringConfig, ScoreSignal } from "./types";
import { scoreRegionFromDomain } from "./rules/scoreRegionFromDomain";
import { scoreKeywordIntentFromSourceText } from "./rules/scoreKeywordIntentFromSourceText";
import { scoreWebsitePresence } from "./rules/scoreWebsitePresence";
import { scoreEmailDomainPresence } from "./rules/scoreEmailDomainPresence";
import { scoreGovEduPenalty } from "./rules/scoreGovEduPenalty";
import { labelScore } from "./labelScore";

import type { Profile } from "../profile/types";

/**
 * Orchestrates scoring for a single lead, using both global config and service profile.
 */
export function scoreLead(
  lead: LeadCompanyProfile,
  config: ScoringConfig,
  profile: Profile,
  sourceText: string = "",
): ScoreBreakdown {
  const signals: ScoreSignal[] = [];
  const warnings: string[] = [];

  // 1. Core Rules (Global/Deterministic)
  const regionSignal = scoreRegionFromDomain(lead.domain);
  if (regionSignal) signals.push(regionSignal);

  const websiteSignal = scoreWebsitePresence(lead.website);
  if (websiteSignal) signals.push(websiteSignal);

  const domainSignal = scoreEmailDomainPresence(lead.domain);
  if (domainSignal) signals.push(domainSignal);

  const intentSignals = scoreKeywordIntentFromSourceText(sourceText, config);
  signals.push(...intentSignals);

  const penaltySignal = scoreGovEduPenalty(lead.domain);
  if (penaltySignal) signals.push(penaltySignal);

  // 2. Profile-Driven Signals (CORE-003)
  const normalizedText = sourceText.toLowerCase();

  // Region Match (Target Regions)
  const targetRegions = profile.targetRegions.map((r) => r.toLowerCase());
  const leadTld = lead.domain.split(".").pop()?.toLowerCase();
  if (leadTld && targetRegions.includes(leadTld)) {
    signals.push({
      id: "profile-region-match",
      label: "Target Region Match",
      points: 15,
      maxPoints: 15,
      confidence: 0.9,
      evidence: `Matches TLD: .${leadTld}`,
    });
  }

  // Tech Stack Match
  profile.targetTech.forEach((tech) => {
    if (normalizedText.includes(tech.toLowerCase())) {
      signals.push({
        id: `profile-tech-${tech}`,
        label: `Tech Match: ${tech}`,
        points: 10,
        maxPoints: 10,
        confidence: 0.8,
        evidence: `Mentioned: ${tech}`,
      });
    }
  });

  // Industry Match
  profile.targetIndustries.forEach((ind) => {
    if (normalizedText.includes(ind.toLowerCase())) {
      signals.push({
        id: `profile-industry-${ind}`,
        label: `Industry: ${ind}`,
        points: 10,
        maxPoints: 10,
        confidence: 0.7,
        evidence: `Contextual keywords found for ${ind}`,
      });
    }
  });

  // ICP Keyword Match
  profile.intentKeywords.forEach((kw) => {
    if (normalizedText.includes(kw.toLowerCase())) {
      signals.push({
        id: `profile-intent-${kw}`,
        label: `ICP Keyword: ${kw}`,
        points: 5,
        maxPoints: 5,
        confidence: 0.85,
        evidence: `Service profile hit: ${kw}`,
      });
    }
  });

  // Exclude/Penalty Match
  profile.excludeKeywords.forEach((kw) => {
    if (normalizedText.includes(kw.toLowerCase())) {
      signals.push({
        id: `profile-exclude-${kw}`,
        label: `Exclude Filter: ${kw}`,
        points: -100,
        maxPoints: 0,
        confidence: 1.0,
        evidence: `Lead excluded by filter: ${kw}`,
      });
    }
  });

  // 3. Aggregate
  let fit = 0;
  let intent = 0;
  let hasHardExclusion = false;

  signals.forEach((s) => {
    if (s.points <= -100) hasHardExclusion = true;

    if (
      s.id.startsWith("region") ||
      s.id.startsWith("presence") ||
      s.id.startsWith("penalty") ||
      s.id.startsWith("profile-region") ||
      s.id.startsWith("profile-exclude")
    ) {
      fit += s.points;
    } else {
      intent += s.points;
    }
  });

  const totalRaw = fit + intent;
  const total = hasHardExclusion ? -100 : Math.min(Math.max(totalRaw, 0), 100);

  return {
    total,
    fit,
    intent,
    signals,
    warnings,
    label: labelScore(total),
  };
}
