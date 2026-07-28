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
          "glass-panel absolute left-1/2 top-[calc(100%+14px)] z-50 w-[min(900px,calc(100vw-2rem))]",
          "-translate-x-1/2 rounded-3xl border border-surface-border/80 p-8 shadow-mega",
          "dark:border-white/10",
          className ?? "",
        ].join(" ")}
      >
        {/* Decorative gradient hairline along the top edge */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent"
        />

        {/* Top header ---------------------------------------------------------- */}
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-sm">
              <LayoutGrid className="h-[18px] w-[18px]" strokeWidth={2.25} />
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-surface-text dark:text-gray-400">
                Browse
              </p>
              <h2 className="text-xl font-bold tracking-tight text-surface-heading dark:text-white">
                Digital Marketing
              </h2>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-surface-border bg-white px-3 py-1 text-xs font-semibold text-surface-heading shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-200">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
            {services.length} Services
          </span>
        </header>

        <div className="my-6 h-px w-full bg-surface-border dark:bg-white/10" />

        {/* Service grid ------------------------------------------------------- */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} onNavigate={onNavigate} />
          ))}
        </div>

        {/* Bottom CTA bar ----------------------------------------------------- */}
        <div className="cta-gradient animate-shimmer mt-7 flex flex-col items-start justify-between gap-4 rounded-2xl border border-surface-border p-5 sm:flex-row sm:items-center dark:border-white/10">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/70 text-brand-primary shadow-sm dark:bg-white/10"
            >
              <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.25} />
            </span>
            <div>
              <p className="text-[13px] font-medium text-surface-text dark:text-gray-300">
                Not sure where to start?
              </p>
              <p className="text-base font-bold text-surface-heading dark:text-white">
                Need a full growth plan?
              </p>
            </div>
          </div>

          <Link
            href="/services"
            onClick={onNavigate}
            className="group/cta inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 focus-visible:outline-none sm:w-auto"
          >
            Explore All Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
          </Link>
        </div>
      </motion.section>
    );
  },
);

MegaMenu.displayName = "MegaMenu";
