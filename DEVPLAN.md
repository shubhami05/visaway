# Visa Way – Implementation Tracker

> Last updated: March 2026
> Stack: Next.js 14 (App Router) · Tailwind CSS v4 · shadcn/ui · Supabase · Resend

---

## ✅ COMPLETED

### Foundation
- [x] Next.js 14 project setup with App Router
- [x] Tailwind CSS v4 configured (`globals.css` based, no `tailwind.config.ts`)
- [x] shadcn/ui initialized (Radix + Vega preset)
- [x] `next/font` — Inter + Playfair Display
- [x] Brand color tokens in `@theme {}`
- [x] Dark/light mode via `next-themes` + `@variant dark`
- [x] `lib/constants.ts` — nav links, stats, destinations, services, contact info
- [x] `lib/utils.ts` — `cn()` helper
- [x] `types/index.ts` — Enquiry, University, Course, FAQ, NavLink, Stat, Destination
- [x] `.env.local` — Supabase + Resend + WhatsApp vars
- [x] `lib/supabase/client.ts` — browser client
- [x] `lib/supabase/server.ts` — SSR server client
- [x] Full folder structure created
- [x] `next.config.ts` — remote image patterns (Pexels, Unsplash)

### Layout
- [x] `app/(site)/layout.tsx` — public layout shell
- [x] `app/(admin)/layout.tsx` — placeholder
- [x] `components/layout/Navbar.tsx`
  - [x] Sticky with scroll shadow
  - [x] Active link highlight
  - [x] Mobile full-screen drawer
  - [x] Theme toggle (sun/moon)
  - [x] Dual logo (dark/light mode)
- [x] `components/layout/Footer.tsx`
  - [x] 4-column grid (Brand, Quick Links, Services, Contact)
  - [x] WhatsApp CTA button
  - [x] Light logo on dark background
  - [x] Bottom bar with copyright + policy links

### Hooks
- [x] `hooks/useScrollPosition.ts`
- [x] `hooks/useMobileMenu.ts`

### Shared Components
- [x] `components/shared/ThemeProvider.tsx`
- [x] `components/shared/ThemeToggle.tsx`
- [x] `components/shared/WhatsAppButton.tsx` — sticky floating button
- [x] `components/shared/SectionHeading.tsx`
- [x] `components/shared/CTABanner.tsx`
- [x] `components/shared/StatsBar.tsx`

### Home Page (`/`)
- [x] `HeroSection` — headline, subheading, dual CTA, image
- [x] `StatsBar` — 500+ / 15+ / 98% / 200+
- [x] `WhoThisIsFor` — 3 audience cards
- [x] `StudyDestinations` — Australia + Canada image cards
- [x] `WhyChooseUs` — 4 reasons + photo placeholder
- [x] `ServicesSnapshot` — 3 service cards with bullet points
- [x] `QuickEnquiryForm` — static UI (name, phone, email, country)

---

## 🔄 IN PROGRESS

### Home Page
- [ ] Replace Jasmin Patel placeholder with real photo in `WhyChooseUs`
- [ ] Replace Pexels images with final brand images
- [ ] Wire `QuickEnquiryForm` to Supabase + Resend email

---

## 📋 TODO — FRONTEND

### Sprint 3 — About Page (`/about`)
- [ ] `AboutHero` — circular photo + name + badge pills (10+ years, 500+ students)
- [ ] `WhyIStarted` — story card
- [ ] `ValuesSection` — 3 cards (Honest Advice, Student-First, Clear Communication)
- [ ] `VisionCard` — dark bg with quote
- [ ] CTA — "Let's Talk" button

### Sprint 4 — Services Page (`/services`)
- [ ] `ServicesHero` — page headline + subheading
- [ ] `ServicesGrid` — all 7 service cards (icon + title + description)
- [ ] `StatsBar` — reuse shared component
- [ ] `CTABanner` — "Ready to start?" — reuse shared component

### Sprint 5 — Destination Pages (`/destinations/australia`, `/destinations/canada`)
- [ ] `DestinationHero` — full-width country image + headline + 2 CTAs
- [ ] `DestinationTabs` — tab switcher component
  - [ ] `OverviewTab` — why study here + 4 highlight cards
  - [ ] `CoursesTab` — expandable course list
  - [ ] `CostsTab` — tuition + living expense cards
  - [ ] `WorkRightsTab` — part-time + post-study work
  - [ ] `VisaBasicsTab` — requirements checklist
- [ ] `DestinationSidebar` — CTA card + Quick Facts
- [ ] `content/australia.ts` — static country data
- [ ] `content/canada.ts` — static country data
- [ ] Reuse same layout for both countries

### Sprint 6 — Process Page (`/process`)
- [ ] `ProcessHero` — headline + subheading
- [ ] `ProcessTimeline` — 7 steps alternating left/right layout
- [ ] `TrustSection` — 3 stat cards (98% success, expert counsellors, end-to-end)
- [ ] Final CTA button

