import {
  Search,
  TrendingUp,
  Globe,
  Target,
  FileSearch,
  MapPin,
  Users,
  Megaphone,
  Video,
  Mail,
  BarChart3,
  Code2,
  Smartphone,
  ShieldCheck,
  Lock,
  Zap,
  Award,
  Clock,
  Rocket,
  LineChart,
  Database,
  Bug,
  Cloud,
  Cpu,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

/**
 * The three service categories. Each gets a distinct visual theme (gradient,
 * accent color, hero pattern) so service pages within a category share a look
 * while the three categories feel visually distinct from one another.
 */
export type ServiceCategory = "marketing" | "development" | "security";

export interface CategoryTheme {
  /** Tailwind gradient classes for hero accents, buttons, icon badges. */
  gradient: string;
  /** Solid accent color token (Tailwind class) for dots and highlights. */
  accent: string;
  /** A short label shown in the hero badge, e.g. "Marketing". */
  label: string;
  /** Decorative background grid color used in the hero. */
  ring: string;
  /** [primary, secondary] hex colors fed to the 3D hero scenes. */
  colors: [string, string];
}

export const categoryThemes: Record<ServiceCategory, CategoryTheme> = {
  marketing: {
    gradient: "from-violet-600 to-fuchsia-500",
    accent: "text-violet-600",
    label: "Marketing",
    ring: "ring-violet-500/40",
    colors: ["#7c3aed", "#d946ef"],
  },
  development: {
    gradient: "from-sky-500 to-indigo-600",
    accent: "text-sky-600",
    label: "Development",
    ring: "ring-sky-500/40",
    colors: ["#0ea5e9", "#6366f1"],
  },
  security: {
    gradient: "from-emerald-500 to-teal-600",
    accent: "text-emerald-600",
    label: "Security",
    ring: "ring-emerald-500/40",
    colors: ["#10b981", "#0d9488"],
  },
};

export interface ServiceFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceProcess {
  step: string;
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  /** Must match a `Service.id` from services.ts. */
  id: string;
  /** Which category - drives the page theme. */
  category: ServiceCategory;
  /** Short tagline shown under the page title. */
  tagline: string;
  /** Hero paragraph introducing the service (long-form, marketing style). */
  overview: string;
  /** 3 headline metrics shown in the stat strip. */
  metrics: { value: string; label: string }[];
  /** "Why it matters" block - the business case in plain English. */
  whyItMatters: string;
  /** "How it works" explainer - 3 paragraphs describing the mechanics. */
  howItWorks: string[];
  /** Feature grid (6 cards). */
  features: ServiceFeature[];
  /** Who this is for - target audiences. */
  useCases: string[];
  /** Engagement process (4 steps). */
  process: ServiceProcess[];
  /** Outcome-focused benefits with icons (4 cards). */
  benefits: { title: string; description: string; icon: LucideIcon }[];
  /** Concrete results clients can expect. */
  outcomes: string[];
  /** What's delivered to the client. */
  deliverables: string[];
  /** Service-specific FAQ (5 items). */
  faq: ServiceFaq[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  /* ================================================================== */
  /* MARKETING                                                          */
  /* ================================================================== */
  "seo-optimization": {
    id: "seo-optimization",
    category: "marketing",
    tagline: "Rank higher, get found, and turn search into a predictable revenue channel.",
    overview:
      "Search is where buying decisions begin. Our SEO service blends technical fixes, on-page optimization and authoritative link building to put your brand in front of buyers at the exact moment they're looking for what you sell. We target intent, not just keywords - so the organic traffic we bring actually converts into customers, not just visits.",
    metrics: [
      { value: "+278%", label: "Organic traffic in 6 months" },
      { value: "#1", label: "Rankings for target terms" },
      { value: "4.2x", label: "Organic conversion rate" },
    ],
    whyItMatters:
      "Organic search captures demand that's already looking for you - it compounds month over month, costs nothing per click, and builds trust that paid ads simply can't. Done right, SEO becomes your most profitable, most durable acquisition channel.",
    howItWorks: [
      "We start by understanding how your customers actually search - mapping keywords to buyer intent so we chase revenue terms, not vanity traffic. This becomes the backbone of everything that follows.",
      "Next we fix the technical foundation: crawlability, page speed, structured data and on-page elements. Search engines reward fast, well-structured sites, so we make sure yours is bulletproof.",
      "Then we execute a compounding content and link-building plan. Every month adds new ranking pages and authority signals, so the traffic you earn this year keeps paying off for years to come.",
    ],
    outcomes: [
      "Steady month-over-month organic traffic growth",
      "Top-3 rankings for your highest-value keywords",
      "A content library that generates leads on autopilot",
      "Lower overall cost per acquisition as organic matures",
    ],
    features: [
      { title: "Technical SEO", description: "Crawlability, site speed, Core Web Vitals and structured data - the foundation every ranking is built on.", icon: FileSearch },
      { title: "On-page optimization", description: "Keyword mapping, meta data, internal linking and content structure tuned for search intent.", icon: Target },
      { title: "Local SEO", description: "Google Business Profile, map pack rankings and local citations for multi-location brands.", icon: MapPin },
      { title: "Link building", description: "Authority-building digital PR and outreach that earns high-quality, relevant backlinks.", icon: TrendingUp },
      { title: "Content strategy", description: "Topic clusters and editorial calendars that capture demand across the entire funnel.", icon: FileSearch },
      { title: "Keyword research", description: "Intent-driven keyword maps that prioritize revenue terms over vanity volume.", icon: Search },
    ],
    useCases: [
      "E-commerce brands wanting free, compounding traffic",
      "B2B companies capturing high-intent demand",
      "Multi-location businesses dominating local search",
      "SaaS products competing for category keywords",
    ],
    process: [
      { step: "01", title: "Audit", description: "Full technical and content audit with a prioritized fix list." },
      { step: "02", title: "Strategy", description: "Keyword mapping and a 90-day content + link plan." },
      { step: "03", title: "Execute", description: "On-page fixes, content production and digital PR outreach." },
      { step: "04", title: "Grow", description: "Monitor rankings, refine and scale what's working." },
    ],
    benefits: [
      { title: "Compounding traffic", description: "Rankings build on themselves - every month adds to the last.", icon: TrendingUp },
      { title: "Lower acquisition cost", description: "No per-click fees means your cost per acquisition keeps dropping.", icon: Award },
      { title: "Higher trust", description: "Organic results carry credibility that paid placements can't buy.", icon: CheckCircle2 },
      { title: "Lasting results", description: "Well-ranked pages keep delivering traffic for years, not days.", icon: Clock },
    ],
    deliverables: [
      "Monthly SEO roadmap and reporting",
      "Technical SEO audit and fixes",
      "Keyword and content strategy",
      "Link building campaign",
      "Rank tracking dashboard",
    ],
    faq: [
      { question: "How long until I see results?", answer: "SEO is a compounding channel. Most clients see meaningful movement in 3-4 months and significant gains by month 6, with results accelerating from there." },
      { question: "Do you guarantee #1 rankings?", answer: "No reputable agency can guarantee specific rankings. What we guarantee is a data-driven strategy, transparent reporting, and steady progress on the terms that drive revenue." },
      { question: "Is SEO or paid ads better?", answer: "They serve different stages. Paid ads deliver instant traffic; SEO builds a durable, compounding asset. Most successful brands run both, then lean on SEO as it matures." },
      { question: "Can you recover a site hit by a Google update?", answer: "Yes. We've successfully recovered sites penalized by core and helpful-content updates. We diagnose the issue, clean up low-quality content and links, and rebuild authority with a focus on E-E-A-T signals." },
      { question: "Do you write the content too?", answer: "Absolutely. Our in-house writers produce SEO-optimized content briefed from the keyword research, so ranking potential is baked in from the first draft rather than bolted on later." },
    ],
  },

  "google-ads": {
    id: "google-ads",
    category: "marketing",
    tagline: "Profitable paid search that scales with your budget - and proves every dollar.",
    overview:
      "Google Ads puts you in front of buyers with active intent - people literally searching for what you offer. We build and manage campaigns engineered for return on ad spend, from high-intent Search to Performance Max and Shopping. Every dollar is tracked to revenue, so you always know exactly what's working and what isn't.",
    metrics: [
      { value: "3.2x", label: "Average ROAS" },
      { value: "-38%", label: "Cost per acquisition" },
      { value: "4.7%", label: "Average click-through rate" },
    ],
    whyItMatters:
      "Paid search is the fastest way to capture ready-to-buy demand. Unlike organic, it works from day one - and with smart bidding and clean tracking, it scales predictably as you prove what converts.",
    howItWorks: [
      "We begin with deep keyword and competitor research to find the highest-intent, most profitable search terms - and the gaps your competitors are missing.",
      "We architect a clean account structure with tightly-themed ad groups, persuasive ad copy, and conversion tracking you can trust - then launch fast, usually within the first week.",
      "From there it's relentless weekly optimization: pruning waste, scaling winners, testing new audiences and bidding strategies, and expanding into Performance Max, Shopping, and remarketing as the data justifies it.",
    ],
    outcomes: [
      "Predictable, profitable ad spend tied to revenue",
      "Lower cost per acquisition through smarter bidding",
      "Higher quality scores and cheaper clicks",
      "A scalable engine that grows with your budget",
    ],
    features: [
      { title: "Search campaigns", description: "Capture high-intent demand with tightly-themed ad groups and smart bidding.", icon: Search },
      { title: "Performance Max", description: "Google's full-network campaigns tuned with first-party data signals.", icon: TrendingUp },
      { title: "Shopping ads", description: "Product Feed optimization and Smart Shopping for e-commerce brands.", icon: Globe },
      { title: "Remarketing", description: "Bring back warm visitors with tailored display and video ads.", icon: Target },
      { title: "Conversion tracking", description: "Server-side tracking and GA4 integration you can actually trust.", icon: FileSearch },
      { title: "Bid management", description: "Smart bidding strategies reviewed and refined weekly.", icon: TrendingUp },
    ],
    useCases: [
      "E-commerce stores scaling revenue fast",
      "Lead-gen businesses needing qualified pipeline",
      "SaaS companies acquiring trial signups",
      "Local services capturing immediate demand",
    ],
    process: [
      { step: "01", title: "Setup", description: "Account structure, conversion tracking and audience research." },
      { step: "02", title: "Launch", description: "Keyword, creative and bidding strategy go live fast." },
      { step: "03", title: "Optimize", description: "Weekly sprints prune waste and scale winners." },
      { step: "04", title: "Scale", description: "Expand to new audiences, channels and budgets." },
    ],
    benefits: [
      { title: "Instant visibility", description: "Show up at the top of search results from day one.", icon: Zap },
      { title: "Measurable ROI", description: "Every click and conversion tracked back to revenue.", icon: LineChart },
      { title: "Precise targeting", description: "Reach buyers by intent, location, device and more.", icon: Target },
      { title: "Scalable spend", description: "Turn the dial up or down based on proven performance.", icon: TrendingUp },
    ],
    deliverables: [
      "Full Google Ads account management",
      "Conversion tracking setup",
      "Weekly optimization sprints",
      "Creative and copy testing",
      "Live performance dashboard",
    ],
    faq: [
      { question: "What's the minimum ad budget?", answer: "We typically recommend at least $1,500/month in ad spend to gather enough data to optimize effectively. Lower budgets make it hard to learn fast enough to scale profitably." },
      { question: "How fast do campaigns launch?", answer: "Most campaigns go live within 5-7 business days of kickoff, once tracking is in place and creative is approved. We move fast because momentum matters." },
      { question: "How do you report on results?", answer: "You get a live dashboard plus a monthly summary tying spend to revenue, with clear recommendations on where to invest more and where to pull back." },
      { question: "Do you manage Microsoft (Bing) Ads too?", answer: "Yes. We can mirror your Google campaigns on Microsoft Ads to capture additional high-intent traffic at typically lower CPCs - often a quick win once Google is profitable." },
      { question: "How do you handle budget changes?", answer: "We scale incrementally based on data. Once a campaign proves profitable, we increase budget gradually while monitoring efficiency, so scaling never tanks your ROAS." },
    ],
  },

  "social-media-marketing": {
    id: "social-media-marketing",
    category: "marketing",
    tagline: "Build a community that actually drives business - not just likes.",
    overview:
      "Social media is where attention lives - but attention without strategy is just noise. We craft social strategies that go beyond vanity metrics, turning Facebook, Instagram, LinkedIn and X into measurable growth channels. From organic content to paid social, we meet your audience where they already spend their time and turn that attention into action.",
    metrics: [
      { value: "+412%", label: "Engagement growth" },
      { value: "2.8M", label: "Monthly reach" },
      { value: "5.4%", label: "Average engagement rate" },
    ],
    whyItMatters:
      "Social builds the brand equity that makes every other channel work better. It warms cold audiences, nurtures prospects, and gives your brand a personality that paid acquisition can't replicate on its own.",
    howItWorks: [
      "We start by figuring out where your audience actually spends time and what makes them stop scrolling - building a channel strategy grounded in real audience data, not assumptions.",
      "Our in-house creative team produces scroll-stopping content in batches: static, motion, and video, all on-brand and formatted for each platform's algorithm.",
      "We pair organic content with paid amplification, putting budget behind your best-performing posts so your reach compounds rather than depending on the algorithm alone.",
    ],
    outcomes: [
      "A growing, engaged community around your brand",
      "Higher reach and engagement without extra ad spend",
      "Social proof that lifts conversion on every channel",
      "A content engine that runs like clockwork",
    ],
    features: [
      { title: "Content creation", description: "Scroll-stopping static, motion and video content produced in-house.", icon: FileSearch },
      { title: "Paid social", description: "Meta, LinkedIn and X ad campaigns built for efficient acquisition.", icon: TrendingUp },
      { title: "Community management", description: "Active engagement that turns followers into advocates.", icon: Users },
      { title: "Influencer partnerships", description: "Creator collaborations that extend reach and credibility.", icon: Globe },
      { title: "Social listening", description: "Real-time monitoring of brand mentions, competitors and trends.", icon: Search },
      { title: "Analytics & reporting", description: "Clear reports tying social activity to business outcomes.", icon: BarChart3 },
    ],
    useCases: [
      "DTC brands building a loyal following",
      "B2B companies establishing thought leadership",
      "Local businesses engaging their community",
      "Launches needing buzz and momentum",
    ],
    process: [
      { step: "01", title: "Discover", description: "Audience research and channel strategy." },
      { step: "02", title: "Create", description: "Monthly content calendars and creative production." },
      { step: "03", title: "Distribute", description: "Organic posting and paid amplification." },
      { step: "04", title: "Engage", description: "Community management and optimization." },
    ],
    benefits: [
      { title: "Brand affinity", description: "Build emotional connections that drive long-term loyalty.", icon: Users },
      { title: "Always-on reach", description: "Stay top-of-mind with your audience every single day.", icon: Globe },
      { title: "Social proof", description: "Engagement and shares signal trust to new prospects.", icon: CheckCircle2 },
      { title: "Audience insights", description: "Learn directly from the people you want to reach.", icon: BarChart3 },
    ],
    deliverables: [
      "Monthly content calendar",
      "In-house creative production",
      "Paid social campaign management",
      "Community management",
      "Social performance reports",
    ],
    faq: [
      { question: "Which platforms should I be on?", answer: "It depends on your audience. B2B usually thrives on LinkedIn; consumer brands on Instagram and TikTok. We'll recommend the right mix based on where your customers actually are." },
      { question: "How often will you post?", answer: "Cadence varies by platform and goals, but typically 3-5 times per week per channel, with paid amplification on top-performing content." },
      { question: "Do you handle the ads too?", answer: "Yes. Organic and paid social work best together, so we manage both - ensuring your best content gets the amplification it deserves." },
      { question: "Do you handle paid social campaigns?", answer: "Yes - we manage paid social end to end across Meta, LinkedIn, X and TikTok. We see the best results when organic and paid work together, so we typically run both." },
      { question: "Can you run influencer campaigns?", answer: "Absolutely. We source, negotiate, and manage creator partnerships - handling briefs, contracts, and content rights so you get authentic reach without the management headache." },
    ],
  },

  "video-marketing": {
    id: "video-marketing",
    category: "marketing",
    tagline: "Video that captures attention and converts it into customers.",
    overview:
      "Video is the most engaging format on the internet - and the hardest to get right. From YouTube ads to short-form video and brand films, we produce video that performs. Our in-house team handles scripting, shooting, editing and distribution, so your story gets told beautifully and seen by exactly the right people.",
    metrics: [
      { value: "+186%", label: "Video view-through rate" },
      { value: "2.1M", label: "Monthly video views" },
      { value: "8.4x", label: "ROAS on video ads" },
    ],
    whyItMatters:
      "Video stops the scroll, communicates faster than text, and works harder per dollar than almost any other format. It's the single best way to explain complex products and build emotional connection at scale.",
    howItWorks: [
      "We start with strategy and scripting - figuring out the one core message and the emotional hook that will make viewers stop, watch, and act.",
      "Our in-house team handles the full production: filming, animation, editing, sound design, and motion graphics. No middlemen, no quality drift between concept and final cut.",
      "We deliver platform-native cutdowns - one shoot fuels Reels, Shorts, YouTube ads, and website embeds - then track view-through and conversion to prove what's working.",
    ],
    outcomes: [
      "Higher engagement than any other content format",
      "Faster product understanding for complex offerings",
      "Creative assets that work across every platform",
      "Measurable lift in brand recall and recall",
    ],
    features: [
      { title: "YouTube ads", description: "Skippable, bumper and in-feed ads optimized for view-through and conversion.", icon: Video },
      { title: "Short-form video", description: "Reels, Shorts and TikTok-native content built for the algorithm.", icon: FileSearch },
      { title: "Brand videos", description: "Cinematic brand films and explainers that tell your story.", icon: Globe },
      { title: "Product demos", description: "Clear, compelling demos that shorten the sales cycle.", icon: Target },
      { title: "Motion graphics", description: "Animated explainers and lower-thirds that elevate every frame.", icon: FileSearch },
      { title: "Distribution", description: "Paid amplification across the platforms your audience uses.", icon: Megaphone },
    ],
    useCases: [
      "Product launches needing maximum impact",
      "Complex products that need explaining",
      "Brands wanting to stand out in feeds",
      "Companies building an emotional story",
    ],
    process: [
      { step: "01", title: "Concept", description: "Scripting, storyboarding and creative direction." },
      { step: "02", title: "Produce", description: "Filming, animation and editing in-house." },
      { step: "03", title: "Optimize", description: "Cutdowns and formats for every platform." },
      { step: "04", title: "Distribute", description: "Paid placement and organic publishing." },
    ],
    benefits: [
      { title: "Highest engagement", description: "Video outperforms every other format for attention.", icon: Video },
      { title: "Faster understanding", description: "Explain in 30 seconds what text takes pages to convey.", icon: Zap },
      { title: "Emotional impact", description: "Music, motion and story create real connection.", icon: Users },
      { title: "Multi-platform", description: "One shoot fuels weeks of content across channels.", icon: Globe },
    ],
    deliverables: [
      "Full video production",
      "Platform-specific cutdowns",
      "YouTube ad management",
      "Motion graphics package",
      "Performance reporting",
    ],
    faq: [
      { question: "Do you shoot on-site or remotely?", answer: "Both. We have an in-house studio for product and talking-head shoots, and we travel for on-location filming when your story demands it." },
      { question: "How long does a video take?", answer: "Short-form social videos turn around in 1-2 weeks; brand films and complex animations typically take 4-6 weeks from concept to final cut." },
      { question: "Can you work with our existing footage?", answer: "Absolutely. We can edit, color-grade and optimize footage you already have, or start from scratch - whichever serves the project best." },
      { question: "What video lengths do you produce?", answer: "Everything from 6-second bumper ads to long-form explainers and brand films. We recommend the right lengths based on platform and goal, then cut one shoot into multiple formats." },
      { question: "Do you do animation or only live action?", answer: "Both. We have motion-graphics artists and live-action crews in-house, so we can produce animated explainers, kinetic typography, or fully shot productions - whichever serves the story." },
    ],
  },

  "content-marketing": {
    id: "content-marketing",
    category: "marketing",
    tagline: "Content that earns attention, trust, links - and customers.",
    overview:
      "Content is the fuel that powers SEO, social, email and sales. We create content that ranks, gets shared and moves buyers down the funnel. From SEO-led blog posts to thought leadership and conversion copywriting, every piece has a job to do - and we measure relentlessly whether it did.",
    metrics: [
      { value: "+340%", label: "Organic blog traffic" },
      { value: "120+", label: "Articles per year" },
      { value: "3.1x", label: "Content-driven leads" },
    ],
    whyItMatters:
      "Great content works while you sleep. It ranks for years, gets referenced, builds authority, and gives your sales team ammunition. It's the asset that makes every other channel more effective.",
    howItWorks: [
      "We start with keyword and topic research mapped to your buyers' journey - so every piece of content targets a real question your customers are asking at each stage.",
      "Our specialist writers and editors produce the content - SEO articles, landing pages, lead magnets, and thought leadership - all optimized for both search and persuasion.",
      "We don't just publish and pray. Each piece is distributed, repurposed, and promoted to earn links and traffic, then measured by the leads and revenue it generates.",
    ],
    outcomes: [
      "A content library that ranks and generates leads for years",
      "Higher domain authority through quality link building",
      "Sales enablement assets that shorten cycles",
      "A recognizable, authoritative brand voice in your niche",
    ],
    features: [
      { title: "Blog writing", description: "SEO-optimized long-form articles that rank and educate.", icon: FileSearch },
      { title: "Website copy", description: "Landing pages and site copy engineered to convert.", icon: Target },
      { title: "Thought leadership", description: "Founder and executive bylines that build authority.", icon: TrendingUp },
      { title: "Copywriting", description: "Ads, emails and sales pages with persuasion baked in.", icon: FileSearch },
      { title: "Content strategy", description: "Editorial calendars mapped to buyer intent and keywords.", icon: Search },
      { title: "Distribution", description: "Repurposing and amplification across owned and earned channels.", icon: Globe },
    ],
    useCases: [
      "SaaS companies building topical authority",
      "B2B brands educating their market",
      "E-commerce sites needing product content",
      "Founders establishing personal brands",
    ],
    process: [
      { step: "01", title: "Research", description: "Keyword and topic research aligned to intent." },
      { step: "02", title: "Plan", description: "Editorial calendar and content briefs." },
      { step: "03", title: "Create", description: "Writing, editing and optimization by specialists." },
      { step: "04", title: "Promote", description: "Publishing, repurposing and link outreach." },
    ],
    benefits: [
      { title: "Long-term asset", description: "Great content keeps working for years, not days.", icon: Clock },
      { title: "SEO fuel", description: "Every article is another doorway into your business.", icon: Search },
      { title: "Authority", description: "Demonstrate expertise that earns trust at scale.", icon: Award },
      { title: "Sales enablement", description: "Give your team content that closes deals.", icon: CheckCircle2 },
    ],
    deliverables: [
      "Editorial content calendar",
      "SEO blog articles",
      "Website and landing page copy",
      "Lead magnets and gated content",
      "Content performance reports",
    ],
    faq: [
      { question: "Who writes the content?", answer: "Specialist writers with experience in your industry. Every piece is edited by a senior editor and SEO-optimized before it goes live - never outsourced to cheap freelancers." },
      { question: "How do you measure content success?", answer: "Beyond traffic, we track rankings, leads, and revenue attributed to content - so you can see exactly which pieces are driving business, not just clicks." },
      { question: "Can you match our brand voice?", answer: "Yes. We start with a voice and style guide (or build one with you), and every writer follows it so the content reads like it came from your team." },
      { question: "How do you choose topics?", answer: "We combine keyword research, competitor gap analysis, and sales-team input to prioritize topics by revenue potential - not just search volume. We chase the terms your buyers use when they're ready to buy." },
      { question: "Can you repurpose our existing content?", answer: "Yes - and we recommend it. We turn webinars into articles, articles into social posts, and long-form into video scripts, maximizing the ROI of every piece of content you already have." },
    ],
  },

  "email-marketing": {
    id: "email-marketing",
    category: "marketing",
    tagline: "The highest-ROI channel in marketing - done right.",
    overview:
      "Email is the only channel you truly own - and it consistently delivers the highest return on investment in marketing. We turn your list into a reliable revenue engine. From welcome flows to broadcast campaigns and lifecycle automation, we build email programs that nurture, convert and retain, with the metrics to prove every send.",
    metrics: [
      { value: "42x", label: "Average ROI" },
      { value: "38%", label: "Open rate" },
      { value: "+212%", label: "Email-attributed revenue" },
    ],
    whyItMatters:
      "Email reaches your audience directly - no algorithm, no ad spend, no middleman. It's the most reliable way to nurture leads, recover abandoned carts, and turn one-time buyers into lifelong customers.",
    howItWorks: [
      "We audit your list health, deliverability, and current performance - because even the best campaigns fail if your emails land in spam or your list is decayed.",
      "We design and build automation flows that run on autopilot: welcome series, abandoned cart, browse abandon, win-back, and post-purchase - each timed and triggered to maximize revenue.",
      "We send segmented campaigns and newsletters, then continuously A/B test subject lines, content, and send times to squeeze more revenue from every send.",
    ],
    outcomes: [
      "A reliable revenue channel you fully own",
      "Automated flows that convert while you sleep",
      "Higher open and click rates through better targeting",
      "Reclaimed revenue from abandoned carts and win-backs",
    ],
    features: [
      { title: "Automation flows", description: "Welcome, abandon-cart and re-engagement sequences that run on autopilot.", icon: Mail },
      { title: "Campaigns", description: "Broadcast and segmented campaigns timed for maximum impact.", icon: Target },
      { title: "Newsletters", description: "Beautiful, on-brand newsletters your audience looks forward to.", icon: FileSearch },
      { title: "Segmentation", description: "Behavior and purchase-based segments that lift relevance.", icon: Users },
      { title: "Deliverability", description: "Authentication and hygiene to keep you out of the spam folder.", icon: ShieldCheck },
      { title: "A/B testing", description: "Subject lines, send times and content tested continuously.", icon: BarChart3 },
    ],
    useCases: [
      "E-commerce brands recovering lost revenue",
      "SaaS companies onboarding and retaining users",
      "B2B teams nurturing long sales cycles",
      "Publishers growing a loyal audience",
    ],
    process: [
      { step: "01", title: "Audit", description: "List health, deliverability and current performance." },
      { step: "02", title: "Build", description: "Automation flows and template design." },
      { step: "03", title: "Send", description: "Segmented campaigns and newsletters." },
      { step: "04", title: "Optimize", description: "Testing and revenue attribution." },
    ],
    benefits: [
      { title: "Owned audience", description: "Reach your customers without paying a platform each time.", icon: Mail },
      { title: "Highest ROI", description: "Email consistently outperforms every other channel.", icon: TrendingUp },
      { title: "Automation", description: "Flows work 24/7, converting while you sleep.", icon: Clock },
      { title: "Direct relationship", description: "No algorithm decides who sees your message.", icon: Users },
    ],
    deliverables: [
      "Lifecycle automation flows",
      "Monthly campaign calendar",
      "Email template design",
      "Segmentation strategy",
      "Revenue reporting dashboard",
    ],
    faq: [
      { question: "Which email platform do you use?", answer: "We're platform-agnostic and work with Klaviyo, HubSpot, Mailchimp, Customer.io and others. We'll recommend the best fit for your stack and scale." },
      { question: "How fast do flows go live?", answer: "Core automation flows (welcome, abandon cart, browse abandon) typically launch within 2-3 weeks, with broadcast campaigns running from month one." },
      { question: "Will my emails land in the inbox?", answer: "Deliverability is foundational. We handle authentication (SPF, DKIM, DMARC), list hygiene and warm-up so your sends reach the inbox, not spam." },
      { question: "How do you improve deliverability?", answer: "We handle authentication (SPF, DKIM, DMARC), clean inactive subscribers, warm up new domains, and monitor inbox placement. Good deliverability is foundational - it doesn't matter how great your email is if it lands in spam." },
      { question: "Can you migrate us to a new platform?", answer: "Yes. We handle full migrations between Klaviyo, HubSpot, Mailchimp, and others - preserving your flows, segments, and historical data while minimizing revenue disruption during the switch." },
    ],
  },

  "analytics-reporting": {
    id: "analytics-reporting",
    category: "marketing",
    tagline: "Measure what matters. Then improve what you measure.",
    overview:
      "You can't optimize what you can't measure - and most businesses are flying blind with broken tracking. We turn messy data into clear decisions. From GA4 setup to server-side tracking and executive dashboards, we make sure every channel is measured accurately and that the numbers tie back to revenue you can defend.",
    metrics: [
      { value: "100%", label: "Tracking accuracy" },
      { value: "24/7", label: "Live dashboard access" },
      { value: "-62%", label: "Reporting time saved" },
    ],
    whyItMatters:
      "Good data is the foundation of every growth decision. Without it, you're guessing where to spend, what's working, and what to cut. With it, every decision becomes faster, cheaper, and more confident.",
    howItWorks: [
      "We audit your current tracking to find the gaps and inaccuracies - most businesses are surprised how much of their data is broken or missing.",
      "We implement clean, server-side tracking across every channel - GA4, GTM, conversions, and events - so the numbers you see actually reflect reality.",
      "We build dashboards around your real KPIs and deliver monthly plain-English insights, translating data into clear recommendations your team can act on.",
    ],
    outcomes: [
      "Numbers you can actually trust for decisions",
      "One source of truth across every team",
      "Faster decisions with live dashboards",
      "Clear attribution showing what's driving revenue",
    ],
    features: [
      { title: "GA4 setup", description: "Proper GA4 configuration, events and conversions you can trust.", icon: BarChart3 },
      { title: "Conversion tracking", description: "Server-side and browser tracking across every channel.", icon: Target },
      { title: "Dashboards", description: "Looker Studio dashboards tailored to your KPIs.", icon: LineChart },
      { title: "Attribution", description: "Multi-touch attribution that credits the right channels.", icon: Globe },
      { title: "Reporting", description: "Monthly plain-English summaries your team will actually read.", icon: FileSearch },
      { title: "Tag management", description: "GTM container build and maintenance.", icon: Code2 },
    ],
    useCases: [
      "Companies with broken or incomplete tracking",
      "Teams tired of guessing what's working",
      "Brands scaling paid and needing clean data",
      "Leaders who want one source of truth",
    ],
    process: [
      { step: "01", title: "Audit", description: "Current tracking gaps and data quality issues." },
      { step: "02", title: "Implement", description: "GA4, GTM and server-side tracking setup." },
      { step: "03", title: "Visualize", description: "Dashboards built around your goals." },
      { step: "04", title: "Report", description: "Monthly insights and recommendations." },
    ],
    benefits: [
      { title: "Trust your numbers", description: "Make decisions with confidence, not guesswork.", icon: CheckCircle2 },
      { title: "One source of truth", description: "No more conflicting reports across teams.", icon: Database },
      { title: "Faster decisions", description: "Live dashboards replace weekly spreadsheet hunts.", icon: Zap },
      { title: "Prove ROI", description: "Defend your budget with revenue-tied reporting.", icon: LineChart },
    ],
    deliverables: [
      "GA4 and GTM implementation",
      "Conversion and event tracking",
      "Live Looker Studio dashboards",
      "Monthly insight reports",
      "Data quality monitoring",
    ],
    faq: [
      { question: "Do you fix existing tracking or start fresh?", answer: "Both. We audit what you have, fix what's salvageable, and rebuild what's broken - so you end up with tracking you can actually trust." },
      { question: "Can you integrate with our CRM?", answer: "Yes. We connect analytics to HubSpot, Salesforce, Shopify and most major CRMs so your dashboards show the full funnel from click to closed-won." },
      { question: "How technical do we need to be?", answer: "Not at all. You get clean dashboards and plain-English summaries. We handle all the technical setup and translate the data into clear recommendations." },
      { question: "Can you fix tracking without a developer?", answer: "Yes - we handle the full implementation ourselves via GTM and server-side tagging. Your dev team only needs to approve access; we do the rest." },
      { question: "Do you work with server-side tracking?", answer: "Absolutely. We implement server-side GTM and conversion APIs (Meta CAPI, Google) for more accurate, privacy-resilient tracking that survives cookie blocking and ad blockers." },
    ],
  },

  "website-marketing": {
    id: "website-marketing",
    category: "marketing",
    tagline: "Turn your website into a conversion machine - not a brochure.",
    overview:
      "Your website is your hardest-working salesperson - it never sleeps and meets every prospect. We build and optimize landing pages and websites that don't just look great, they convert. Through CRO, persuasion-driven copywriting and lead generation tactics, we turn visitors into qualified pipeline and paying customers.",
    metrics: [
      { value: "+218%", label: "Conversion rate lift" },
      { value: "-41%", label: "Bounce rate" },
      { value: "3.4x", label: "Lead volume" },
    ],
    whyItMatters:
      "Every visitor your marketing brings has to land somewhere. If that page doesn't convert, all your ad spend is wasted. Conversion optimization is the highest-leverage work you can do - it multiplies the value of every other channel.",
    howItWorks: [
      "We analyze your current funnel with heatmaps, session recordings, and analytics to find exactly where and why visitors are dropping off.",
      "We design and build conversion-focused pages - rewriting copy, restructuring layouts, and removing friction so more visitors take the action you want.",
      "We run continuous A/B tests, learning from each one and compounding the wins, so your conversion rate keeps climbing month after month.",
    ],
    outcomes: [
      "More leads or sales from your existing traffic",
      "Lower cost per acquisition across every channel",
      "Data-backed changes, not guesswork",
      "A faster, smoother experience for every visitor",
    ],
    features: [
      { title: "Landing pages", description: "High-converting pages built for specific campaigns and audiences.", icon: Globe },
      { title: "CRO", description: "Continuous A/B testing to squeeze more from existing traffic.", icon: Target },
      { title: "Lead generation", description: "Forms, lead magnets and funnels that capture qualified leads.", icon: TrendingUp },
      { title: "Copywriting", description: "Persuasive, benefit-driven copy that moves visitors to act.", icon: FileSearch },
      { title: "UX design", description: "Intuitive, fast experiences that reduce friction.", icon: Search },
      { title: "Heatmapping", description: "Session recordings and heatmaps to find what's broken.", icon: BarChart3 },
    ],
    useCases: [
      "Brands wasting ad spend on low-converting pages",
      "Companies with high traffic but low leads",
      "SaaS products needing trial signups",
      "E-commerce stores lifting checkout rates",
    ],
    process: [
      { step: "01", title: "Analyze", description: "Analytics, heatmaps and funnel review." },
      { step: "02", title: "Design", description: "Wireframes, copy and conversion-focused layouts." },
      { step: "03", title: "Build", description: "Fast, responsive pages with clean tracking." },
      { step: "04", title: "Optimize", description: "A/B testing and ongoing iteration." },
    ],
    benefits: [
      { title: "More from less", description: "Convert the traffic you already have - no extra spend needed.", icon: TrendingUp },
      { title: "Lower CAC", description: "Higher conversion rates drop your cost per acquisition.", icon: Award },
      { title: "Data-backed", description: "Every change tested, not guessed.", icon: BarChart3 },
      { title: "Compounding gains", description: "Each winning test lifts every future campaign.", icon: LineChart },
    ],
    deliverables: [
      "Conversion-optimized landing pages",
      "CRO experiment roadmap",
      "Lead generation funnels",
      "Heatmap and session analysis",
      "Conversion reporting",
    ],
    faq: [
      { question: "Do you redesign our whole site or just key pages?", answer: "We start with the highest-impact pages - usually landing pages, homepage and checkout. Once those are optimized, we can expand across the full site as needed." },
      { question: "How do you decide what to test?", answer: "We combine heatmap analysis, funnel data and conversion research to prioritize tests by expected impact. No random button-color tests - every experiment has a hypothesis and a goal." },
      { question: "How long until I see results?", answer: "Quick wins often land in the first 30 days. Deeper conversion gains compound over 3-6 months of disciplined testing and iteration." },
      { question: "Do you redesign pages or build new ones?", answer: "Both. We often start by optimizing your highest-traffic pages, then build dedicated landing pages for campaigns. Each is designed specifically to convert, not just to look good." },
      { question: "How do you prioritize tests?", answer: "We score every potential test by expected impact and effort, using heatmap data and funnel analysis. We never waste time on button-color tests - every experiment targets a real, measurable lift." },
    ],
  },

  /* ================================================================== */
  /* DEVELOPMENT                                                         */
  /* ================================================================== */
  "web-development": {
    id: "web-development",
    category: "development",
    tagline: "Fast, scalable websites and web apps engineered to perform.",
    overview:
      "Your website isn't a cost - it's your most important digital asset. We design and build custom websites, web applications and APIs that are fast, secure and built to scale. From marketing sites to complex platforms, our engineers deliver clean, maintainable code that grows with your business and never holds you back.",
    metrics: [
      { value: "<1s", label: "Average load time" },
      { value: "98+", label: "Lighthouse performance score" },
      { value: "100%", label: "Custom-built, no templates" },
    ],
    whyItMatters:
      "A slow, fragile website quietly bleeds customers and revenue. A fast, well-built one becomes a competitive advantage - ranking higher, converting better, and scaling effortlessly as you grow.",
    howItWorks: [
      "We start with discovery - mapping your requirements, technical constraints, and growth plans to choose the right architecture and tech stack for the job.",
      "Our designers and engineers work in tight sprints, shipping working software weekly. You see real progress constantly, with feedback loops baked into every iteration.",
      "We launch with rigorous testing and performance optimization, then hand over clean, documented code you fully own - no lock-in, ever.",
    ],
    outcomes: [
      "A fast, scalable product built on modern tech",
      "Clean code your team can maintain and extend",
      "Sub-second load times that rank and convert",
      "An architecture that grows with your business",
    ],
    features: [
      { title: "Custom websites", description: "Bespoke marketing sites built with modern frameworks like Next.js.", icon: Globe },
      { title: "Web applications", description: "Complex dashboards, portals and SaaS products.", icon: Code2 },
      { title: "API development", description: "REST and GraphQL APIs built for performance and security.", icon: Database },
      { title: "Headless CMS", description: "Content management that gives your team full control.", icon: FileSearch },
      { title: "E-commerce", description: "Fast, conversion-focused online stores.", icon: Target },
      { title: "Performance", description: "Edge rendering, caching and optimization for sub-second loads.", icon: Zap },
    ],
    useCases: [
      "Startups launching an MVP or SaaS product",
      "Companies outgrowing a template site",
      "E-commerce brands needing speed and scale",
      "Enterprises modernizing legacy systems",
    ],
    process: [
      { step: "01", title: "Discover", description: "Requirements, architecture and tech stack." },
      { step: "02", title: "Design", description: "UI/UX design and interactive prototyping." },
      { step: "03", title: "Build", description: "Agile development with weekly releases." },
      { step: "04", title: "Launch", description: "Testing, deployment and monitoring." },
    ],
    benefits: [
      { title: "Blazing fast", description: "Sub-second loads that rank well and convert better.", icon: Zap },
      { title: "Built to scale", description: "Architecture that handles growth without rewrites.", icon: TrendingUp },
      { title: "Future-proof", description: "Modern stack your team can maintain and extend.", icon: Rocket },
      { title: "SEO-ready", description: "Clean code and structure that search engines love.", icon: Search },
    ],
    deliverables: [
      "Custom-built website or web app",
      "Responsive, accessible UI",
      "CMS integration",
      "API development",
      "Performance optimization",
    ],
    faq: [
      { question: "What technologies do you use?", answer: "We specialize in modern JavaScript: Next.js, React, TypeScript, Node.js and Tailwind. For backends, we work with Postgres, Prisma and serverless platforms. We pick the right tool for each job." },
      { question: "Do you work with existing codebases?", answer: "Yes. We regularly audit, refactor and extend existing applications. We'll assess your codebase and recommend whether to evolve it or rebuild." },
      { question: "Who owns the code?", answer: "You do - 100%. Everything we build is yours, in your repositories, with no vendor lock-in. We hand over clean, documented code." },
      { question: "Do you provide ongoing maintenance?", answer: "Yes. We offer retainers for ongoing development, security updates, and feature work. Many clients keep us on after launch to iterate as their product evolves." },
      { question: "Can you integrate with our existing systems?", answer: "Absolutely. We build integrations with CRMs, payment processors, ERPs, and internal APIs regularly. If it has an API, we can connect to it cleanly." },
    ],
  },

  "mobile-app-development": {
    id: "mobile-app-development",
    category: "development",
    tagline: "Native and cross-platform apps your users will love - and rate 5 stars.",
    overview:
      "Mobile is where your customers live - in their pockets, all day, every day. We build mobile apps for iOS, Android and cross-platform that feel native, perform flawlessly and scale to millions of users. From MVP to enterprise, we handle design, development and ongoing iteration so your app becomes a habit, not a delete.",
    metrics: [
      { value: "4.8", label: "Average app store rating" },
      { value: "<2s", label: "App startup time" },
      { value: "99.9%", label: "Crash-free sessions" },
    ],
    whyItMatters:
      "A great app creates a direct, always-on relationship with your customers - no browser, no algorithm, no middleman. It's the most intimate digital channel you can own, and the hardest to get right.",
    howItWorks: [
      "We start with product strategy - defining the core features that matter, scoping an MVP if needed, and planning the roadmap toward your full vision.",
      "Our designers craft intuitive interfaces and prototypes you can test with real users before we write production code, de-risking the build.",
      "We develop in cross-platform (React Native/Flutter) or native (Swift/Kotlin) based on your needs, shipping in iterations with beta testing throughout.",
    ],
    outcomes: [
      "A polished app users genuinely love to use",
      "App store approval handled end to end",
      "Crash-free, performant sessions at scale",
      "A product that's ready to grow with your users",
    ],
    features: [
      { title: "iOS development", description: "Native Swift apps optimized for the Apple ecosystem.", icon: Smartphone },
      { title: "Android development", description: "Native Kotlin apps built for the full Android range.", icon: Smartphone },
      { title: "Cross-platform", description: "React Native and Flutter apps with one codebase.", icon: Code2 },
      { title: "UI/UX design", description: "Intuitive, beautiful interfaces that users love.", icon: Target },
      { title: "Backend & APIs", description: "Scalable backends and APIs powering your app.", icon: Database },
      { title: "App store optimization", description: "Launch strategy and ASO to drive downloads.", icon: TrendingUp },
    ],
    useCases: [
      "Startups validating an app idea with an MVP",
      "Businesses extending their product to mobile",
      "E-commerce brands launching native checkout",
      "Enterprises building internal tools",
    ],
    process: [
      { step: "01", title: "Discover", description: "Product strategy and feature scoping." },
      { step: "02", title: "Design", description: "Wireframes, prototypes and design system." },
      { step: "03", title: "Build", description: "Agile development with beta testing." },
      { step: "04", title: "Launch", description: "App store submission and post-launch iteration." },
    ],
    benefits: [
      { title: "Always-on access", description: "Be in your customers' pockets 24/7.", icon: Smartphone },
      { title: "Native performance", description: "Smooth, fast experiences users expect.", icon: Zap },
      { title: "Push engagement", description: "Reach users directly with notifications.", icon: Megaphone },
      { title: "Own the relationship", description: "No platform algorithm between you and users.", icon: Users },
    ],
    deliverables: [
      "Native or cross-platform mobile app",
      "App store submission",
      "Backend and API integration",
      "Analytics and crash reporting",
      "Post-launch support",
    ],
    faq: [
      { question: "Native or cross-platform - which is right?", answer: "It depends on your budget, timeline and performance needs. Cross-platform (React Native/Flutter) ships faster and cheaper for most apps; native makes sense for maximum performance or deep platform integration." },
      { question: "How long does an app take to build?", answer: "An MVP typically takes 8-12 weeks. A full-featured production app usually runs 4-6 months. We ship in iterations so you see progress weekly." },
      { question: "Do you handle app store submission?", answer: "Yes - we manage the full submission process for both Apple App Store and Google Play, including store listings, screenshots, and review responses." },
      { question: "Do you do app store optimization?", answer: "Yes - we handle the full ASO package: keyword-optimized titles and descriptions, compelling screenshots, and review management to maximize your discoverability and install conversion." },
      { question: "What happens after launch?", answer: "We provide post-launch support, monitor crashes and performance, and iterate based on real user feedback. Launch is a milestone, not the finish line - we stick around to help your app succeed." },
    ],
  },

  /* ================================================================== */
  /* SECURITY                                                           */
  /* ================================================================== */
  "cyber-security": {
    id: "cyber-security",
    category: "security",
    tagline: "Find your weaknesses before attackers do - and fix them first.",
    overview:
      "A single breach can cost you customers, revenue and years of trust. We secure your websites, apps and infrastructure with proactive threat detection, security audits and 24/7 monitoring. From penetration testing to incident response, we keep your business - and your customers' data - safe from the threats that matter.",
    metrics: [
      { value: "24/7", label: "Threat monitoring" },
      { value: "<15min", label: "Incident response time" },
      { value: "100%", label: "Vulnerabilities patched" },
    ],
    whyItMatters:
      "Security isn't a feature you add later - it's the foundation everything else depends on. The cost of prevention is a fraction of the cost of a breach, both in money and reputation. Proactive defense is always cheaper than reactive recovery.",
    howItWorks: [
      "We start with a comprehensive security assessment - auditing your sites, apps, and infrastructure to find vulnerabilities before attackers do.",
      "We then harden your systems: patching flaws, closing attack surfaces, and implementing defenses like WAF rules, DDoS protection, and access controls.",
      "We deploy 24/7 monitoring and an incident response plan, so if a threat emerges we detect it in minutes and respond before it becomes a breach.",
    ],
    outcomes: [
      "Vulnerabilities found and fixed before exploitation",
      "Round-the-clock monitoring for peace of mind",
      "Compliance readiness for your industry's standards",
      "A security posture that builds customer trust",
    ],
    features: [
      { title: "Security audits", description: "Comprehensive audits of your sites, apps and infrastructure.", icon: FileSearch },
      { title: "Penetration testing", description: "Simulated attacks that find weaknesses before attackers do.", icon: Target },
      { title: "Threat detection", description: "Real-time monitoring for intrusions and anomalies.", icon: ShieldCheck },
      { title: "Incident response", description: "Rapid response and recovery when threats are detected.", icon: Zap },
      { title: "DDoS protection", description: "Layered defenses that keep your services online.", icon: Cloud },
      { title: "Security training", description: "Team training to prevent social engineering and phishing.", icon: Users },
    ],
    useCases: [
      "Companies handling customer data",
      "SaaS and fintech needing compliance",
      "E-commerce stores protecting payments",
      "Any business that can't afford downtime",
    ],
    process: [
      { step: "01", title: "Assess", description: "Full security audit and risk assessment." },
      { step: "02", title: "Secure", description: "Patch vulnerabilities and harden systems." },
      { step: "03", title: "Monitor", description: "24/7 threat detection and alerting." },
      { step: "04", title: "Respond", description: "Incident response and continuous improvement." },
    ],
    benefits: [
      { title: "Prevent breaches", description: "Stop attacks before they ever reach your data.", icon: ShieldCheck },
      { title: "Customer trust", description: "Show customers you take their security seriously.", icon: Users },
      { title: "Compliance ready", description: "Meet the standards your industry requires.", icon: CheckCircle2 },
      { title: "Peace of mind", description: "Sleep well knowing experts are watching.", icon: Clock },
    ],
    deliverables: [
      "Security audit report",
      "Penetration testing",
      "24/7 threat monitoring",
      "Incident response plan",
      "Security training program",
    ],
    faq: [
      { question: "How often should we do a security audit?", answer: "At minimum annually, plus after any major change (new features, infrastructure, acquisitions). For high-risk industries, quarterly audits are common. We'll recommend the right cadence for your risk profile." },
      { question: "What happens if we're breached?", answer: "Our incident response plan kicks in immediately - we isolate, contain, eradicate and recover, then run a post-mortem to prevent recurrence. Response time is under 15 minutes for monitored clients." },
      { question: "Do you work with our existing IT team?", answer: "Absolutely. We complement in-house teams, handling the specialized security work while collaborating closely with your developers and IT staff to implement fixes and best practices." },
      { question: "What's included in a penetration test?", answer: "Our pen tests simulate real attacks - external and internal network, web app, and social engineering. You get a detailed report of findings ranked by risk, plus a remediation plan to fix each one." },
      { question: "Do you offer managed security services?", answer: "Yes. Beyond one-off audits, we provide ongoing managed security: continuous monitoring, threat detection, patch management, and a retainer-based incident response retainer for rapid action." },
    ],
  },

  "data-protection": {
    id: "data-protection",
    category: "security",
    tagline: "Encryption, compliance and privacy by design - not as an afterthought.",
    overview:
      "Data is your most valuable asset - and your biggest liability if mishandled. We help you protect sensitive data and meet regulatory requirements like GDPR, CCPA and HIPAA. From encryption to access controls and privacy policies, we build data protection into everything you do, so compliance becomes a feature, not a fire drill.",
    metrics: [
      { value: "GDPR", label: "Compliance ready" },
      { value: "256-bit", label: "Encryption standard" },
      { value: "0", label: "Data breaches" },
    ],
    whyItMatters:
      "Privacy regulations are tightening and customer expectations are rising. A single data breach can trigger massive fines, lawsuits, and irreversible reputation damage. Protecting data proactively is now a business requirement, not a nice-to-have.",
    howItWorks: [
      "We map your data - where it lives, how it flows, and what regulations apply - because you can't protect what you don't know you have.",
      "We implement layered protection: encryption at rest and in transit, role-based access controls, and zero-trust architecture so only the right people reach sensitive data.",
      "We build the policies, documentation, and consent tools that keep you compliant - then maintain them as regulations evolve, so you're always audit-ready.",
    ],
    outcomes: [
      "Encryption protecting data everywhere it lives",
      "Compliance with GDPR, CCPA, HIPAA, or SOC 2",
      "Clear privacy practices that build customer trust",
      "Tested backups and recovery for resilience",
    ],
    features: [
      { title: "Encryption", description: "End-to-end encryption for data at rest and in transit.", icon: Lock },
      { title: "Compliance", description: "GDPR, CCPA, HIPAA and SOC 2 readiness and documentation.", icon: ShieldCheck },
      { title: "Access control", description: "Role-based access and zero-trust security models.", icon: Target },
      { title: "Privacy policies", description: "Clear, compliant privacy policies and consent management.", icon: FileSearch },
      { title: "Data mapping", description: "Know exactly where your sensitive data lives.", icon: Database },
      { title: "Backup & recovery", description: "Resilient backups and tested recovery procedures.", icon: Cloud },
    ],
    useCases: [
      "Companies subject to GDPR, CCPA or HIPAA",
      "SaaS platforms handling user data",
      "Healthcare and fintech startups",
      "Any business preparing for SOC 2",
    ],
    process: [
      { step: "01", title: "Map", description: "Data inventory and regulatory scope." },
      { step: "02", title: "Protect", description: "Encryption, access controls and policies." },
      { step: "03", title: "Comply", description: "Documentation and compliance attestation." },
      { step: "04", title: "Maintain", description: "Ongoing audits and policy updates." },
    ],
    benefits: [
      { title: "Avoid fines", description: "Stay ahead of regulations and avoid costly penalties.", icon: ShieldCheck },
      { title: "Customer trust", description: "Privacy done right becomes a competitive edge.", icon: Users },
      { title: "Reduced risk", description: "Minimize the chance and impact of a breach.", icon: Lock },
      { title: "Audit ready", description: "Always prepared for compliance reviews.", icon: CheckCircle2 },
    ],
    deliverables: [
      "Data protection assessment",
      "Encryption implementation",
      "Compliance documentation",
      "Privacy policy and consent tools",
      "Backup and recovery plan",
    ],
    faq: [
      { question: "Which regulations apply to us?", answer: "It depends on where your customers are and your industry. EU users trigger GDPR; California users trigger CCPA; health data triggers HIPAA. We'll assess your situation and tell you exactly what applies." },
      { question: "How long does compliance take?", answer: "Initial readiness typically takes 4-8 weeks depending on your current state and complexity. Compliance is ongoing - we keep you audit-ready as regulations evolve." },
      { question: "Can you help with SOC 2?", answer: "Yes. We guide you through SOC 2 readiness - implementing the controls, documenting policies, and preparing you for a successful audit with a certified assessor." },
      { question: "Can you help us prepare for SOC 2?", answer: "Yes. We guide the full SOC 2 readiness journey - implementing technical controls, drafting policies, and preparing you for a successful audit with an accredited assessor." },
      { question: "Do you handle data subject requests?", answer: "We implement the tooling and workflows to handle GDPR/CCPA data subject requests - access, deletion, and portability - so you can respond to requests within the legal timeframes." },
    ],
  },
};
