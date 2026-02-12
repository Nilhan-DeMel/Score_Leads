import type { ReactNode } from "react";
import { motion } from "motion/react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export function GlassPanel({
  children,
  className = "",
  hover = true,
  delay = 0,
}: GlassPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`glass rounded-[var(--radius-lg)] p-5 ${hover ? "glass-hover" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}
