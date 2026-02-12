import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { PageTransition } from "../motion/PageTransition";
import { GlassPanel } from "../components/GlassPanel";
import { staggerContainer, staggerItem } from "../motion/presets";
import { EmptyStateIcon, SparkleIcon, GlobeIcon } from "../icons/NavIcons";
import type { LeadCompanyProfile } from "../../core/leads/types";

export function ResultsPage() {
  const location = useLocation();
  const leads = (location.state?.leads || []) as LeadCompanyProfile[];
  const hasResults = leads.length > 0;

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
              Results
            </h1>
            <p className="section-subtitle">
              Scored leads appear here with fit scores, risk signals, and
              evidence.
            </p>
          </motion.div>

          {hasResults ? (
            /* Real lead cards */
            <div className="space-y-3">
              {leads.map((lead, i) => (
                <GlassPanel key={lead.id} delay={i * 0.05}>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-sm font-semibold truncate"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {lead.name}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <GlobeIcon size={12} className="opacity-50" />
                        <div
                          className="text-xs truncate"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          {lead.domain}
                        </div>
                      </div>
                      {lead.confidence < 0.8 && (
                        <div className="mt-2 text-[0.625rem] opacity-60 flex gap-1 items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-amber)]" />
                          <span>
                            Heuristic match ({Math.round(lead.confidence * 100)}
                            % confidence)
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="text-right shrink-0">
                      <div
                        className="text-lg font-bold"
                        style={{ color: "var(--color-text-ghost)" }}
                      >
                        —
                      </div>
                      <div
                        className="text-[0.625rem] uppercase tracking-wider"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        Pending
                      </div>
                    </div>
                  </div>
                </GlassPanel>
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
