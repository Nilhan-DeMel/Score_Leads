import type { Variants } from "motion/react";

/**
 * Stagger children entrance animation.
 * Use on a container with motion.div + variants={staggerContainer}
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/**
 * Individual item entrance within a stagger container.
 * Use on each child with motion.div + variants={staggerItem}
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * Scale-in animation for floating elements, badges, etc.
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * Subtle pulse glow animation for accented elements.
 */
export const pulseGlow: Variants = {
  rest: {
    boxShadow: "0 0 20px rgba(139, 92, 246, 0.15)",
  },
  hover: {
    boxShadow: "0 0 40px rgba(139, 92, 246, 0.30)",
    transition: { duration: 0.3 },
  },
};
