import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { CtaBand } from "@/components/sections/CtaBand";

export default function PricingPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="section-stack">
        <PageHeader
          eyebrow="Our services"
          title={
            <>
              Everything we do, <span className="text-gradient">all in one place</span>
            </>
          }
          description="From marketing and analytics to web, mobile and security - explore the full range of services we offer. Tap any service to see the details."
        />

        <ServicesOverview />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
