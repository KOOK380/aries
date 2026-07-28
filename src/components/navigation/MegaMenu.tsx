"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, LayoutGrid } from "lucide-react";
import { services } from "./services";
import { ServiceCard } from "./ServiceCard";

interface MegaMenuProps {
  /** Fired when any navigable element inside the menu is activated. */
  onNavigate?: () => void;
  className?: string;
}

/**
 * The floating mega-menu panel itself: header badge, two-column service grid
 * driven entirely by the `services` data array, and a gradient CTA bar.
 *
 * Animation (opacity / y / scale) is provided by the parent `Navbar` via an
 * `AnimatePresence` so exit transitions work correctly - this component only
 * declares its own `initial` / `animate` here as a fallback.
 */
export const MegaMenu = forwardRef<HTMLElement, MegaMenuProps>(
  ({ onNavigate, className }, ref) => {
    return (
      <motion.section
        ref={ref}
        role="region"
        aria-label="Digital marketing services"
        initial={{ opacity: 0, y: -8, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -8, scale: 0.98 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className={[
          "glass-panel absolute left-1/2 top-[calc(100%+12px)] z-50 w-[min(720px,calc(100vw-1.5rem))]",
          "-translate-x-1/2 rounded-2xl border border-surface-border/80 p-4 shadow-mega",
          "dark:border-white/10",
          className ?? "",
        ].join(" ")}
      >
        {/* Decorative gradient hairline along the top edge */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent"
        />

        {/* Top header ---------------------------------------------------------- */}
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-brand-gradient text-white shadow-sm">
              <LayoutGrid className="h-3.5 w-3.5" strokeWidth={2.25} />
            </span>
            <h2 className="text-sm font-bold tracking-tight text-surface-heading dark:text-white">
              Our Services
            </h2>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-surface-border bg-white px-2.5 py-0.5 text-[11px] font-semibold text-surface-heading shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-200">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
            {services.length}
          </span>
        </header>

        <div className="my-3 h-px w-full bg-surface-border dark:bg-white/10" />

        {/* Service grid ------------------------------------------------------- */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} onNavigate={onNavigate} />
          ))}
        </div>

        {/* Bottom CTA bar ----------------------------------------------------- */}
        <div className="cta-gradient animate-shimmer mt-3 flex items-center justify-between gap-3 rounded-xl border border-surface-border px-4 py-2.5 dark:border-white/10">
          <p className="text-xs font-semibold text-surface-heading dark:text-white">
            Explore all services
          </p>
          <Link
            href="/services"
            onClick={onNavigate}
            className="group/cta inline-flex items-center gap-1.5 rounded-full bg-brand-gradient px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none"
          >
            View all
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-1" />
          </Link>
        </div>
      </motion.section>
    );
  },
);

MegaMenu.displayName = "MegaMenu";
