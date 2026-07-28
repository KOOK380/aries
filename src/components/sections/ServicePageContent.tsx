"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";
import { BlobField } from "@/components/ui/BlobField";
import { ServiceHeroVisual } from "@/components/three/ServiceHeroVisual";
import { services } from "@/components/navigation/services";
import {
 serviceDetails,
 categoryThemes,
} from "./service-details";
import { cn } from "@/lib/utils";

const easeOut = [0.16, 1, 0.3, 1] as const;

interface ServicePageContentProps {
 /** The service id - used to look up full data client-side. */
 slug: string;
}

/**
 * Full bespoke service page. Each service renders its own unique 3D hero
 * (via ServiceHero3D) plus rich content sections: overview, why it matters,
 * how it works, features, use cases, process, outcomes, deliverables, FAQ
 * and related services. Category theme drives colors throughout.
 */
export function ServicePageContent({ slug }: ServicePageContentProps) {
 const service = services.find((s) => s.id === slug);
 const detail = serviceDetails[slug];

 if (!service || !detail) return null;

 const theme = categoryThemes[detail.category];
 const Icon = service.icon;
 const gradientBg = `bg-gradient-to-br ${theme.gradient}`;

 return (
 <>
 {/* ===== Hero with unique 3D scene ===== */}
 <section className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20">
 <BlobField count={3} />
 <Container>
 <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
 {/* Copy */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, ease: easeOut }}
 className="text-center lg:text-left"
 >
 <span
 className={cn(
 "inline-flex items-center gap-2 rounded-full border border-surface-border bg-white px-3 py-1.5 text-xs font-semibold shadow-sm dark:border-white/10 dark:bg-white/5",
 theme.accent,
 )}
 >
 <Icon className="h-3.5 w-3.5" />
 {theme.label}
 </span>

 <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-surface-heading sm:text-5xl dark:text-white">
 {detail.tagline}
 </h1>

 <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-surface-text sm:text-lg lg:mx-0 dark:text-gray-300">
 {detail.overview}
 </p>

 <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
 <ButtonLink href="/contact" size="lg" withArrow>
 Start your project
 </ButtonLink>
 <ButtonLink href="/pricing" variant="secondary" size="lg">
 View pricing
 </ButtonLink>
 </div>
 </motion.div>

 {/* Unique 3D hero scene */}
 <motion.div
 initial={{ opacity: 0, scale: 0.95 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
 className="relative mx-auto w-full max-w-md lg:max-w-none"
 >
 <ServiceHeroVisual slug={slug} gradient={theme.gradient} />
 </motion.div>
 </div>
 </Container>
 </section>

 {/* ===== Why it matters ===== */}
 <section className="py-16 sm:py-20">
 <Container size="narrow">
 <motion.div
 initial={{ opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-60px" }}
 transition={{ duration: 0.5, ease: easeOut }}
 className={cn(
 "relative overflow-hidden rounded-3xl p-8 text-white shadow-mega sm:p-10",
 gradientBg,
 )}
 >
 <div aria-hidden className="pointer-events-none absolute inset-0">
 <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/20 " />
 <div className="absolute -bottom-12 right-0 h-56 w-56 rounded-full bg-white/15 " />
 </div>
 <div className="relative">
 <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] ">
 Why it matters
 </span>
 <p className="mt-5 text-balance text-xl font-bold leading-snug sm:text-2xl">
 {detail.whyItMatters}
 </p>
 </div>
 </motion.div>
 </Container>
 </section>

 {/* ===== How it works (new explainer) ===== */}
 <section className="py-16 sm:py-24">
 <Container className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-14">
 <motion.div
 initial={{ opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-60px" }}
 transition={{ duration: 0.5, ease: easeOut }}
 >
 <span className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-primary shadow-sm dark:border-white/10 dark:bg-white/5">
 <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
 How it works
 </span>
 <h2 className="mt-4 text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-surface-heading sm:text-4xl dark:text-white">
 A clear process you can <span className="text-gradient">actually follow</span>
 </h2>
 <p className="mt-4 text-base leading-relaxed text-surface-text dark:text-gray-400">
 No black boxes. Here's exactly how we turn {service.title.toLowerCase()} into results.
 </p>
 </motion.div>

 <ol className="space-y-6">
 {detail.howItWorks.map((step, i) => (
 <motion.li
 key={i}
 initial={{ opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-60px" }}
 transition={{ duration: 0.45, ease: easeOut, delay: i * 0.08 }}
 className="group relative pl-12"
 >
 <span
 className={cn(
 "absolute left-0 top-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white shadow-md",
 theme.gradient,
 )}
 >
 {i + 1}
 </span>
 <p className="text-[15px] leading-relaxed text-surface-heading dark:text-gray-200">
 {step}
 </p>
 </motion.li>
 ))}
 </ol>
 </Container>
 </section>

 {/* ===== Feature grid ===== */}
 <section className="bg-surface-base/60 py-16 sm:py-24 dark:bg-white/[0.02]">
 <Container>
 <div className="mx-auto max-w-2xl text-center">
 <span className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-primary shadow-sm dark:border-white/10 dark:bg-white/5">
 <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
 What's included
 </span>
 <h2 className="mt-4 text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-surface-heading sm:text-4xl dark:text-white">
 Everything you need to <span className="text-gradient">win here</span>
 </h2>
 </div>

 <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
 {detail.features.map((feature, i) => {
 const FeatureIcon = feature.icon;
 return (
 <motion.div
 key={feature.title}
 initial={{ opacity: 0, y: 18 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-60px" }}
 transition={{ duration: 0.45, ease: easeOut, delay: (i % 3) * 0.05 }}
 className="group h-full"
 >
 <TiltCard maxTilt={8} className="h-full rounded-2xl">
 <div className="flex h-full flex-col rounded-2xl border border-surface-border bg-white p-5 shadow-sm transition-colors hover:border-brand-primary/30 dark:border-white/10 dark:bg-white/[0.02]">
 <span
 style={{ transform: "translateZ(30px)" }}
 className={cn(
 "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md",
 theme.gradient,
 )}
 >
 <FeatureIcon className="h-5 w-5" strokeWidth={2.25} />
 </span>
 <h3 className="mt-4 text-base font-bold text-surface-heading transition-colors group-hover:text-brand-primary dark:text-white dark:group-hover:text-brand-secondary">
 {feature.title}
 </h3>
 <p className="mt-1.5 text-sm leading-relaxed text-surface-text dark:text-gray-400">
 {feature.description}
 </p>
 </div>
 </TiltCard>
 </motion.div>
 );
 })}
 </div>
 </Container>
 </section>

 {/* ===== Use cases + Outcomes ===== */}
 <section className="py-16 sm:py-24">
 <Container>
 <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
 {/* Use cases */}
 <motion.div
 initial={{ opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-60px" }}
 transition={{ duration: 0.5, ease: easeOut }}
 >
 <h2 className="text-2xl font-extrabold tracking-tight text-surface-heading sm:text-3xl dark:text-white">
 Who this is <span className="text-gradient">built for</span>
 </h2>
 <p className="mt-4 text-base leading-relaxed text-surface-text dark:text-gray-400">
 If any of these sound like you, we should talk.
 </p>
 <ul className="mt-6 space-y-3">
 {detail.useCases.map((useCase) => (
 <li key={useCase} className="flex items-start gap-3">
 <span
 className={cn(
 "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white",
 theme.gradient,
 )}
 >
 <Check className="h-3 w-3" strokeWidth={3} />
 </span>
 <span className="text-sm text-surface-heading dark:text-gray-200">{useCase}</span>
 </li>
 ))}
 </ul>
 </motion.div>

 {/* Outcomes (new) */}
 <motion.div
 initial={{ opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-60px" }}
 transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
 >
 <h2 className="text-2xl font-extrabold tracking-tight text-surface-heading sm:text-3xl dark:text-white">
 Outcomes you can <span className="text-gradient">expect</span>
 </h2>
 <p className="mt-4 text-base leading-relaxed text-surface-text dark:text-gray-400">
 Real, measurable results - not vanity metrics.
 </p>
 <div className="mt-6 grid gap-3 sm:grid-cols-2">
 {detail.outcomes.map((outcome) => (
 <div
 key={outcome}
 className="rounded-xl border border-surface-border bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.02]"
 >
 <p className="text-sm font-medium text-surface-heading dark:text-gray-200">
 {outcome}
 </p>
 </div>
 ))}
 </div>
 </motion.div>
 </div>
 </Container>
 </section>

 {/* ===== Process ===== */}
 <section className="bg-surface-base/60 py-16 sm:py-24 dark:bg-white/[0.02]">
 <Container>
 <div className="mx-auto max-w-2xl text-center">
 <span className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-primary shadow-sm dark:border-white/10 dark:bg-white/5">
 <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
 How we work
 </span>
 <h2 className="mt-4 text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-surface-heading sm:text-4xl dark:text-white">
 A clear path from <span className="text-gradient">start to scale</span>
 </h2>
 </div>

 <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
 {detail.process.map((step, i) => (
 <motion.li
 key={step.step}
 initial={{ opacity: 0, y: 18 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-60px" }}
 transition={{ duration: 0.45, ease: easeOut, delay: i * 0.08 }}
 className="group h-full"
 >
 <TiltCard maxTilt={10} glare={false} className="h-full rounded-2xl">
 <div className="flex h-full flex-col rounded-2xl border border-surface-border bg-white p-5 shadow-sm dark:border-white/10 dark:bg-surface-heading">
 <div className="flex items-center justify-between">
 <span
 style={{ transform: "translateZ(30px)" }}
 className={cn(
 "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-md",
 theme.gradient,
 )}
 >
 <Sparkles className="h-5 w-5" strokeWidth={2.25} />
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
 </div>
 </TiltCard>
 </motion.li>
 ))}
 </ol>
 </Container>
 </section>

 {/* ===== Deliverables + FAQ ===== */}
 <section className="py-16 sm:py-24">
 <Container>
 <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
 {/* Deliverables */}
 <motion.div
 initial={{ opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-60px" }}
 transition={{ duration: 0.5, ease: easeOut }}
 >
 <h2 className="text-2xl font-extrabold tracking-tight text-surface-heading sm:text-3xl dark:text-white">
 What you'll <span className="text-gradient">walk away with</span>
 </h2>
 <p className="mt-4 text-base leading-relaxed text-surface-text dark:text-gray-400">
 Tangible deliverables and clear reporting - no fluff, no surprises.
 </p>
 <ul className="mt-6 space-y-3">
 {detail.deliverables.map((item) => (
 <li key={item} className="flex items-start gap-3">
 <span
 className={cn(
 "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white",
 theme.gradient,
 )}
 >
 <Check className="h-3 w-3" strokeWidth={3} />
 </span>
 <span className="text-sm text-surface-heading dark:text-gray-200">{item}</span>
 </li>
 ))}
 </ul>

 {/* CTA card */}
 <TiltCard maxTilt={6} className="mt-8 rounded-3xl">
 <div className={cn("relative overflow-hidden rounded-3xl p-7 text-white shadow-mega", gradientBg)}>
 <div aria-hidden className="pointer-events-none absolute inset-0">
 <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/20 " />
 <div className="absolute -bottom-12 right-0 h-48 w-48 rounded-full bg-white/15 " />
 </div>
 <div className="relative">
 <h3 className="text-xl font-extrabold leading-tight">
 Ready to get started?
 </h3>
 <p className="mt-2 text-sm leading-relaxed text-white/85">
 Book a free consultation and we'll show you exactly how {service.title.toLowerCase()} can drive results for your business.
 </p>
 <ButtonLink
 href="/contact"
 size="md"
 className="mt-5 w-full bg-white text-brand-primary shadow-lg hover:bg-white/90 sm:w-auto"
 >
 Book a free call
 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
 </ButtonLink>
 </div>
 </div>
 </TiltCard>
 </motion.div>

 {/* FAQ */}
 <motion.div
 initial={{ opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-60px" }}
 transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
 >
 <h2 className="text-2xl font-extrabold tracking-tight text-surface-heading sm:text-3xl dark:text-white">
 Common <span className="text-gradient">questions</span>
 </h2>
 <p className="mt-4 text-base leading-relaxed text-surface-text dark:text-gray-400">
 Everything you need to know before getting started.
 </p>
 <div className="mt-6 space-y-3">
 {detail.faq.map((item) => (
 <FaqRow key={item.question} item={item} theme={theme} />
 ))}
 </div>
 </motion.div>
 </div>
 </Container>
 </section>

 {/* ===== Related services ===== */}
 <RelatedServices currentSlug={slug} />
 </>
 );
}

/* ------------------------------------------------------------------ */
/* Accessible FAQ row with category-themed accents. */
/* ------------------------------------------------------------------ */
function FaqRow({
 item,
 theme,
}: {
 item: { question: string; answer: string };
 theme: { gradient: string; accent: string; label: string; ring: string };
}) {
 const [open, setOpen] = useState(false);
 const id = useId();
 return (
 <div className="overflow-hidden rounded-2xl border border-surface-border bg-white dark:border-white/10 dark:bg-white/[0.02]">
 <button
 type="button"
 aria-expanded={open}
 onClick={() => setOpen((p) => !p)}
 className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-surface-border/30 focus-visible:outline-none dark:hover:bg-white/[0.03]"
 >
 <span className="text-sm font-semibold text-surface-heading dark:text-white">
 {item.question}
 </span>
 <ChevronDown
 className={cn(
 "h-5 w-5 shrink-0 transition-transform duration-200",
 theme.accent,
 open && "rotate-180",
 )}
 />
 </button>
 <AnimatePresence initial={false}>
 {open && (
 <motion.div
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: "auto", opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 transition={{ duration: 0.25, ease: easeOut }}
 className="overflow-hidden"
 >
 <p className="px-5 pb-5 text-sm leading-relaxed text-surface-text dark:text-gray-400">
 {item.answer}
 </p>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 );
}

/* ------------------------------------------------------------------ */
/* Related services strip. */
/* ------------------------------------------------------------------ */
function RelatedServices({
 currentSlug,
}: {
 currentSlug: string;
}) {
 const related = services.filter((s) => s.id !== currentSlug).slice(0, 4);
 return (
 <section className="bg-surface-base/60 py-16 sm:py-24 dark:bg-white/[0.02]">
 <Container>
 <div className="mx-auto max-w-2xl text-center">
 <span className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-primary shadow-sm dark:border-white/10 dark:bg-white/5">
 <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
 Keep exploring
 </span>
 <h2 className="mt-4 text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-surface-heading sm:text-4xl dark:text-white">
 Related <span className="text-gradient">services</span>
 </h2>
 </div>

 <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
 {related.map((s, i) => {
 const RelatedIcon = s.icon;
 return (
 <motion.div
 key={s.id}
 initial={{ opacity: 0, y: 18 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-60px" }}
 transition={{ duration: 0.45, ease: easeOut, delay: i * 0.05 }}
 className="group h-full"
 >
 <TiltCard maxTilt={8} glare={false} className="h-full rounded-2xl">
 <Link
 href={s.href}
 className="flex h-full flex-col rounded-2xl border border-surface-border bg-white p-5 shadow-sm transition-colors hover:border-brand-primary/30 focus-visible:outline-none dark:border-white/10 dark:bg-white/[0.02]"
 >
 <span
 style={{ transform: "translateZ(30px)" }}
 className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-md"
 >
 <RelatedIcon className="h-5 w-5" strokeWidth={2.25} />
 </span>
 <h3 className="mt-4 text-base font-bold text-surface-heading transition-colors group-hover:text-brand-primary dark:text-white dark:group-hover:text-brand-secondary">
 {s.title}
 </h3>
 <p className="mt-1.5 text-sm leading-relaxed text-surface-text dark:text-gray-400">
 {s.description}
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
