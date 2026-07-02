# Phase 1 Execution Handoff — Drive Exotiq redesign

> For Claude Code / Avi / implementation agents. This is the bounded Phase 1 packet for turning the current redesign branch from a promising concept into a launchable conversion spine.
>
> Repo: `exotiq-ai/driveexotiqweb`
> Branch reviewed: `claude/driveexotiq-website-redesign-lzp27s`
> Current reviewed tip: `122d0fe polish: end-to-end design pass — nav, tour overlap, room choreography, photos`

---

## 0. Read this first

Before editing, read these source-of-truth files:

1. `docs/redesign/00-BUILD-SPEC.md`
2. `docs/redesign/01-COPY-BRIEF.md`
3. `docs/redesign/02-ASSETS-AND-STACK.md`
4. `docs/concepts/README.md`

Core thesis:

- Drive Exotiq is an Exotiq Inc. brand.
- Drive Exotiq is the community/culture front door to `exotiq.rent`.
- The website is one cinematic drive:
  - HOME = The Garage.
  - `/tour` = The Journey, where scroll equals miles.
  - `/sponsor` = the primary conversion surface.
- Sponsors are the #1 business audience.
- Voice is quiet-luxury / enthusiast-credible / concrete. No hype.

Non-negotiables:

- 2px corners. No pills.
- Hairline depth, never glow.
- One gulf-blue action/accent per viewport.
- No cyan homepage and no old cyan visual direction; use the quiet-luxury / black / gulf-accent redesign direction.
- No uppercase kicker labels on new work.
- Server-render the meaningful copy/headings; motion is client-island enhancement only.
- Do not invent sponsor reach, attendance, revenue, or proof numbers.

---

## 1. Current state summary

The redesign branch already has strong bones:

- HOME is structurally the Garage: `app/page.tsx`, `components/home/*`.
- `/tour` has 10 city beats, roadbook rail, odometer, and R8→S8 cross-dissolve: `app/tour/page.tsx`, `components/tour/*`.
- Header/footer are mostly rebranded.
- Fonts/tokens/motion dependencies are in place.
- `npm ci && npm run build && npm run lint` passed in a clean temp copy, with warnings.

Main gaps:

1. `/apply` is still legacy/off-voice but receives the global CTA.
2. `/sponsor` is still a `PillarShell` placeholder, despite sponsor being the #1 audience.
3. `/tour` needs mileage consistency, stronger choreography, AEO copy, and JSON-LD.
4. HOME needs tighter imagery/copy alignment and less placeholder feel.
5. JSON-LD, `llms.txt`, and `agents.txt` are not implemented.
6. Several visible old design-system classes still leak through launch-visible pages.

---

## 2. Work lane recommendation

Use Claude Code for implementation, with Avi/Hermes as orchestrator/reviewer.

Why:

- The work is multi-file and design-sensitive.
- Claude Code already produced the redesign branch; continuing in that lane preserves style/context.
- Avi should not blindly do a long solo coding run unless the task is bounded and independently verifiable.
- Avi should own: task framing, subagent review, build/lint/browser verification, and final judgment.

Implementation order:

1. `/apply` rewrite/re-skin.
2. `/sponsor` real page scaffold.
3. `/tour` consistency + AEO/JSON-LD cleanup.
4. HOME copy/image tightening.
5. AI-discovery/SEO files.

---

## 3. Task A — Rewrite and re-skin `/apply`

### Objective

Make `/apply` match the redesign positioning and voice. This is urgent because the global header CTA points to `/apply`.

### Files likely involved

- `app/apply/page.tsx`
- `components/forms/ApplicationForm.tsx`
- `components/forms/SmsConsentCheckboxes.tsx` if copy/classes need touch-up
- `components/ui/Input.tsx` and `Textarea.tsx` only if safe to modernize without breaking other forms

### Required source copy

Use `docs/redesign/01-COPY-BRIEF.md` section 13.

Target positioning:

- Headline: `Get on the list.`
- Subhead: one list for drives, tour, and marketplace.
- No VIP language.
- No “AI-powered verification.”
- No implying exotiq.rent is already bookable.
- No “Start Browsing,” “book your first experience,” or “curated rental experiences.”

### Implementation notes

- Use current redesign tokens: `canvas`, `surface`, `line`, `ink`, `ink-2`, `gulf`, `on-gulf`.
- Remove old public-facing classes on this route:
  - `bg-midnight-blue`
  - `bg-jet-grey`
  - `text-pure-white`
  - `text-gulf-blue`
  - `text-caption`
  - `rounded-full`
