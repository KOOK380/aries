"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TiltCard } from "@/components/ui/TiltCard";
import { services } from "@/components/navigation/services";
import {
  serviceDetails,
  categoryThemes,
  type ServiceCategory,
} from "@/components/sections/service-details";
import { cn } from "@/lib/utils";

const easeOut = [0.16, 1, 0.3, 1] as const;

/**
 * Services overview - all 12 services grouped by category, with NO prices.
 * Replaces the old pricing tiers. Each card links to its dedicated service
 * page where the full details live.
 */
export function ServicesOverview() {
  // Group services by category, preserving a stable category order.
  const grouped = (["marketing", "development", "security"] as ServiceCategory[])
    .map((cat) => ({
      category: cat,
      theme: categoryThemes[cat],
      items: services.filter((s) => serviceDetails[s.id]?.category === cat),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        {grouped.map((group, gi) => (
          <div key={group.category} className={gi > 0 ? "mt-14" : ""}>
            {/* Category header */}
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-sm",
                  group.theme.gradient,
                )}
              >
                <span className="h-2.5 w-2.5 rounded-full bg-white" />
              </span>
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-surface-heading dark:text-white">
                  {group.theme.label}
                </h2>
                <p className="text-sm text-surface-text dark:text-gray-400">
                  {group.items.length} {group.items.length === 1 ? "service" : "services"}
                </p>
              </div>
            </div>

            {/* Service cards for this category */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
              {group.items.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, ease: easeOut, delay: (i % 4) * 0.05 }}
                    className="group h-full"
                  >
                    <TiltCard maxTilt={8} className="h-full rounded-2xl">
                      <Link
                        href={service.href}
                        className="flex h-full flex-col rounded-2xl border border-surface-border bg-white p-5 shadow-sm transition-colors hover:border-brand-primary/30 focus-visible:outline-none dark:border-white/10 dark:bg-white/[0.02]"
                      >
                        <div className="flex items-center justify-between">
                          <motion.span
                            whileHover={{ scale: 1.12, rotate: -5 }}
                            transition={{ duration: 0.25, ease: easeOut }}
                            style={{ transform: "translateZ(30px)" }}
                            className={cn(
                              "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md",
                              group.theme.gradient,
                            )}
                          >
                            <Icon className="h-5 w-5" strokeWidth={2.25} />
                          </motion.span>
                          <ArrowUpRight className="h-4 w-4 text-surface-text/50 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-primary dark:text-gray-500" />
                        </div>

                        <h3 className="mt-4 text-base font-bold text-surface-heading transition-colors group-hover:text-brand-primary dark:text-white dark:group-hover:text-brand-secondary">
                          {service.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-surface-text dark:text-gray-400">
                          {service.description}
                        </p>

                        <span className="mt-auto pt-4 text-xs font-semibold text-brand-primary">
                          Learn more
                        </span>
                      </Link>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
