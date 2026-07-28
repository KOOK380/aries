"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "./content";

const easeOut = [0.16, 1, 0.3, 1] as const;

/**
 * Four-step engagement process. Horizontal on desktop with a connecting
 * gradient line, stacked cards on mobile. Tight vertical padding.
 */
export function Process() {
  return (
    <section id="process" className="bg-surface-base/60 py-16 sm:py-24 dark:bg-white/[0.02]">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A clear path from <span className="text-gradient">audit to scale</span>
            </>
          }
          description="No black boxes. A proven four-step framework that compounds into predictable growth."
        />

        <div className="relative mt-12">
          {/* Connector line (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-surface-border to-transparent lg:block dark:via-white/10"
          />

          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.li
                  key={step.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, ease: easeOut, delay: i * 0.08 }}
                  className="relative rounded-2xl border border-surface-border bg-white p-5 shadow-sm transition-transform hover:-translate-y-1 dark:border-white/10 dark:bg-surface-heading"
                >
                  <div className="flex items-center justify-between">
                    <span className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-sm">
                      <Icon className="h-6 w-6" strokeWidth={2.25} />
                    </span>
                    <span className="text-3xl font-extrabold text-surface-border dark:text-white/10">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-surface-heading dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-surface-text dark:text-gray-400">
                    {step.description}
                  </p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
