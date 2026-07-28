"use client";

import { type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

/**
 * Minimal newsletter signup used in the footer. Isolated as a client
 * component so the rest of the footer can stay a server component.
 */
export function NewsletterForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Demo-only. Wire to an API route / email provider in production.
  };

  return (
    <form className="mt-5 flex items-center gap-2" onSubmit={handleSubmit}>
      <label htmlFor="newsletter" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter"
        name="email"
        type="email"
        required
        placeholder="you@company.com"
        className="w-full rounded-full border border-surface-border bg-white px-4 py-2.5 text-sm text-surface-heading placeholder:text-surface-text/70 focus-visible:outline-none dark:border-white/10 dark:bg-white/5 dark:text-white"
      />
      <button
        type="submit"
        aria-label="Subscribe to newsletter"
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white shadow-sm transition-transform hover:-translate-y-0.5"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