### Sprint 7 — Contact Page (`/contact`)
- [ ] `ContactInfo` — phone, email, address cards + WhatsApp button
- [ ] `ContactForm` — full form (name, email, phone, country, message)
- [ ] Google Maps embed
- [ ] Consistent footer

### Sprint 8 — Polish and QA
- [ ] 404 page (`app/not-found.tsx`)
- [ ] `sitemap.ts` — auto-generated sitemap
- [ ] `robots.ts` — robots.txt
- [ ] SEO metadata for every page
- [ ] og:image for each page
- [ ] Mobile audit — 375px, 768px, 1280px
- [ ] Hover states on all interactive elements
- [ ] Lighthouse audit — target 90+ performance
- [ ] Fix all `&` rendering issues (Playfair Display font quirk)
- [ ] Cross-page dark mode consistency check

---

## 📋 TODO — BACKEND (After frontend complete)

### Supabase Setup
- [ ] Create Supabase project
- [ ] Run SQL schema in Supabase SQL Editor
  - [ ] `enquiries` table
  - [ ] `universities` table
  - [ ] `courses` table
  - [ ] `faqs` table
  - [ ] `country_content` table
- [ ] Configure RLS policies
- [ ] Fill `.env.local` with real Supabase keys

### API Routes
- [ ] `POST /api/enquiry` — save to DB + send admin email + student auto-reply
- [ ] `GET /api/admin/stats` — today/week/month counts + country breakdown
- [ ] `GET/PATCH /api/admin/enquiries` — list + status update + notes
- [ ] `GET/POST/DELETE /api/admin/universities`
- [ ] `GET/POST/DELETE /api/admin/courses`

### Email (Resend)
- [ ] Admin notification email on new enquiry
- [ ] Student auto-reply email template
- [ ] Add Resend API key to `.env.local`

### Admin Panel
- [ ] `middleware.ts` — protect all `/admin/*` routes
- [ ] `/admin/login` — Supabase Auth email + password
- [ ] `/admin/dashboard` — stats cards + recent enquiries table
- [ ] `/admin/enquiries` — full table, status filter, notes field
- [ ] `/admin/universities` — add/edit/delete/toggle visibility
- [ ] `/admin/courses` — add/edit/delete
- [ ] `/admin/content` — edit country pages, FAQs, process steps

---

## 📋 TODO — PHASE 2 (Post Launch)

- [ ] Student Questions Hub — FAQ accordion page
- [ ] Blog system — CMS-driven posts
- [ ] Cost breakdown calculator — tuition + living + part-time earnings
- [ ] Downloadable checklists — country-wise PDF documents
- [ ] "Is This Country Right For Me?" page
- [ ] Course vs Reality section
- [ ] Visa Mistakes section
- [ ] Disclaimer and Honesty Statement section

---

## 📋 TODO — PHASE 3 (Future)

- [ ] University finder tool
- [ ] Student dashboard
- [ ] Document upload system
- [ ] Application tracking
- [ ] Student login (Supabase Auth)

---

## 🗂️ File Reference

```
app/
├── (site)/
│   ├── layout.tsx              ✅
│   ├── page.tsx                ✅ Home
│   ├── about/page.tsx          ⏳
│   ├── services/page.tsx       ⏳
│   ├── process/page.tsx        ⏳
│   ├── contact/page.tsx        ⏳
│   └── destinations/
│       ├── australia/page.tsx  ⏳
│       └── canada/page.tsx     ⏳
├── (admin)/
│   ├── layout.tsx              ⏳
│   ├── login/page.tsx          ⏳
│   └── dashboard/page.tsx      ⏳
├── layout.tsx                  ✅
└── globals.css                 ✅

components/
├── layout/
│   ├── Navbar.tsx              ✅
│   └── Footer.tsx              ✅
├── shared/
│   ├── ThemeProvider.tsx       ✅
│   ├── ThemeToggle.tsx         ✅
│   ├── WhatsAppButton.tsx      ✅
│   ├── SectionHeading.tsx      ✅
│   ├── CTABanner.tsx           ✅
│   └── StatsBar.tsx            ✅
├── home/
│   ├── HeroSection.tsx         ✅
│   ├── WhoThisIsFor.tsx        ✅
│   ├── StudyDestinations.tsx   ✅
│   ├── WhyChooseUs.tsx         ✅
│   ├── ServicesSnapshot.tsx    ✅
│   └── QuickEnquiryForm.tsx    ✅
├── about/                      ⏳
├── services/                   ⏳
├── destinations/               ⏳
├── process/                    ⏳
├── contact/                    ⏳
└── admin/                      ⏳

lib/
├── supabase/
│   ├── client.ts               ✅
│   └── server.ts               ✅
├── constants.ts                ✅
└── utils.ts                    ✅

hooks/
├── useScrollPosition.ts        ✅
└── useMobileMenu.ts            ✅

types/index.ts                  ✅
next.config.ts                  ✅
.env.local                      ✅
```