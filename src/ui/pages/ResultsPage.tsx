import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { PageTransition } from "../motion/PageTransition";
import { GlassPanel } from "../components/GlassPanel";
import { staggerContainer, staggerItem } from "../motion/presets";
import {
  EmptyStateIcon,
  SparkleIcon,
  GlobeIcon,
  ChevronRightIcon,
} from "../icons/NavIcons";
import type { ScoredLead } from "../../core/scoring/types";

export function ResultsPage() {
  const location = useLocation();
  const leads = (location.state?.leads || []) as ScoredLead[];
  const hasResults = leads.length > 0;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <PageTransition>
      <div className="page pb-20">
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
              Results
            </h1>
            <p className="section-subtitle">
              Scored leads with fit signals and evidence.
            </p>
          </motion.div>

          {hasResults ? (
            /* Real lead cards */
            <div className="space-y-4">
              {leads.map((lead, i) => (
                <motion.div key={lead.id} variants={staggerItem}>
                  <GlassPanel delay={i * 0.05} className="p-0 overflow-hidden">
                    <div
                      className="p-4 cursor-pointer"
                      onClick={() => toggleExpand(lead.id)}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div
                            className="text-sm font-bold truncate"
                            style={{ color: "var(--color-text-primary)" }}
                          >
                            {lead.name}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <GlobeIcon size={12} className="opacity-40" />
                            <div
                              className="text-xs truncate opacity-60"
                              style={{ color: "var(--color-text-secondary)" }}
                            >
                              {lead.domain}
                            </div>
                          </div>
                        </div>

                        <div className="text-right shrink-0 flex items-center gap-3">
                          <div className="text-right">
                            <div
                              className="text-lg font-black leading-tight"
                              style={{
                                color:
                                  lead.score.total >= 80
                                    ? "var(--color-success)"
                                    : lead.score.total >= 50
                                      ? "var(--color-amber)"
                                      : "var(--color-danger)",
                              }}
                            >
                              {lead.score.total}
                            </div>
                            <div className="text-[0.625rem] font-bold uppercase tracking-wider opacity-60">
                              {lead.score.label}
                            </div>
                          </div>
                          <motion.div
                            animate={{
                              rotate: expandedId === lead.id ? 90 : 0,
                            }}
                            className="opacity-30"
                          >
                            <ChevronRightIcon size={16} />
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {expandedId === lead.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "circOut" }}
                          className="border-t border-white/[0.05] bg-white/[0.02]"
                        >
                          <div className="p-4 space-y-4">
                            <div>
                              <h4 className="text-[0.625rem] font-bold uppercase tracking-widest text-[var(--color-text-ghost)] mb-2">
                                Scoring Breakdown
                              </h4>
                              <div className="space-y-2">
                                {lead.score.signals.map((sig) => (
                                  <div key={sig.id} className="flex gap-3">
                                    <div
                                      className={`text-[0.625rem] font-bold w-12 shrink-0 ${sig.points >= 0 ? "text-[var(--color-success)]" : "text-[var(--color-danger)]"}`}
                                    >
                                      {sig.points >= 0
                                        ? `+${sig.points}`
                                        : sig.points}
                                    </div>
                                    <div className="flex-1">
                                      <div className="text-xs font-medium text-[var(--color-text-secondary)]">
                                        {sig.label}
                                      </div>
                                      {sig.explanation && (
                                        <div className="text-[0.625rem] text-[var(--color-text-muted)] mt-0.5 italic">
                                          {sig.explanation}
                                        </div>
                                      )}
                                      {sig.evidence && (
                                        <div className="text-[0.625rem] text-[var(--color-text-muted)] opacity-60 mt-0.5 line-clamp-1">
                                          "{sig.evidence}"
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </GlassPanel>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <motion.div variants={staggerItem}>
              <GlassPanel hover={false} className="text-center py-14">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <EmptyStateIcon size={80} className="mb-6 opacity-30" />
                  <h3
                    className="text-base font-semibold mb-2"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    No leads scored yet
                  </h3>
                  <p
                    className="text-xs mb-6 max-w-[28ch]"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Score some leads first, and they'll appear here with
                    detailed results.
                  </p>
                  <Link to="/input" className="btn-primary text-sm">
                    <SparkleIcon size={16} />
                    Score Leads
                  </Link>
                </motion.div>
              </GlassPanel>
            </motion.div>
          )}

          {/* Result Legend (always visible) */}
          <motion.div variants={staggerItem} className="mt-8">
            <h4
              className="text-xs font-semibold uppercase tracking-wider mb-3"
              style={{ color: "var(--color-text-ghost)" }}
            >
              Score Guide
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {[
                {
                  range: "80–100",
                  label: "Hot",
                  color: "var(--color-success)",
                },
                { range: "50–79", label: "Warm", color: "var(--color-amber)" },
                { range: "0–49", label: "Cold", color: "var(--color-danger)" },
              ].map((tier) => (
                <div
                  key={tier.label}
                  className="glass rounded-[var(--radius-sm)] p-3 text-center"
                >
                  <div
                    className="text-sm font-bold"
                    style={{ color: tier.color }}
                  >
                    {tier.range}
                  </div>
                  <div
                    className="text-[0.625rem] font-medium uppercase mt-1"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {tier.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>
      </div>
    </PageTransition>
  );
}
