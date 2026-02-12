import { describe, it, expect } from "vitest";
import { scoreLead } from "../scoreLead";
import { defaultScoringConfig } from "../config/defaultScoringConfig";
import { defaultProfile } from "../../profile/defaultProfile";
import type { LeadCompanyProfile } from "../../leads/types";
import type { Profile } from "../../profile/types";

describe("Scoring Engine with Profile", () => {
  const mockLead: LeadCompanyProfile = {
    id: "1",
    name: "Acme Corp",
    domain: "acme.co.uk",
    website: "https://acme.co.uk",
    source_text: "Acme Corp uses React and handles scaling issues.",
    confidence: 1.0,
    method: "URL",
  };

  const customProfile: Profile = {
    ...defaultProfile,
    targetTech: ["React"],
    intentKeywords: ["scaling issues"],
    excludeKeywords: ["internship"],
  };

  it("should award points for profile tech and intent matches", () => {
    const result = scoreLead(
      mockLead,
      defaultScoringConfig,
      customProfile,
      mockLead.source_text,
    );

    expect(result.signals.some((s) => s.id === "profile-tech-React")).toBe(
      true,
    );
    expect(
      result.signals.some((s) => s.id === "profile-intent-scaling issues"),
    ).toBe(true);
    expect(result.total).toBeGreaterThan(50);
  });

  it("should apply penalty for exclude keywords in profile", () => {
    const badLead = {
      ...mockLead,
      source_text: "This is an internship position.",
    };
    const result = scoreLead(
      badLead,
      defaultScoringConfig,
      customProfile,
      badLead.source_text,
    );

    expect(
      result.signals.some((s) => s.id === "profile-exclude-internship"),
    ).toBe(true);
    expect(result.total).toBe(0); // Large penalty should bottom it out
  });

  it("should match target regions from profile TLD", () => {
    const usProfile: Profile = { ...customProfile, targetRegions: ["US"] };
    const usLead = { ...mockLead, domain: "acme.us" };
    const result = scoreLead(usLead, defaultScoringConfig, usProfile, "");

    expect(result.signals.some((s) => s.id === "profile-region-match")).toBe(
      true,
    );
    expect(result.fit).toBeGreaterThan(10);
  });

  it("should be deterministic with profile", () => {
    const run1 = scoreLead(
      mockLead,
      defaultScoringConfig,
      customProfile,
      "React",
    );
    const run2 = scoreLead(
      mockLead,
      defaultScoringConfig,
      customProfile,
      "React",
    );
    expect(run1).toEqual(run2);
  });
});
