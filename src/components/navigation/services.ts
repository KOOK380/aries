import {
  Search,
  Megaphone,
  Share2,
  Video,
  FileText,
  Mail,
  BarChart3,
  Globe,
  Code2,
  Smartphone,
  ShieldCheck,
  Lock,
  Cloud,
  Server,
  HardDrive,
  Database,
  AtSign,
  Cpu,
  Network,
  type LucideIcon,
} from "lucide-react";

/**
 * Represents a single marketing service rendered inside the mega menu.
 * Services are driven entirely by this data array - the UI maps over it,
 * so adding a new service is a one-line change with zero JSX duplication.
 */
export interface Service {
  /** Stable identifier used for React keys and ARIA wiring. */
  id: string;
  /** Bold service title shown in the card header. */
  title: string;
  /** Short supporting description of deliverables. */
  description: string;
  /** Lucide icon component rendered in the rounded badge. */
  icon: LucideIcon;
  /** Route the card links to. */
  href: string;
}

export const services: Service[] = [
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    description: "Google Search, Technical SEO & Local SEO",
    icon: Search,
    href: "/services/seo-optimization",
  },
  {
    id: "google-ads",
    title: "Google Ads",
    description: "Search, Performance Max & Shopping",
    icon: Megaphone,
    href: "/services/google-ads",
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Facebook, Instagram, LinkedIn & X",
    icon: Share2,
    href: "/services/social-media-marketing",
  },
  {
    id: "video-marketing",
    title: "Video Marketing",
    description: "YouTube Ads, Shorts & Brand Videos",
    icon: Video,
    href: "/services/video-marketing",
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    description: "Blogs, Website Content & Copywriting",
    icon: FileText,
    href: "/services/content-marketing",
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    description: "Automation, Campaigns & Newsletters",
    icon: Mail,
    href: "/services/email-marketing",
  },
  {
    id: "analytics-reporting",
    title: "Analytics & Reporting",
    description: "GA4, Conversion Tracking & Reports",
    icon: BarChart3,
    href: "/services/analytics-reporting",
  },
  {
    id: "website-marketing",
    title: "Website Marketing",
    description: "Landing Pages, CRO & Lead Generation",
    icon: Globe,
    href: "/services/website-marketing",
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Custom Websites, Web Apps & APIs",
    icon: Code2,
    href: "/services/web-development",
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: "iOS, Android & Cross-Platform Apps",
    icon: Smartphone,
    href: "/services/mobile-app-development",
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    description: "Threat Detection, Audits & Monitoring",
    icon: ShieldCheck,
    href: "/services/cyber-security",
  },
  {
    id: "data-protection",
    title: "Data Protection",
    description: "Encryption, Compliance & Privacy",
    icon: Lock,
    href: "/services/data-protection",
  },
  {
    id: "cloud-hosting",
    title: "Cloud Hosting",
    description: "Scalable, Reliable Cloud Infrastructure",
    icon: Cloud,
    href: "/services/cloud-hosting",
  },
  {
    id: "web-hosting",
    title: "Web Hosting",
    description: "Fast, Secure Hosting for Websites",
    icon: Globe,
    href: "/services/web-hosting",
  },
  {
    id: "managed-hosting",
    title: "Managed Hosting",
    description: "Fully Managed Servers & Support",
    icon: Server,
    href: "/services/managed-hosting",
  },
  {
    id: "aws-solutions",
    title: "AWS Solutions",
    description: "Architecture, Migration & Optimization",
    icon: Cpu,
    href: "/services/aws-solutions",
  },
  {
    id: "email-hosting",
    title: "Email Hosting",
    description: "Secure Business Email & Collaboration",
    icon: AtSign,
    href: "/services/email-hosting",
  },
  {
    id: "dedicated-server",
    title: "Dedicated Server",
    description: "High-Performance Bare Metal Servers",
    icon: HardDrive,
    href: "/services/dedicated-server",
  },
  {
    id: "vps-hosting",
    title: "VPS Hosting",
    description: "Virtual Private Servers & Resources",
    icon: Network,
    href: "/services/vps-hosting",
  },
  {
    id: "database-hosting",
    title: "Database Hosting",
    description: "Managed Databases & Backups",
    icon: Database,
    href: "/services/database-hosting",
  },
];
