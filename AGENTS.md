# AGENTS.md

## Cursor Cloud specific instructions

Drive Exotiq is a single Next.js 14 (App Router) + TypeScript + Tailwind marketing/booking site. There is one service.

- Standard commands live in `package.json` (`dev`, `build`, `start`, `lint`). Use `npm run dev` for development; it serves on `http://localhost:3000`.
- Dependencies install with `npm install` (handled by the startup update script).
- The dev server, lint, and build all run WITHOUT any environment variables. Missing Supabase/Resend env vars do not crash startup (the Supabase client falls back to empty strings and the Resend client is lazy-initialized).
- Backend-dependent flows require real secrets in `.env.local` (see `README.md` / `.env.example`): `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `ADMIN_PASSWORD`, `RESEND_API_KEY`. Without these, the `/apply` form's client-side validation works fully but the final POST to `/api/applications` (Supabase insert) and `/admin` will fail. These are not needed to run, lint, or build the site.
- `next lint` reports only warnings (`<img>` usage, exhaustive-deps); exit code is 0.
