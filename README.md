# ApexDigital — Premium Marketing Website

A production-ready, fully responsive marketing website with a premium **Digital Marketing Mega Menu** — built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

Original design and copy. No copyrighted assets or verbatim text reproduced.

---

## ✨ Highlights

- **Full multi-page site** — Home, About, Pricing, Contact, all statically prerendered.
- **Premium floating mega menu** (~900px) — frosted glass panel, soft shadow, rounded-3xl.
- **Tight, modern spacing** — compact section rhythm (`section-stack` utility) so the page reads dense and premium, never airy.
- **Data-driven everywhere** — services, stats, pillars, process, case studies, testimonials, pricing, FAQ and footer links all come from typed arrays. Zero duplicated JSX.
- **Rich Framer Motion animations** — scroll reveals, hover lifts, animated counters, accordion, dropdown (opacity/y/scale), gradient sweeps.
- **Fully responsive** — desktop floating panel collapses into a mobile drawer with a single-column accordion.
- **Dark mode** via `next-themes` (system-aware, no flash) with a cross-fading toggle.
- **Accessible** — ARIA wiring on the menu/accordion/form, keyboard support, focus-visible outlines, labelled regions, body-scroll lock on mobile.
- **Working contact form** with client-side state + a success state (demo only — wire to your API/provider).

---

## 📄 Pages

| Route | Description |
| --- | --- |
| `/` | Hero, logo cloud, services grid, stats, why-us, process, case studies, testimonials, pricing, FAQ, CTA |
| `/about` | Story, mission, timeline, values, stats, CTA |
| `/pricing` | Pricing tiers, feature comparison table, FAQ, CTA |
| `/contact` | Validated contact form + contact details + booking CTA |

---

## 🎨 Design tokens

| Token | Value |
| --- | --- |
| Primary | `#FF1744` |
| Secondary | `#FF4D6D` |
| Background | `#FFFFFF` |
| Heading | `#111827` |
| Text | `#6B7280` |
| Border | `#F3F4F6` |
| Font | Poppins (`next/font/google`) |

Exposed as Tailwind theme extensions under `brand.*` and `surface.*` (e.g. `bg-brand-primary`, `text-surface-text`).

---

## 📁 Project structure

```
src/
├── app/
│   ├── globals.css             # Tailwind layers + reusable utilities
│   ├── layout.tsx              # Root layout, Poppins, ThemeProvider
│   ├── page.tsx                # Home (composed from sections)
│   ├── about/page.tsx
│   ├── pricing/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Footer.tsx
│   │   ├── NewsletterForm.tsx  # client (footer email signup)
│   │   └── footer-data.ts
│   ├── navigation/
│   │   ├── Navbar.tsx          # mega-menu orchestrator + mobile drawer
│   │   ├── MegaMenu.tsx        # floating desktop panel
│   │   ├── ServiceCard.tsx     # reusable service tile
│   │   └── services.ts         # single source of truth: services array
│   ├── sections/
│   │   ├── content.ts          # ALL content arrays (stats, FAQ, pricing…)
│   │   ├── Hero / LogoCloud / ServicesGrid / Stats
│   │   ├── WhyUs / Process / CaseStudies / Testimonials
│   │   ├── Pricing / Faq / CtaBand / PageHeader
│   │   └── ContactForm.tsx     # client form + success state
│   ├── theme/                  # theme-provider + animated toggle
│   └── ui/                     # Container, Button, SectionHeading, Reveal
└── lib/utils.ts                # cn() className merger
```

### Editing content

Open `src/components/sections/content.ts` to change stats, pillars, process steps, case studies, testimonials, pricing tiers, FAQ items or contact details. Add a service in `src/components/navigation/services.ts`. The menu badge ("N Services"), grids, accordions and pricing all update automatically.

---

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run `tsc --noEmit` |

---

## ♿ Accessibility

- Services trigger advertises state with `aria-expanded` + `aria-controls`; focus opens it, `Escape`/outside-click close it.
- Every service card is a real `<Link>` with a descriptive `aria-label`.
- FAQ uses semantic `<button>` + `region` pairs with `aria-expanded`/`aria-labelledby`.
- Form fields have associated `<label>`s and `autoComplete` hints.
- Mobile drawer is a labelled `dialog` with a scrim and body-scroll lock.
- Visible focus outlines across all interactive elements.

---

## 🏗️ Tech stack

[Next.js 15](https://nextjs.org/) · [React 19](https://react.dev/) · [TypeScript](https://www.typescriptlang.org/) · [Tailwind CSS](https://tailwindcss.com/) · [Framer Motion](https://www.framer.com/motion/) · [Lucide](https://lucide.dev/) · [next-themes](https://github.com/pacocoursey/next-themes)
