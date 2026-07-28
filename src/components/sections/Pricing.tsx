"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";
import { pricingTiers } from "./content";
import { cn } from "@/lib/utils";

const easeOut = [0.16, 1, 0.3, 1] as const;

/**
 * Three-tier pricing. The featured ("Scale") tier is visually elevated with a
 * gradient border + ring. Billing cadence is static for the demo but the
 * structure makes adding a monthly/annual toggle trivial.
 */
export function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Simple pricing"
          title={
            <>
              Plans that scale <span className="text-gradient">with your ambition</span>
            </>
          }
          description="Transparent monthly retainers. No setup fees, no long contracts - cancel anytime after the first 90 days."
        />

        <div className="mt-10 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: easeOut, delay: i * 0.07 }}
              className="h-full"
            >
              <TiltCard maxTilt={tier.featured ? 6 : 9} glare className="h-full rounded-3xl">
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl border p-6 pt-7",
                    tier.featured
                      ? "border-transparent bg-surface-heading text-white shadow-mega ring-2 ring-brand-primary dark:bg-surface-heading"
                      : "border-surface-border bg-white dark:border-white/10 dark:bg-white/[0.02]",
                  )}
                >
                  {tier.featured && (
                    <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-brand-gradient px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-glow">
                      <Sparkles className="h-3 w-3" />
                      Most popular
                    </span>
                  )}

              <div className="flex items-baseline justify-between">
                <h3
                  className={cn(
                    "text-lg font-bold",
                    tier.featured ? "text-white" : "text-surface-heading dark:text-white",
                  )}
                >
                  {tier.name}
                </h3>
              </div>

              <div className="mt-3 flex items-end gap-1">
                <span
                  className={cn(
                    "text-4xl font-extrabold tracking-tight",
                    tier.featured ? "text-white" : "text-surface-heading dark:text-white",
                  )}
                >
                  {tier.price}
                </span>
                {tier.cadence && (
                  <span
                    className={cn(
                      "pb-1 text-sm font-medium",
                      tier.featured ? "text-white/70" : "text-surface-text dark:text-gray-400",
                    )}
                  >
                    {tier.cadence}
                  </span>
                )}
              </div>

              <p
                className={cn(
                  "mt-2 text-sm leading-relaxed",
                  tier.featured ? "text-white/70" : "text-surface-text dark:text-gray-400",
                )}
              >
                {tier.description}
              </p>

              <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span
                      className={cn(
                        "mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                        tier.featured
                          ? "bg-brand-primary text-white"
                          : "bg-brand-primary/10 text-brand-primary",
                      )}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span
                      className={cn(
                        "text-sm",
                        tier.featured ? "text-white/90" : "text-surface-text dark:text-gray-300",
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <ButtonLink
                href="/contact"
                variant={tier.featured ? "primary" : "secondary"}
                size="md"
                withArrow
                className="mt-6 w-full"
              >
                {tier.cta}
              </ButtonLink>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-surface-text dark:text-gray-500">
          All plans include strategy, reporting and a dedicated point of contact. Ad spend is separate.
        </p>
      </Container>
    </section>
  );
}
