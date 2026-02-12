import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { PageTransition } from "../motion/PageTransition";
import { GlassPanel } from "../components/GlassPanel";
import { staggerContainer, staggerItem } from "../motion/presets";
import { SparkleIcon, FileIcon, ListIcon } from "../icons/NavIcons";
import { logger } from "../../core/logging/logger";
import { parseLeadText } from "../../core/leads/parseLeadText";
import { scoreLead } from "../../core/scoring/scoreLead";
import { defaultScoringConfig } from "../../core/scoring/config/defaultScoringConfig";
import { loadProfile } from "../../core/profile/storage/loadProfile";
import { saveRun } from "../../core/runs/storage/saveRun";
import { parseCsvToLeads } from "../../core/import/parseCsvToLeads";
import { parseListToLeads } from "../../core/import/parseListToLeads";
import type { Run } from "../../core/runs/types";

type InputMode = "text" | "csv_paste" | "csv_upload" | "list";

const modes: { key: InputMode; label: string; desc: string; icon: any }[] = [
  { key: "text", label: "Text", desc: "Messy paste", icon: SparkleIcon },
  { key: "csv_paste", label: "CSV", desc: "Paste CSV", icon: FileIcon },
  { key: "csv_upload", label: "Upload", desc: ".csv file", icon: FileIcon },
  { key: "list", label: "List", desc: "Simple list", icon: ListIcon },
];

export function LeadInputPage() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [mode, setMode] = useState<InputMode>("text");
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [importResults, setImportResults] = useState<{
    leads: any[];
    warnings: string[];
  } | null>(null);

  const handleScore = async () => {
    if (!input.trim() && mode !== "csv_upload") return;
    logger.info("LeadInputPage", "score_start", { mode });
    setIsProcessing(true);

    try {
      let leadsToScore: any[] = [];
      let inputKind: Run["inputMeta"]["kind"] = "text";

      if (mode === "text") {
        const parsed = parseLeadText(input);
        leadsToScore = parsed.leads;
        inputKind = "text";
      } else if (mode === "csv_paste" || mode === "csv_upload") {
        const parsed = parseCsvToLeads(input);
        leadsToScore = parsed.leads.map((l) => ({
          ...l,
          source_text: l.text,
          confidence: 1.0,
          id: crypto.randomUUID(),
          method: "BATCH" as any,
        }));
        inputKind = "csv";
      } else if (mode === "list") {
        const parsed = parseListToLeads(input);
        leadsToScore = parsed.leads.map((l) => ({
          ...l,
          source_text: l.text,
          confidence: 1.0,
          id: crypto.randomUUID(),
          method: "BARE" as any,
        }));
        inputKind = "list";
      }

      if (leadsToScore.length === 0) {
        throw new Error("No leads found in input.");
      }

      const activeProfile = loadProfile();
      const scoredLeads = leadsToScore.map((lead) => ({
        lead,
        score: scoreLead(
          lead,
          defaultScoringConfig,
          activeProfile,
          lead.source_text || lead.text,
        ),
      }));

      // Auto-save Run
      const run: Run = {
        schemaVersion: "1.0.0",
        runId: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        name: `Run ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
        profileSnapshot: activeProfile,
        inputMeta: {
          kind: inputKind,
          leadCount: scoredLeads.length,
          rawSize: input.length,
          warningsCount: 0,
        },
        leads: scoredLeads,
      };

      await saveRun(run);

      // Navigate
      navigate("/results", {
        state: {
          leads: scoredLeads.map((s) => ({ ...s.lead, score: s.score })),
          runId: run.runId,
        },
      });
    } catch (err) {
      logger.error("LeadInputPage", "score_failed", { err });
      alert(err instanceof Error ? err.message : "Scoring failed");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      setInput(text);
      const parsed = parseCsvToLeads(text);
      setImportResults({ leads: parsed.leads, warnings: parsed.warnings });
    };
    reader.readAsText(file);
  };

  return (
    <PageTransition>
      <div className="page pb-24">
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={staggerItem} className="pt-4 pb-6">
            <h1 className="section-title mb-2">Lead Multi-Parser</h1>
            <p className="section-subtitle">
              Import CSVs, lists, or messy text to score leads in bulk.
            </p>
          </motion.div>

          {/* Mode Switcher */}
          <motion.div variants={staggerItem} className="mb-6">
            <div className="grid grid-cols-4 gap-2 glass p-1 rounded-xl">
              {modes.map((m) => (
                <button
                  key={m.key}
                  onClick={() => {
                    setMode(m.key);
                    setImportResults(null);
                    setInput("");
                  }}
                  className={`flex flex-col items-center gap-1.5 py-3 rounded-lg transition-all ${
                    mode === m.key
                      ? "bg-[var(--color-accent-subtle)] text-[var(--color-accent)]"
                      : "text-[var(--color-text-ghost)] hover:text-white"
                  }`}
                >
                  <m.icon size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-tighter">
                    {m.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div variants={staggerItem}>
            <GlassPanel hover={false} className="mb-6">
              {mode === "csv_upload" ? (
                <div
                  className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center cursor-pointer hover:border-[var(--color-accent)] transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    type="file"
                    accept=".csv"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                  <FileIcon size={32} className="mx-auto mb-2 opacity-50" />
                  <p className="text-sm font-medium mb-1">
                    {input ? "File ready" : "Click to upload CSV"}
                  </p>
                  <p className="text-xs text-[var(--color-text-ghost)]">
                    Max 10MB recommended
                  </p>
                </div>
              ) : (
                <textarea
                  className="input textarea !text-sm"
                  rows={8}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    mode === "text"
                      ? "Paste messy text..."
                      : mode === "csv_paste"
                        ? "Paste raw CSV data..."
                        : "Paste simple list (one per line)..."
                  }
                />
              )}

              {importResults && importResults.leads.length > 0 && (
                <div className="mt-4 pt-4 border-t border-white/5">
                  <p className="text-[10px] font-bold text-[var(--color-success)] uppercase mb-2">
                    ✓ Found {importResults.leads.length} leads in CSV
                  </p>
                  <div className="flex flex-wrap gap-1 max-h-20 overflow-y-auto pr-2">
                    {importResults.leads.slice(0, 10).map((l, i) => (
                      <span
                        key={i}
                        className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] text-[var(--color-text-secondary)]"
                      >
                        {l.text}
                      </span>
                    ))}
                    {importResults.leads.length > 10 && (
                      <span className="text-[9px] text-[var(--color-text-ghost)]">
                        +{importResults.leads.length - 10} more
                      </span>
                    )}
                  </div>
                </div>
              )}
            </GlassPanel>
          </motion.div>

          <motion.div variants={staggerItem}>
            <button
              className="btn-primary w-full py-4 rounded-xl flex items-center justify-center gap-2 group"
              onClick={handleScore}
              disabled={
                (!input.trim() && mode !== "csv_upload") || isProcessing
              }
            >
              <AnimatePresence mode="wait">
                {isProcessing ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full"
                    />
                    <span>Analyzing...</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="ready"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <SparkleIcon
                      size={20}
                      className="group-hover:scale-110 transition-transform"
                    />
                    <span className="font-bold tracking-tight">
                      PARSE & SCORE COHORT
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </motion.section>
      </div>
    </PageTransition>
  );
}
