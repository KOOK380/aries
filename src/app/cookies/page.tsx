import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";

export const metadata: Metadata = {
  title: "Cookie Policy - Aries Tech",
  description: "How Aries Tech uses cookies and similar technologies on its website.",
};

export default function CookiesPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Legal"
          title="Cookie Policy"
          description="Last updated: July 2026. This policy explains how we use cookies."
        />
        <section className="py-16 sm:py-24">
          <Container size="narrow">
            <div className="space-y-4 text-surface-text dark:text-gray-300 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-surface-heading dark:[&_h2]:text-white [&_li]:ml-6 [&_li]:list-disc [&_li]:mt-1 [&_p]:leading-relaxed [&_ul]:space-y-1">
              <p>
                Like most websites, Aries Tech uses cookies to make your experience better and to
                understand how our site is used. This policy explains what we use and why.
              </p>

              <h2>What are cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you visit a website. They
                help pages load faster, remember your preferences, and provide analytics.
              </p>

              <h2>Types of cookies we use</h2>
              <ul>
                <li>
                  <strong>Essential:</strong> Required for the site to function correctly
                </li>
                <li>
                  <strong>Analytics:</strong> Help us understand which content is useful
                </li>
                <li>
                  <strong>Preference:</strong> Remember your settings, like dark mode
                </li>
              </ul>

              <h2>Managing cookies</h2>
              <p>
                You can control or delete cookies through your browser settings. Disabling some
                cookies may affect how the site works. Most browsers accept cookies by default, and
                you can change this at any time.
              </p>

              <h2>Third-party services</h2>
              <p>
                Some cookies may be set by third-party tools like analytics providers. We only use
                reputable services that respect your privacy.
              </p>

              <h2>Contact</h2>
              <p>Questions about cookies? Email us at hello@ariestech.example.</p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
