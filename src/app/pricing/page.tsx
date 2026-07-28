import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServicePackages } from "@/components/sections/ServicePackages";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";

export default function PricingPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="section-stack">
        <PageHeader
          eyebrow="Packages"
          title={
            <>
              Bundled solutions, <span className="text-gradient">built to fit</span>
            </>
          }
          description="Three ready-made packages that combine our most popular services - or browse by category and pick exactly what you need. Fully customizable, no lock-in."
        />

        <ServicePackages />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
