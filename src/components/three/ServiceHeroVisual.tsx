"use client";

import { motion } from "framer-motion";
import {
 TrendingUp,
 ArrowUp,
 ArrowRight,
 Star,
 Play,
 FileText,
 Mail,
 Send,
 BarChart3,
 MousePointerClick,
 Globe,
 Code2,
 Smartphone,
 ShieldCheck,
 Lock,
 type LucideIcon,
} from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { Floating } from "@/components/ui/Floating";
import { cn } from "@/lib/utils";

const easeOut = [0.16, 1, 0.3, 1] as const;

interface HeroVisualProps {
 /** [primary, secondary] colors from the category theme, as Tailwind gradient classes. */
 gradient: string;
}

/**
 * Registry: each service id maps to a unique, attractive 2.5D hero visual.
 * All are pure markup + Framer Motion (no WebGL) so they look crisp, load
 * instantly, and stay performant. Every page gets a one-of-a-kind centerpiece.
 */
export const heroVisuals: Record<string, React.ComponentType<HeroVisualProps>> = {
 "seo-optimization": SeoVisual,
 "google-ads": GoogleAdsVisual,
 "social-media-marketing": SocialMediaVisual,
 "video-marketing": VideoVisual,
 "content-marketing": ContentVisual,
 "email-marketing": EmailVisual,
 "analytics-reporting": AnalyticsVisual,
 "website-marketing": WebsiteVisual,
 "web-development": WebDevVisual,
 "mobile-app-development": MobileAppVisual,
 "cyber-security": CyberSecurityVisual,
 "data-protection": DataProtectionVisual,
};

/** Shared glass panel wrapper used inside TiltCard by every visual. */
function GlassPanel({
 children,
 className,
}: {
 children: React.ReactNode;
 className?: string;
}) {
 return (
 <div
 className={cn(
 "glass-panel rounded-3xl border border-surface-border p-5 shadow-mega dark:border-white/10",
 className,
 )}
 >
 {children}
 </div>
 );
}

/** Wrapper that tilts the whole composition for a premium 3D feel. */
function HeroStage({
 children,
 gradient,
}: {
 children: React.ReactNode;
 gradient: string;
}) {
 return (
 <div className="relative">
 {/* Glow halo */}
 <div
 aria-hidden
 className={cn(
 "absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br opacity-20 ",
 gradient,
 )}
 />
 <TiltCard maxTilt={10} glare className="rounded-3xl">
 <div style={{ transform: "translateZ(30px)" }}>{children}</div>
 </TiltCard>
 </div>
 );
}

/* ================================================================ */
/* MARKETING */
/* ================================================================ */

/** SEO - ranking dashboard with a climbing line chart + position badges. */
function SeoVisual({ gradient }: HeroVisualProps) {
 const line = "M0,80 L40,72 L80,60 L120,64 L160,42 L200,30 L240,18";
 return (
 <HeroStage gradient={gradient}>
 <GlassPanel>
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-2">
 <span className={cn("inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br text-white", gradient)}>
 <TrendingUp className="h-4 w-4" />
 </span>
 <div>
 <p className="text-xs font-bold text-surface-heading dark:text-white">Organic traffic</p>
 <p className="text-[10px] text-surface-text dark:text-gray-400">Last 6 months</p>
 </div>
 </div>
 <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
 +278%
 </span>
 </div>

 {/* Line chart */}
 <div className="relative mt-4 h-32">
 <svg viewBox="0 0 240 100" className="h-full w-full" preserveAspectRatio="none">
 <defs>
 <linearGradient id="seoFill" x1="0" y1="0" x2="0" y2="1">
 <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3" />
 <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
 </linearGradient>
 </defs>
 <motion.path
 d={`${line} L240,100 L0,100 Z`}
 fill="url(#seoFill)"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 1, delay: 0.4 }}
 />
 <motion.path
 d={line}
 fill="none"
 stroke="#7c3aed"
 strokeWidth="2.5"
 strokeLinecap="round"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 1.4, ease: easeOut }}
 />
 </svg>
 </div>

 {/* Position chips */}
 <div className="mt-4 grid grid-cols-3 gap-2">
 {[
 { p: "#1", k: "Best keyword" },
 { p: "#3", k: "Brand term" },
 { p: "Top 5", k: "12 terms" },
 ].map((m, i) => (
 <Floating key={m.k} index={i}>
 <div className="rounded-xl border border-surface-border bg-white/70 p-2.5 text-center dark:border-white/10 dark:bg-white/5">
 <p className={cn("text-sm font-extrabold bg-gradient-to-br bg-clip-text text-transparent", gradient)}>{m.p}</p>
 <p className="text-[9px] font-medium uppercase tracking-wide text-surface-text dark:text-gray-400">{m.k}</p>
 </div>
 </Floating>
 ))}
 </div>
 </GlassPanel>
 </HeroStage>
 );
}

