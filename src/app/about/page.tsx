import { Check, Heart, Target, Users } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  {
    icon: Target,
    title: "Outcomes over output",
    body: "We measure ourselves on impact and momentum, not deliverables. If it doesn't move things forward, we don't do it.",
  },
  {
    icon: Heart,
    title: "Radical transparency",
    body: "Honest reporting, honest feedback, honest communication. You'll always know what's working, what isn't, and why.",
  },
  {
    icon: Users,
    title: "True partnership",
    body: "We embed with your team - Slack, weekly sprints, shared dashboards. We win when you win.",
  },
];

const milestones = [
  { year: "2018", text: "Founded as a two-person digital studio." },
  { year: "2020", text: "Grew into a full-funnel studio." },
  { year: "2022", text: "Brought creative production fully in-house." },
  { year: "2024", text: "Expanded to serve brands globally." },
  { year: "2026", text: "Named top performance partner of the year." },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="section-stack">
        <PageHeader
          eyebrow="Our story"
          title={
            <>
              We're builders obsessed with <span className="text-gradient">measurable growth</span>
            </>
          }
          description="AriesTech started as a two-person studio and grew into a full-service digital partner - but the obsession with results hasn't changed."
        />

        {/* Mission */}
        <section className="py-16 sm:py-20">
          <Container className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Our mission"
                title={
                  <>
                    Replace vendor juggling with <span className="text-gradient">one accountable team</span>
                  </>
                }
                description="Most brands juggle a marketing agency, a dev shop, a freelancer and a security consultant - and spend half their time coordinating them. We bring design, development, marketing and security under one roof so nothing slips through the cracks."
              />
              <ul className="mt-6 space-y-3">
                {[
                  "Single point of accountability across every channel",
                  "In-house creative means no quality drift",
                  "Weekly sprints instead of quarterly reviews",
                  "Clear focus on outcomes, not hours",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-surface-heading dark:text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-surface-border bg-gradient-to-br from-white to-surface-border/40 p-8 shadow-sm dark:border-white/10 dark:from-white/[0.04] dark:to-transparent">
              <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-brand-primary">
                The journey
              </h3>
              <ol className="mt-5 space-y-5">
                {milestones.map((m) => (
                  <li key={m.year} className="relative pl-6">
                    <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-brand-gradient" />
                    <p className="text-sm font-bold text-surface-heading dark:text-white">{m.year}</p>
                    <p className="text-sm text-surface-text dark:text-gray-400">{m.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </section>

        {/* Values */}
        <section className="bg-surface-base/60 py-16 sm:py-20 dark:bg-white/[0.02]">
          <Container>
            <SectionHeading
              eyebrow="What we value"
              title={
                <>
                  Principles we <span className="text-gradient">won't compromise</span> on
                </>
              }
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <article
                    key={value.title}
                    className="rounded-2xl border border-surface-border bg-white p-6 transition-transform hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.02]"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-sm">
                      <Icon className="h-5 w-5" strokeWidth={2.25} />
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-surface-heading dark:text-white">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-surface-text dark:text-gray-400">
                      {value.body}
                    </p>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
