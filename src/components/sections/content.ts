import {
  Target,
  Eye,
  Gauge,
  Users,
  Compass,
  PencilRuler,
  Rocket,
  TrendingUp,
  ShieldCheck,
  Clock,
  Award,
  Star,
  Quote,
  Check,
  Mail,
  MapPin,
  Phone,
  Search,
  Megaphone,
  BarChart3,
  Code2,
  Workflow,
  Database,
  Cloud,
  Github,
  Lock,
  Bug,
  Smartphone,
  Globe,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Trusted-by logos (wordmarks rendered as styled text, no assets).    */
/* ------------------------------------------------------------------ */
export const clientLogos = [
  "Northwind",
  "Lumio",
  "Vertex",
  "Quanta",
  "Cobalt",
  "Helix",
] as const;

/* ------------------------------------------------------------------ */
/* Headline stats.                                                     */
/* ------------------------------------------------------------------ */
export interface Stat {
  id: string;
  value: string;
  label: string;
  icon: LucideIcon;
}

export const stats: Stat[] = [
  { id: "roas", value: "3.2x", label: "Avg. return on investment", icon: TrendingUp },
  { id: "clients", value: "240+", label: "Brands built & scaled", icon: Users },
  { id: "speed", value: "48h", label: "From kickoff to launch", icon: Clock },
  { id: "retention", value: "99.9%", label: "Uptime & reliability", icon: Award },
];

/* ------------------------------------------------------------------ */
/* "Why us" feature pillars.                                           */
/* ------------------------------------------------------------------ */
export interface Pillar {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const pillars: Pillar[] = [
  {
    id: "data-first",
    title: "Data-first strategy",
    description:
      "Every decision - from ad spend to architecture - traces back to a measurable goal. No vanity work, only moves that move the business.",
    icon: Target,
  },
  {
    id: "full-funnel",
    title: "Full-stack coverage",
    description:
      "Marketing, web & mobile development, analytics and security - one team owning your entire digital presence, end to end.",
    icon: Compass,
  },
  {
    id: "shipping-speed",
    title: "Shipping speed",
    description:
      "Most projects go live within days of kickoff, with weekly sprints and tight feedback loops baked in.",
    icon: Rocket,
  },
  {
    id: "transparent-reporting",
    title: "Transparent reporting",
    description:
      "Live dashboards you actually understand, plus a plain-English summary every single month.",
    icon: ShieldCheck,
  },
  {
    id: "in-house-craft",
    title: "In-house craft",
    description:
      "Designers, developers, marketers and security engineers under one roof - no outsourced middlemen, no quality drift.",
    icon: PencilRuler,
  },
  {
    id: "performance-tuned",
    title: "Performance tuned",
    description:
      "We obsess over load times, conversion rates and uptime until the numbers move - then we keep pushing.",
    icon: Gauge,
  },
];

/* ------------------------------------------------------------------ */
/* Engagement process.                                                 */
/* ------------------------------------------------------------------ */
export interface ProcessStep {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    id: "discover",
    step: "01",
    title: "Discover",
    description:
      "We audit your brand, audience, tech stack and security posture to find the highest-leverage opportunities.",
    icon: Eye,
  },
  {
    id: "strategy",
    step: "02",
    title: "Strategize",
    description:
      "A clear roadmap covering build, marketing and security - with the exact goals we'll be held accountable to.",
    icon: Compass,
  },
  {
    id: "launch",
    step: "03",
    title: "Build & launch",
    description:
      "Sites, apps, campaigns and defenses go live fast - usually within the first couple of weeks.",
    icon: Rocket,
  },
  {
    id: "optimize",
    step: "04",
    title: "Grow & protect",
    description:
      "Weekly experiments, monitoring and monthly reviews compound into durable, secure growth.",
    icon: TrendingUp,
  },
];

/* ------------------------------------------------------------------ */
/* Tools & platforms we work with (Integrations section).              */
/* ------------------------------------------------------------------ */
export interface Integration {
  id: string;
  name: string;
  category: string;
  icon: LucideIcon;
  accent: string;
}

export const integrations: Integration[] = [
  // --- Marketing ---
  {
    id: "google-ads",
    name: "Google Ads",
    category: "Marketing",
    icon: Megaphone,
    accent: "from-sky-500 to-blue-600",
  },
  {
    id: "google-analytics",
    name: "GA4",
    category: "Marketing",
    icon: BarChart3,
    accent: "from-amber-500 to-orange-600",
  },
  {
    id: "hubspot",
    name: "HubSpot",
    category: "Marketing",
    icon: Workflow,
    accent: "from-orange-500 to-red-500",
  },
  {
    id: "klaviyo",
    name: "Klaviyo",
    category: "Marketing",
    icon: Mail,
    accent: "from-[#6D1F37] to-[#B91C1C]",
  },
  // --- Development ---
  {
    id: "nextjs",
    name: "Next.js",
    category: "Development",
    icon: Globe,
    accent: "from-slate-700 to-slate-900",
  },
  {
    id: "react-native",
    name: "React Native",
    category: "Development",
    icon: Smartphone,
    accent: "from-cyan-500 to-sky-600",
  },
  {
    id: "aws",
    name: "AWS / Cloud",
    category: "Development",
    icon: Cloud,
    accent: "from-orange-400 to-amber-500",
  },
  {
    id: "github",
    name: "GitHub",
    category: "Development",
    icon: Github,
    accent: "from-gray-700 to-gray-900",
  },
  // --- Security ---
  {
    id: "cloudflare",
    name: "Cloudflare",
    category: "Security",
    icon: ShieldCheck,
    accent: "from-orange-500 to-amber-600",
  },
  {
    id: "sentry",
    name: "Sentry",
    category: "Security",
    icon: Bug,
    accent: "from-[#6D1F37] to-[#B91C1C]",
  },
  {
    id: "encryption",
    name: "Encryption",
    category: "Security",
    icon: Lock,
    accent: "from-emerald-500 to-teal-600",
  },
  {
    id: "search-console",
    name: "Search Console",
    category: "Marketing",
    icon: Search,
    accent: "from-blue-500 to-indigo-600",
  },
];

/* ------------------------------------------------------------------ */
/* Case studies.                                                       */
/* ------------------------------------------------------------------ */
export interface CaseStudy {
  id: string;
  client: string;
  category: string;
  headline: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  accent: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "northwind-dtc",
    client: "Northwind",
    category: "DTC E-commerce",
    headline: "Scaled a sleepy skincare brand into a 7-figure storefront.",
    metrics: [
      { value: "+412%", label: "Revenue in 6 months" },
      { value: "-38%", label: "Cost per acquisition" },
    ],
    tags: ["Google Ads", "Meta Ads", "CRO"],
    accent: "from-[#6D1F37] to-[#B91C1C]",
  },
  {
    id: "lumio-saas",
    client: "Lumio",
    category: "B2B SaaS",
    headline: "Tripled qualified demos with a content + paid engine.",
    metrics: [
      { value: "3.1x", label: "Qualified demo volume" },
      { value: "62%", label: "Faster sales cycle" },
    ],
    tags: ["SEO", "Content", "LinkedIn Ads"],
    accent: "from-[#6D1F37] to-[#B91C1C]",
  },
  {
    id: "vertex-local",
    client: "Vertex",
    category: "Multi-location",
    headline: "Filled 9 locations with a hyper-local search strategy.",
    metrics: [
      { value: "+278%", label: "Booking calls" },
      { value: "#1", label: "Map pack rankings" },
    ],
    tags: ["Local SEO", "Landing Pages", "Analytics"],
    accent: "from-[#10B981] to-[#34D399]",
  },
];

