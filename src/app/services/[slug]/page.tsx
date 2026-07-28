import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicePageContent } from "@/components/sections/ServicePageContent";
import { services } from "@/components/navigation/services";
import { serviceDetails } from "@/components/sections/service-details";

/**
 * Pre-render a static page for every service at build time.
 */
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

/**
 * Per-service SEO metadata.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  const detail = serviceDetails[slug];
  if (!service) return { title: "Service not found" };
  return {
    title: `${service.title} - AriesTech`,
    description: detail?.tagline ?? service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  const detail = serviceDetails[slug];

  // Unknown slug - show the 404 page.
  if (!service || !detail) {
    notFound();
  }

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <ServicePageContent slug={slug} />
      </main>
      <Footer />
    </div>
  );
}
