"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "./services";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  /** Optional callback fired when the card is activated (used by the mobile menu). */
  onNavigate?: () => void;
  className?: string;
}

/**
 * A single service tile rendered inside the mega menu. The whole card is a
 * focusable link for full keyboard access, and the visual affordances
 * (lift, shadow, icon scale, title color shift, arrow nudge) are driven by
 * a single `whileHover` Framer Motion variant so they stay perfectly in sync.
 */
export function ServiceCard({ service, onNavigate, className }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      whileTap="tap"
      className={cn("group/card", className)}
    >
      <Link
        href={service.href}
        onClick={onNavigate}
        aria-label={`${service.title}: ${service.description}`}
        className="relative flex items-start gap-2.5 rounded-xl border border-surface-border bg-white p-2.5 transition-colors duration-200 hover:border-brand-primary/30 hover:bg-brand-primary/[0.03] focus-visible:outline-none dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-secondary/40 dark:hover:bg-white/[0.06]"
      >
        {/* Rounded icon container */}
        <motion.span
          variants={iconVariants}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-white shadow-sm"
        >
          <Icon className="h-4 w-4" strokeWidth={2.25} />
        </motion.span>

        {/* Text block */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <motion.h3
              variants={titleVariants}
              className="truncate text-[13px] font-semibold text-surface-heading dark:text-white"
            >
              {service.title}
            </motion.h3>
          </div>
          <p className="mt-0.5 truncate text-[11px] font-medium leading-snug text-surface-text dark:text-gray-400">
            {service.description}
          </p>
        </div>

        {/* Arrow that nudges on hover */}
        <motion.span
          variants={arrowVariants}
          className="ml-1 inline-flex h-6 w-6 shrink-0 items-center justify-center text-surface-text/60 transition-colors group-hover/card:text-brand-primary dark:text-gray-500"
          aria-hidden
        >
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
        </motion.span>
      </Link>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Framer Motion variants - colocated with the component they describe.       */
/* -------------------------------------------------------------------------- */

const cardVariants = {
  rest: { y: 0 },
  hover: { y: -4, transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] } },
  tap: { scale: 0.985, transition: { duration: 0.1 } },
} as const;

const iconVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.12,
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

const titleVariants = {
  rest: { color: "#111827" },
  hover: { color: "#7C3AED" },
} as const;

const arrowVariants = {
  rest: { x: 0, y: 0, opacity: 0.6 },
  hover: {
    x: 3,
    y: -3,
    opacity: 1,
    transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
  },
} as const;
