"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const easeOut = [0.16, 1, 0.3, 1] as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

interface RevealProps {
  children: ReactNode;
  /** Stagger index - pass an increasing number to sequence siblings. */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "span";
}

/**
 * Lightweight scroll-reveal wrapper. Fades + lifts its content into view once.
 * Use `delay` to create a subtle stagger across grid items.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: easeOut, delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
