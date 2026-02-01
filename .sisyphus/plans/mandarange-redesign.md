# Redesign mandarange.dev (Daniel Choi) — Next.js 16 + Tailwind v4

## TL;DR

> **Quick Summary**: Redesign core pages to embed Daniel Choi's engineering philosophy (SSOT, operational simplicity, security as infrastructure, systems+docs, AI-ready structure) into copy, layout, and reusable UI patterns.
>
> **Deliverables**:
> - Updated pages: Home, About, Principles, Now, Contact
> - Updated footer completeness (links + contact)
> - Small shared "SSOT" constants/components to eliminate duplicated copy/links
>
> **Estimated Effort**: Medium
> **Parallel Execution**: YES (3 waves)
> **Critical Path**: Shared constants/components -> Page rewrites -> Footer -> Build/lint

---

## Context

### Original Request
Redesign Daniel Choi's personal homepage (mandarange.dev) with maximum design quality, English-only content, and philosophy deeply embedded throughout; keep Supabase-driven pages; update Contact email.

### Design System Constraints (existing)
- Colors: `offwhite=#0D0D0D`, `charcoal=#F5F5F5`, `surface=#141414`, accent `mandarange=#FF6B00` (`src/app/globals.css`).
- Fonts: Geist Sans (body), Geist Mono (labels/code), Newsreader Italic (headings).
- Headings: serif italic (global style).

---

## Work Objectives

### Core Objective
Make the site feel like a coherent engineering philosophy expressed as a product: SSOT-driven information architecture, operationally-minded writing, and "systems over heroics" embedded into both copy and UI patterns.

### Concrete Deliverables
- `src/app/page.tsx`: new hero narrative + philosophy preview section + tighter, mandarange-first visual direction.
- `src/app/about/page.tsx`: "How I Work" anchored on the 6 pillars + richer timeline and concrete artifacts.
- `src/app/principles/page.tsx`: show the 6 pillars explicitly while preserving DB-loaded principles.
- `src/app/now/page.tsx`: replace generic placeholder with a truthful, updated "Now" structure.
- `src/app/contact/page.tsx`: update email to `cdw0424@gmail.com` (UI + mailto) + align copy to philosophy.
- `src/components/layout/Footer.tsx`: ensure social/company links are complete + avoid duplicated link definitions.

### Must NOT Have (guardrails)
- No non-English UI copy.
- No changes to Supabase schemas or DB content requirements (page must work with current data).
- No broad redesign of Writing/Projects pages beyond keeping links intact.
- No new dependencies.

---

## Verification Strategy

### Automated Commands (required)
- `npm run lint` (Expected: exit 0)
- `npm run build` (Expected: exit 0)

### Optional Automated UI Smoke (recommended)
Use Playwright (via the Playwright skill) to capture screenshots of:
- `/`, `/about`, `/principles`, `/now`, `/contact`
and confirm no layout shift/regressions.

---

## Execution Strategy

### Parallel Execution Waves

Wave 1 (Foundation: SSOT + motion primitives)
- Task 1: Create single-source site constants (links + canonical philosophy pill list).
- Task 2: Add small reusable UI components (section heading, pillar cards, framer-motion reveals).

Wave 2 (Page rewrites in parallel)
- Task 3: Home redesign
- Task 4: About redesign
- Task 5: Principles alignment
- Task 6: Now rewrite
- Task 7: Contact email + copy

Wave 3 (Integration + polish)
- Task 8: Footer completeness + deduplicate links
- Task 9: Cross-page English-only pass + accessibility sanity
- Task 10: Lint/build + (optional) Playwright screenshots

Critical Path: Task 1 -> Task 2 -> (3/4/5/6/7) -> 8 -> 10

---

## TODOs

- [ ] 1. Create SSOT site constants (links + philosophy pillars)

  **What to do**:
  - Add a single exported source of truth for external links (LinkedIn/YouTube/Blog/WeKlem/Hypercape) and primary email.
  - Add a canonical in-code data structure for the 6 philosophy pillars (title + short thesis + 2-4 bullets + icon id).
  - Replace scattered arrays in pages/components with imports from this SSOT module.

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: (none required)

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Task 2)
  - **Blocks**: 3, 4, 5, 7, 8

  **References**:
  - `src/app/page.tsx` - current duplicated links arrays and role/company copy.
  - `src/app/about/page.tsx` - duplicated social links array.
  - `src/components/layout/Footer.tsx` - external links list missing WeKlem/Hypercape.
  - `src/app/contact/page.tsx` - hardcoded email to replace.

  **Acceptance Criteria**:
  - `npm run build` succeeds after switching consumers to the SSOT module.
  - No page defines its own external links array (only imports).

