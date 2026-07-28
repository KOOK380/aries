"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";
import { services } from "@/components/navigation/services";
import { serviceDetails, categoryThemes, type ServiceCategory } from "@/components/sections/service-details";
import { cn } from "@/lib/utils";

const easeOut = [0.16, 1, 0.3, 1] as const;

/**
 * Solution packages for the pricing page. Groups services into tiered
 * "bundles" - a distinct layout from the homepage grid, with NO prices.
 * Each package bundles related services and links to the relevant detail pages.
 */
interface Package {
  id: string;
  name: string;
  tagline: string;
  description: string;
  featured: boolean;
  serviceIds: string[];
  highlights: string[];
}

const packages: Package[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Get online and get found",
    description: "Everything a new business needs to launch a professional web presence and start attracting customers.",
    featured: false,
    serviceIds: ["web-development", "web-hosting", "seo-optimization", "email-hosting"],
    highlights: [
      "A fast, custom-built website",
      "Reliable hosting with SSL & backups",
      "Foundational SEO to get ranked",
      "Branded business email",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Scale fast across channels",
    description: "Our most popular package for growing brands that want to build, market, and scale aggressively - all under one roof.",
    featured: true,
    serviceIds: [
      "web-development",
      "seo-optimization",
      "google-ads",
      "social-media-marketing",
      "content-marketing",
      "analytics-reporting",
      "cyber-security",
      "cloud-hosting",
    ],
    highlights: [
      "Full-funnel marketing engine",
      "Conversion-focused website",
      "Paid + organic acquisition",
      "Analytics, security & cloud included",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Full-stack, fully managed",
    description: "A complete digital operations package for established companies - development, infrastructure, security and marketing at scale.",
    featured: false,
    serviceIds: [
      "web-development",
      "mobile-app-development",
      "aws-solutions",
      "managed-hosting",
      "dedicated-server",
      "database-hosting",
      "cyber-security",
      "data-protection",
      "seo-optimization",
      "google-ads",
      "analytics-reporting",
    ],
    highlights: [
      "Web, mobile & cloud infrastructure",
      "Dedicated servers & managed databases",
      "Enterprise-grade security & compliance",
      "Full marketing & analytics suite",
    ],
  },
];

/** Category tiles shown below the packages - a quick visual index. */
const categoryIndex: { category: ServiceCategory; blurb: string }[] = [
  { category: "marketing", blurb: "SEO, paid media, social, content & email" },
  { category: "development", blurb: "Web & mobile apps built to scale" },
  { category: "security", blurb: "Security audits, compliance & monitoring" },
  { category: "cloud", blurb: "Hosting, servers, databases & AWS" },
];

export function ServicePackages() {
  return (
    <>
      {/* ===== Packages ===== */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg, i) => {
              const theme = categoryThemes.marketing; // packages use the brand gradient
              const includedServices = pkg.serviceIds
                .map((id) => services.find((s) => s.id === id))
                .filter(Boolean);

              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, ease: easeOut, delay: i * 0.08 }}
                  className="h-full"
                >
                  <TiltCard maxTilt={pkg.featured ? 5 : 7} glare={false} className="h-full">
                    <div
                      className={cn(
                        "relative flex h-full flex-col rounded-3xl border p-6",
                        pkg.featured
                          ? "border-transparent bg-surface-heading text-white shadow-mega ring-2 ring-brand-primary"
                          : "border-surface-border bg-white dark:border-white/10 dark:bg-white/[0.02]",
                      )}
                    >
                      {pkg.featured && (
                        <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-brand-gradient px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-glow">
                          <Sparkles className="h-3 w-3" />
                          Most popular
                        </span>
                      )}

                      <h3 className={cn("text-xl font-extrabold tracking-tight", pkg.featured ? "text-white" : "text-surface-heading dark:text-white")}>
                        {pkg.name}
                      </h3>
                      <p className={cn("mt-0.5 text-sm font-semibold", pkg.featured ? "text-brand-secondary" : "text-brand-primary")}>
                        {pkg.tagline}
                      </p>
                      <p className={cn("mt-3 text-sm leading-relaxed", pkg.featured ? "text-white/75" : "text-surface-text dark:text-gray-400")}>
                        {pkg.description}
                      </p>

                      {/* Highlights */}
                      <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                        {pkg.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2.5">
                            <span
                              className={cn(
                                "mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                                pkg.featured ? "bg-brand-primary text-white" : "bg-brand-primary/10 text-brand-primary",
                              )}
                            >
                              <Check className="h-2.5 w-2.5" strokeWidth={3} />
                            </span>
                            <span className={cn("text-sm", pkg.featured ? "text-white/90" : "text-surface-text dark:text-gray-300")}>
                              {h}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Included services */}
                      <div className="mt-5 border-t pt-4" style={{ borderColor: pkg.featured ? "rgba(255,255,255,0.15)" : undefined }}>
                        <p className={cn("mb-2 text-[10px] font-bold uppercase tracking-[0.16em]", pkg.featured ? "text-white/60" : "text-surface-text dark:text-gray-500")}>
                          Includes {includedServices.length} services
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {includedServices.slice(0, 6).map((s) => (
                            <Link
                              key={s!.id}
                              href={s!.href}
                              className={cn(
                                "rounded-full border px-2 py-0.5 text-[10px] font-semibold transition-colors",
                                pkg.featured
                                  ? "border-white/20 bg-white/10 text-white/90 hover:bg-white/20"
                                  : "border-surface-border bg-surface-border/40 text-surface-text hover:text-brand-primary dark:border-white/10 dark:bg-white/5 dark:text-gray-300",
                              )}
                            >
                              {s!.title}
                            </Link>
                          ))}
                          {includedServices.length > 6 && (
                            <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-semibold", pkg.featured ? "text-white/60" : "text-surface-text dark:text-gray-500")}>
                              +{includedServices.length - 6} more
                            </span>
                          )}
                        </div>
                      </div>

                      <ButtonLink
                        href="/contact"
                        variant={pkg.featured ? "primary" : "secondary"}
                        size="md"
                        withArrow
                        className="mt-6 w-full"
                      >
                        Get {pkg.name}
                      </ButtonLink>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>

          <p className="mt-6 text-center text-xs text-surface-text dark:text-gray-500">
            Every package is fully customizable. Tell us your goals and we'll tailor the mix - with no lock-in contracts.
          </p>
        </Container>
      </section>

      {/* ===== Browse by category ===== */}
      <section className="bg-surface-base/60 py-16 sm:py-24 dark:bg-white/[0.02]">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-primary dark:border-white/10 dark:bg-white/5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
              Browse by category
            </span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-surface-heading sm:text-4xl dark:text-white">
              Or pick <span className="text-gradient">individual services</span>
            </h2>
            <p className="mt-4 text-base text-surface-text dark:text-gray-400">
              {services.length} services across four disciplines. Tap any to see the full details.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {categoryIndex.map((cat, i) => {
              const theme = categoryThemes[cat.category];
              const count = services.filter((s) => serviceDetails[s.id]?.category === cat.category).length;
              return (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, ease: easeOut, delay: i * 0.06 }}
                  className="group h-full"
                >
                  <Link
                    href="/#services"
                    className={cn(
                      "flex h-full flex-col rounded-2xl border border-surface-border bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.02]",
                    )}
                  >
                    <span className={cn("inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md", theme.gradient)}>
                      <Sparkles className="h-5 w-5" strokeWidth={2.25} />
                    </span>
                    <h3 className="mt-4 text-base font-bold text-surface-heading dark:text-white">{theme.label}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-surface-text dark:text-gray-400">{cat.blurb}</p>
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <span className="text-xs font-semibold text-brand-primary">{count} services</span>
                      <ArrowUpRight className="h-4 w-4 text-surface-text/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-primary" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
