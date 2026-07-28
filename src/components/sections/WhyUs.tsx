"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pillars } from "./content";

const easeOut = [0.16, 1, 0.3, 1] as const;

/**
 * "Why us" feature grid. Asymmetric layout: a sticky intro card on the left
 * and the pillar grid on the right, so the heading stays visible while cards
 * scroll past on tall viewports.
 */
export function WhyUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Intro (sticky) */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Why brands pick us"
              title={
                <>
                  An extension of your team, <span className="text-gradient">not a vendor</span>
                </>
              }
              description="We replace vendor hand-offs and finger-pointing with one accountable team that owns your entire digital presence - design, development, marketing and security."
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {["No long contracts", "In-house team", "Weekly sprints"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-surface-border bg-white px-3 py-1 text-xs font-semibold text-surface-heading shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Pillar grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.article
                  key={pillar.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, ease: easeOut, delay: (i % 2) * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border border-surface-border bg-white p-5 transition-colors hover:border-brand-primary/30 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-brand-secondary/40"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={2.25} />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-surface-heading dark:text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-surface-text dark:text-gray-400">
                    {pillar.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
