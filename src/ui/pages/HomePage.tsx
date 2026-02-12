import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { PageTransition } from "../motion/PageTransition";
import { GlassPanel } from "../components/GlassPanel";
import { staggerContainer, staggerItem } from "../motion/presets";
import { SparkleIcon, ChevronRightIcon } from "../icons/NavIcons";
import { logger } from "../../core/logging/logger";

export function HomePage() {
  return (
    <PageTransition>
      <div className="page">
        {/* Hero */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="pt-8 pb-10"
        >
          <motion.div variants={staggerItem} className="mb-2">
            <span className="chip chip-accent">
              <SparkleIcon size={12} />
              AI-Powered
            </span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="text-4xl font-bold tracking-tight leading-[1.1] mb-4"
            style={{ color: "var(--color-text-primary)" }}
          >
            Score your
            <br />
            <span className="bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-hover)] to-[var(--color-cyan)] bg-clip-text text-transparent">
              sales leads
            </span>
            <br />
            instantly.
          </motion.h1>

          <motion.p variants={staggerItem} className="section-subtitle mb-8">
            Paste company names, emails, or messy text — and get fit scores
            backed by evidence in seconds.
          </motion.p>

          <motion.div variants={staggerItem}>
            <Link
              to="/input"
              className="btn-primary"
              onClick={() =>
                logger.info("HomePage", "cta_click", { target: "/input" })
              }
            >
              <SparkleIcon size={18} />
              Start Scoring
              <ChevronRightIcon size={16} />
            </Link>
          </motion.div>
        </motion.section>

        {/* Feature Cards */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <GlassPanel delay={0.2}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-accent-subtle)] flex items-center justify-center shrink-0">
                <span className="text-lg">📝</span>
              </div>
              <div>
                <h3
                  className="text-sm font-semibold mb-1"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Paste Anything
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Company names, email addresses, domains, or messy unstructured
                  text — we extract what matters.
                </p>
              </div>
            </div>
          </GlassPanel>

          <GlassPanel delay={0.3}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-cyan-subtle)] flex items-center justify-center shrink-0">
                <span className="text-lg">⚡</span>
              </div>
              <div>
                <h3
                  className="text-sm font-semibold mb-1"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Instant Scoring
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Each lead is scored by fit signals, risk signals, and purchase
                  likelihood — with clear rationale.
                </p>
              </div>
            </div>
          </GlassPanel>

          <GlassPanel delay={0.4}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-amber-subtle)] flex items-center justify-center shrink-0">
                <span className="text-lg">📊</span>
              </div>
              <div>
                <h3
                  className="text-sm font-semibold mb-1"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Evidence-Backed
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Every score comes with extracted evidence so you know exactly
                  why a lead fits — or doesn't.
                </p>
              </div>
            </div>
          </GlassPanel>
        </motion.section>

        {/* Quick Stats (placeholder) */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10"
        >
          <div className="grid grid-cols-3 gap-3">
            {[
              {
                label: "Leads Scored",
                value: "—",
                accent: "var(--color-accent)",
              },
              { label: "Avg. Score", value: "—", accent: "var(--color-cyan)" },
              { label: "Fit Rate", value: "—", accent: "var(--color-amber)" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-[var(--radius-md)] p-4 text-center"
              >
                <div
                  className="text-xl font-bold mb-1"
                  style={{ color: stat.accent }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-[0.625rem] font-medium uppercase tracking-wider"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
}