- Keep the existing `/api/applications` submission path intact.
- Keep legal consent intact.
- Form labels should match the brief:
  - Full name
  - Email address
  - Phone
  - Current city
  - City you’d drive in
  - Tell us what you drive
  - Invite code (optional)
- Submit CTA: `Get on the list`.

### Acceptance criteria

- `/apply` reads as a Drive Exotiq list funnel, not a rental marketplace application.
- All visible copy follows the voice guide.
- The page uses the redesign visual system.
- Existing form functionality remains intact.
- Build and lint pass.

---

## 4. Task B — Replace `/sponsor` placeholder with a real sponsor scaffold

### Objective

Turn `/sponsor` from a placeholder `PillarShell` into a credible sponsor conversion page without inventing numbers or proof.

### Files likely involved

- `app/sponsor/page.tsx`
- Possibly create `components/forms/SponsorInquiryForm.tsx`
- Possibly create `components/sections/Sponsor*` components if helpful
- Reuse `components/ui/Button.tsx`, `Section.tsx`, `Reveal.tsx`
- Reuse `/api/booking-leads` pattern only if schema supports it safely; otherwise make the sponsor form a mailto/disabled CTA until schema is expanded.

### Required source copy

Use `docs/redesign/01-COPY-BRIEF.md` section 9.

Core sections:

1. Opportunity
   - “One car. Ten markets. 5,000 miles of road.”
2. Asset
   - 2017 Audi S8, heritage racing livery, sleeper.
3. Route as media-value map
   - show the 10 markets, but do **not** include fake reach numbers.
   - use labels like `Reach pending`, `Activation to confirm`, or a clearly non-public draft state if needed.
4. Tiers
   - Title Wrap Sponsor
   - Tour Sponsor
   - Drive Sponsor
   - Price: `Inquire`, unless Gregory supplies numbers.
5. Proof
   - Use restrained placeholder language.
   - Do not claim attendance counts or sponsor outcomes.
6. Inquiry CTA/form
   - CTA label: `Start a sponsorship conversation`.

### Asset constraints

Available placeholder image:

- `/images/cars/Audi_S8_tortillaflats_adamkiss.jpg`

Do not pretend this is the final wrap-canvas. Label it honestly if needed:

- “Current tour-car plate. Clean wrap profile pending.”

Missing blocker:

- `SP-WRAP-CANVAS` clean S8 side profile.

### Acceptance criteria

- `/sponsor` no longer says “what’s coming” as the main experience.
- Sponsor page has real structure and credible copy.
- No invented reach/attendance/proof numbers.
- Primary CTA is sponsor-specific, not `/apply` unless explicitly framed as temporary.
- Page follows the visual system and server-renders the meaningful content.
- Build and lint pass.

---

## 5. Task C — `/tour` consistency, AEO, and JSON-LD cleanup

### Objective

Keep `/tour` as the showpiece and make it more internally consistent and crawlable.

### Files likely involved

- `app/tour/page.tsx`
- `components/tour/data.ts`
- `components/tour/Odometer.tsx`
- `components/tour/Roadbook.tsx`
- `components/tour/TourBeat.tsx`

### Fixes

1. Mileage consistency
   - Decide internally on display model until Gregory confirms details.
   - Do not contradict the canonical copy: `~5,000 miles`, `10 markets`, Denver → Miami, summer→fall 2026.
   - If city legs sum to less than 5,000, phrase odometer as campaign/tour mileage rather than literal one-way leg total.

2. Finale copy
   - Prefer: `5,000 miles. Ten cities. One blank canvas.`
   - CTA: `Sponsor the wrap`.

3. AEO anchor sentence
   - Include a server-rendered sentence such as:
     - `Drive Exotiq is the community front door to the exotiq.rent exotic-car marketplace.`

4. JSON-LD
   - Add safe structured data:
     - `BreadcrumbList`
     - `ItemList` for 10 market beats
     - `EventSeries` or `Event` only if dates are not fabricated; avoid fake dates.

5. Accessibility/reduced motion
   - Ensure content remains in DOM and readable.

### Acceptance criteria

- No visible mileage contradictions.
- Sponsor CTA and finale align with the brief.
- AEO sentence appears server-rendered.
- JSON-LD validates structurally and does not include invented data.
- Build and lint pass.

---

## 6. Task D — HOME Garage tightening

### Objective

Improve HOME without needing new assets.

### Files likely involved

- `app/page.tsx`
- `components/home/*`

### Safe changes now

