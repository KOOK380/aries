import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { contactDetails } from "@/components/sections/content";

export default function ContactPage() {
 return (
 <div className="relative min-h-screen">
 <Navbar />
 <main className="section-stack">
 <PageHeader
 eyebrow="Contact"
 title={
 <>
 Let's build your <span className="text-gradient">growth engine</span>
 </>
 }
 description="Tell us where you want to go and we'll show you the fastest path there. Expect a reply within one business day."
 />

 <section className="py-12 sm:py-16">
 <Container className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:gap-10">
 <ContactForm />

 <aside className="flex flex-col gap-4">
 <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-white p-6 shadow-sm dark:border-white/10 dark:bg-surface-heading">
 <h3 className="relative text-sm font-bold uppercase tracking-[0.16em] text-brand-primary">
 Talk to a human
 </h3>
 <ul className="relative mt-4 space-y-4">
 {contactDetails.map((d) => {
 const Icon = d.icon;
 return (
 <li key={d.label} className="flex items-center gap-3">
 <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-sm">
 <Icon className="h-5 w-5" />
 </span>
 <div>
 <p className="text-xs font-medium uppercase tracking-wide text-surface-text dark:text-gray-500">
 {d.label}
 </p>
 <p className="text-sm font-semibold text-surface-heading dark:text-white">
 {d.value}
 </p>
 </div>
 </li>
 );
 })}
 </ul>
 </div>

 <div className="relative overflow-hidden rounded-3xl bg-brand-gradient p-6 text-white shadow-glow">
 <div className="relative">
 <h3 className="text-lg font-bold">Prefer to book directly?</h3>
 <p className="mt-1.5 text-sm text-white/85">
 Grab a 30-min slot and walk away with a tailored plan - free.
 </p>
 <a
 href="#"
 className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-primary transition-transform hover:-translate-y-0.5"
 >
 Book a 30-min call
 </a>
 </div>
 </div>
 </aside>
 </Container>
 </section>
 </main>
 <Footer />
 </div>
 );
}
