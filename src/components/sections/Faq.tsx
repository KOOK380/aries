"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { BlobField } from "@/components/ui/BlobField";
import { faqItems } from "./content";
import { cn } from "@/lib/utils";

const easeOut = [0.16, 1, 0.3, 1] as const;

/**
 * Accessible accordion FAQ. Each item is a real <button> controlling a region
 * via `aria-expanded` / `aria-controls`, animated with height auto via Framer.
 */
export function Faq() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);
  const baseId = useId();

  return (
    <section id="faq" className="relative py-16 sm:py-24">
      <BlobField count={2} />
      <Container size="narrow">
        <SectionHeading
          eyebrow="Good to know"
          title={
            <>
              Frequently asked <span className="text-gradient">questions</span>
            </>
          }
          description="Everything you need to know before working with us. Still curious? Reach out."
        />

        <div className="mt-8 divide-y divide-surface-border overflow-hidden rounded-3xl border border-surface-border bg-white dark:divide-white/10 dark:border-white/10 dark:bg-white/[0.02]">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `${baseId}-panel-${item.id}`;
            const buttonId = `${baseId}-button-${item.id}`;
            return (
              <div key={item.id}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-surface-border/30 focus-visible:outline-none dark:hover:bg-white/[0.03]"
                  >
                    <span className="text-[15px] font-semibold text-surface-heading dark:text-white">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-brand-primary transition-transform duration-200",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: easeOut }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-surface-text dark:text-gray-400">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-surface-text dark:text-gray-400">
            Still have questions?
          </p>
          <ButtonLink href="/contact" variant="secondary" size="md" withArrow className="mt-3">
            Talk to our team
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
