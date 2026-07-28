"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { stats } from "./content";

const easeOut = [0.16, 1, 0.3, 1] as const;

/**
 * Compact stat band that sits flush between sections. Counts animate in on
 * scroll. Each tile keeps a tight aspect to preserve the "less spacing" feel.
 */
export function Stats() {
  return (
    <section className="py-4">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-surface-border bg-gradient-to-br from-white to-surface-border/40 p-1 shadow-sm dark:border-white/10 dark:from-white/[0.04] dark:to-transparent">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.4rem] bg-surface-border sm:grid-cols-4 dark:bg-white/10">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: easeOut, delay: i * 0.06 }}
                  className="bg-white p-5 text-center sm:p-6 dark:bg-surface-heading"
                >
                  <span className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <Icon className="h-5 w-5" strokeWidth={2.25} />
                  </span>
                  <p className="mt-3 text-3xl font-extrabold tracking-tight text-surface-heading sm:text-4xl dark:text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-surface-text dark:text-gray-400">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
