import { Container } from "@/components/ui/Container";
import { clientLogos } from "./content";

/**
 * Compact "trusted by" strip. Wordmarks are rendered as styled text rather
 * than logo assets to keep the bundle asset-free.
 */
export function LogoCloud() {
  return (
    <section className="border-y border-surface-border bg-surface-base/60 py-8 dark:border-white/10 dark:bg-white/[0.02]">
      <Container>
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-10">
          <p className="shrink-0 text-center text-xs font-semibold uppercase tracking-[0.18em] text-surface-text lg:text-left dark:text-gray-400">
            Trusted by fast-growing brands
          </p>
          <div className="grid w-full grid-cols-2 items-center gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
            {clientLogos.map((name) => (
              <span
                key={name}
                className="text-center text-base font-bold tracking-tight text-surface-heading/70 transition-colors hover:text-surface-heading dark:text-white/50 dark:hover:text-white"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
