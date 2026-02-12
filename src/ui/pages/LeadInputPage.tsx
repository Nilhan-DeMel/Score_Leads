import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { PageTransition } from "../motion/PageTransition";
import { GlassPanel } from "../components/GlassPanel";
import { staggerContainer, staggerItem } from "../motion/presets";
import { SparkleIcon } from "../icons/NavIcons";
import { logger } from "../../core/logging/logger";
import { parseLeadText } from "../../core/leads/parseLeadText";
import { scoreLead } from "../../core/scoring/scoreLead";
import { defaultScoringConfig } from "../../core/scoring/config/defaultScoringConfig";
import { loadProfile } from "../../core/profile/storage/loadProfile";

type InputMode = "single" | "batch" | "text";

const modes: { key: InputMode; label: string; desc: string }[] = [
  { key: "single", label: "Single", desc: "One company" },
  { key: "batch", label: "Batch", desc: "List / table" },
  { key: "text", label: "Text", desc: "Messy paste" },
];

export function LeadInputPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<InputMode>("text");
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleScore = () => {
    if (!input.trim()) return;
    logger.info("LeadInputPage", "score_click", {
      mode,
      inputLength: input.length,
    });
    setIsProcessing(true);

    // Simulate short processing delay
    setTimeout(() => {
      const { leads, stats } = parseLeadText(input);

      // Score each lead
      const activeProfile = loadProfile();
      const scoredLeads = leads.map((lead) => ({
        ...lead,
        score: scoreLead(
          lead,
          defaultScoringConfig,
          activeProfile,
          lead.source_text,
        ),
      }));

      setIsProcessing(false);
      logger.info("LeadInputPage", "score_complete", {
        mode,
        leadsFound: stats.total_found,
        deduped: stats.deduped_count,
        avgScore:
          scoredLeads.length > 0
            ? scoredLeads.reduce((acc, l) => acc + l.score.total, 0) /
              scoredLeads.length
            : 0,
      });

      // Navigate to results with the scored leads
      navigate("/results", {
        state: { leads: scoredLeads, stats },
      });
    }, 800);
  };

  return (
    <PageTransition>
      <div className="page">
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="pt-4 pb-6">
            <h1
              className="section-title mb-2"
              style={{ color: "var(--color-text-primary)" }}
            >
              Score Leads
            </h1>
            <p className="section-subtitle">
              Paste leads below and we'll extract, normalize, and score them.
            </p>
          </motion.div>

          {/* Mode Switcher */}
          <motion.div variants={staggerItem} className="mb-5">
            <div className="glass rounded-[var(--radius-md)] p-1 flex gap-1">
              {modes.map((m) => (
                <button
                  key={m.key}
                  onClick={() => {
                    setMode(m.key);
                    logger.info("LeadInputPage", "mode_switch", {
                      mode: m.key,
                    });
                  }}
                  className={`flex-1 py-2.5 px-3 rounded-[var(--radius-sm)] text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${
                    mode === m.key
                      ? "bg-[var(--color-accent-subtle)] text-[var(--color-accent)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                  }`}
                  style={{ border: "none", cursor: "pointer" }}
                >
                  <span className="block">{m.label}</span>
                  <span className="block text-[0.625rem] font-normal normal-case tracking-normal mt-0.5 opacity-60">
                    {m.desc}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Input Area */}
          <motion.div variants={staggerItem}>
            <GlassPanel hover={false} className="mb-5">
              {mode === "single" ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    className="input"
                    placeholder="Company name (e.g. Acme Corp)"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <input
                    type="text"
                    className="input"
                    placeholder="Website or domain (optional)"
                  />
                </div>
              ) : (
                <textarea
                  className="input textarea"
                  placeholder={
                    mode === "batch"
                      ? "Paste a list of companies (one per line):\n\nAcme Corp\nGlobex Inc\nUmbrella LLC\nsoylent.com\njohn@wayneent.com"
                      : "Paste any text containing leads:\n\nHey, I met Sarah from TechnoSoft at the conference.\nAlso check out megacorp.io and innovate@futurelab.com.\nWayne Enterprises might be a good fit too."
                  }
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  rows={8}
                />
              )}
            </GlassPanel>
          </motion.div>

          {/* Score Button */}
          <motion.div variants={staggerItem}>
            <button
              className="btn-primary w-full"
              onClick={handleScore}
              disabled={!input.trim() || isProcessing}
              style={{
                opacity: !input.trim() ? 0.5 : 1,
                cursor: !input.trim() ? "not-allowed" : "pointer",
              }}
            >
              {isProcessing ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      ease: "linear",
                    }}
                    className="inline-block"
                  >
                    ⟳
                  </motion.span>
                  Processing…
                </>
              ) : (
                <>
                  <SparkleIcon size={18} />
                  Parse & Score
                </>
              )}
            </button>
          </motion.div>

          {/* Info */}
          <motion.div variants={staggerItem} className="mt-6 text-center">
            <p className="text-xs" style={{ color: "var(--color-text-ghost)" }}>
              Your data stays local. Scoring engine coming in CORE-006.
            </p>
          </motion.div>
        </motion.section>
      </div>
    </PageTransition>
  );
}
