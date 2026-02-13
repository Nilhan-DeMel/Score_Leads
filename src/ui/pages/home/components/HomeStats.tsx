import { motion } from "motion/react";

interface StatTileProps {
  label: string;
  value: string;
  accent: string;
  delay: number;
}

function StatTile({ label, value, accent, delay }: StatTileProps) {
  const isPlaceholder = value === "—";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      className="glass rounded-2xl p-4 flex flex-col items-center justify-center text-center border-white/5"
    >
      <div
        className={`text-2xl font-black mb-1 ${isPlaceholder ? "opacity-30" : ""}`}
        style={{ color: accent }}
      >
        {value}
      </div>
      <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/40">
        {label}
      </div>
    </motion.div>
  );
}

export function HomeStats() {
  const stats = [
    {
      label: "Leads Scored",
      value: "—",
      accent: "#3b82f6", // Blue
    },
    {
      label: "Avg. Score",
      value: "—",
      accent: "#22d3ee", // Cyan
    },
    {
      label: "Fit Rate",
      value: "—",
      accent: "#fbbf24", // Amber
    },
  ];

  return (
    <section className="mt-12 grid grid-cols-3 gap-3">
      {stats.map((stat, idx) => (
        <StatTile key={stat.label} {...stat} delay={0.8 + idx * 0.1} />
      ))}
    </section>
  );
}
