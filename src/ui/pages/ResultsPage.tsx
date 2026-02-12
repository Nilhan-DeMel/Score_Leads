import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { PageTransition } from "../motion/PageTransition";
import { GlassPanel } from "../components/GlassPanel";
import { staggerContainer, staggerItem } from "../motion/presets";
import { EmptyStateIcon, SparkleIcon } from "../icons/NavIcons";

export function ResultsPage() {
  // Placeholder: no results yet
  const hasResults = false;

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
            /* Placeholder result cards for future */
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <GlassPanel key={i} delay={i * 0.1}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div
                        className="text-sm font-semibold"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        Company {i}
                      </div>
                      <div
                        className="text-xs mt-1"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        company{i}.com
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className="text-lg font-bold"
                        style={{ color: "var(--color-accent)" }}
                      >
                        {85 - i * 10}
                      </div>
                      <div
                        className="text-[0.625rem] uppercase tracking-wider"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        Score
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
