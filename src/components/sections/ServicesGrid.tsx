"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";
import { services } from "@/components/navigation/services";

const easeOut = [0.16, 1, 0.3, 1] as const;

/**
 * Full services grid (reuses the same `services` data array as the mega menu,
 * so there's a single source of truth). Rendered as larger feature cards with
 * the premium hover treatment.
 */
export function ServicesGrid() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <SectionHeading
            align="left"
            eyebrow="What we do"
            title={
              <>
                One partner for your <span className="text-gradient">entire digital presence</span>
              </>
            }
            description="Marketing, web & mobile development, analytics and security - twelve services that build, grow and protect your brand under one roof."
            className="max-w-xl"
          />
          <ButtonLink href="/services" variant="secondary" size="md" withArrow className="shrink-0 sm:self-center">
            Explore all services
          </ButtonLink>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, ease: easeOut, delay: (i % 4) * 0.05 }}
                className="group h-full"
              >
                <TiltCard maxTilt={9} className="h-full rounded-2xl">
                  <Link
                    href={service.href}
                    className="flex h-full flex-col rounded-2xl border border-surface-border bg-white p-5 shadow-sm transition-colors hover:border-brand-primary/30 hover:bg-brand-primary/[0.02] focus-visible:outline-none dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-brand-secondary/40 dark:hover:bg-white/[0.05]"
                  >
                    <div className="flex items-center justify-between">
                      <motion.span
                        whileHover={{ scale: 1.15, rotate: -6 }}
                        transition={{ duration: 0.25, ease: easeOut }}
                        style={{ transform: "translateZ(30px)" }}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-md"
                      >
                        <Icon className="h-5 w-5" strokeWidth={2.25} />
                      </motion.span>
                      <ArrowUpRight className="h-4 w-4 text-surface-text/50 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-primary dark:text-gray-500" />
                    </div>

                    <h3 className="mt-4 text-base font-bold text-surface-heading transition-colors group-hover:text-brand-primary dark:text-white dark:group-hover:text-brand-secondary">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-surface-text dark:text-gray-400 min-h-[2.5rem]">
                      {service.description}
                    </p>
                  </Link>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
