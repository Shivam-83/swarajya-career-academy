---
milestone: v1.0
version: 1.0.0
updated: 2026-10-26T13:30:00+05:30
---

# Roadmap

> **Current Phase:** Phase 0 — Repository Audit & Setup
> **Status:** ⬜ Not Started

## Must-Haves (from SPEC)

- [ ] Responsive frontend architecture with 13 working routes.
- [ ] Centralized typed configuration (`AcademyConfig`) and mock data schemas.
- [ ] Disciplined military/defence color palette (`#142B20`, `#C99A3B`, `#F5F4EF`) and Devanagari font support.
- [ ] Working client-side interactions: course filtering, gallery lightbox, recruitment notices search/filter, and FAQ accordions.
- [ ] Validated admission enquiry form prototype with inline errors and explicit simulated success banner.
- [ ] Configurable click-to-call, WhatsApp deep link, and Google Maps actions with safe fallbacks.
- [ ] Zero backend, zero database, zero auth, zero data persistence.

---

## Phases

### Phase 0: Repository Audit & Frontend Setup
**Status:** ⬜ Not Started  
**Objective:** Audit the environment, select and scaffold the modern frontend stack (Vite + React + TypeScript + Tailwind CSS or Next.js), configure tooling, verify local dev server, and establish directory structure.  
**Requirements:** REQ-NFR-04, CON-01  

**Plans:**
- [ ] Plan 0.1: Project scaffolding, dependencies installation, and build configuration.

---

### Phase 1: Design System & Global Shell
**Status:** ⬜ Not Started  
**Objective:** Implement color palette tokens, typography (Devanagari-ready fonts), shared layout shell (Header, Navigation, Mobile Menu, Footer, Sticky CTAs), and centralized data schema/placeholders (`AcademyConfig`).  
**Requirements:** REQ-FR-01, REQ-FR-02, REQ-FR-15, CON-03, CON-04  

**Plans:**
- [ ] Plan 1.1: Core design tokens, typography, and centralized data shapes.
- [ ] Plan 1.2: Global layout components (Header, Footer, Mobile Drawer, Sticky Contact bar).

---

### Phase 2: Public Marketing Pages & Routes
**Status:** ⬜ Not Started  
**Objective:** Build all 13 core pages (`/`, `/about`, `/courses`, `/courses/police-bharti`, `/courses/army-bharti`, `/facilities`, `/results`, `/gallery`, `/bharti-updates`, `/admission`, `/contact`, `/privacy`, `/terms`) using local mock data and reusable cards/sections.  
**Requirements:** REQ-FR-03, REQ-FR-04, REQ-FR-05, REQ-FR-06, REQ-FR-07, REQ-FR-08  

**Plans:**
- [ ] Plan 2.1: Homepage sections (Hero, Highlights, Training areas, Facilities preview, Faculty, Demo notices).
- [ ] Plan 2.2: Course catalog and specialized Police & Army Bharti detail pages.
- [ ] Plan 2.3: About, Facilities, Results, Admission guide, Contact, and Policy routes.

---

### Phase 3: Interactive Components & Prototype Form
**Status:** ⬜ Not Started  
**Objective:** Implement client-side dynamic features: course filter by category/type, updates search & category filter, gallery category filter & modal lightbox, FAQ accordion, and prototype admission form with 10-digit phone validation and simulated success message.  
**Requirements:** REQ-FR-09, REQ-FR-10, REQ-FR-11, REQ-FR-12, REQ-FR-13  

**Plans:**
- [ ] Plan 3.1: Interactive filters (courses, updates search) and accessible gallery lightbox modal.
- [ ] Plan 3.2: Admission form prototype with regex validation, inline feedback, and simulated demo state.

---

### Phase 4: Responsive QA, Accessibility & Polish
**Status:** ⬜ Not Started  
**Objective:** Test across breakpoints (320px, 375px, 768px, 1024px, 1440px), verify WCAG AA contrast, keyboard accessibility, meta tags/SEO foundations, and resolve any console warnings.  
**Requirements:** REQ-FR-14, REQ-NFR-01, REQ-NFR-02, REQ-NFR-03, REQ-NFR-05, REQ-NFR-06  

**Plans:**
- [ ] Plan 4.1: Cross-breakpoint responsiveness, keyboard focus audits, and meta tags.

---

### Phase 5: Handoff & Future Integration Preparation
**Status:** ⬜ Not Started  
**Objective:** Create comprehensive documentation detailing how to run the frontend, where to update academy placeholders and mock data, and how to attach a backend in future phases.  
**Requirements:** REQ-FR-15, CON-01  

**Plans:**
- [ ] Plan 5.1: Developer README, content checklist, and future backend integration guide.

---

## Progress Summary

| Phase | Status | Plans | Complete |
|-------|--------|-------|----------|
| 0: Setup | ⬜ | 0/1 | — |
| 1: Design System & Shell | ⬜ | 0/2 | — |
| 2: Public Pages | ⬜ | 0/3 | — |
| 3: Interactive Features | ⬜ | 0/2 | — |
| 4: QA & Accessibility | ⬜ | 0/1 | — |
| 5: Handoff | ⬜ | 0/1 | — |

---

## Status Icons
- ⬜ Not Started
- 🔄 In Progress
- ✅ Complete
- ⏸️ Paused
- ❌ Blocked
