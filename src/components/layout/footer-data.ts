import {
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Github,
  type LucideIcon,
} from "lucide-react";

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Services",
    links: [
      { label: "SEO Optimization", href: "/services/seo-optimization" },
      { label: "Google Ads", href: "/services/google-ads" },
      { label: "Social Media Marketing", href: "/services/social-media-marketing" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "Cyber Security", href: "/services/cyber-security" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
      { label: "Book a call", href: "/contact" },
    ],
  },
  {
    title: "More services",
    links: [
      { label: "Video Marketing", href: "/services/video-marketing" },
      { label: "Content Marketing", href: "/services/content-marketing" },
      { label: "Email Marketing", href: "/services/email-marketing" },
      { label: "Analytics & Reporting", href: "/services/analytics-reporting" },
      { label: "Website Marketing", href: "/services/website-marketing" },
      { label: "Data Protection", href: "/services/data-protection" },
    ],
  },
];

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "X (Twitter)", href: "https://x.com", icon: Twitter },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
  { label: "GitHub", href: "https://github.com", icon: Github },
];
