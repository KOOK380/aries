import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LogoIcon } from "@/components/ui/LogoIcon";
import { NewsletterForm } from "./NewsletterForm";
import { footerColumns, socialLinks } from "./footer-data";

/**
 * Multi-column site footer with brand description + newsletter, navigation columns,
 * contact details and social links. Original content - no copyrighted assets.
 */
export function Footer() {
 return (
 <footer className="border-t border-surface-border bg-surface-base/60 dark:border-white/10 dark:bg-white/[0.02]">
 <Container>
 <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-8">
 {/* Brand + newsletter */}
 <div className="max-w-sm">
 <Link href="/" className="inline-flex items-center gap-2.5">
 <LogoIcon />
 <span className="text-lg font-extrabold tracking-tight text-surface-heading dark:text-white">
 Aries<span className="text-gradient">Tech</span>
 </span>
 </Link>
 <p className="mt-4 text-sm leading-relaxed text-surface-text dark:text-gray-400">
 A full-service digital partner building, growing and protecting ambitious brands.
 Marketing, web & mobile development, analytics and security under one roof.
 </p>

 {/* Newsletter */}
 <NewsletterForm />
 <p className="mt-2 text-xs text-surface-text dark:text-gray-500">
 Growth tips, monthly. No spam.
 </p>
 </div>

 {/* Link columns */}
 {footerColumns.map((col) => (
 <nav key={col.title} aria-label={col.title}>
 <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-surface-heading dark:text-white">
 {col.title}
 </h3>
 <ul className="mt-4 space-y-2.5">
 {col.links.map((link) => (
 <li key={link.label}>
 <Link
 href={link.href}
 className="text-sm text-surface-text transition-colors hover:text-brand-primary dark:text-gray-400 dark:hover:text-brand-secondary"
 >
 {link.label}
 </Link>
 </li>
 ))}
 </ul>
 </nav>
 ))}
 </div>

 {/* Contact + socials */}
 <div className="flex flex-col gap-6 border-t border-surface-border py-6 md:flex-row md:items-center md:justify-between dark:border-white/10">
 <ul className="flex flex-col gap-2 text-sm text-surface-text sm:flex-row sm:gap-6 dark:text-gray-400">
 <li className="flex items-center gap-2">
 <Mail className="h-4 w-4 text-brand-primary" />
 hello@ariestech.example
 </li>
 <li className="flex items-center gap-2">
 <Phone className="h-4 w-4 text-brand-primary" />
 +1 (555) 014-2278
 </li>
 <li className="flex items-center gap-2">
 <MapPin className="h-4 w-4 text-brand-primary" />
 Remote-first · global
 </li>
 </ul>

 <ul className="flex items-center gap-2">
 {socialLinks.map((social) => {
 const Icon = social.icon;
 return (
 <li key={social.label}>
 <a
 href={social.href}
 target="_blank"
 rel="noopener noreferrer"
 aria-label={social.label}
 className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-surface-border bg-white text-surface-heading transition-colors hover:border-brand-primary hover:text-brand-primary dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:text-brand-secondary"
 >
 <Icon className="h-4 w-4" />
 </a>
 </li>
 );
 })}
 </ul>
 </div>

 {/* Legal bar */}
 <div className="flex flex-col items-center justify-between gap-3 border-t border-surface-border py-5 text-xs text-surface-text sm:flex-row dark:border-white/10 dark:text-gray-500">
 <p>© {new Date().getFullYear()} AriesTech. All rights reserved.</p>
 <ul className="flex items-center gap-4">
 <li>
 <Link href="/privacy" className="transition-colors hover:text-brand-primary">
 Privacy
 </Link>
 </li>
 <li>
 <Link href="/terms" className="transition-colors hover:text-brand-primary">
 Terms
 </Link>
 </li>
 <li>
 <Link href="/cookies" className="transition-colors hover:text-brand-primary">
 Cookies
 </Link>
 </li>
 </ul>
 </div>
 </Container>
 </footer>
 );
}
