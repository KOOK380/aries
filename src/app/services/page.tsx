import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { CtaBand } from "@/components/sections/CtaBand";

export default function ServicesIndexPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="section-stack">
        <PageHeader
          eyebrow="Our services"
          title={
            <>
              20 services, <span className="text-gradient">four disciplines</span>
            </>
          }
          description="From marketing and analytics to web, mobile, security and cloud infrastructure - explore everything we do. Tap any service to see the full details."
        />

        <ServicesOverview />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
