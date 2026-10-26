# Software Requirements Specification (SRS)
## Police & Army Bharti Career Academy Website — Frontend-Only Release

**Document version:** 1.0  
**Status:** Draft for implementation  
**Scope:** Public-facing website frontend only; no backend implementation  
**Audience:** Project owner, UI/UX designer, frontend developer, coding agent, QA reviewer

---

## 1. Introduction

### 1.1 Purpose
This SRS defines the frontend requirements for a modern, mobile-friendly website for an academy that prepares students for Maharashtra Police Bharti, Army/Agniveer Bharti, and other recruitment exams only if the academy actually offers those courses. The site should present the academy clearly, build trust with genuine information, explain available courses and facilities, and make admission enquiries easy.

### 1.2 Product objectives
- Present the academy's identity, courses, physical training, written coaching, facilities, instructors, results, gallery, and contact information.
- Help prospective students and parents understand course details before contacting the academy.
- Provide obvious Call, WhatsApp, and Enquire Now calls to action.
- Offer a frontend structure that can be connected to a backend later without requiring a redesign.
- Keep content honest: do not invent student selections, ratings, instructor credentials, fee amounts, facilities, addresses, or statistics.

### 1.3 Target users
- Prospective Police Bharti candidates.
- Prospective Army/Agniveer Bharti candidates.
- Parents or guardians researching coaching and facilities.
- Visitors comparing batches, fees, training, and academy credibility.
- Academy staff reviewing the frontend prototype and content.

### 1.4 Reference direction
Use the reference sites for ideas, not as templates to copy:
- The Maharashtra Academy: straightforward academy information and enquiry journey.
- Shivtej Career Academy: course and batch cards with details such as duration, schedule, instructor, and fees.
- Gavhane Career Academy: campus/facility information, practice preparation, gallery, video and student feedback.

Do not copy logos, text, photos, layouts, or other protected content from these websites. Create a distinct design using the academy's own brand assets or appropriately licensed/temporary imagery.

## 2. Scope and constraints

### 2.1 Included in this release
- Responsive public website frontend.
- Navigation, page layouts, buttons, cards, tabs/filters, accordions, gallery/lightbox, and forms.
- Static, local mock content for courses, batches, instructors, facilities, results, testimonials, and recruitment notices.
- Frontend form validation and a simulated success state only.
- Click-to-call links, configurable WhatsApp links, and a map link/embed placeholder if the actual address is available.
- Basic page metadata and frontend SEO foundations.
- Reusable components and a maintainable project structure.

### 2.2 Explicitly excluded — no backend work
Do **not** create or connect:
- Backend services or API endpoints.
- Database tables, database clients, or data persistence.
- Authentication, user accounts, authorization, or admin login.
- Actual admission submission, email notification, CRM, or enquiry storage.
- Payment gateway or online payment processing.
- Live recruitment scraping, third-party API integrations, or automatic updates.
- Real student portals, mock-test scoring services, or progress tracking systems.
- Secret keys, server environment configuration, or backend deployment.

All content must be powered by local static/mock data for now. The enquiry form may validate the fields in the browser and display a clear demo success message; it must explicitly be treated as a prototype and must not claim that an enquiry was actually sent or saved. Keep the code organized so a backend can be added in a future phase.

### 2.3 Assumptions and placeholders
- Official academy name, logo, address, phone, WhatsApp number, email, course fees, schedules, instructor details, images, and selection statistics may not yet be available.
- Put unknown values in a central config/content file or clearly marked placeholder, such as `[Academy Name]`; do not scatter fake values throughout components.
- Do not publish fictitious selection numbers or claim guaranteed selection.
- Only show hostel, mess, library, CCTV, medical support, or other facilities if the academy confirms they exist.
- Recruitment requirements vary by official notification; any example eligibility or syllabus text must be labelled sample content until verified.

## 3. Design and user experience requirements

### 3.1 Visual direction
Create a premium, disciplined, trustworthy defence/coaching visual style. Avoid an overly generic school template or excessive military camouflage.

Suggested palette:
- Deep army green: `#142B20` — primary backgrounds and navigation.
- Muted gold: `#C99A3B` — important actions and highlights.
- Warm off-white: `#F5F4EF` — page backgrounds.
- White: `#FFFFFF` — cards and forms.
- Neutral grey tones for supporting text, borders and disabled states.