- [ ] 2. Build reusable "quiet confidence" UI primitives + motion

  **What to do**:
  - Introduce a small set of shared components used across Home/About/Principles/Now:
    - `SectionHeading` (serif italic heading + mono eyebrow)
    - `PillarsGrid` (6-pillars layout with icons + structured bullets)
    - `Reveal` / `Stagger` wrappers using `framer-motion` (client boundary)
  - Keep styling within existing globals: mandarange accent, surface cards, serif italic headings.

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: `frontend-ui-ux`, `frontend-design`

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Task 1)
  - **Blocks**: 3, 4, 5, 6

  **References**:
  - `src/app/globals.css` - existing theme tokens.
  - `src/components/layout/Navigation.tsx` - framer-motion usage pattern (layoutId underline).
  - `src/components/branding/PostCard.tsx` - card style direction for content surfaces.

  **Acceptance Criteria**:
  - Components compile under Next.js App Router constraints (client/server boundaries explicit).
  - Motion is subtle (no continuous animation except intentional hero accents).

- [ ] 3. Redesign Home to lead with philosophy + proof

  **What to do**:
  - Rewrite hero copy to foreground the philosophy one-liner and connect Daniel's arc (graphics -> platform) to trust/ops.
  - Add a "Philosophy Preview" section (6 pillars condensed) with clear CTA to `/principles`.
  - Rework "Career Journey" visuals to avoid off-theme purple/blue; use mandarange-first palette and semantic labeling (e.g., Data / Ops / Systems).
  - Keep "Featured Writing" powered by `getPosts()` and reuse existing `PostCard`.
  - Add a small "Operating Principles in Practice" callout that reads like a checklist (mono labels) to embody docs-as-tools.

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: `frontend-ui-ux`, `frontend-design`

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 4/5/6/7 after Tasks 1-2)
  - **Blocked By**: 1, 2

  **References**:
  - `src/app/page.tsx` - existing section structure, `getPosts()` usage.
  - `src/content/writing/designing-data-models.mdx` - anchor language around contradictions/SSOT.
  - `src/content/projects/distributed-outbox.mdx` - operational consistency narrative.

  **Acceptance Criteria**:
  - Home contains explicit 6-pillar preview and links to `/principles`.
  - No non-English strings.
  - `npm run build` passes.

- [ ] 4. Redesign About as "How I Work" + artifacts

  **What to do**:
  - Make the page an operational profile: how Daniel designs systems (SSOT/ops/security) and how he scales teams (standards/docs/tooling).
  - Add "How I Work" section structured by the 6 pillars; each pillar includes:
    - a concrete "I do X" statement
    - 1-2 artifacts (ADR/playbook/checklist/runbook)
    - 1 example domain (commerce ops, supply chain, platform)
  - Enrich timeline to show the arc with more specific milestones and constraints (without leaking confidential numbers).
  - Keep existing link-outs (LinkedIn/YouTube/Blog/companies) but source them from Task 1 SSOT.

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: `frontend-ui-ux`, `frontend-design`

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 3/5/6/7 after Tasks 1-2)
  - **Blocked By**: 1, 2

  **References**:
  - `src/app/about/page.tsx` - existing content blocks.
  - `docs/prd.md` - tone guidance (calm/precise, evidence > decoration).

  **Acceptance Criteria**:
  - About includes an explicit "How I Work" section covering all 6 pillars.
  - `npm run build` passes.

- [ ] 5. Align Principles page with the 6 pillars (without breaking DB loading)

  **What to do**:
  - Replace current intro copy with the core one-liner.
  - Add a static "Six Pillars" section (icons + short thesis + bullets) before the Supabase-loaded list.
  - Keep `getPrinciples()` rendering as "More principles" / "Operational patterns" below the pillars.

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: `frontend-ui-ux`, `frontend-design`

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Tasks 3/4/6/7 after Tasks 1-2)
  - **Blocked By**: 1, 2

  **References**:
  - `src/app/principles/page.tsx` - existing Supabase render loop.
  - `src/lib/db.ts` - principles data shape expectations (title/description/points).

  **Acceptance Criteria**:
  - Page shows 6 pillars even if Supabase returns an empty list.
  - `npm run build` passes.

