import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";

export const metadata: Metadata = {
  title: "Terms of Service - Aries Tech",
  description: "The terms and conditions for using Aries Tech's website and services.",
};

export default function TermsPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Legal"
          title="Terms of Service"
          description="Last updated: July 2026. These terms govern your use of our website and services."
        />
        <section className="py-16 sm:py-24">
          <Container size="narrow">
            <div className="space-y-4 text-surface-text dark:text-gray-300 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-surface-heading dark:[&_h2]:text-white [&_li]:ml-6 [&_li]:list-disc [&_li]:mt-1 [&_p]:leading-relaxed [&_ul]:space-y-1">
              <p>
                Welcome to Aries Tech. By accessing our website or engaging our services, you agree
                to these terms. Please read them carefully.
              </p>

              <h2>Use of our services</h2>
              <p>
                You agree to use our website and services lawfully and not to misuse, disrupt or
                attempt to gain unauthorized access to any part of our systems.
              </p>

              <h2>Engagements</h2>
              <ul>
                <li>Specific project terms are defined in a separate agreement</li>
                <li>Fees, timelines and deliverables are agreed before work begins</li>
                <li>Either party may end an engagement per the agreed terms</li>
              </ul>

              <h2>Intellectual property</h2>
              <p>
                Unless otherwise agreed in writing, all work we create for you becomes your property
                upon full payment. We may showcase completed work in our portfolio.
              </p>

              <h2>Limitation of liability</h2>
              <p>
                Our services are provided in good faith. To the fullest extent permitted by law, we
                are not liable for indirect or consequential damages arising from the use of our
                website or services.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about these terms? Email us at info@ariestechnologies.ae.
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