Use accessible contrast, strong typography, generous spacing, real academy imagery when provided, subtle shadows, rounded but restrained cards, and consistent iconography. Use readable Devanagari fonts when displaying Marathi content; retain English where useful. The site should be Marathi-first or bilingual-ready, but all content must remain easy to switch/edit centrally.

### 3.2 Global layout
- Desktop: horizontal header/navigation with logo/name, page links, a prominent Enquire Now CTA, and optional phone/WhatsApp CTA.
- Mobile: compact menu; visible admission CTA; fixed or sticky bottom Call Now and WhatsApp actions where they do not obscure content.
- Footer: quick links, address/contact placeholders, working hours, map/directions link, privacy link, terms link, and copyright.
- Every page must include a clear way back to Home and a relevant enquiry CTA.

### 3.3 Homepage section order
1. Optional announcement strip for admissions or batch announcements.
2. Hero banner: Marathi-first headline, concise value proposition, primary Enquire Now button, secondary View Courses button, relevant image.
3. Academy highlights/statistics — only verified values; otherwise use non-numeric benefit cards.
4. Courses and batches — Police Bharti, Army/Agniveer Bharti, and other real programs.
5. Two preparation areas: Physical Training and Written Exam Coaching.
6. Why choose this academy — 4–6 factual benefit cards.
7. Campus and facilities — only facilities that exist.
8. Instructor/team preview — authentic details or clearly marked placeholders.
9. Verified results and student testimonials — only with permission and evidence.
10. Gallery/video preview — local sample assets or licensed placeholders.
11. Latest Bharti updates — static sample notices labelled as demo content until verified.
12. Admission enquiry form — frontend validation and simulated success state.
13. Contact/location section and footer.

The homepage may omit sections for which real content is unavailable; do not fill missing sections with fabricated claims.

## 4. Sitemap and route requirements

| Route | Page | Main purpose |
|---|---|---|
| `/` | Home | Introduce the academy and guide visitors to courses/enquiries. |
| `/about` | About Academy | Present story, mission, team and training approach. |
| `/courses` | Courses & Batches | Browse courses, schedules, fees and admission status. |
| `/courses/police-bharti` | Police Bharti details | Explain course modules, batch details, fees placeholder, FAQ and enquiry CTA. |
| `/courses/army-bharti` | Army/Agniveer Bharti details | Explain preparation scope, batch details, fees placeholder, FAQ and enquiry CTA. |
| `/facilities` | Physical Training & Facilities | Describe real grounds, classroom, hostel or other confirmed facilities. |
| `/results` | Results & Success Stories | Show verified selection stories and testimonials. |
| `/gallery` | Gallery & Videos | Browse categorized photos and video embeds/placeholders. |
| `/bharti-updates` | Recruitment Updates | Search and filter static sample notices; show official links as content placeholders until verified. |
| `/admission` | Admission Enquiry | Show admission steps, batch choices and enquiry form prototype. |
| `/contact` | Contact Us | Contact links, address placeholder, working hours and map/directions link. |
| `/privacy` | Privacy Policy | Frontend static privacy page placeholder for owner/legal review. |
| `/terms` | Terms | Frontend static terms page placeholder for owner/legal review. |

All listed routes should render an appropriate page or be deliberately redirected. Do not leave dead navigation links.

## 5. Functional requirements

### FR-01 — Shared header and navigation
- Display academy logo or typographic placeholder, academy name, navigation links and enquiry CTA.
- Highlight the current route.
- Support keyboard focus and mobile menu open/close.
- Close the mobile menu after navigation.

### FR-02 — Shared footer
- Display quick links, contact placeholders, location, working hours, and policy links.
- Render clickable `tel:` and WhatsApp links only when a valid configured number is supplied.
- Avoid hard-coded fake contact details.

### FR-03 — Hero and calls to action
- Hero supports headline, supporting text, background/side image and two CTAs.
- View Courses scrolls/navigates to courses; Enquire Now navigates to `/admission` or scrolls to the enquiry form.

### FR-04 — Course listing and filtering
- Display course cards with category, summary, training type, duration, batch timing, price text or “Contact for fees,” and admission status.
- Filter courses by recruitment category and/or training type using client-side state.
- Provide empty-state UI when no cards match.
- Course cards link to their relevant detail route.

