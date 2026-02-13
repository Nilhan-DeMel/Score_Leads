import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Sparkles, ChevronRight } from "lucide-react";
import { logger } from "../../../../core/logging/logger";
import { staggerItem } from "../../../motion/presets";

export function HomeHero() {
  return (
    <motion.section
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.1 },
        },
      }}
      initial="hidden"
      animate="visible"
      className="pt-12 pb-12"
    >
      <motion.div variants={staggerItem} className="mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
          <Sparkles size={12} />
          AI-Powered
        </span>
      </motion.div>

      <motion.h1
        variants={staggerItem}
        className="text-5xl font-black tracking-tighter leading-[0.95] mb-6"
      >
        Score your
        <br />
        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          sales leads
        </span>
        <br />
        instantly.
      </motion.h1>

      <motion.p
        variants={staggerItem}
        className="text-white/60 text-lg leading-snug mb-10 max-w-[90%]"
      >
        Paste company names, emails, or messy text — and get fit scores backed
        by evidence in seconds.
      </motion.p>

      <motion.div variants={staggerItem}>
        <Link
          to="/score"
          className="btn-primary group"
          onClick={() =>
            logger.info("HomePage", "cta_click", { target: "/score" })
          }
        >
          <Sparkles size={20} className="group-hover:animate-pulse" />
          <span>Start Scoring</span>
          <ChevronRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </motion.div>
    </motion.section>
  );
}
