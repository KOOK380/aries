"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles, Star, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Floating } from "@/components/ui/Floating";

const easeOut = [0.16, 1, 0.3, 1] as const;

/**
 * Above-the-fold hero. Two equal columns on desktop:
 * - left: headline with an explicit line break so the gradient phrase
 * "moves the needle" never splits across two lines,
 * - right: floating glass dashboard mock.
 * Mobile stacks vertically and stays left-aligned for a cleaner read.
 */
export function Hero() {
 return (
 <section className="relative overflow-hidden pt-24 pb-20">
 {/* Ambient background - soft gradient orbs only, anchored to content */}
 <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
 <div className="absolute top-1/4 -left-24 h-96 w-96 rounded-full bg-brand-primary/20 " />
 <div className="absolute top-1/3 -right-24 h-[26rem] w-[26rem] rounded-full bg-brand-secondary/20 " />
 <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand-primary/10 " />
 </div>

 <Container>
 <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
 {/* Copy -------------------------------------------------------- */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, ease: easeOut }}
 className="text-center lg:text-left"
 >
 <span className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-white/80 px-3 py-1.5 text-xs font-semibold text-surface-heading shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white">
 <Sparkles className="h-3.5 w-3.5 text-brand-primary" />
 Marketing, development & security under one roof
 </span>

 {/* Explicit line break keeps the gradient phrase intact on one line */}
 <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-surface-heading sm:text-5xl lg:text-[3.5rem] dark:text-white">
 Build, grow and{" "}
 <span className="text-gradient whitespace-nowrap">protect your brand</span>
 <br className="hidden sm:block" />
 <span className="sm:whitespace-nowrap"> all in one place.</span>
 </h1>

 <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-surface-text sm:text-lg lg:mx-0 dark:text-gray-300">
 We're a full-service digital partner - crafting high-converting websites and apps,
 driving growth with performance marketing, and keeping it all secure. One accountable
 team for your entire digital presence.
 </p>

 <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
 <ButtonLink href="/contact" size="lg" withArrow>
 Start your project
 </ButtonLink>
 <ButtonLink href="/services" variant="secondary" size="lg">
 <PlayCircle className="h-4 w-4" />
 See how it works
 </ButtonLink>
 </div>

 {/* Social proof row */}
 <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
 <div className="flex -space-x-2.5">
 {["A", "K", "M", "D", "S"].map((i, idx) => (
 <span
 key={i}
 className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-brand-gradient text-xs font-bold text-white shadow-sm dark:border-[#070a12]"
 style={{ zIndex: 10 - idx }}
 >
 {i}
 </span>
 ))}
 </div>
 <div className="text-center sm:text-left">
 <div className="flex items-center justify-center gap-0.5 sm:justify-start">
 {Array.from({ length: 5 }).map((_, i) => (
 <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
 ))}
 </div>
 <p className="mt-1 text-xs font-medium text-surface-text dark:text-gray-400">
 Trusted by{" "}
 <span className="font-bold text-surface-heading dark:text-white">240+</span> growing
 brands
 </p>
 </div>
 </div>
 </motion.div>

 {/* Visual ------------------------------------------------------ */}
 <motion.div
 initial={{ opacity: 0, y: 24, scale: 0.97 }}
 animate={{ opacity: 1, y: 0, scale: 1 }}
 transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
 className="relative mx-auto w-full max-w-md lg:max-w-none"
 >
 <HeroDashboard />
 </motion.div>
 </div>
 </Container>
 </section>
 );
}

