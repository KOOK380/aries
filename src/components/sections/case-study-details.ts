import {
  TrendingUp,
  ShoppingCart,
  Target,
  Code2,
  Zap,
  Gauge,
  ShieldCheck,
  Lock,
  Bug,
  Users,
  Clock,
  Award,
  type LucideIcon,
} from "lucide-react";

/**
 * Detailed case study data. Company names are intentionally masked (e.g.
 * "V**L", "N**D") for client confidentiality. Each entry powers a full case
 * study detail page plus the homepage preview cards.
 *
 * One case study per discipline: development, marketing, security.
 */
export interface CaseStudyChallenge {
  title: string;
  body: string;
}

export interface CaseStudySolution {
  title: string;
  body: string;
}

export interface CaseStudyDetail {
  /** Stable id used for the route slug. */
  id: string;
  /** Masked client name, e.g. "V**L". */
  client: string;
  /** Full (masked) company descriptor for the hero. */
  clientFull: string;
  /** Discipline: development | marketing | security. */
  discipline: "development" | "marketing" | "security";
  /** Short card headline (homepage preview). */
  headline: string;
  /** Longer subheadline for the detail page. */
  subheadline: string;
  /** 1-2 line summary. */
  summary: string;
  /** Accent gradient classes. */
  accent: string;
  /** Tags shown as chips. */
  tags: string[];
  /** Hero stat tiles. */
  metrics: { value: string; label: string }[];
  /** Project metadata. */
  meta: { label: string; value: string }[];
  /** The challenge section. */
  challenges: CaseStudyChallenge[];
  /** The solution section. */
  solutions: CaseStudySolution[];
  /** Key outcomes / results. */
  outcomes: { title: string; description: string; icon: LucideIcon }[];
  /** Tech / channels / tools stack. */
  stack: string[];
  /** Pull-quote testimonial (masked). */
  quote: { text: string; author: string; role: string };
  /** Timeline / engagement duration. */
  duration: string;
}

