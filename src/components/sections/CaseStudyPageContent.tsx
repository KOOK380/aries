"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";
import { getCaseStudy, type CaseStudyDetail } from "./case-study-details";
import { cn } from "@/lib/utils";

const easeOut = [0.16, 1, 0.3, 1] as const;

const disciplineLabels: Record<CaseStudyDetail["discipline"], string> = {
  development: "Development",
  marketing: "Marketing",
  security: "Security",
};

interface CaseStudyPageContentProps {
  /** Case study id - looked up client-side. */
  slug: string;
}

/**
 * Full case study detail page. Renders the masked client name, hero metrics,
 * the challenge / solution narrative, outcomes, stack, testimonial and CTA.
 */
export function CaseStudyPageContent({ slug }: CaseStudyPageContentProps) {
  const data = getCaseStudy(slug);
  if (!data) return null;

  const gradientBg = `bg-gradient-to-br ${data.accent}`;

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden pt-12 pb-12 sm:pt-16 sm:pb-16">
        <Container>
          {/* Breadcrumb back link */}
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-surface-text transition-colors hover:text-brand-primary dark:text-gray-400"
          >
            <ArrowLeft className="h-4 w-4" />
            All case studies
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="mt-6 grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14"
          >
            {/* Copy */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className={cn("rounded-full bg-gradient-to-r px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white", data.accent)}>
                  {disciplineLabels[data.discipline]}
                </span>
                {data.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-surface-border bg-white px-3 py-1 text-[11px] font-semibold text-surface-text dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-brand-primary">
                {data.clientFull}
              </p>
              <h1 className="mt-2 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-surface-heading sm:text-5xl dark:text-white">
                {data.headline}
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-surface-text sm:text-lg dark:text-gray-300">
                {data.subheadline}
              </p>
            </div>

            {/* Metric cards */}
            <div className="grid gap-3">
              {data.metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: easeOut, delay: 0.1 + i * 0.08 }}
                  className="group"
                >
                  <TiltCard maxTilt={6} glare={false} className="rounded-2xl">
                    <div className="flex items-center gap-4 rounded-2xl border border-surface-border bg-white p-4 shadow-sm dark:border-white/10 dark:bg-surface-heading">
                      <span
                        className={cn("inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-xl font-extrabold text-white shadow-md", data.accent)}
                      >
                        {m.value.replace(/[^0-9a-zA-Z+#.<>-]/g, "").slice(0, 3)}
                      </span>
                      <div>
                        <p className={cn("text-2xl font-extrabold tracking-tight bg-gradient-to-br bg-clip-text text-transparent", data.accent)}>
                          {m.value}
                        </p>
                        <p className="text-xs font-medium text-surface-text dark:text-gray-400">{m.label}</p>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Meta strip */}
          <div className="mt-8 grid grid-cols-2 gap-3 rounded-2xl border border-surface-border bg-white p-4 dark:border-white/10 dark:bg-white/[0.02] sm:grid-cols-4">
            {data.meta.map((m) => (
              <div key={m.label}>
                <p className="text-[11px] font-medium uppercase tracking-wide text-surface-text dark:text-gray-500">
                  {m.label}
                </p>
                <p className="mt-0.5 text-sm font-bold text-surface-heading dark:text-white">{m.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== Summary band ===== */}
      <section className="py-12 sm:py-16">
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: easeOut }}
            className={cn("relative overflow-hidden rounded-3xl p-8 text-white shadow-mega sm:p-10", gradientBg)}
          >
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/20" />
              <div className="absolute -bottom-12 right-0 h-56 w-56 rounded-full bg-white/15" />
            </div>
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em]">
                The engagement
              </span>
              <p className="mt-5 text-balance text-xl font-bold leading-snug sm:text-2xl">
                {data.summary}
              </p>
              <p className="mt-3 text-sm font-medium text-white/80">{data.duration}</p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ===== Challenge + Solution ===== */}
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400">
              The challenge
            </span>
            <div className="mt-6 space-y-6">
              {data.challenges.map((c) => (
                <div key={c.title}>
                  <h3 className="text-lg font-bold text-surface-heading dark:text-white">{c.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-surface-text dark:text-gray-400">{c.body}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
          >
            <span className={cn("inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white", data.accent)}>
              Our solution
            </span>
            <div className="mt-6 space-y-6">
              {data.solutions.map((s) => (
                <div key={s.title}>
                  <h3 className="text-lg font-bold text-surface-heading dark:text-white">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-surface-text dark:text-gray-400">{s.body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ===== Outcomes ===== */}
      <section className="bg-surface-base/60 py-16 sm:py-24 dark:bg-white/[0.02]">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-primary dark:border-white/10 dark:bg-white/5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
              Results
            </span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-surface-heading sm:text-4xl dark:text-white">
              The <span className="text-gradient">outcomes</span>
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
            {data.outcomes.map((o, i) => {
              const Icon = o.icon;
              return (
                <motion.div
                  key={o.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, ease: easeOut, delay: i * 0.06 }}
                  className="group h-full"
                >
                  <TiltCard maxTilt={8} glare={false} className="h-full rounded-2xl">
                    <div className="flex h-full flex-col rounded-2xl border border-surface-border bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.02]">
                      <span style={{ transform: "translateZ(30px)" }} className={cn("inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md", data.accent)}>
                        <Icon className="h-5 w-5" strokeWidth={2.25} />
                      </span>
                      <h3 className="mt-4 text-base font-bold text-surface-heading dark:text-white">{o.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-surface-text dark:text-gray-400">{o.description}</p>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ===== Stack + Testimonial ===== */}
      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Stack */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <h2 className="text-2xl font-extrabold tracking-tight text-surface-heading sm:text-3xl dark:text-white">
              The <span className="text-gradient">stack</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-surface-text dark:text-gray-400">
              Tools, platforms and channels we used on this engagement.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {data.stack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 rounded-full border border-surface-border bg-white px-3 py-1.5 text-sm font-semibold text-surface-heading shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary" />
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
          >
            <TiltCard maxTilt={5} glare={false} className="rounded-3xl">
              <figure className="relative flex h-full flex-col justify-between rounded-3xl border border-surface-border bg-white p-7 shadow-mega dark:border-white/10 dark:bg-surface-heading">
                <Quote className={cn("h-9 w-9 bg-gradient-to-br bg-clip-text text-transparent", data.accent)} />
                <blockquote className="mt-4 text-pretty text-lg font-medium leading-relaxed text-surface-heading dark:text-gray-100">
                  &ldquo;{data.quote.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6">
                  <p className="text-sm font-bold text-surface-heading dark:text-white">{data.quote.author}</p>
                  <p className="text-xs font-medium text-surface-text dark:text-gray-400">{data.quote.role}</p>
                </figcaption>
              </figure>
            </TiltCard>
          </motion.div>
        </Container>
      </section>

      {/* ===== CTA ===== */}
      <section className="pb-16 sm:pb-24">
        <Container size="narrow">
          <TiltCard maxTilt={5} glare={false} className="rounded-3xl">
            <div className={cn("relative overflow-hidden rounded-3xl p-8 text-center text-white shadow-mega sm:p-10", gradientBg)}>
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/20" />
                <div className="absolute -bottom-12 right-0 h-48 w-48 rounded-full bg-white/15" />
              </div>
              <div className="relative mx-auto max-w-xl">
                <h2 className="text-balance text-2xl font-extrabold leading-tight sm:text-3xl">
                  Want results like these for {data.client}?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  Book a free consultation and we'll map out how to get your business to the same place.
                </p>
                <ButtonLink
                  href="/contact"
                  size="lg"
                  className="mt-6 w-full bg-white text-brand-primary shadow-lg hover:bg-white/90 sm:w-auto"
                >
                  Start your project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </ButtonLink>
              </div>
            </div>
          </TiltCard>
        </Container>
      </section>
    </>
  );
}
