"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const easeOut = [0.16, 1, 0.3, 1] as const;

interface PageHeaderProps {
 eyebrow?: string;
 title: React.ReactNode;
 description?: React.ReactNode;
 children?: React.ReactNode;
}

/**
 * Compact interior-page header. Tighter than the homepage hero - used on
 * About / Pricing / Contact to keep the rhythm consistent site-wide.
 */
export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
 return (
 <section className="relative overflow-hidden pt-12 sm:pt-16">
 <Container size="narrow">
 <motion.div
 initial={{ opacity: 0, y: 16 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, ease: easeOut }}
 className="text-center"
 >
 {eyebrow && (
 <span className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-primary shadow-sm dark:border-white/10 dark:bg-white/5">
 <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
 {eyebrow}
 </span>
 )}
 <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-surface-heading sm:text-5xl dark:text-white">
 {title}
 </h1>
 {description && (
 <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-surface-text dark:text-gray-300">
 {description}
 </p>
 )}
 {children && <div className="mt-7">{children}</div>}
 </motion.div>
 </Container>
 </section>
 );
}
