import type { Profile } from "./types";

export const defaultProfile: Profile = {
  schemaVersion: "1.0.0",
  companyName: "Acme Services",
  website: "https://acme.example.com",
  offerings: ["Custom Software Development", "Cloud Migration", "AI Solutions"],
  targetRegions: ["US", "UK", "EU"],
  targetIndustries: ["Finance", "Healthcare", "E-commerce"],
  targetCompanySizes: ["Mid-Market", "Enterprise"],
  targetTech: ["React", "TypeScript", "Node.js", "AWS", "Azure"],
  intentKeywords: [
    "scaling issues",
    "manual process",
    "legacy migration",
    "digital transformation",
  ],
  excludeKeywords: ["internship", "pro bono", "charity"],
  notes: "Primary ICP for general service delivery.",
};
