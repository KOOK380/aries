"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const variants: Variants = {
  animate: (i: number) => ({
    y: [0, -14, 0],
    x: [0, i % 2 === 0 ? 8 : -8, 0],
    transition: {
      duration: 5 + (i % 3),
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.4,
    },
  }),
};

interface FloatingProps {
  children: ReactNode;
  /** Index used to stagger / vary the motion of sibling Floaters. */
  index?: number;
  className?: string;
}

/**
 * Wraps content in a gentle, infinite 3D bobbing motion. Great for decorative
 * chips, badges and floating cards that should feel alive. Pass an `index` to
 * desync multiple Floaters.
 */
export function Floating({ children, index = 0, className }: FloatingProps) {
  return (
    <motion.div
      custom={index}
      variants={variants}
      initial="animate"
      animate="animate"
      className={className}
    >
      {children}
    </motion.div>
  );
}
