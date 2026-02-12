export interface ServiceProfileV1 {
  schemaVersion: "1.0.0";
  companyName: string;
  website: string;
  offerings: string[];
  targetRegions: string[];
  targetIndustries: string[];
  targetCompanySizes: string[];
  targetTech: string[];
  intentKeywords: string[];
  excludeKeywords: string[];
  notes?: string;
}

export type Profile = ServiceProfileV1;