/* ------------------------------------------------------------------ */
/* Testimonials.                                                       */
/* ------------------------------------------------------------------ */
export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  rating: number;
  /** Tailwind gradient classes for the avatar background. */
  accent: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Within two quarters our paid channel went from break-even to our most profitable growth lever. The reporting alone is worth it.",
    name: "Maya Richardson",
    role: "VP Growth, Northwind",
    initials: "MR",
    rating: 5,
    accent: "from-rose-500 to-pink-500",
  },
  {
    id: "t2",
    quote:
      "They feel like an extension of our team. Fast, opinionated, and genuinely obsessed with our numbers - exactly what you want from a partner.",
    name: "David Chen",
    role: "Founder, Lumio",
    initials: "DC",
    rating: 5,
    accent: "from-[#6D1F37] to-[#B91C1C]",
  },
  {
    id: "t3",
    quote:
      "Our locations were invisible online. Six months later we dominate the map pack and the phone doesn't stop ringing.",
    name: "Sofia Alvarez",
    role: "COO, Vertex",
    initials: "SA",
    rating: 5,
    accent: "from-emerald-500 to-teal-500",
  },
  {
    id: "t4",
    quote:
      "Best agency we've worked with in a decade. Clear strategy, beautiful creative, and results we can actually trace to revenue.",
    name: "James Okafor",
    role: "CMO, Quanta",
    initials: "JO",
    rating: 5,
    accent: "from-amber-500 to-orange-500",
  },
  {
    id: "t5",
    quote:
      "We tried three agencies before this. None came close. The weekly cadence and plain-English reports finally made marketing make sense to our board.",
    name: "Priya Nair",
    role: "Head of Marketing, Helix",
    initials: "PN",
    rating: 5,
    accent: "from-sky-500 to-blue-500",
  },
  {
    id: "t6",
    quote:
      "Our cost per lead dropped by half in the first 90 days. The team treats our budget like it's their own money - rare and refreshing.",
    name: "Marcus Bauer",
    role: "CEO, Cobalt",
    initials: "MB",
    rating: 5,
    accent: "from-[#6D1F37] to-[#B91C1C]",
  },
  {
    id: "t7",
    quote:
      "From invisible to industry-leading in under a year. The SEO and content engine they built still pays dividends every single month.",
    name: "Elena Rossi",
    role: "Founder, Quanta Labs",
    initials: "ER",
    rating: 5,
    accent: "from-cyan-500 to-sky-500",
  },
  {
    id: "t8",
    quote:
      "What I love most is the honesty. They told us what wouldn't work before we wasted money on it. That saved us a fortune.",
    name: "Tom Whitfield",
    role: "COO, Northwind",
    initials: "TW",
    rating: 5,
    accent: "from-lime-500 to-green-500",
  },
  {
    id: "t9",
    quote:
      "Our email list went from a graveyard to our second-biggest revenue channel in one quarter. The automations are pure magic.",
    name: "Aisha Bello",
    role: "E-commerce Lead, Lumio",
    initials: "AB",
    rating: 5,
    accent: "from-[#6D1F37] to-[#B91C1C]",
  },
];

