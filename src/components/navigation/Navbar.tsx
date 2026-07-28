"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, Sparkles } from "lucide-react";
import { MegaMenu } from "./MegaMenu";
import { services } from "./services";
import { ServiceCard } from "./ServiceCard";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { LogoIcon } from "@/components/ui/LogoIcon";
import { cn } from "@/lib/utils";

const PRIMARY_LINKS = [
 { label: "Home", href: "/" },
 { label: "About", href: "/about" },
 { label: "Pricing", href: "/pricing" },
 { label: "Contact", href: "/contact" },
] as const;

/**
 * Top-level navigation bar.
 *
 * Desktop: hovering, focusing or clicking "Services" reveals a floating
 * `MegaMenu`. The whole trigger keeps `aria-expanded`/`aria-controls` in sync
 * and closes on `Escape` or outside clicks.
 *
 * Mobile (< md): the hamburger toggles a full-width drawer where "Services"
 * expands into a single-column accordion of `ServiceCard`s.
 */
export function Navbar() {
 const [isDesktopOpen, setIsDesktopOpen] = useState(false);
 const [isMobileOpen, setIsMobileOpen] = useState(false);
 const [isServicesExpanded, setIsServicesExpanded] = useState(false);

 const navRef = useRef<HTMLElement | null>(null);
 const servicesMenuId = useId();
 const servicesTriggerId = useId();

 /* ----- Close the desktop menu on Escape or click-outside -------------- */
 useEffect(() => {
 if (!isDesktopOpen) return;

 const handleClickOutside = (event: MouseEvent) => {
 if (navRef.current && !navRef.current.contains(event.target as Node)) {
 setIsDesktopOpen(false);
 }
 };
 const handleEscape = (event: KeyboardEvent) => {
 if (event.key === "Escape") {
 setIsDesktopOpen(false);
 setIsMobileOpen(false);
 }
 };

 document.addEventListener("mousedown", handleClickOutside);
 document.addEventListener("keydown", handleEscape);
 return () => {
 document.removeEventListener("mousedown", handleClickOutside);
 document.removeEventListener("keydown", handleEscape);
 };
 }, [isDesktopOpen]);

 /* ----- Lock body scroll while the mobile drawer is open --------------- */
 useEffect(() => {
 if (!isMobileOpen) return;
 const original = document.body.style.overflow;
 document.body.style.overflow = "hidden";
 return () => {
 document.body.style.overflow = original;
 };
 }, [isMobileOpen]);

 const closeMobile = useCallback(() => {
 setIsMobileOpen(false);
 setIsServicesExpanded(false);
 }, []);

 const triggerClass = cn(
 "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
 "focus-visible:outline-none",
 isDesktopOpen
 ? "text-brand-primary"
 : "text-surface-heading hover:text-brand-primary dark:text-white dark:hover:text-brand-secondary",
 );

 return (
 <header className="sticky top-0 z-40 w-full">
 <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8">
 <nav
 ref={navRef}
 aria-label="Primary"
 className="glass-panel relative flex items-center justify-between gap-4 rounded-full border border-surface-border px-3.5 py-2 shadow-lg dark:border-white/10"
 >
 {/* Brand ---------------------------------------------------------- */}
 <Link
 href="/"
 className="flex items-center gap-2.5 rounded-full px-2 py-1 focus-visible:outline-none"
 >
 <LogoIcon />
 <span className="text-lg font-extrabold tracking-tight text-surface-heading dark:text-white">
 Aries<span className="text-gradient">Tech</span>
 </span>
 </Link>

 {/* Desktop links -------------------------------------------------- */}
 <ul className="hidden items-center gap-1 md:flex">
 {/* Services trigger (mega menu) */}
 <li
 className="relative"
 onMouseEnter={() => setIsDesktopOpen(true)}
 onMouseLeave={() => setIsDesktopOpen(false)}
 >
 <button
 id={servicesTriggerId}
 type="button"
 aria-haspopup="true"
 aria-expanded={isDesktopOpen}
 aria-controls={servicesMenuId}
 onClick={() => setIsDesktopOpen((prev) => !prev)}
 onFocus={() => setIsDesktopOpen(true)}
 className={triggerClass}
 >
 Services
 <ChevronDown
 className={cn(
 "h-4 w-4 transition-transform duration-200",
 isDesktopOpen && "rotate-180",
 )}
 />
 </button>

 <AnimatePresence>
 {isDesktopOpen && (
 <MegaMenu
 key="mega-menu"
 onNavigate={() => setIsDesktopOpen(false)}
 />
 )}
 </AnimatePresence>
 </li>

 {PRIMARY_LINKS.map((link) => (
 <li key={link.href}>
 <Link
 href={link.href}
 className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-surface-heading transition-colors hover:text-brand-primary focus-visible:outline-none dark:text-white dark:hover:text-brand-secondary"
 >
 {link.label}
 </Link>
 </li>
 ))}
 </ul>

 {/* Right-side actions -------------------------------------------- */}
 <div className="flex items-center gap-2">
 <ThemeToggle />
 <Link
 href="/contact"
 className="hidden rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none sm:inline-flex"
 >
 Get a quote
 </Link>

 {/* Mobile hamburger */}
 <button
 type="button"
 className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-surface-border bg-white text-surface-heading transition-colors hover:bg-surface-border/60 md:hidden dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
 aria-label={isMobileOpen ? "Close menu" : "Open menu"}
 aria-expanded={isMobileOpen}
 aria-controls="mobile-menu"
 onClick={() => setIsMobileOpen((prev) => !prev)}
 >
 {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
 </button>
 </div>
 </nav>
 </div>

 {/* Mobile drawer ---------------------------------------------------- */}
 <AnimatePresence>
 {isMobileOpen && (
 <motion.div
 id="mobile-menu"
 role="dialog"
 aria-label="Mobile navigation"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{ duration: 0.2 }}
 className="fixed inset-0 z-30 md:hidden"
 >
 {/* Scrim */}
 <button
 type="button"
 aria-label="Close menu"
 tabIndex={-1}
 onClick={closeMobile}
 className="absolute inset-0 bg-surface-heading/40 dark:bg-black/60"
 />

 {/* Panel */}
 <motion.div
 initial={{ x: "100%" }}
 animate={{ x: 0 }}
 exit={{ x: "100%" }}
 transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
 className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col gap-6 overflow-y-auto bg-white p-6 shadow-2xl dark:bg-surface-heading"
 >
 <div className="flex items-center justify-between">
 <span className="text-base font-bold text-surface-heading dark:text-white">
 Navigation
 </span>
 <button
 type="button"
 aria-label="Close menu"
 onClick={closeMobile}
 className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-surface-border text-surface-heading transition-colors hover:bg-surface-border/60 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
 >
 <X className="h-5 w-5" />
 </button>
 </div>

 {/* Services accordion */}
 <div className="rounded-2xl border border-surface-border dark:border-white/10">
 <button
 type="button"
 aria-expanded={isServicesExpanded}
 aria-controls="mobile-services"
 onClick={() => setIsServicesExpanded((prev) => !prev)}
 className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-sm font-semibold text-surface-heading dark:text-white"
 >
 <span className="flex items-center gap-2">
 <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-brand-gradient text-white">
 <Sparkles className="h-3.5 w-3.5" />
 </span>
 Services
 </span>
 <ChevronDown
 className={cn(
 "h-4 w-4 text-surface-text transition-transform duration-200 dark:text-gray-400",
 isServicesExpanded && "rotate-180",
 )}
 />
 </button>

 <AnimatePresence initial={false}>
 {isServicesExpanded && (
 <motion.div
 id="mobile-services"
 key="mobile-services"
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: "auto", opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
 className="overflow-hidden"
 >
 <div className="flex flex-col gap-2 px-3 pb-4 pt-1">
 {services.map((service) => (
 <ServiceCard
 key={service.id}
 service={service}
 onNavigate={closeMobile}
 />
 ))}
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>

 {/* Primary links */}
 <nav aria-label="Primary pages" className="flex flex-col gap-1">
 {PRIMARY_LINKS.map((link) => (
 <Link
 key={link.href}
 href={link.href}
 onClick={closeMobile}
 className="rounded-xl px-4 py-3 text-sm font-semibold text-surface-heading transition-colors hover:bg-surface-border/60 focus-visible:outline-none dark:text-white dark:hover:bg-white/10"
 >
 {link.label}
 </Link>
 ))}
 </nav>

 <Link
 href="/contact"
 onClick={closeMobile}
 className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-glow"
 >
 Get a quote
 </Link>
 </motion.div>
 </motion.div>
 )}
 </AnimatePresence>
 </header>
 );
}
