import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { PageTransition } from "../motion/PageTransition";
import { GlassPanel } from "../components/GlassPanel";
import { staggerContainer, staggerItem } from "../motion/presets";
import {
  GlobeIcon,
  EmptyStateIcon,
  DownloadIcon,
  ShareIcon,
} from "../icons/NavIcons";
import { exportToCsv, exportToJson } from "../../core/export";
import type { LeadCompanyProfile } from "../../core/leads/types";
import type { ScoreBreakdown, ScoreSignal } from "../../core/scoring/types";
import type { Run } from "../../core/runs/types";

interface ScoredLead extends LeadCompanyProfile {
  score: ScoreBreakdown;
}

interface ResultsPageProps {
  mockData?: {
    leads: ScoredLead[];
    run?: Run;
  };
}

export function ResultsPage({ mockData }: ResultsPageProps) {
  const location = useLocation();
  const navigate = useNavigate();

  // Use passed mock data (from Run Detail) or location state (from Input)
  const data = mockData || location.state || { leads: [] };
  const leads: ScoredLead[] = data.leads || [];
  const run: Run | undefined = data.run;

  const handleExportCsv = () => {
    const exportData = leads.map((l) => ({
      name: l.name,
      domain: l.domain,
      website: l.website,
      score: l.score.total,
      fit: l.score.fit,
      intent: l.score.intent,
      confidence: l.confidence,
      signals: l.score.signals
        .map((sig: ScoreSignal) => `${sig.label}(${sig.points})`)
        .join("; "),
    }));
    exportToCsv(exportData, `leads-export-${new Date().getTime()}.csv`);
  };

  const handleExportJson = () => {
    exportToJson(leads, `leads-export-${new Date().getTime()}.json`);
  };

  if (leads.length === 0) {
    return (
      <PageTransition>
        <div className="page flex flex-col items-center justify-center text-center p-6">
          <EmptyStateIcon size={80} className="mb-6 opacity-20" />
          <h2 className="text-xl font-bold mb-2">No Results Yet</h2>
          <p className="text-[var(--color-text-ghost)] mb-8 max-w-xs">
            Score some leads first to see the analytical breakdown here.
          </p>
          <button
            className="btn-primary px-8"
            onClick={() => navigate("/score")}
          >
            Go to Score
          </button>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="page pb-24">
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div
            variants={staggerItem}
            className="pt-4 pb-6 flex items-end justify-between"
          >
            <div>
              <h1 className="section-title mb-1">
                {run ? "Historical Run" : "Analysis Results"}
              </h1>
              <p className="section-subtitle">
                {leads.length} leads prioritized by fit and intent.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleExportCsv}
                className="p-2 rounded-lg glass hover:bg-white/10 text-[var(--color-text-secondary)] transition-all"
                title="Export CSV"
              >
                <DownloadIcon size={18} />
              </button>
              <button
                onClick={handleExportJson}
                className="p-2 rounded-lg glass hover:bg-white/10 text-[var(--color-text-secondary)] transition-all"
                title="Export JSON"
              >
                <ShareIcon size={18} />
              </button>
            </div>
          </motion.div>

          {/* Leads List */}
          <div className="space-y-4">
            {leads
              .sort((a, b) => b.score.total - a.score.total)
              .map((lead, idx) => (
                <motion.div key={lead.id || idx} variants={staggerItem}>
                  <GlassPanel className="relative overflow-hidden group">
                    {/* Score Badge */}
                    <div className="absolute top-0 right-0 p-4">
                      <div
                        className={`text-xl font-black ${
                          lead.score.total > 70
                            ? "text-[var(--color-success)]"
                            : lead.score.total > 40
                              ? "text-[var(--color-amber)]"
                              : "text-[var(--color-danger)]"
                        }`}
                      >
                        {Math.round(lead.score.total)}
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-[var(--color-accent)] transition-colors">
                        <GlobeIcon size={20} className="opacity-40" />
                      </div>

                      <div className="flex-1 pr-12">
                        <h3 className="font-bold text-base truncate">
                          {lead.name || lead.domain}
                        </h3>
                        <p className="text-[var(--color-text-ghost)] text-xs truncate mb-3">
                          {lead.website || lead.domain}
                        </p>

                        <div className="flex gap-4">
                          <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-widest text-[var(--color-text-ghost)] font-bold">
                              Fit
                            </span>
                            <span className="text-xs font-medium text-[var(--color-text-secondary)]">
                              {lead.score.fit}%
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-widest text-[var(--color-text-ghost)] font-bold">
                              Intent
                            </span>
                            <span className="text-xs font-medium text-[var(--color-text-secondary)]">
                              {lead.score.intent}%
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-widest text-[var(--color-text-ghost)] font-bold">
                              Conf.
                            </span>
                            <span className="text-xs font-medium text-[var(--color-text-secondary)]">
                              {Math.round(lead.confidence * 100)}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Signals Preview */}
                    <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                      {lead.score.signals
                        .slice(0, 3)
                        .map((s: ScoreSignal, i: number) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-[10px] text-[var(--color-text-secondary)]"
                          >
                            {s.label}
                          </span>
                        ))}
                      {lead.score.signals.length > 3 && (
                        <span className="text-[10px] text-[var(--color-text-ghost)] pl-1">
                          +{lead.score.signals.length - 3} more
                        </span>
                      )}
                    </div>
                  </GlassPanel>
                </motion.div>
              ))}
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
}