/* ------------------------------------------------------------------ */
/* Floating glass dashboard mock - pure markup, no external assets. */
/* Tilts in 3D following the cursor (mouse parallax) for depth. */
/* ------------------------------------------------------------------ */
function HeroDashboard() {
 const ref = useRef<HTMLDivElement>(null);
 const bars = [38, 52, 44, 66, 58, 78, 72, 90];

 const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
 const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });

 function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
 const el = ref.current;
 if (!el) return;
 const rect = el.getBoundingClientRect();
 const px = (e.clientX - rect.left) / rect.width;
 const py = (e.clientY - rect.top) / rect.height;
 rotateX.set((0.5 - py) * 14);
 rotateY.set((px - 0.5) * 14);
 }

 function handleMouseLeave() {
 rotateX.set(0);
 rotateY.set(0);
 }

 return (
 <motion.div
 ref={ref}
 onMouseMove={handleMouseMove}
 onMouseLeave={handleMouseLeave}
 style={{ rotateX, rotateY, transformPerspective: 1000, transformStyle: "preserve-3d" }}
 className="relative"
 >
 {/* Glow */}
 <div
 aria-hidden
 className="absolute -inset-4 -z-10 rounded-[2rem] bg-brand-gradient opacity-20 "
 />

 <div
 style={{ transform: "translateZ(50px)" }}
 className="glass-panel rounded-3xl border border-surface-border p-5 shadow-mega dark:border-white/10"
 >
 {/* Header row */}
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-2">
 <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-white">
 <TrendingUp className="h-4 w-4" />
 </span>
 <div>
 <p className="text-xs font-semibold text-surface-heading dark:text-white">
 Growth overview
 </p>
 <p className="text-[10px] text-surface-text dark:text-gray-400">Last 8 weeks</p>
 </div>
 </div>
 <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
 +218%
 </span>
 </div>

 {/* Big number */}
 <div className="mt-4 flex items-end gap-2">
 <span className="text-3xl font-extrabold tracking-tight text-surface-heading dark:text-white">
 $1.42M
 </span>
 <span className="pb-1 text-xs font-medium text-surface-text dark:text-gray-400">
 attributed revenue
 </span>
 </div>

 {/* Chart */}
 <div className="mt-4 flex h-28 items-end gap-1.5">
 {bars.map((h, i) => (
 <motion.div
 key={i}
 initial={{ height: 0 }}
 animate={{ height: `${h}%` }}
 transition={{ duration: 0.6, ease: easeOut, delay: 0.3 + i * 0.06 }}
 className="flex-1 rounded-t-md bg-gradient-to-t from-brand-primary/40 to-brand-secondary"
 />
 ))}
 </div>

 {/* Mini metric cards */}
 <div className="mt-4 grid grid-cols-3 gap-2">
 {[
 { k: "ROAS", v: "3.2x" },
 { k: "CAC", v: "-38%" },
 { k: "CTR", v: "4.7%" },
 ].map((m) => (
 <div
 key={m.k}
 className="rounded-xl border border-surface-border bg-white/70 p-2.5 text-center dark:border-white/10 dark:bg-white/5"
 >
 <p className="text-sm font-bold text-surface-heading dark:text-white">{m.v}</p>
 <p className="text-[10px] font-medium uppercase tracking-wide text-surface-text dark:text-gray-400">
 {m.k}
 </p>
 </div>
 ))}
 </div>
 </div>

 {/* Floating badge - bottom left, bobbing */}
 <div
 style={{ transform: "translateZ(70px)" }}
 className="absolute -bottom-4 -left-4 hidden sm:block"
 >
 <Floating index={1}>
 <motion.div
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 0.6 }}
 className="flex items-center gap-2 rounded-2xl border border-surface-border bg-white px-3.5 py-2.5 shadow-lg dark:border-white/10 dark:bg-surface-heading"
 >
 <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
 <ArrowRight className="h-4 w-4" />
 </span>
 <div>
 <p className="text-xs font-bold text-surface-heading dark:text-white">Goal smashed</p>
 <p className="text-[10px] text-surface-text dark:text-gray-400">3 weeks early</p>
 </div>
 </motion.div>
 </Floating>
 </div>

 {/* Floating badge - top right, bobbing on opposite phase */}
 <div
 style={{ transform: "translateZ(70px)" }}
 className="absolute -top-4 -right-3 hidden sm:block"
 >
 <Floating index={2}>
 <motion.div
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 0.7 }}
 className="flex items-center gap-2 rounded-2xl border border-surface-border bg-white px-3 py-2 shadow-lg dark:border-white/10 dark:bg-surface-heading"
 >
 <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
 <Star className="h-3.5 w-3.5 fill-brand-primary" />
 </span>
 <p className="text-xs font-bold text-surface-heading dark:text-white">4.9/5 rating</p>
 </motion.div>
 </Floating>
 </div>
 </motion.div>
 );
}
