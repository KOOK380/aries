"use client";

import { motion } from "framer-motion";
import { Plug } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { integrations } from "./content";

const easeOut = [0.16, 1, 0.3, 1] as const;

/**
 * "Tools & Platforms" integrations grid. Replaces the pricing section on the
 * homepage - a credibility-building showcase of the marketing stack we run,
 * without any financial details. Each tile uses a unique gradient accent.
 */
export function Integrations() {
  return (
    <section id="integrations" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our stack"
          title={
            <>
              Tools & platforms <span className="text-gradient">we work with</span>
            </>
          }
          description="From marketing and analytics to development frameworks and security infrastructure - a modern stack powering every part of your digital presence."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {integrations.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, ease: easeOut, delay: (i % 3) * 0.05 }}
                className="group h-full"
              >
                <TiltCard maxTilt={10} className="h-full rounded-2xl">
                  <div className="flex h-full items-center gap-4 rounded-2xl border border-surface-border bg-white p-5 shadow-sm transition-colors hover:border-brand-primary/30 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-brand-secondary/40">
                    <span
                      style={{ transform: "translateZ(30px)" }}
                      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.accent} text-white shadow-md transition-transform duration-200 group-hover:scale-110`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={2.25} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="truncate text-base font-bold text-surface-heading dark:text-white">
                        {item.name}
                      </h3>
                      <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-surface-text dark:text-gray-400">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note with icon */}
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-surface-text dark:text-gray-400">
          <Plug className="h-4 w-4 text-brand-primary" />
          Plus 40+ more integrations - if it has an API, we connect to it.
        </div>
      </Container>
    </section>
  );
}