/** Google Ads - ROAS gauge + spend metrics. */
function GoogleAdsVisual({ gradient }: HeroVisualProps) {
 return (
 <HeroStage gradient={gradient}>
 <GlassPanel>
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-2">
 <span className={cn("inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br text-white", gradient)}>
 <TrendingUp className="h-4 w-4" />
 </span>
 <p className="text-xs font-bold text-surface-heading dark:text-white">Campaign performance</p>
 </div>
 <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">Live</span>
 </div>

 {/* Big ROAS number */}
 <div className="mt-4 text-center">
 <p className={cn("text-5xl font-extrabold tracking-tight bg-gradient-to-br bg-clip-text text-transparent", gradient)}>
 3.2x
 </p>
 <p className="mt-1 text-xs font-medium text-surface-text dark:text-gray-400">Return on ad spend</p>
 </div>

 {/* Progress bar */}
 <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-surface-border dark:bg-white/10">
 <motion.div
 className={cn("h-full rounded-full bg-gradient-to-r", gradient)}
 initial={{ width: 0 }}
 animate={{ width: "78%" }}
 transition={{ duration: 1.2, ease: easeOut, delay: 0.3 }}
 />
 </div>

 <div className="mt-4 grid grid-cols-3 gap-2">
 {[
 { v: "-38%", k: "CAC" },
 { v: "4.7%", k: "CTR" },
 { v: "$0.42", k: "CPC" },
 ].map((m, i) => (
 <Floating key={m.k} index={i}>
 <div className="rounded-xl border border-surface-border bg-white/70 p-2.5 text-center dark:border-white/10 dark:bg-white/5">
 <p className="text-sm font-bold text-surface-heading dark:text-white">{m.v}</p>
 <p className="text-[9px] font-medium uppercase tracking-wide text-surface-text dark:text-gray-400">{m.k}</p>
 </div>
 </Floating>
 ))}
 </div>
 </GlassPanel>
 </HeroStage>
 );
}

