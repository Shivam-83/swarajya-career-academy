---
milestone: v1.0
updated: 2026-10-26T13:48:45+05:30
---

# Requirements

## Overview
Requirements derived directly from `Career_Academy_Frontend_SRS.md` with status and traceability verification.

---

## Functional Requirements

| ID | Requirement | Source | Phase | Status |
|----|-------------|--------|-------|--------|
| REQ-FR-01 | Shared header and navigation with active route highlight, mobile menu open/close/keyboard support, and prominent CTA | SRS FR-01 | Phase 1 | Complete |
| REQ-FR-02 | Shared footer with quick links, working hours, configurable `tel:` / WhatsApp links, and legal links | SRS FR-02 | Phase 1 | Complete |
| REQ-FR-03 | Hero section with Marathi headline, concise value proposition, dual CTAs ("Enquire Now" & "View Courses") | SRS FR-03 | Phase 2 | Complete |
| REQ-FR-04 | Course catalog listing with category & training type filters, course cards, and empty state UI | SRS FR-04 | Phase 2 | Complete |
| REQ-FR-05 | Detailed course pages (`/courses/police-bharti`, `/courses/army-bharti`) with syllabus, physical criteria, batch timings, FAQ, and enquiry CTA | SRS FR-05 | Phase 2 | Complete |
| REQ-FR-06 | Facilities showcase with responsive facility cards, descriptions, and confirmed status markers | SRS FR-06 | Phase 2 | Complete |
| REQ-FR-07 | Team and instructors preview showing verified credentials or consistent placeholders | SRS FR-07 | Phase 2 | Complete |
| REQ-FR-08 | Results and student testimonials labeled as sample/mock content with clear replacement config | SRS FR-08 | Phase 2 | Complete |
| REQ-FR-09 | Categorized photo/video gallery with accessible modal lightbox, keyboard navigation, and Escape key close | SRS FR-09 | Phase 3 | Complete |
| REQ-FR-10 | Recruitment updates page with local text search, category filters, and "Demo content" / "Expired" status badges | SRS FR-10 | Phase 3 | Complete |
| REQ-FR-11 | Admission enquiry form prototype with 10-digit Indian mobile validation, inline errors, and explicit simulated demo success banner | SRS FR-11 | Phase 3 | Complete |
| REQ-FR-12 | Configurable click-to-call, pre-filled WhatsApp links (`wa.me`), and Google Maps action with graceful fallback | SRS FR-12 | Phase 3 | Complete |
| REQ-FR-13 | Accessible FAQ accordion supporting keyboard/mouse/touch and optional announcement strip | SRS FR-13 | Phase 3 | Complete |
| REQ-FR-14 | Meaningful empty states across all filtered views; zero dead links or non-functional placeholder controls | SRS FR-14 | Phase 4 | Complete |
| REQ-FR-15 | Centralized typed configuration (`AcademyConfig`) and mock data modules for seamless content maintenance | SRS FR-15 | Phase 1 | Complete |

---

## Non-Functional Requirements

| ID | Requirement | Category | Phase | Status |
|----|-------------|----------|-------|--------|
| REQ-NFR-01 | Full responsiveness from 320px to 1440px+ without horizontal scroll or truncated actions | UX / Layout | Phase 4 | Complete |
| REQ-NFR-02 | Accessibility: semantic HTML, WCAG AA color contrast, visible focus rings, ARIA labels, form labels | Accessibility | Phase 4 | Complete |
| REQ-NFR-03 | Performance: optimized assets, lazy loading, layout shift prevention, reduced-motion support | Performance | Phase 4 | Complete |
| REQ-NFR-04 | Maintainability: clean component structure, modular styling tokens, TypeScript interfaces | Architecture | Phase 1 | Complete |
| REQ-NFR-05 | SEO foundations: unique page titles, meta descriptions, semantic headings (`<h1>`), OpenGraph tags | SEO | Phase 4 | Complete |
| REQ-NFR-06 | Code & browser quality: zero console errors, zero broken assets, tested across modern Chrome/Edge | Quality | Phase 4 | Complete |
| REQ-NFR-07 | Privacy & zero persistence: no storage, logging, or transmission of user input data | Security | All | Complete |

---

## Constraints Verification

| ID | Constraint | Status | Evidence |
|----|------------|--------|----------|
| CON-01 | Strict Frontend-Only release (no backend, DB, API, or auth) | Verified | Zero backend dependencies, no server runtime, Vite SPA client build |
| CON-02 | No fabricated claims or guaranteed selections | Verified | Explicit demo notices and disclaimers on results & recruitment updates |
| CON-03 | Visual identity: `#142B20` (Green), `#C99A3B` (Gold), `#F5F4EF` (Warm white) | Verified | Configured in `tailwind.config.js` and implemented across all components |
| CON-04 | Marathi-first / bilingual-ready typography (Devanagari support) | Verified | Google Fonts `Noto Sans Devanagari` & `Poppins` loaded in `index.html` |
