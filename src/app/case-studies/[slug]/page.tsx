import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CaseStudyPageContent } from "@/components/sections/CaseStudyPageContent";
import { caseStudyDetails, getCaseStudy } from "@/components/sections/case-study-details";

/** Pre-render a static page for every case study at build time. */
export function generateStaticParams() {
  return caseStudyDetails.map((cs) => ({ slug: cs.id }));
}

/** Per-case-study SEO metadata. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return { title: "Case study not found" };
  return {
    title: `${cs.clientFull} case study - Aries Tech`,
    description: cs.subheadline,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Validate the slug exists (server-side guard) but pass only the serializable
  // slug string to the client component, which looks up the full data (with
  // icon components) itself. Functions can't cross the server/client boundary.
  if (!getCaseStudy(slug)) {
    notFound();
  }

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <CaseStudyPageContent slug={slug} />
      </main>
      <Footer />
    </div>
  );
}
