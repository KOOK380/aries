"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { testimonials } from "./content";

const easeOut = [0.16, 1, 0.3, 1] as const;

/**
 * Testimonial wall. Masonry-ish multi-column layout via CSS columns so quotes
 * of varying length pack tightly without fixed row heights.
 */
export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <Container size="wide">
        <SectionHeading
          eyebrow="Loved by operators"
          title={
            <>
              Don't take our word for it - <span className="text-gradient">take theirs</span>
            </>
          }
          description="Real feedback from the founders, CMOs and growth leads we partner with."
        />

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: easeOut, delay: (i % 3) * 0.06 }}
              className="mb-5 break-inside-avoid"
            >
              <TiltCard maxTilt={7} glare={false} className="rounded-2xl">
                <figure className="rounded-2xl border border-surface-border bg-white p-5 shadow-sm transition-colors hover:border-brand-primary/30 dark:border-white/10 dark:bg-white/[0.02]">
                  <div className="flex items-center justify-between">
                    <Quote className="h-7 w-7 text-brand-primary/30" />
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="mt-3 text-[15px] leading-relaxed text-surface-heading dark:text-gray-100">
                    "{t.quote}"
                  </blockquote>

                  <figcaption className="mt-4 flex items-center gap-3">
                    <span
                      style={{ transform: "translateZ(30px)" }}
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.accent} text-xs font-bold text-white shadow-md`}
                    >
                      {t.initials}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-surface-heading dark:text-white">{t.name}</p>
                      <p className="text-xs font-medium text-surface-text dark:text-gray-400">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
