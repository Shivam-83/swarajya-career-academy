# SPEC.md — Project Specification

> **Status**: `FINALIZED`
>
> ⚠️ **Planning Lock**: Specification is finalized based on `Career_Academy_Frontend_SRS.md`. Ready for phase planning and execution.

## Vision
A modern, mobile-friendly, disciplined frontend-only website for a Maharashtra Police & Army/Agniveer Bharti Career Academy. The website establishes trust through genuine presentation of physical training and written exam preparation, showcases facilities and courses, provides clear admissions guidance, and captures student inquiries with client-side validated prototype forms, while strictly excluding backend persistence or fabricated claims.

## Goals
1. **Present Genuine Academy Identity & Offerings** — Clearly explain physical training grounds, written exam coaching, authentic batch details, confirmed facilities, and faculty without making unverified or exaggerated claims.
2. **Streamlined Admission Enquiry Flow** — Provide accessible, prominent Call, WhatsApp (`wa.me`), and "Enquire Now" CTAs, alongside a client-side validated admission enquiry form prototype.
3. **Structured Frontend Architecture** — Implement a responsive, accessible, high-performance UI (using deep army green `#142B20`, muted gold `#C99A3B`, and warm off-white `#F5F4EF`) built on centralized typed mock data so that a future backend/CMS can plug in seamlessly.

## Non-Goals (Out of Scope)
- **No Backend / Server Endpoints**: No server-side runtime, API endpoints, or database tables.
- **No Data Persistence**: Form submissions will NOT store data to a database, file, CRM, or email service.
- **No Authentication / Admin Portal**: No student login, user accounts, or admin management dashboards.
- **No Payment Gateway**: No online fees collection or checkout flows.
- **No Live Scraping or 3rd-Party Sync**: Recruitment notices and results are driven purely by local mock data.
- **No Fabricated Data**: No fake selection statistics, unconfirmed facilities, or invented testimonials.

## Users
- **Prospective Police Bharti Candidates**: Seeking physical and written exam coaching in Maharashtra, batch timings, and requirements.
- **Prospective Army/Agniveer Candidates**: Reviewing physical ground standards, training regimen, and eligibility.
- **Parents and Guardians**: Comparing credibility, confirmed hostel/mess/safety facilities, fee guidance, and location.
- **Academy Staff / Reviewers**: Evaluating the frontend prototype, reviewing layout and content placeholders before production launch.

## Constraints
- **Frontend-Only**: All dynamic UI features (filters, search, modals, form validation) execute purely in the browser.
- **Form Prototype Notice**: The enquiry form must explicitly state that it is a frontend demo and does not transmit data.
- **Brand & Content Modularity**: All academy details (name, phone, address, map link, fees, images) must reside in a centralized config/data file (`src/data/`) with clearly marked placeholders where data is pending.
- **Bilingual / Marathi-First Readiness**: Devanagari typography support alongside English navigation and descriptions.
- **Responsive & Accessible**: Strict mobile usability from 320px upwards, keyboard accessibility, semantic tags, and WCAG AA contrast.

## Success Criteria
- [ ] All 13 routes (`/`, `/about`, `/courses`, `/courses/police-bharti`, `/courses/army-bharti`, `/facilities`, `/results`, `/gallery`, `/bharti-updates`, `/admission`, `/contact`, `/privacy`, `/terms`) render cleanly without dead links.
- [ ] Centralized configuration and mock data schema (`AcademyConfig`, `Course`, `Instructor`, `Facility`, `ResultStory`, `GalleryItem`, `RecruitmentNotice`) power all pages.
- [ ] Course filter (by category & training type) with empty state functions on client side.
- [ ] Gallery filter and accessible modal lightbox (with keyboard navigation & Escape key dismiss) operate smoothly.
- [ ] Recruitment notices include search, category filtering, and visible "Demo content" / "Expired" badges.
- [ ] Admission form validates mandatory fields and 10-digit Indian mobile format, showing inline errors and an explicit simulated demo success banner without network requests.
- [ ] Click-to-call, WhatsApp, and Google Maps actions pull directly from configuration and degrade safely when unset.
- [ ] Zero console errors, broken imports, or missing assets.
- [ ] Documentation provided detailing how to run the app and update brand placeholders.

---
*Last updated: 2026-10-26*
