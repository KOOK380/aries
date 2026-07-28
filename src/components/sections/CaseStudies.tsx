"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { caseStudyDetails } from "./case-study-details";

const easeOut = [0.16, 1, 0.3, 1] as const;

const disciplineLabels: Record<string, string> = {
  development: "Development",
  marketing: "Marketing",
  security: "Security",
};

/**
 * Featured case studies. Alternating gradient cover panels (no image assets)
 * with headline metrics. Company names are masked for confidentiality.
 * Each card links to its full case study detail page.
 */
export function CaseStudies() {
 return (
 <section id="work" className="py-16 sm:py-24">
 <Container>
 <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
 <SectionHeading
 align="left"
 eyebrow="Proof, not promises"
 title={
 <>
 Results we're <span className="text-gradient">proud to show</span>
 </>
 }
 description="A few of the brands we've helped build, launch, grow and secure. Client names are masked for confidentiality."
 className="max-w-xl"
 />
 </div>

 <div className="mt-10 grid gap-5">
 {caseStudyDetails.map((cs, i) => (
 <motion.article
 key={cs.id}
 initial={{ opacity: 0, y: 18 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-60px" }}
 transition={{ duration: 0.5, ease: easeOut, delay: i * 0.05 }}
 className="group grid overflow-hidden rounded-3xl border border-surface-border bg-white transition-shadow hover:shadow-mega sm:grid-cols-[0.8fr_1.2fr] dark:border-white/10 dark:bg-white/[0.02]"
 >
 {/* Cover */}
 <Link href={`/case-studies/${cs.id}`} className={`relative block min-h-[180px] bg-gradient-to-br ${cs.accent} p-6`}>
 <div
 aria-hidden
 className="absolute inset-0 opacity-30"
 style={{
 backgroundImage:
 "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 40%)",
 }}
 />
 <span className="relative inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
 {disciplineLabels[cs.discipline]}
 </span>
 <p className="relative mt-8 text-3xl font-extrabold leading-tight text-white">
 {cs.client}
 </p>
 <p className="relative mt-1 text-xs font-medium text-white/80">
 {cs.clientFull}
 </p>
 </Link>

 {/* Body */}
 <div className="flex flex-col justify-between p-6">
 <div>
 <h3 className="text-xl font-bold leading-snug text-surface-heading dark:text-white">
 {cs.headline}
 </h3>
 <div className="mt-5 grid grid-cols-3 gap-4">
 {cs.metrics.map((m) => (
 <div key={m.label}>
 <p className="text-2xl font-extrabold tracking-tight text-gradient">
 {m.value}
 </p>
 <p className="mt-0.5 text-xs font-medium text-surface-text dark:text-gray-400">
 {m.label}
 </p>
 </div>
 ))}
 </div>
 <div className="mt-5 flex flex-wrap gap-2">
 {cs.tags.map((tag) => (
 <span
 key={tag}
 className="rounded-full border border-surface-border bg-surface-border/40 px-2.5 py-0.5 text-[11px] font-semibold text-surface-text dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
 >
 {tag}
 </span>
 ))}
 </div>
 </div>
 <Link
 href={`/case-studies/${cs.id}`}
 className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary transition-colors hover:text-brand-secondary"
 >
 Read the case study
 <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
 </Link>
 </div>
 </motion.article>
 ))}
 </div>
 </Container>
 </section>
 );
}