### FR-05 — Course detail pages
- Show overview, preparation plan, syllabus/topics, physical training details where applicable, batch/schedule, fees placeholder, admission steps, FAQ and enquiry CTA.
- Use data-driven reusable layout/components; avoid duplicate hard-coded page implementations where practical.

### FR-06 — Facilities
- Display responsive facility cards with images, descriptions and optional video links.
- Hide or clearly mark content that has not been confirmed by the academy.

### FR-07 — Team and instructors
- Display instructor name, role, qualification/experience and photo only when supplied/confirmed.
- Use consistent placeholders when data is missing.

### FR-08 — Results and testimonials
- Provide category/year filters only if enough sample records exist.
- Every success story is mock/sample content until verified, and must not be represented as a genuine result.
- Provide a clear content configuration location for later replacement.

### FR-09 — Gallery
- Filter gallery items by category such as Ground, Classroom, Hostel, Events and Students.
- Clicking an image opens an accessible lightbox/modal with close button, next/previous navigation where implemented, and useful alt text.
- Support Escape key and prevent background scrolling while the modal is open where practical.

### FR-10 — Recruitment updates
- Show title, recruitment authority, summary, published/last-checked date, deadline, status, and official-source/application links where supplied.
- Support category filters and text search using local mock data.
- Visually mark sample notices as “Demo content — verify before publication.”
- Expired notices must be visibly labelled expired based on their local data dates.

### FR-11 — Admission enquiry form prototype
- Fields: student name (required), mobile number (required), course interest (required), preferred batch (optional/required as selected by design), and optional message.
- Validate required values and 10-digit Indian mobile format on the client side.
- Show inline field errors and a form-level status.
- On valid submit, prevent page reload and show a message such as “Demo only: the form UI validated successfully. No enquiry was sent or stored.”
- Do not send or persist the form data anywhere in this release.

### FR-12 — Contact actions
- Phone CTA uses `tel:` only with a configured number.
- WhatsApp CTA opens `https://wa.me/<configured-number>` with a URL-encoded, pre-filled course enquiry if a real number is configured.
- Map action uses a supplied address/Google Maps URL. If no location is available, show a placeholder rather than a fabricated map.

### FR-13 — FAQs and announcements
- FAQ accordion supports mouse, touch and keyboard interaction.
- Announcement strip can be hidden if there is no real announcement.

### FR-14 — Error, empty and loading states
- For frontend-only local data, use appropriate empty states and not fake network loading.
- All buttons and links must have a clear outcome; remove decorative controls that do nothing.

### FR-15 — Reusable configuration/data
- Centralize academy settings, contact details and mock content (e.g. `src/data/` or equivalent).
- Keep components reusable and avoid repeating the same course content in many files.

## 6. Non-functional requirements

### NFR-01 — Responsiveness
- Support narrow mobile screens (~320px), common smartphones, tablets, laptops and wide desktop screens.
- No horizontal overflow, clipped buttons, overlapping headers or unreadable card grids.
- Touch targets should be comfortably sized.

### NFR-02 — Accessibility
- Use semantic HTML, a logical heading hierarchy, visible keyboard focus, labels for form inputs, appropriate alt text, accessible modal/accordion controls and sufficient colour contrast.
- Do not communicate status using colour alone.

### NFR-03 — Performance
- Optimize image sizes and use responsive/lazy loading where appropriate.
- Avoid unnecessary animation, heavy dependencies and layout shifts.
- Respect reduced-motion preferences.

### NFR-04 — Maintainability
- Use a clear component structure, consistent naming, shared design tokens and typed data where the current stack supports TypeScript.
- Keep content/configuration separate from presentation.
- Do not rewrite the existing application architecture without a reason; inspect the repository first and follow its current conventions.

### NFR-05 — SEO foundations
- Unique title and description for main routes.
- Logical heading structure, descriptive link text, Open Graph basics, canonical strategy where relevant, and placeholder metadata that can be updated with the actual brand/location.
- No fabricated address or business details in structured data.

### NFR-06 — Browser and code quality
- Test latest stable Chrome/Edge and responsive layouts.
- No console errors, broken imports, broken routes, dead buttons or missing assets at handoff.

### NFR-07 — Privacy
- Do not store, log or transmit enquiry values in this frontend-only release.
- Do not collect sensitive ID documents or personal information beyond the demo enquiry fields.

## 7. Core frontend data shapes (mock content only)

These define the shape of local frontend data; they are **not** database schemas.