/* ------------------------------------------------------------------ */
/* Pricing tiers.                                                      */
/* ------------------------------------------------------------------ */
export interface PricingTier {
  id: string;
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  cta: string;
  featured: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "launch",
    name: "Launch",
    price: "$2.4k",
    cadence: "/mo",
    description: "For early-stage brands that need a focused, fast start.",
    features: [
      "1 paid channel managed",
      "Up to $15k/mo ad spend",
      "Monthly strategy call",
      "Landing page reviews",
      "Standard reporting",
    ],
    cta: "Start with Launch",
    featured: false,
  },
  {
    id: "scale",
    name: "Scale",
    price: "$5.9k",
    cadence: "/mo",
    description: "For growing teams ready to compound across channels.",
    features: [
      "Up to 3 paid channels",
      "Up to $75k/mo ad spend",
      "Weekly optimization sprints",
      "CRO & creative production",
      "Live dashboard access",
      "Dedicated strategist",
    ],
    cta: "Scale with us",
    featured: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    description: "For established brands with ambitious growth targets.",
    features: [
      "Unlimited channels",
      "Custom ad spend tiers",
      "Full-funnel ownership",
      "In-house creative team",
      "Executive QBRs",
      "SLA & priority support",
    ],
    cta: "Talk to sales",
    featured: false,
  },
];

/* ------------------------------------------------------------------ */
/* FAQ.                                                                */
/* ------------------------------------------------------------------ */
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "onboarding",
    question: "How fast can we get started?",
    answer:
      "Most clients kick off within 3-5 business days. After a short discovery call we audit your funnel, agree on a 90-day roadmap, and typically launch the first campaigns within 48 hours of creative sign-off.",
  },
  {
    id: "contracts",
    question: "Are there long-term contracts?",
    answer:
      "No lock-in. We work on month-to-month agreements after an initial 90-day strategy period - we'd rather earn your retention with results than a clause. Enterprise engagements have flexible terms negotiated up front.",
  },
  {
    id: "industries",
    question: "Which industries do you specialize in?",
    answer:
      "We're strongest in DTC e-commerce, B2B SaaS and multi-location services, but our framework transfers well to most consumer and business brands. Book a call and we'll be honest if we're not the right fit.",
  },
  {
    id: "reporting",
    question: "How does reporting work?",
    answer:
      "You get a live dashboard with the metrics that tie to revenue, plus a plain-English monthly summary. No vanity charts - we focus on CAC, LTV, ROAS and pipeline, and explain exactly what moved and why.",
  },
  {
    id: "creative",
    question: "Do you produce the creative too?",
    answer:
      "Yes. Designers, copywriters and video editors are in-house, so there's no quality drift between strategy and execution. Static, motion and full video assets are all included on Scale and Enterprise plans.",
  },
  {
    id: "ad-spend",
    question: "Is there a minimum ad spend?",
    answer:
      "Launch plans support up to $15k/mo in ad spend, Scale up to $75k/mo, and Enterprise is custom. We'll recommend the right tier based on your goals - we won't push spend you can't justify.",
  },
];

/* ------------------------------------------------------------------ */
/* Re-export commonly-used icons for convenience.                      */
/* ------------------------------------------------------------------ */
export const sharedIcons = { Star, Quote, Check };

/* ------------------------------------------------------------------ */
/* Contact details (shared between the contact page and form).         */
/* ------------------------------------------------------------------ */
export interface ContactDetail {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const contactDetails: ContactDetail[] = [
  { icon: Mail, label: "Email", value: "hello@ariestech.example" },
  { icon: Phone, label: "Phone", value: "+1 (555) 014-2278" },
  { icon: MapPin, label: "Location", value: "Remote-first · global team" },
];
