import type { ReactNode } from "react";
import { motion } from "motion/react";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

/** Wraps a page with enter/exit animations for route transitions. */
export function PageTransition({
  children,
  className = "",
}: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
      transition={{
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
