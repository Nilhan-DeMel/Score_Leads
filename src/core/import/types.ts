export interface ImportResult {
  rowsParsed: number;
  leads: ImportedLead[];
  warnings: string[];
}

export interface ImportedLead {
  text: string;
  name?: string;
  domain?: string;
  email?: string;
}
