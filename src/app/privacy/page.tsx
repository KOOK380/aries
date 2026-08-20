import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy - Aries Tech",
  description: "How Aries Tech collects, uses and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Legal"
          title="Privacy Policy"
          description="Last updated: July 2026. This policy explains how we handle your data."
        />
        <section className="py-16 sm:py-24">
          <Container size="narrow">
            <LegalProse>
              <p>
                At Aries Tech, we take your privacy seriously. This policy describes what information
                we collect, how we use it, and the choices you have. By using our website and
                services, you agree to the practices described here.
              </p>

              <h2>Information we collect</h2>
              <p>
                We collect information you provide directly - such as your name, email and company
                when you contact us or request a consultation. We also collect limited analytics data
                (like pages visited) through cookies and similar technologies to improve our site.
              </p>

              <h2>How we use your information</h2>
              <ul>
                <li>To respond to your inquiries and provide our services</li>
                <li>To send you relevant updates, if you've opted in</li>
                <li>To improve our website, content and user experience</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h2>Data sharing</h2>
              <p>
                We never sell your personal information. We share data only with trusted service
                providers who help us operate (such as hosting and analytics), and only when required
                by law.
              </p>

              <h2>Your rights</h2>
              <p>
                Depending on your location, you may have the right to access, correct or delete your
                personal data. To exercise these rights, email us at info@ariestechnologies.ae.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about this policy? Reach out at info@ariestechnologies.ae and we'll be happy
                to help.
              </p>
            </LegalProse>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}

/** Shared long-form legal styling wrapper. */
function LegalProse({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-4 text-surface-text dark:text-gray-300 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-surface-heading dark:[&_h2]:text-white [&_li]:ml-6 [&_li]:list-disc [&_li]:mt-1 [&_p]:leading-relaxed [&_ul]:space-y-1">
      {children}
    </div>
  );
}
