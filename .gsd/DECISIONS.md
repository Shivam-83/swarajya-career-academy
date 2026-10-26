# DECISIONS.md — Architecture Decision Records

> **Purpose**: Log significant technical decisions and their rationale.

---

## Decisions

### [DECISION-001] Frontend-Only Release Boundary

**Date**: 2026-10-26  
**Status**: Accepted  

#### Context
The academy website project requires an immediate, high-trust digital presence for prospective Maharashtra Police and Army Bharti candidates and parents. Full backend infrastructure (databases, CMS, CRM, payment processing, user accounts) is not yet ready and would slow down public launch.

#### Decision
Deliver a 100% frontend-only release. The admission form will validate fields in-browser and display a simulated demo status, without transmitting or persisting data. All dynamic views will be driven by typed, centralized static mock data.

#### Rationale
- Enables fast deployment with zero server maintenance overhead.
- Protects user privacy by not accepting or storing sensitive data prematurely.
- Provides a clean component architecture ready to connect to APIs in a future milestone.

#### Consequences
- Forms do not send actual emails or database rows.
- Clear demo notices must be shown in the UI so visitors and academy owners understand the prototype status.

---

### [DECISION-002] Visual & Typography Identity for Defence Academy

**Date**: 2026-10-26  
**Status**: Accepted  

#### Context
Defence academies in Maharashtra need an aesthetic that conveys discipline, respect, and physical readiness without looking like a generic commercial school template or using overwhelming military camouflage.

#### Decision
Adopt deep army green (`#142B20`), muted athletic gold (`#C99A3B`), warm off-white (`#F5F4EF`), and crisp white card containers (`#FFFFFF`), paired with bilingual-friendly typography (Google Fonts Noto Sans Devanagari / Poppins).

#### Rationale
- Meets the visual guidelines established in SRS Section 3.1.
- Provides accessible contrast ratios (WCAG AA).
- Renders Devanagari (Marathi) text cleanly and authoritatively.

#### Consequences
- Design tokens must be strictly maintained across all cards, badges, and buttons.

---

*Last updated: 2026-10-26*