/** Social Media - engagement feed mock with platform badges. */
function SocialMediaVisual({ gradient }: HeroVisualProps) {
 return (
 <HeroStage gradient={gradient}>
 <GlassPanel>
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-2">
 <span className={cn("inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br text-white", gradient)}>
 <Star className="h-4 w-4 fill-white" />
 </span>
 <p className="text-xs font-bold text-surface-heading dark:text-white">Engagement</p>
 </div>
 <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">+412%</span>
 </div>

 {/* Reach bars */}
 <div className="mt-4 space-y-2.5">
 {[
 { p: "Instagram", w: "92%", v: "1.2M" },
 { p: "Facebook", w: "74%", v: "890K" },
 { p: "LinkedIn", w: "58%", v: "440K" },
 ].map((row, i) => (
 <div key={row.p} className="flex items-center gap-3">
 <span className="w-16 text-[10px] font-semibold text-surface-text dark:text-gray-400">{row.p}</span>
 <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-border dark:bg-white/10">
 <motion.div
 className={cn("h-full rounded-full bg-gradient-to-r", gradient)}
 initial={{ width: 0 }}
 animate={{ width: row.w }}
 transition={{ duration: 1, ease: easeOut, delay: 0.2 + i * 0.15 }}
 />
 </div>
 <span className="w-10 text-right text-[10px] font-bold text-surface-heading dark:text-white">{row.v}</span>
 </div>
 ))}
 </div>

 <div className="mt-4 flex items-center justify-center gap-4 rounded-xl border border-surface-border bg-white/70 py-2.5 dark:border-white/10 dark:bg-white/5">
 <span className="text-xs font-bold text-surface-heading dark:text-white">5.4% <span className="font-medium text-surface-text dark:text-gray-400">avg engagement</span></span>
 <span className="text-surface-border dark:text-white/20">|</span>
 <span className="text-xs font-bold text-surface-heading dark:text-white">2.8M <span className="font-medium text-surface-text dark:text-gray-400">reach</span></span>
 </div>
 </GlassPanel>
 </HeroStage>
 );
}

/** Video - play button stack + view counter. */
function VideoVisual({ gradient }: HeroVisualProps) {
 return (
 <HeroStage gradient={gradient}>
 <GlassPanel>
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-2">
 <span className={cn("inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br text-white", gradient)}>
 <Play className="h-4 w-4 fill-white" />
 </span>
 <p className="text-xs font-bold text-surface-heading dark:text-white">Video performance</p>
 </div>
 <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">+186% VTR</span>
 </div>

 {/* Video player mock */}
 <div className={cn("relative mt-4 flex h-32 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br", gradient)}>
 <motion.div
 animate={{ scale: [1, 1.08, 1] }}
 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
 className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-brand-primary shadow-lg"
 >
 <Play className="h-6 w-6 fill-current" />
 </motion.div>
 <span className="absolute bottom-2 right-2 rounded-md bg-black/50 px-2 py-0.5 text-[10px] font-bold text-white ">2:34</span>
 </div>

 <div className="mt-4 grid grid-cols-3 gap-2">
 {[
 { v: "2.1M", k: "Views" },
 { v: "8.4x", k: "ROAS" },
 { v: "94%", k: "VTR" },
 ].map((m, i) => (
 <Floating key={m.k} index={i}>
 <div className="rounded-xl border border-surface-border bg-white/70 p-2.5 text-center dark:border-white/10 dark:bg-white/5">
 <p className="text-sm font-bold text-surface-heading dark:text-white">{m.v}</p>
 <p className="text-[9px] font-medium uppercase tracking-wide text-surface-text dark:text-gray-400">{m.k}</p>
 </div>
 </Floating>
 ))}
 </div>
 </GlassPanel>
 </HeroStage>
 );
}