- **AcademyConfig:** `name`, `tagline`, `logo`, `phone`, `whatsappNumber`, `email`, `address`, `workingHours`, `mapUrl`, `primaryLanguage`.
- **Course:** `id`, `slug`, `title`, `category`, `summary`, `trainingTypes`, `duration`, `batchTiming`, `feeLabel`, `admissionStatus`, `image`, `details`, `topics`, `faqs`.
- **Instructor:** `id`, `name`, `role`, `qualifications`, `experienceLabel`, `photo`, `bio`.
- **Facility:** `id`, `title`, `description`, `image`, `confirmed`.
- **ResultStory:** `id`, `studentDisplayName`, `category`, `year`, `story`, `image`, `verified`, `consentConfirmed`.
- **GalleryItem:** `id`, `title`, `category`, `image`, `alt`, `videoUrl`.
- **RecruitmentNotice:** `id`, `title`, `authority`, `category`, `summary`, `publishedDate`, `lastCheckedDate`, `deadline`, `status`, `officialNoticeUrl`, `applicationUrl`, `isDemo`.

Use strongly typed mock arrays or equivalent. Unknown fields should be blank/hidden or marked as placeholders; do not invent real-world facts.

## 8. Acceptance criteria

The frontend-only release is accepted when:
1. Every defined route loads and navigation works without dead links.
2. Homepage follows the specified section order, with content sections omitted when unverified rather than fabricated.
3. Courses render from local mock data and filters update the results correctly.
4. Police and Army/Agniveer detail pages display relevant sections and enquiry CTAs.
5. Gallery category filters and lightbox work using mouse, touch and keyboard.
6. Update list filters/search work on local mock content and demo notices are clearly labelled.
7. Enquiry form validates required inputs and mobile number format, then displays a demo success message without network calls or persistence.
8. Phone, WhatsApp and maps actions use configuration and do not contain invented numbers/addresses.
9. Mobile navigation works, sticky actions do not cover content, and layout is usable from 320px upward.
10. Keyboard focus, form labels, alt text and semantic page structure are present.
11. Main routes have unique metadata and no fabricated business structured data.
12. There are no console errors, broken image imports, placeholder buttons with no action, or missing route implementations.
13. No backend, API, database, authentication, or payment code is introduced.
14. README or handoff notes explain how to run the frontend and where to edit academy/content placeholders.

## 9. Implementation phases

### Phase 0 — Repository audit and frontend setup
**Tasks:** Inspect the current project, framework, package manager, styling approach, routes, assets and existing conventions. Confirm build/run commands. Decide whether to extend the current application or scaffold only if no app exists. Create a checklist and identify missing academy content.  
**Deliverable:** Project audit notes, route/component plan, list of placeholders and assets needed.  
**Exit criteria:** Existing setup runs; implementation approach is clear; no unnecessary stack rewrite is planned.

### Phase 1 — Design system and global shell
**Tasks:** Define colour, typography, spacing, button/card/form styles; build shared header, desktop navigation, mobile menu, footer, CTA patterns and responsive container/grid primitives. Add a central academy config with safe placeholders.  
**Deliverable:** Consistent responsive shell and reusable UI primitives.  
**Exit criteria:** Header/footer work at mobile and desktop widths; navigation routes are wired; styles are consistent.

### Phase 2 — Public marketing pages
**Tasks:** Build Home, About, Courses, Police Bharti detail, Army/Agniveer detail, Facilities, Results, Gallery, Bharti Updates, Admission, Contact, Privacy and Terms routes. Use local mock data and clearly mark unverified/sample information.  
**Deliverable:** All public routes populated with responsive layouts and real page content hierarchy.  
**Exit criteria:** All routes render; no dead navigation; all page CTAs reach a valid target.

### Phase 3 — Frontend interactions
**Tasks:** Implement course category/type filters, update search/filter, gallery filtering/lightbox, FAQ accordion, mobile menu, form validation and simulated success message, `tel:`/WhatsApp/maps links from config, and visible empty states.  
**Deliverable:** Interactive frontend prototype with no backend calls.  
**Exit criteria:** All interactions work; form does not submit to a server or persist data; demo status is explicit.

