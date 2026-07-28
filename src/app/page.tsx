import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Stats } from "@/components/sections/Stats";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { Integrations } from "@/components/sections/Integrations";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="section-stack">
        <Hero />
        <LogoCloud />
        <ServicesGrid />
        <Stats />
        <WhyUs />
        <Process />
        <CaseStudies />
        <Testimonials />
        <Integrations />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
