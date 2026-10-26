# Maharashtra Police & Army Bharti Career Academy Website (Frontend-Only Release)

A modern, responsive, high-trust frontend website designed specifically for Maharashtra Police Bharti and Indian Army (Agniveer) pre-recruitment training academies.

---

## 🎖️ Visual Identity & Color Palette

- **Deep Army Green:** `#142B20` (Header, primary backgrounds, military theme)
- **Muted Gold:** `#C99A3B` (Badges, accents, active states, key CTAs)
- **Warm Off-White:** `#F5F4EF` (Body surface background)
- **Pure White Cards:** `#FFFFFF` (High contrast, modern rounded cards)
- **Typography:** Inter, Poppins, and Noto Sans Devanagari (Clean Marathi-first & English typography)

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
```
Creates a static distribution in `dist/` ready to be hosted on any static platform (Vercel, Netlify, Cloudflare Pages, GitHub Pages, or AWS S3).

---

## 📁 Project Architecture & Content Customization

All academy branding, courses, faculty, and contact details are centralized in one file for easy editing without touching components:

| Location | Purpose |
|---|---|
| `src/data/academyData.ts` | **Central content file**: Edit academy name, phone, WhatsApp number, email, address, courses, faculty, facilities, and recruitment notices here. |
| `src/types/index.ts` | Strongly typed TypeScript data shapes (`AcademyConfig`, `Course`, `Instructor`, etc.). |
| `src/components/` | Reusable UI components (`Navbar`, `Footer`, `AnnouncementBar`, `CourseCard`, `EnquiryForm`, `GalleryLightbox`, `FaqAccordion`). |
| `src/pages/` | All 13 page route views. |
| `tailwind.config.js` | Theme colors, spacing, and typography configuration. |

---

## 🗺️ Implemented Routes (13 total)

1. `/` — **Home**: Announcement strip, hero banner, highlights, course cards, training pillars, faculty preview, results, demo recruitment notices, enquiry form, and contact CTA.
2. `/about` — **About Academy**: Academy story, physical and academic coaching philosophy, and instructor profiles.
3. `/courses` — **Courses & Batches**: Filterable course catalog with category pills, training type filter, search bar, and empty state.
4. `/courses/police-bharti` — **Police Bharti Details**: 1600m/800m running, shot put, height/chest standards, 100-mark written syllabus breakdown, timetable, and FAQs.
5. `/courses/army-bharti` — **Army/Agniveer Bharti Details**: 1.6km running standards (Group 1: 5:30 min), 10 pull-up criteria, CEE exam syllabus, and FAQs.
6. `/facilities` — **Physical Facilities**: 400m track, shot put area, beam setups, smart classrooms, hostel & mess.
7. `/results` — **Verified Results**: Authentic success stories with student consent and category filters.
8. `/gallery` — **Photo & Video Gallery**: Category-filtered photos with an accessible keyboard-navigable modal lightbox.
9. `/bharti-updates` — **Recruitment Updates**: Searchable demo recruitment notices with active/upcoming/expired status badges.
10. `/admission` — **Admission Enquiry**: 4-step admission guide, required documents checklist, and interactive form prototype.
11. `/contact` — **Contact Us**: Address, clickable `tel:` phone, pre-filled WhatsApp link, Google Maps embed placeholder, and working hours.
12. `/privacy` — **Privacy Policy**: Explicit frontend prototype statement confirming zero data harvesting.
13. `/terms` — **Terms & Conditions**: Academy guidelines, non-guarantee disclaimer, and safety notices.

---

## 🔒 Scope Boundary & Form Prototype

- **Strictly Frontend-Only:** No backend server, database, authentication, or payment processor is included.
- **Enquiry Form Prototype:** The form performs client-side validation (10-digit Indian mobile format & required fields) and displays a simulated demo banner explicitly stating that no data was transmitted or persisted.

---

## 📦 Future Backend Integration Points

When you are ready to connect a backend service:
1. Replace the client-side simulated state in `src/components/EnquiryForm.tsx` with a standard `fetch('/api/admission-enquiry')` call.
2. Replace static arrays in `src/data/academyData.ts` with API fetch hooks (e.g. TanStack Query or SWR).
