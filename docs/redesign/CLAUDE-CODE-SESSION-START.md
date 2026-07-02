# Claude Code session start — Phase 1 Drive Exotiq

Use this as the first prompt in a fresh Claude Code window opened from the repo root.

```text
We are working on driveexotiq.com in the `exotiq-ai/driveexotiqweb` repo.

First, read `CLAUDE.md`. Keep it as durable project guidance, not the full task brief.

Then read these source-of-truth docs:

1. `docs/redesign/00-BUILD-SPEC.md`
2. `docs/redesign/01-COPY-BRIEF.md`
3. `docs/redesign/02-ASSETS-AND-STACK.md`
4. `docs/redesign/03-PHASE-1-EXECUTION-HANDOFF.md`

Execute only Phase 1 from `docs/redesign/03-PHASE-1-EXECUTION-HANDOFF.md`.

Important correction: no cyan homepage and no old cyan visual direction. Use the quiet-luxury / black / gulf-accent redesign direction in the docs.

Start by checking:
- `git status --short --branch`
- package manager and scripts
- relevant current files named by the handoff

Work in bounded packets:
1. `/apply` rewrite/re-skin
2. `/sponsor` real page scaffold
3. `/tour` consistency + AEO/JSON-LD cleanup
4. HOME copy/image tightening
5. `llms.txt` / `agents.txt`

Do not do unrelated refactors. Do not invent sponsor numbers, pricing, proof, Supabase schema, Stripe behavior, booking rules, or API contracts. Do not deploy, push, rotate secrets, create migrations, or overwrite unrelated user work.

Use subagents if helpful for codebase scouting, UI QA, integration checking, and fresh verification, but verify their claims yourself against actual files and commands.

Before final response, run the relevant checks from the repo scripts. If a check fails because of pre-existing unrelated issues, show the evidence and explain what is unrelated versus caused by this work.

Final response format:

Outcome:
- ...

Changed files:
- `path` — what changed

Verification run:
- `command` — pass/fail + key output

Live/manual QA, if relevant:
- route/viewport/observation

Risks or blockers:
- real unresolved issues only, or “none known”

Next recommended step:
- one concrete next action
```

## Recommended launch

From the repo root:

```bash
cd /path/to/driveexotiqweb
claude
```

Then paste the prompt above.

Keep `CLAUDE.md` small. Put detailed scope in phase handoff files like this one:

`docs/redesign/03-PHASE-1-EXECUTION-HANDOFF.md`