- Add/restore the `Drive Exotiq` wordmark/title moment in H0 if it improves hierarchy.
- H2 Tour room should use the S8 plate, not the R8, because it previews the wrappable tour car.
- H5 Sponsor line should be stronger:
  - `Your livery on this car. Down this line. Ten cities.`
- Reduce extra “jewel” copy where it makes cold QR comprehension slower.
- Avoid shadows/glows; use hairlines/surface/depth.
- Ensure each room’s primary idea is clear in 3 seconds.

### Acceptance criteria

- HOME still maps exactly to the Garage model.
- Rooms preview the correct pillar and asset.
- Sponsor crescendo is stronger.
- No new invented claims.
- Build and lint pass.

---

## 7. Task E — AI discovery and safe SEO/AEO files

### Objective

Add basic AI-search discoverability without waiting on assets/secrets.

### Files likely involved

- `public/llms.txt`
- `public/agents.txt`
- `app/layout.tsx` or per-page files for JSON-LD helpers
- Possibly `lib/seo.ts` or `components/JsonLd.tsx`

### `llms.txt` should include

- Site identity: Drive Exotiq.
- Relationship: Exotiq Inc. brand; community front door to exotiq.rent.
- Core pages: `/`, `/tour`, `/drives`, `/community`, `/marketplace`, `/sponsor`, `/apply`, `/blog`.
- Canonical facts:
  - invite-only last-Sunday sunrise drives
  - 2017 Audi S8 tour car
  - Denver → Miami
  - ~5,000 miles
  - 10 markets
  - summer→fall 2026
  - exotiq.rent coming soon
- Avoid unconfirmed sponsor numbers.

### Acceptance criteria

- Files are public/static.
- No secrets.
- No fake data.
- Build and lint pass.

---

## 8. Verification commands

Run before final handoff:

```bash
git status --short --branch
npm ci
npm run build
npm run lint
git diff --check
git diff --stat
git diff -- app/apply/page.tsx app/sponsor/page.tsx app/tour/page.tsx app/page.tsx public/llms.txt public/agents.txt
```

If using a local preview:

```bash
npm run dev -- --hostname 127.0.0.1 --port 3018
```

Browser QA pages:

- `/`
- `/tour`
- `/sponsor`
- `/apply`
- mobile width for those four
- reduced-motion if practical

---

## 9. Do not do yet

Do not block Phase 1 on:

- WebGL road plane.
- Airtable events pipeline.
- Full blog engine.
- Per-city `/tour/[city]` routes.
- Public sponsor reach numbers.
- New claims about attendance, impressions, revenue, or sponsor ROI.
- Supabase/Resend/Netlify env work unless Gregory provides access/secrets.

---

## 10. Gregory inputs still needed

- Original Claude Code prompts if they contain taste/creative source context.
- 10 route nodes vs 9.
- Sponsor-last HOME order confirmation.
- R8→S8 continuity confirmation.
- Gold accent on/off.
- Public sponsor pricing vs `Inquire`.
- Whether placeholder sponsor numbers may ship publicly.
- Clean `SP-WRAP-CANVAS` S8 side-profile asset.
- Real sponsor/event proof photos.
- exotiq.rent and exotiq.ai wordmarks.
- Supabase/Resend/Netlify deploy/env access for production launch.

---

## 11. Suggested Claude Code prompt

```text
You are working in /Users/gbot/work/driveexotiqweb on branch claude/driveexotiq-website-redesign-lzp27s.

Read docs/redesign/00-BUILD-SPEC.md, 01-COPY-BRIEF.md, 02-ASSETS-AND-STACK.md, docs/concepts/README.md, then read docs/redesign/03-PHASE-1-EXECUTION-HANDOFF.md.

Implement Phase 1 in this order:
1. Task A: rewrite/re-skin /apply.
2. Task B: replace /sponsor placeholder with a credible no-fake-numbers sponsor scaffold.
3. Task C: clean /tour mileage/copy/AEO/JSON-LD.
4. Task D: tighten HOME Garage copy/image alignment.
5. Task E: add llms.txt and agents.txt.

Constraints:
- Do not invent sponsor reach, attendance, revenue, or ROI numbers.
- Do not require secrets or production env vars.
- Keep meaningful copy server-rendered.
- Motion must remain client-island progressive enhancement.
- Follow 2px corners, hairline depth, one gulf accent per viewport, no glow, no uppercase kickers.
- Preserve existing form submission behavior unless explicitly creating a safe sponsor form.

After changes, run:
npm run build
npm run lint
git diff --check

Return: changed files, summary, verification output, and any blockers.
```