/** Content - article stack + traffic growth. */
function ContentVisual({ gradient }: HeroVisualProps) {
 return (
 <HeroStage gradient={gradient}>
 <GlassPanel>
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-2">
 <span className={cn("inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br text-white", gradient)}>
 <FileText className="h-4 w-4" />
 </span>
 <p className="text-xs font-bold text-surface-heading dark:text-white">Content engine</p>
 </div>
 <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">+340% traffic</span>
 </div>

 {/* Article list */}
 <div className="mt-4 space-y-2">
 {["How to scale your DTC brand", "The 2026 SEO playbook", "CRO secrets that work"].map((title, i) => (
 <motion.div
 key={title}
 initial={{ opacity: 0, x: -10 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
 className="flex items-center gap-3 rounded-xl border border-surface-border bg-white/70 p-2.5 dark:border-white/10 dark:bg-white/5"
 >
 <span className={cn("h-8 w-8 shrink-0 rounded-lg bg-gradient-to-br", gradient)} />
 <div className="min-w-0 flex-1">
 <p className="truncate text-[11px] font-bold text-surface-heading dark:text-white">{title}</p>
 <div className="mt-1 h-1 w-full rounded-full bg-surface-border dark:bg-white/10">
 <motion.div
 className={cn("h-full rounded-full bg-gradient-to-r", gradient)}
 initial={{ width: 0 }}
 animate={{ width: `${60 + i * 15}%` }}
 transition={{ duration: 1, delay: 0.4 + i * 0.1 }}
 />
 </div>
 </div>
 </motion.div>
 ))}
 </div>

 <div className="mt-4 grid grid-cols-2 gap-2">
 {[
 { v: "120+", k: "Articles/yr" },
 { v: "3.1x", k: "More leads" },
 ].map((m, i) => (
 <Floating key={m.k} index={i}>
 <div className="rounded-xl border border-surface-border bg-white/70 p-2.5 text-center dark:border-white/10 dark:bg-white/5">
 <p className={cn("text-sm font-extrabold bg-gradient-to-br bg-clip-text text-transparent", gradient)}>{m.v}</p>
 <p className="text-[9px] font-medium uppercase tracking-wide text-surface-text dark:text-gray-400">{m.k}</p>
 </div>
 </Floating>
 ))}
 </div>
 </GlassPanel>
 </HeroStage>
 );
}

/** Email - open rate gauge + revenue. */
function EmailVisual({ gradient }: HeroVisualProps) {
 return (
 <HeroStage gradient={gradient}>
 <GlassPanel>
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-2">
 <span className={cn("inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br text-white", gradient)}>
 <Mail className="h-4 w-4" />
 </span>
 <p className="text-xs font-bold text-surface-heading dark:text-white">Email performance</p>
 </div>
 <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">42x ROI</span>
 </div>

 {/* Animated send lines */}
 <div className="mt-4 space-y-2">
 {["Welcome flow", "Abandoned cart", "Win-back"].map((flow, i) => (
 <motion.div
 key={flow}
 initial={{ opacity: 0, x: -15 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
 className="flex items-center gap-3 rounded-xl border border-surface-border bg-white/70 p-2.5 dark:border-white/10 dark:bg-white/5"
 >
 <span className={cn("inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br text-white", gradient)}>
 <Send className="h-3.5 w-3.5" />
 </span>
 <span className="flex-1 text-[11px] font-semibold text-surface-heading dark:text-white">{flow}</span>
 <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">Active</span>
 </motion.div>
 ))}
 </div>

 <div className="mt-4 grid grid-cols-3 gap-2">
 {[
 { v: "38%", k: "Open rate" },
 { v: "+212%", k: "Revenue" },
 { v: "5.2%", k: "CTR" },
 ].map((m, i) => (
 <Floating key={m.k} index={i}>
 <div className="rounded-xl border border-surface-border bg-white/70 p-2.5 text-center dark:border-white/10 dark:bg-white/5">
 <p className="text-sm font-bold text-surface-heading dark:text-white">{m.v}</p>
 <p className="text-[9px] font-medium uppercase tracking-wide text-surface-text dark:text-gray-400">{m.k}</p>
 </div>
 </Floating>
 ))}
 </div>
 </GlassPanel>
 </HeroStage>
 );
}

/** Analytics - live bar chart dashboard. */
function AnalyticsVisual({ gradient }: HeroVisualProps) {
 const bars = [38, 52, 44, 66, 58, 78, 72, 90, 64];
 return (
 <HeroStage gradient={gradient}>
 <GlassPanel>
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-2">
 <span className={cn("inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br text-white", gradient)}>
 <BarChart3 className="h-4 w-4" />
 </span>
 <p className="text-xs font-bold text-surface-heading dark:text-white">Attributed revenue</p>
 </div>
 <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">+218%</span>
 </div>

 <div className="mt-4 flex h-32 items-end gap-1.5">
 {bars.map((h, i) => (
 <motion.div
 key={i}
 initial={{ height: 0 }}
 animate={{ height: `${h}%` }}
 transition={{ duration: 0.7, ease: easeOut, delay: 0.2 + i * 0.06 }}
 className={cn("flex-1 rounded-t-md bg-gradient-to-t", gradient)}
 />
 ))}
 </div>

 <div className="mt-4 grid grid-cols-3 gap-2">
 {[
 { v: "$1.4M", k: "Revenue" },
 { v: "100%", k: "Tracked" },
 { v: "24/7", k: "Dashboard" },
 ].map((m, i) => (
 <Floating key={m.k} index={i}>
 <div className="rounded-xl border border-surface-border bg-white/70 p-2.5 text-center dark:border-white/10 dark:bg-white/5">
 <p className={cn("text-sm font-extrabold bg-gradient-to-br bg-clip-text text-transparent", gradient)}>{m.v}</p>
 <p className="text-[9px] font-medium uppercase tracking-wide text-surface-text dark:text-gray-400">{m.k}</p>
 </div>
 </Floating>
 ))}
 </div>
 </GlassPanel>
 </HeroStage>
 );
}

/** Website Marketing - browser mock with conversion lift. */
function WebsiteVisual({ gradient }: HeroVisualProps) {
 return (
 <HeroStage gradient={gradient}>
 <GlassPanel>
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-2">
 <span className={cn("inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br text-white", gradient)}>
 <Globe className="h-4 w-4" />
 </span>
 <p className="text-xs font-bold text-surface-heading dark:text-white">Conversion rate</p>
 </div>
 <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">+218%</span>
 </div>

 {/* Browser mock */}
 <div className="mt-4 overflow-hidden rounded-2xl border border-surface-border dark:border-white/10">
 <div className="flex items-center gap-1.5 border-b border-surface-border bg-surface-border/30 px-3 py-2 dark:border-white/10 dark:bg-white/5">
 <span className="h-2 w-2 rounded-full bg-red-400" />
 <span className="h-2 w-2 rounded-full bg-amber-400" />
 <span className="h-2 w-2 rounded-full bg-emerald-400" />
 </div>
 <div className="relative h-24 bg-gradient-to-br from-surface-border/20 to-transparent dark:from-white/5">
 {/* Roaming cursor */}
 <motion.div
 animate={{ x: [10, 140, 80, 10], y: [10, 50, 70, 10] }}
 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
 className="absolute"
 >
 <MousePointerClick className={cn("h-5 w-5 bg-gradient-to-br bg-clip-text", gradient)} />
 </motion.div>
 </div>
 </div>

 <div className="mt-4 grid grid-cols-3 gap-2">
 {[
 { v: "8.4%", k: "Conv. rate" },
 { v: "-41%", k: "Bounce" },
 { v: "3.4x", k: "Leads" },
 ].map((m, i) => (
 <Floating key={m.k} index={i}>
 <div className="rounded-xl border border-surface-border bg-white/70 p-2.5 text-center dark:border-white/10 dark:bg-white/5">
 <p className="text-sm font-bold text-surface-heading dark:text-white">{m.v}</p>
 <p className="text-[9px] font-medium uppercase tracking-wide text-surface-text dark:text-gray-400">{m.k}</p>
 </div>
 </Floating>
 ))}
 </div>
 </GlassPanel>
 </HeroStage>
 );
}

/* ================================================================ */
/* DEVELOPMENT */
/* ================================================================ */

/** Web Dev - code editor window. */
function WebDevVisual({ gradient }: HeroVisualProps) {
 return (
 <HeroStage gradient={gradient}>
 <GlassPanel>
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-2">
 <span className={cn("inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br text-white", gradient)}>
 <Code2 className="h-4 w-4" />
 </span>
 <p className="text-xs font-bold text-surface-heading dark:text-white">app/page.tsx</p>
 </div>
 <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">98+ Lighthouse</span>
 </div>

 {/* Code editor mock */}
 <div className="mt-4 overflow-hidden rounded-2xl border border-surface-border bg-surface-heading p-4 font-mono text-[10px] leading-relaxed dark:border-white/10">
 <div className="text-sky-400"><span className="text-gray-500">01</span> export default function Page() {"{"}</div>
 <div className="text-violet-300"><span className="text-gray-500">02</span> const [data, set] = useState();</div>
 <div className="text-emerald-300"><span className="text-gray-500">03</span> return {"("}</div>
 <div className="text-amber-300"><span className="text-gray-500">04</span> {"<Hero gradient={gradient} />"}</div>
 <motion.div
 animate={{ opacity: [1, 0, 1] }}
 transition={{ duration: 1, repeat: Infinity }}
 className="text-pink-400"
 >
 <span className="text-gray-500">05</span> |
 </motion.div>
 </div>

 <div className="mt-4 grid grid-cols-3 gap-2">
 {[
 { v: "<1s", k: "Load time" },
 { v: "100%", k: "Custom" },
 { v: "A+", k: "A11y" },
 ].map((m, i) => (
 <Floating key={m.k} index={i}>
 <div className="rounded-xl border border-surface-border bg-white/70 p-2.5 text-center dark:border-white/10 dark:bg-white/5">
 <p className={cn("text-sm font-extrabold bg-gradient-to-br bg-clip-text text-transparent", gradient)}>{m.v}</p>
 <p className="text-[9px] font-medium uppercase tracking-wide text-surface-text dark:text-gray-400">{m.k}</p>
 </div>
 </Floating>
 ))}
 </div>
 </GlassPanel>
 </HeroStage>
 );
}

/** Mobile App - phone mockup. */
function MobileAppVisual({ gradient }: HeroVisualProps) {
 return (
 <HeroStage gradient={gradient}>
 <GlassPanel>
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-2">
 <span className={cn("inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br text-white", gradient)}>
 <Smartphone className="h-4 w-4" />
 </span>
 <p className="text-xs font-bold text-surface-heading dark:text-white">App preview</p>
 </div>
 <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">4.8 ★</span>
 </div>

 {/* Phone mock */}
 <div className="mt-4 flex justify-center">
 <motion.div
 animate={{ y: [0, -6, 0] }}
 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
 className="h-44 w-24 rounded-[1.5rem] border-4 border-surface-heading bg-surface-heading p-1 shadow-lg dark:border-white/20"
 >
 <div className={cn("flex h-full flex-col gap-1.5 rounded-[1.1rem] bg-gradient-to-br p-2", gradient)}>
 <div className="h-3 rounded-full bg-white/30" />
 <div className="h-8 rounded-lg bg-white/40" />
 <div className="h-8 rounded-lg bg-white/25" />
 <div className="mt-auto h-6 rounded-full bg-white/50" />
 </div>
 </motion.div>
 </div>

 <div className="mt-4 grid grid-cols-3 gap-2">
 {[
 { v: "99.9%", k: "Crash-free" },
 { v: "<2s", k: "Startup" },
 { v: "4.8", k: "Rating" },
 ].map((m, i) => (
 <Floating key={m.k} index={i}>
 <div className="rounded-xl border border-surface-border bg-white/70 p-2.5 text-center dark:border-white/10 dark:bg-white/5">
 <p className="text-sm font-bold text-surface-heading dark:text-white">{m.v}</p>
 <p className="text-[9px] font-medium uppercase tracking-wide text-surface-text dark:text-gray-400">{m.k}</p>
 </div>
 </Floating>
 ))}
 </div>
 </GlassPanel>
 </HeroStage>
 );
}

/* ================================================================ */
/* SECURITY */
/* ================================================================ */

/** Cyber Security - shield with threat scan. */
function CyberSecurityVisual({ gradient }: HeroVisualProps) {
 return (
 <HeroStage gradient={gradient}>
 <GlassPanel>
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-2">
 <span className={cn("inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br text-white", gradient)}>
 <ShieldCheck className="h-4 w-4" />
 </span>
 <p className="text-xs font-bold text-surface-heading dark:text-white">Threat monitor</p>
 </div>
 <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">Protected</span>
 </div>

 {/* Shield + scan */}
 <div className="relative mt-4 flex h-32 items-center justify-center">
 <motion.div
 animate={{ scale: [1, 1.05, 1] }}
 transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
 className={cn("inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg", gradient)}
 >
 <ShieldCheck className="h-10 w-10" />
 </motion.div>
 {/* Scan ring */}
 <motion.div
 animate={{ rotate: 360 }}
 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
 className="absolute h-28 w-28 rounded-full border-2 border-dashed border-emerald-400/40"
 />
 </div>

 {/* Threat log */}
 <div className="mt-4 space-y-1.5">
 {["Port scan blocked", "Malware quarantined", "Firewall updated"].map((log, i) => (
 <motion.div
 key={log}
 initial={{ opacity: 0, x: -10 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
 className="flex items-center gap-2 text-[10px]"
 >
 <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
 <ArrowRight className="h-2.5 w-2.5" />
 </span>
 <span className="font-medium text-surface-heading dark:text-gray-200">{log}</span>
 </motion.div>
 ))}
 </div>
 </GlassPanel>
 </HeroStage>
 );
}

/** Data Protection - padlock + encryption status. */
function DataProtectionVisual({ gradient }: HeroVisualProps) {
 return (
 <HeroStage gradient={gradient}>
 <GlassPanel>
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-2">
 <span className={cn("inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br text-white", gradient)}>
 <Lock className="h-4 w-4" />
 </span>
 <p className="text-xs font-bold text-surface-heading dark:text-white">Encryption status</p>
 </div>
 <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">Secured</span>
 </div>

 {/* Padlock */}
 <div className="mt-4 flex justify-center">
 <motion.div
 animate={{ y: [0, -5, 0] }}
 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
 className="relative"
 >
 <div className={cn("flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg", gradient)}>
 <Lock className="h-9 w-9" />
 </div>
 {/* Encryption stream dots */}
 {[0, 1, 2, 3, 4].map((i) => (
 <motion.span
 key={i}
 animate={{ y: [0, -40], opacity: [0, 1, 0] }}
 transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3, ease: "easeOut" }}
 className={cn("absolute h-1.5 w-1.5 rounded-full bg-gradient-to-br", gradient)}
 style={{ left: `${10 + i * 18}px`, bottom: 0 }}
 />
 ))}
 </motion.div>
 </div>

 {/* Compliance badges */}
 <div className="mt-4 flex flex-wrap justify-center gap-1.5">
 {["GDPR", "CCPA", "HIPAA", "SOC 2"].map((badge, i) => (
 <motion.span
 key={badge}
 initial={{ opacity: 0, scale: 0.8 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
 className={cn("rounded-full border border-surface-border bg-white/70 px-2.5 py-1 text-[10px] font-bold text-surface-heading dark:border-white/10 dark:bg-white/5 dark:text-white", themeAccent(badge))}
 >
 {badge}
 </motion.span>
 ))}
 </div>
 </GlassPanel>
 </HeroStage>
 );
}

/** Map a compliance badge to a subtle accent color (decorative only). */
function themeAccent(_badge: string): string {
 return "";
}

/** Public entry: render the unique hero visual for a given service id. */
export function ServiceHeroVisual({
 slug,
 gradient,
}: {
 slug: string;
 gradient: string;
}) {
 const Visual = heroVisuals[slug] ?? DefaultVisual;
 return <Visual gradient={gradient} />;
}

/** Fallback visual. */
function DefaultVisual({ gradient }: HeroVisualProps) {
 return (
 <HeroStage gradient={gradient}>
 <GlassPanel>
 <div className="flex h-48 items-center justify-center">
 <ArrowUp className={cn("h-12 w-12 bg-gradient-to-br bg-clip-text", gradient)} />
 </div>
 </GlassPanel>
 </HeroStage>
 );
}
