# Claude Code project context — Drive Exotiq

This repo powers `driveexotiq.com` for the Drive Exotiq redesign.

Keep this file intentionally small. Use phase handoff docs in `docs/redesign/` for detailed session scope.

## Source of truth

Before implementation work, read:

1. `docs/redesign/00-BUILD-SPEC.md`
2. `docs/redesign/01-COPY-BRIEF.md`
3. `docs/redesign/02-ASSETS-AND-STACK.md`
4. The active phase handoff, e.g. `docs/redesign/03-PHASE-1-EXECUTION-HANDOFF.md`

## Product boundaries

- Drive Exotiq is the community/culture front door for the Exotiq ecosystem.
- `exotiq.rent` is the renter marketplace / mobile-web product.
- `app.exotiq.ai` is the operator command center.
- Keep these concepts separate in copy, routes, and CTAs.

## Design direction

- No cyan homepage and no old cyan visual direction.
- Use the current quiet-luxury / black / gulf-accent redesign direction from the redesign docs.
- 2px corners. No pill-heavy UI.
- Hairline depth, not glow.
- One gulf-blue action/accent per viewport.
- No uppercase kicker labels in new work unless a source doc explicitly requires it.
- Meaningful copy/headings should be server-rendered; motion is enhancement only.

## Safety rules

- Do not invent sponsor reach, attendance, revenue, pricing, proof numbers, legal claims, booking rules, Stripe behavior, Supabase schema, or API contracts.
- Do not create migrations, deploy, rotate secrets, push commits, or change production services unless explicitly asked.
- Do not print raw secrets.
- Preserve unrelated user work shown by `git status`.

## Working standard

- Start each coding session by checking `git status`, package scripts, and the active handoff.
- Work in bounded task packets from the active handoff.
- Prefer existing components, tokens, utilities, styles, and API patterns.
- Verify with real commands before claiming success.
- Final handoff must include: outcome, changed files, commands run with results, live/manual QA if relevant, blockers/risks, and one next recommended step.