### Phase 4 — Responsive QA, accessibility, and polish
**Tasks:** Test key breakpoints, inspect all pages, fix overflow/layout bugs, check keyboard navigation, form errors, contrast, image alt text, metadata, performance and console errors. Remove/replace dead controls and broken placeholders.  
**Deliverable:** QA-checked frontend release candidate and defect checklist.  
**Exit criteria:** Acceptance criteria above pass; no critical layout, navigation, interaction or console defects remain.

### Phase 5 — Handoff and future integration preparation
**Tasks:** Document run/build commands, content locations, image replacement guidance, configurable contact details, mock-data locations, and explicit future integration points. Optionally create a visual-only admin dashboard mock if requested; it must not have auth or persistence.  
**Deliverable:** README/handoff notes and a clean frontend repository.  
**Exit criteria:** Another developer can run the project and replace academy details without hunting through components.

### Deferred future phases (not part of this task)
- Backend and database integration for enquiry storage and content management.
- Admin authentication and dashboard functionality.
- Student portal, online mock-test engine, payment gateway and analytics.
- Live recruitment data integrations.

## 10. Testing checklist

- [ ] Run the app using documented commands.
- [ ] Visit each route directly and through navigation.
- [ ] Test desktop menu and mobile menu open/close behavior.
- [ ] Test course filters including no-match state.
- [ ] Test updates search/category filters and expired/demo badges.
- [ ] Test gallery filters, lightbox close button, Escape key and image alt text.
- [ ] Test form empty state, invalid mobile, valid fields, inline errors and demo success.
- [ ] Confirm no form payload is sent or persisted.
- [ ] Confirm all phone, WhatsApp and maps links are configurable and safe when unset.
- [ ] Check widths around 320, 375, 768, 1024 and 1440 pixels.
- [ ] Check keyboard focus and form labels.
- [ ] Check image loading, console logs, missing imports and broken links.
- [ ] Confirm no backend/API/database/auth/payment implementation was added.

## 11. Risks and mitigations

- **Missing brand/content:** Centralize placeholders and provide a content checklist instead of inventing facts.
- **Unverified results or facilities:** Hide the section or label sample content until confirmed.
- **Frontend prototype mistaken for live form:** Make the form's demo-only behavior explicit in UI and handoff notes.
- **Recruitment updates becoming stale:** Use static sample notices labelled demo; future owner/editor workflow can be designed separately.
- **Overbuilding before launch:** Prioritize public pages and lead-generation interactions; defer admin/backend/student features.
- **Copying reference sites:** Use them only for functional inspiration and create original branding, layout and content.

## 12. Frontend coding-agent prompt

> Build the frontend only for a modern, responsive Police & Army Bharti Career Academy website for Maharashtra, using the existing project's stack and conventions. First inspect the repository and current app; do not unnecessarily replace its architecture. If no application exists, use Next.js, React, TypeScript and Tailwind CSS. Create a distinctive, premium defence-academy design using deep army green `#142B20`, muted gold `#C99A3B`, warm off-white `#F5F4EF`, clean typography, accessible contrast, authentic/replaceable imagery and Marathi-first or bilingual-ready content. Build these routes: Home, About, Courses & Batches, Police Bharti details, Army/Agniveer Bharti details, Physical Training & Facilities, Results, Gallery, Bharti Updates, Admission, Contact, Privacy and Terms. The homepage should include an announcement strip (only when configured), hero with Marathi headline and CTAs, verified academy highlights, course cards, physical/written preparation, benefits, facilities, instructors, verified results/testimonials, gallery/video preview, demo-labelled recruitment updates, admission form, contact/location and footer. Add reusable responsive header/footer, mobile menu, sticky mobile Call/WhatsApp actions, course filters, updates search/category filters, gallery category filters and accessible lightbox, FAQ accordion, configurable `tel:`/WhatsApp/map links, and client-side enquiry validation. Use centralized typed local mock data/config for courses, batches, facilities, instructors, results, gallery and notices; never invent real contact details, fees, selection statistics, staff credentials or facilities. For the enquiry form, show a clearly labelled demo success state and do not transmit or save data. **Do not implement a backend, APIs, database, authentication, admin login, payment, external data fetching, or persistent storage.** Do not copy reference-site assets or layouts. Ensure every route and button works, add per-page metadata, optimize images, follow semantic/accessibility practices, test mobile/tablet/desktop layouts, fix console/build errors, and provide README notes for running the app and replacing placeholders. At completion, report implemented routes, interactions, QA checks, remaining content placeholders and confirm that no backend work was added.

---

**End of document.**
