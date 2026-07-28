"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

const easeOut = [0.16, 1, 0.3, 1] as const;

/**
 * Reusable section heading with an eyebrow tag, gradient-accented title and
 * supporting description. Animates in once when scrolled into view.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: easeOut }}
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-primary shadow-sm dark:border-white/10 dark:bg-white/5">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-surface-heading sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-surface-text dark:text-gray-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}
