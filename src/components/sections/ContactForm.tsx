"use client";

import { useId, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
 CheckCircle2,
 Send,
 User,
 Mail,
 Building2,
 Globe,
 Briefcase,
 DollarSign,
 MessageSquare,
 type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const easeOut = [0.16, 1, 0.3, 1] as const;

const services = [
 "SEO Optimization",
 "Google Ads",
 "Social Media Marketing",
 "Content Marketing",
 "Email Marketing",
 "Analytics & Reporting",
 "Web Development",
 "Mobile App Development",
 "Cyber Security",
 "Full-service plan",
];

const budgets = ["< $5k/mo", "$5k - $15k/mo", "$15k - $50k/mo", "$50k+/mo"];

export function ContactForm() {
 const [submitted, setSubmitted] = useState(false);
 const [service, setService] = useState(services[0]);
 const [budget, setBudget] = useState(budgets[1]);
 const fieldId = useId();

 const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
 e.preventDefault();
 // Demo-only: no backend. In production this would POST to an API route.
 setSubmitted(true);
 };

 if (submitted) {
 return (
 <motion.div
 initial={{ opacity: 0, scale: 0.96 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.4, ease: easeOut }}
 className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-surface-border bg-white p-10 text-center shadow-mega dark:border-white/10 dark:bg-surface-heading"
 >
 {/* Glow halo behind the success icon */}
 <div aria-hidden className="pointer-events-none absolute inset-0">
 <div className="absolute left-1/2 top-12 h-40 w-40 -translate-x-1/2 rounded-full bg-emerald-500/20" />
 </div>
 <motion.span
 initial={{ scale: 0, rotate: -30 }}
 animate={{ scale: 1, rotate: 0 }}
 transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
 className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 shadow-lg dark:text-emerald-400"
 >
 <CheckCircle2 className="h-8 w-8" />
 </motion.span>
 <h3 className="relative mt-6 text-2xl font-extrabold text-surface-heading dark:text-white">
 Thanks - we'll be in touch!
 </h3>
 <p className="relative mt-2 max-w-sm text-sm text-surface-text dark:text-gray-400">
 A specialist will reach out within one business day to schedule your free consultation.
 </p>
 <Button variant="secondary" size="md" className="relative mt-6" onClick={() => setSubmitted(false)}>
 Send another message
 </Button>
 </motion.div>
 );
 }

 return (
 <form
 onSubmit={handleSubmit}
 className="relative overflow-hidden rounded-3xl border border-surface-border bg-white p-6 shadow-mega sm:p-8 dark:border-white/10 dark:bg-surface-heading"
 >


 {/* Header */}
 <div className="relative mb-6 flex items-center gap-3">
 <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-md">
 <Send className="h-5 w-5" />
 </span>
 <div>
 <h3 className="text-lg font-extrabold tracking-tight text-surface-heading dark:text-white">
 Start a conversation
 </h3>
 <p className="text-xs text-surface-text dark:text-gray-400">
 We reply within one business day.
 </p>
 </div>
 </div>

 <div className="relative grid gap-4 sm:grid-cols-2">
 <Field label="Full name" htmlFor={`${fieldId}-name`} required icon={User}>
 <input
 id={`${fieldId}-name`}
 name="name"
 type="text"
 required
 autoComplete="name"
 placeholder="Jane Doe"
 className={inputClass}
 />
 </Field>
 <Field label="Work email" htmlFor={`${fieldId}-email`} required icon={Mail}>
 <input
 id={`${fieldId}-email`}
 name="email"
 type="email"
 required
 autoComplete="email"
 placeholder="jane@company.com"
 className={inputClass}
 />
 </Field>
 <Field label="Company" htmlFor={`${fieldId}-company`} icon={Building2}>
 <input
 id={`${fieldId}-company`}
 name="company"
 type="text"
 autoComplete="organization"
 placeholder="Acme Inc."
 className={inputClass}
 />
 </Field>
 <Field label="Website" htmlFor={`${fieldId}-website`} icon={Globe}>
 <input
 id={`${fieldId}-website`}
 name="website"
 type="url"
 inputMode="url"
 placeholder="https://acme.com"
 className={inputClass}
 />
 </Field>
 </div>

 <div className="relative mt-4 grid gap-4 sm:grid-cols-2">
 <Field label="What do you need?" htmlFor={`${fieldId}-service`} icon={Briefcase}>
 <select
 id={`${fieldId}-service`}
 name="service"
 value={service}
 onChange={(e) => setService(e.target.value)}
 className={inputClass}
 >
 {services.map((s) => (
 <option key={s} value={s}>
 {s}
 </option>
 ))}
 </select>
 </Field>
 <Field label="Monthly budget" htmlFor={`${fieldId}-budget`} icon={DollarSign}>
 <select
 id={`${fieldId}-budget`}
 name="budget"
 value={budget}
 onChange={(e) => setBudget(e.target.value)}
 className={inputClass}
 >
 {budgets.map((b) => (
 <option key={b} value={b}>
 {b}
 </option>
 ))}
 </select>
 </Field>
 </div>

 <div className="relative mt-4">
 <Field label="Tell us about your goals" htmlFor={`${fieldId}-message`} icon={MessageSquare}>
 <textarea
 id={`${fieldId}-message`}
 name="message"
 rows={4}
 placeholder="We're a DTC skincare brand doing $200k/mo and want to scale paid..."
 className={cn(inputClass, "resize-none")}
 />
 </Field>
 </div>

 <div className="relative mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
 <p className="text-xs text-surface-text dark:text-gray-500">
 By submitting, you agree to our{" "}
 <a href="/privacy" className="font-semibold text-brand-primary hover:underline">
 privacy policy
 </a>
 .
 </p>
 <Button type="submit" size="lg" className="w-full sm:w-auto">
 <Send className="h-4 w-4" />
 Send message
 </Button>
 </div>
 </form>
 );
}

const inputClass =
 "w-full rounded-xl border border-surface-border bg-white px-4 py-2.5 pl-11 text-sm text-surface-heading placeholder:text-surface-text/60 transition-all duration-200 focus-visible:border-brand-primary focus-visible:ring-4 focus-visible:ring-brand-primary/10 focus-visible:outline-none dark:border-white/10 dark:bg-white/5 dark:text-white dark:[&>option]:bg-surface-heading dark:[&>option]:text-white";

function Field({
 label,
 htmlFor,
 required,
 icon: Icon,
 children,
}: {
 label: string;
 htmlFor: string;
 required?: boolean;
 icon: LucideIcon;
 children: React.ReactNode;
}) {
 return (
 <div className="group/field">
 <label
 htmlFor={htmlFor}
 className="mb-1.5 block text-xs font-semibold text-surface-heading dark:text-gray-200"
 >
 {label}
 {required && <span className="ml-0.5 text-brand-primary">*</span>}
 </label>
 <div className="relative">
 {/* Floating field icon - moves into the input */}
 <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-surface-text/50 transition-colors duration-200 group-focus-within/field:text-brand-primary dark:text-gray-500 [&~*]:block">
 <Icon className="h-4 w-4" />
 </span>
 {children}
 </div>
 </div>
 );
}