export const caseStudyDetails: CaseStudyDetail[] = [
  /* ================================================================ */
  /* DEVELOPMENT                                                       */
  /* ================================================================ */
  {
    id: "vel-commerce-platform",
    client: "V**L",
    clientFull: "V**L Commerce",
    discipline: "development",
    headline: "Rebuilt a legacy store into a sub-second commerce platform.",
    subheadline:
      "How we migrated a high-traffic retailer from a slow monolith to a modern Next.js storefront - and cut load times by 89%.",
    summary:
      "V**L was losing sales to a sluggish, fragile checkout. We rebuilt their storefront on a modern stack, shipped in 12 weeks, and turned speed into their biggest conversion lever.",
    accent: "from-sky-500 to-indigo-600",
    tags: ["Web Development", "E-commerce", "Performance", "Next.js"],
    metrics: [
      { value: "-89%", label: "Page load time" },
      { value: "+34%", label: "Conversion rate" },
      { value: "98", label: "Lighthouse score" },
    ],
    meta: [
      { label: "Industry", value: "E-commerce / Retail" },
      { label: "Engagement", value: "Full rebuild + handoff" },
      { label: "Duration", value: "12 weeks" },
      { label: "Team size", value: "5 engineers" },
    ],
    challenges: [
      {
        title: "A monolith buckling under traffic",
        body: "V**L's storefront was a single legacy codebase where every page rendered server-side on a struggling CMS. During sales events, pages took 5+ seconds to load and checkout would regularly time out, costing them a measurable chunk of revenue every promotion.",
      },
      {
        title: "No path to iterate fast",
        body: "Every small change required a release cycle measured in days, and the codebase had no tests. The team was afraid to ship, so the product stagnated while competitors pulled ahead.",
      },
    ],
    solutions: [
      {
        title: "A modern Next.js architecture",
        body: "We rebuilt the storefront on Next.js with a headless CMS, server components for fast first paint, and edge rendering for global sub-second loads. The new architecture is modular, typed, and testable.",
      },
      {
        title: "Obsessive performance engineering",
        body: "We optimized images, code-split aggressively, cached at the edge, and tuned Core Web Vitals until Lighthouse hit 98. The checkout was rebuilt as a fast, resilient flow with optimistic UI.",
      },
    ],
    outcomes: [
      { title: "Sub-second loads", description: "Average page load dropped from 5.2s to under 1s.", icon: Zap },
      { title: "Higher conversion", description: "Conversion rate rose 34% thanks to speed + smoother checkout.", icon: ShoppingCart },
      { title: "Ship in hours", description: "New CI/CD pipeline cut release cycles from days to hours.", icon: Code2 },
      { title: "Owned codebase", description: "Clean, documented code the in-house team now maintains solo.", icon: Gauge },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS", "PostgreSQL", "Edge CDN", "Vitest"],
    quote: {
      text: "Our store went from something customers complained about to something they don't even notice - because it just works, instantly. That's the highest compliment an e-commerce site can get.",
      author: "Head of Digital, V**L",
      role: "E-commerce Director",
    },
    duration: "12-week rebuild, ongoing partnership",
  },

  /* ================================================================ */
  /* MARKETING                                                         */
  /* ================================================================ */
  {
    id: "nrd-dtc-growth",
    client: "N**D",
    clientFull: "N**D Skincare",
    discipline: "marketing",
    headline: "Scaled a DTC skincare brand from 6 to 7 figures in 6 months.",
    subheadline:
      "How we built a full-funnel paid + email engine for N**D that tripled ROAS and turned a stalled brand into a category contender.",
    summary:
      "N**D had a great product but plateaued revenue and rising ad costs. We rebuilt their paid media, email automation, and creative testing system - and compounded the wins into 7-figure run rate.",
    accent: "from-violet-600 to-fuchsia-500",
    tags: ["Performance Marketing", "Paid Social", "Email", "CRO"],
    metrics: [
      { value: "3.4x", label: "Return on ad spend" },
      { value: "+412%", label: "Revenue in 6 months" },
      { value: "-38%", label: "Cost per acquisition" },
    ],
    meta: [
      { label: "Industry", value: "DTC / Beauty" },
      { label: "Engagement", value: "Growth retainer" },
      { label: "Duration", value: "6 months" },
      { label: "Channels", value: "Meta, Google, Email" },
    ],
    challenges: [
      {
        title: "Plateaued revenue at 6 figures",
        body: "N**D had strong early traction but hit a wall. Every additional dollar of ad spend brought diminishing returns, and their cost per acquisition was creeping up month over month as competition intensified.",
      },
      {
        title: "Email was an afterthought",
        body: "Despite a sizeable list, email contributed less than 5% of revenue. There were no flows, no segmentation, and no testing - just occasional batch sends that landed mostly in spam.",
      },
    ],
    solutions: [
      {
        title: "A full-funnel paid engine",
        body: "We restructured Meta and Google campaigns around clear funnel stages, built a creative testing system that shipped 20+ ads a month, and layered in remarketing to recover lost demand.",
      },
      {
        title: "Email automation that prints",
        body: "We implemented welcome, abandon-cart, browse-abandon, and win-back flows on Klaviyo, fixed deliverability, and segmented the list by behavior - turning email into the second-biggest revenue channel.",
      },
    ],
    outcomes: [
      { title: "3.4x ROAS", description: "Return on ad spend more than tripled across paid channels.", icon: TrendingUp },
      { title: "7-figure run rate", description: "Revenue grew 412% to cross seven figures in six months.", icon: Award },
      { title: "Lower CAC", description: "Cost per acquisition dropped 38% through smarter bidding.", icon: Target },
      { title: "Owned revenue", description: "Email went from <5% to 28% of total revenue.", icon: Users },
    ],
    stack: ["Meta Ads", "Google Ads", "Klaviyo", "GA4", "Shopify", "Looker Studio"],
    quote: {
      text: "Within two quarters our paid channel went from break-even to our most profitable growth lever. The reporting alone is worth it - we finally know what's actually working.",
      author: "Founder, N**D",
      role: "CEO",
    },
    duration: "6-month growth engagement",
  },

  /* ================================================================ */
  /* SECURITY                                                          */
  /* ================================================================ */
  {
    id: "qtx-finsec-hardening",
    client: "Q**X",
    clientFull: "Q**X Fintech",
    discipline: "security",
    headline: "Hardened a fintech platform ahead of SOC 2 and passed first time.",
    subheadline:
      "How we closed 40+ vulnerabilities for Q**X, built zero-trust access controls, and got them SOC 2-ready in one quarter.",
    summary:
      "Q**X was preparing for enterprise deals that demanded SOC 2 - but their platform had real gaps. We ran the audits, closed the holes, and built the controls that got them certified without a single finding.",
    accent: "from-emerald-500 to-teal-600",
    tags: ["Cyber Security", "SOC 2", "Data Protection", "Compliance"],
    metrics: [
      { value: "40+", label: "Vulnerabilities closed" },
      { value: "0", label: "SOC 2 findings" },
      { value: "<15min", label: "Incident response time" },
    ],
    meta: [
      { label: "Industry", value: "Fintech / SaaS" },
      { label: "Engagement", value: "Audit + hardening" },
      { label: "Duration", value: "1 quarter" },
      { label: "Standard", value: "SOC 2 Type II" },
    ],
    challenges: [
      {
        title: "Enterprise deals blocked by compliance",
        body: "Q**X had signed LOIs with several enterprise clients, but every procurement team demanded SOC 2 before contracts could close. Their current security posture wouldn't pass an audit, putting millions in pipeline at risk.",
      },
      {
        title: "Real gaps in the platform",
        body: "A preliminary scan surfaced 40+ issues - from outdated dependencies and weak access controls to missing encryption and no formal incident response plan. The team had the skills but not the security expertise to close them quickly.",
      },
    ],
    solutions: [
      {
        title: "Audit, prioritize, close",
        body: "We ran a full penetration test and risk assessment, then closed every vulnerability in priority order - patching dependencies, hardening APIs, and implementing end-to-end encryption for data at rest and in transit.",
      },
      {
        title: "Zero-trust + SOC 2 controls",
        body: "We implemented role-based access control, logging and monitoring, and a documented incident response plan, then built the policy library the auditor needed - aligning every control to SOC 2 trust principles.",
      },
    ],
    outcomes: [
      { title: "Passed SOC 2", description: "Achieved SOC 2 Type II with zero findings on first audit.", icon: ShieldCheck },
      { title: "40+ holes closed", description: "Every vulnerability from the pen test remediated and verified.", icon: Bug },
      { title: "Always-on monitoring", description: "24/7 threat detection with sub-15-minute response.", icon: Clock },
      { title: "Enterprise-ready", description: "Unblocked seven-figure deals that needed compliance.", icon: Lock },
    ],
    stack: ["Cloudflare", "AWS WAF", "Sentry", "HashiCorp Vault", "Datadog", "OWASP ZAP", "Node.js"],
    quote: {
      text: "We went from blocked on every enterprise deal to passing SOC 2 first time. The security team treated our platform like it was their own - and the pipeline we unlocked paid for the work many times over.",
      author: "CTO, Q**X",
      role: "Chief Technology Officer",
    },
    duration: "1-quarter hardening sprint + monitoring retainer",
  },
];

/** Look up a single case study by id. */
export function getCaseStudy(id: string): CaseStudyDetail | undefined {
  return caseStudyDetails.find((cs) => cs.id === id);
}