- [ ] 6. Rewrite Now page to reflect real current focus

  **What to do**:
  - Replace placeholder bullets with a structure that reflects Daniel's actual work:
    - Operating (reliability, idempotency, transactions)
    - Building (platform/system/tooling)
    - Documenting (playbooks/ADRs/checklists)
    - Learning (AI-era workflows, distributed consistency)
  - Emphasis: Balanced (Hypercape platform ops + systems/docs + AI-era readiness).
  - Make "Last updated" deterministic (set a constant date string) so it reflects an intentional update.

  **Recommended Agent Profile**:
  - **Category**: `writing`
  - **Skills**: `frontend-ui-ux` (for the information design)

  **Parallelization**:
  - **Can Run In Parallel**: YES (after Tasks 1-2)
  - **Blocked By**: 2

  **References**:
  - `src/app/now/page.tsx` - current placeholder sections.

  **Acceptance Criteria**:
  - Now page reads as specific and current (no generic "building mandarange.dev" filler).
  - No non-English strings.

- [ ] 7. Update Contact page email + align copy to philosophy

  **What to do**:
  - Update `mailto:` and visible email to `cdw0424@gmail.com`.
  - Tighten copy to match positioning: invite architecture/data-model/ops inquiries; list common starting points ("data contradictions", "half-failing ops", "security as infra").
  - Keep server action behavior unchanged (`submitContactForm`).

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: `frontend-ui-ux`

  **Parallelization**:
  - **Can Run In Parallel**: YES (after Tasks 1-2)
  - **Blocked By**: 1

  **References**:
  - `src/app/contact/page.tsx` - hardcoded email.
  - `src/app/contact/actions.ts` - server action insertion (do not change unless required).

  **Acceptance Criteria**:
  - Page displays and links to `cdw0424@gmail.com`.
  - `npm run build` passes.

- [ ] 8. Update Footer completeness + eliminate link duplication

  **What to do**:
  - Ensure footer includes: Writing/Projects/Principles/Now/About/Contact (or keep minimal set) and external links including WeKlem + Hypercape.
  - Pull external links from the SSOT module created in Task 1.
  - Optionally add an email link.

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: (none required)

  **Parallelization**:
  - **Can Run In Parallel**: YES (after Task 1)
  - **Blocked By**: 1

  **References**:
  - `src/components/layout/Footer.tsx` - current link lists.
  - `src/components/layout/Navigation.tsx` - current primary nav destinations (keep consistent).

  **Acceptance Criteria**:
  - Footer contains no stale/duplicate link definitions.
  - External links include WeKlem + Hypercape.

- [ ] 9. Cross-page language + consistency pass

  **What to do**:
  - Scan updated pages for:
    - any non-English strings
    - inconsistent role/company naming (Hypercape/WeKlem capitalization)
    - duplicated copy that can become a shared constant
    - off-theme colors (purple/blue) reintroduced unintentionally

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
  - **Skills**: `frontend-ui-ux`

  **Parallelization**:
  - **Can Run In Parallel**: NO (best after page work)
  - **Blocked By**: 3, 4, 5, 6, 7, 8

  **Acceptance Criteria**:
  - No non-English strings on targeted pages.
  - Visual system feels coherent across pages.

- [ ] 10. Build verification + (optional) screenshot evidence

  **What to do**:
  - Run `npm run lint` and fix any issues.
  - Run `npm run build` and fix any build errors.
  - Optional: Use Playwright to screenshot primary pages for before/after evidence.

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
  - **Skills**: `playwright` (if doing screenshot evidence)

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Blocked By**: 9

  **Acceptance Criteria**:
  - `npm run lint` -> PASS.
  - `npm run build` -> PASS.

---

## Exact Files To Modify (by task)

Foundation
- (new) `src/lib/site.ts` (or similar): SSOT for links + email + pillar data.
- (new) `src/components/branding/SectionHeading.tsx`.
- (new) `src/components/branding/PillarsGrid.tsx`.
- (new) `src/components/branding/Reveal.tsx` (client) using framer-motion.

Pages
- `src/app/page.tsx`
- `src/app/about/page.tsx`
- `src/app/principles/page.tsx`
- `src/app/now/page.tsx`
- `src/app/contact/page.tsx`

Layout
- `src/components/layout/Footer.tsx`

---

## Success Criteria

- Site communicates the philosophy within 10 seconds on Home and reinforces it on every updated page.
- 6 pillars are explicitly visible on `/principles` and previewed on `/`.
- Contact email is `cdw0424@gmail.com` everywhere it appears.
- `npm run build` completes with zero errors.
