"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

const easeOut = [0.16, 1, 0.3, 1] as const;

/**
 * Full-width closing CTA. Dark gradient panel with animated orbs and a
 * dual-button call to action. Sits with tight top/bottom padding.
 */
export function CtaBand() {
 return (
 <section className="py-8">
 <Container>
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 0.55, ease: easeOut }}
 className="relative overflow-hidden rounded-[2rem] bg-surface-heading px-6 py-12 text-center shadow-mega sm:px-12 sm:py-14 dark:bg-black"
 >
 {/* Gradient wash */}
 <div
 aria-hidden
 className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary opacity-90"
 />
 {/* Texture orbs */}
 <div aria-hidden className="pointer-events-none absolute inset-0">
 <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/20 " />
 <div className="absolute -bottom-12 right-0 h-56 w-56 rounded-full bg-white/15 " />
 </div>
 {/* Grid overlay */}
 <div
 aria-hidden
 className="absolute inset-0 opacity-20"
 style={{
 backgroundImage:
 "linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)",
 backgroundSize: "44px 44px",
 maskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black, transparent)",
 WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black, transparent)",
 }}
 />

 <div className="relative mx-auto max-w-2xl">
 <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
 Ready to build, grow and protect your brand?
 </h2>
 <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/85">
 Get a free, no-obligation consultation. We'll show you exactly how to strengthen your
 digital presence - across marketing, development and security.
 </p>
 <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
 <ButtonLink
 href="/contact"
 size="lg"
 className="bg-white text-brand-primary shadow-lg hover:bg-white/90 hover:shadow-xl"
 >
 <CalendarCheck className="h-4 w-4" />
 Book a free consultation
 </ButtonLink>
 <ButtonLink
 href="/pricing"
 size="lg"
 className="border border-white/40 bg-white/10 text-white hover:bg-white/20"
 >
 View pricing
 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
 </ButtonLink>
 </div>
 <p className="mt-4 text-xs font-medium text-white/70">
 No contracts · 48-hour kickoff · Cancel anytime
 </p>
 </div>
 </motion.div>
 </Container>
 </section>
 );
}
