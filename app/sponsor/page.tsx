import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';
import JsonLd, { breadcrumbs } from '@/components/JsonLd';
import { BEATS } from '@/components/tour/data';

export const metadata: Metadata = {
  title: 'Sponsor the Wrap — Denver→Miami Tour',
  description:
    'Wrap one exotic car driven across ten markets and 5,000 miles in 2026. Title, Tour, and Drive sponsorships open now at Drive Exotiq.',
  alternates: { canonical: '/sponsor' },
};

const SPONSOR_EMAIL = 'hello@exotiq.ai';
const MAILTO = `mailto:${SPONSOR_EMAIL}?subject=${encodeURIComponent(
  'Sponsorship — Drive Exotiq 2026 tour'
)}`;

const TIERS = [
  {
    name: 'Title Wrap Sponsor',
    tag: 'Your livery on the car for all 5,000 miles.',
    includes: [
      'Full vehicle wrap',
      'Naming on the tour',
      'Every drive + meet',
      'Content rights',
      'First right of renewal',
    ],
    price: 'Inquire',
    headline: true,
  },
  {
    name: 'Tour Sponsor',
    tag: 'A panel on the car and presence in every market.',
    includes: [
      'Panel placement',
      'Logo across the route',
      'Market activations',
      'Content rights',
    ],
    price: 'Inquire',
  },
  {
    name: 'Drive Sponsor',
    tag: 'Present a single sunrise drive and its Cars & Coffee.',
    includes: [
      'One drive presented',
      'On-site presence',
      'Cars & Coffee branding',
      'Photography',
    ],
    price: 'Inquire',
  },
];

/**
 * /sponsor — the conversion surface (BUILD-SPEC §5.4). A SERVER component:
 * the pitch, route, tiers, and CTA all render server-side. No invented reach,
 * attendance, or proof numbers — market data ships in a clearly-pending state
 * until real figures land. Inquiry is a direct email until a sponsor-safe
 * schema exists for a form (the de_booking_leads table is booking-specific).
 */
export default function SponsorPage() {
  return (
    <>
      <JsonLd data={breadcrumbs([{ name: 'Sponsor the Wrap', path: '/sponsor' }])} />
      <Header />

      <main>
        {/* The opportunity */}
        <section
          aria-labelledby="sponsor-head"
          className="mx-auto flex min-h-[86svh] max-w-content flex-col justify-center px-6 pt-32 md:px-10"
        >
          <p className="font-serif text-lg italic text-ink-3">The wrap is open</p>
          <h1
            id="sponsor-head"
            className="mt-4 max-w-[14ch] font-display text-[clamp(2.8rem,7vw,5.2rem)] font-bold leading-[0.98] tracking-tightest text-ink"
          >
            One car. Ten markets. 5,000 miles of road.
          </h1>
          <p className="mt-7 max-w-[46ch] text-[clamp(1.1rem,1.9vw,1.35rem)] leading-snug text-ink-2">
            A single exotic tour from Denver to Miami in 2026, through ten of
            the country&rsquo;s best car markets — and the wrap on the car is
            still available.
          </p>
          <p className="mt-5 max-w-[56ch] text-[15px] leading-relaxed text-ink-3">
            Drive Exotiq is the community front door to the exotiq.rent
            exotic-car marketplace. The 2026 tour puts one unmistakable car in
            front of the exact people who care about it — at drives, Cars &
            Coffee meets, and across 5,000 miles of public road. Your brand
            rides shotgun the whole way.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="#inquire"
              className="inline-flex min-h-[52px] items-center justify-center rounded-sm bg-gulf px-7 py-3.5 text-[17px] font-semibold text-on-gulf transition-colors duration-250 ease-de hover:bg-gulf-2"
            >
              Start a sponsorship conversation
            </a>
            <Link
              href="/tour"
              className="group inline-flex items-center gap-2 text-[15px] text-ink-2 transition-colors duration-250 hover:text-ink"
            >
              Ride the tour
              <span aria-hidden="true" className="transition-transform duration-250 ease-de group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </section>

        {/* The asset */}
        <section aria-labelledby="asset-head" className="py-section">
          <div className="mx-auto max-w-content px-6 md:px-10">
            <div className="hairline mb-14" />
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
              <div>
                <span className="idx text-[13px]">01</span>
                <h2
                  id="asset-head"
                  className="mt-3 max-w-[16ch] font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-semibold leading-[1.04] tracking-tightest text-ink"
                >
                  The car is a billboard that drives.
                </h2>
                <p className="mt-6 max-w-[46ch] text-[16px] leading-relaxed text-ink-2">
                  A 2017 Audi S8 in heritage racing livery — a sleeper with
                  real presence. It spends the summer and fall of 2026 being
                  seen: at sunrise drives, parked at curated meets, and moving
                  between ten major markets. The wrap is the blank canvas.
                </p>
                <p className="mt-5 max-w-[46ch] font-serif text-[16px] italic text-metal">
                  Your livery goes here.
                </p>
              </div>
              <figure>
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-line-2">
                  <Image
                    src="/images/cars/Audi_S8_tortillaflats_adamkiss.jpg"
                    alt="The 2017 Audi S8 tour car in heritage racing livery, parked on a desert road"
                    fill
                    sizes="(min-width: 1024px) 640px, 100vw"
                    className="object-cover"
                    style={{ filter: 'brightness(.86) contrast(1.06) saturate(.94)' }}
                  />
                </div>
                <figcaption className="mt-3 text-[13px] text-ink-3">
                  Current tour-car plate. Clean wrap-canvas profile pending.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* The route as media-value map (draft state — no invented reach) */}
        <section aria-labelledby="route-head" className="py-section">
          <div className="mx-auto max-w-content px-6 md:px-10">
            <div className="hairline mb-14" />
            <span className="idx text-[13px]">02</span>
            <h2
              id="route-head"
              className="mt-3 max-w-[18ch] font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-semibold leading-[1.04] tracking-tightest text-ink"
            >
              The route is the media plan.
            </h2>
            <p className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-ink-2">
              Every stop is an audience. Ten markets between Denver and Miami,
              each with a drive, a curated Cars &amp; Coffee, and the miles in
              between.
            </p>

            <ol className="mt-12 border-t border-line">
              {BEATS.map((beat) => (
                <Reveal as="li" key={beat.id} className="border-b border-line">
                  <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] items-baseline gap-4 py-5 sm:grid-cols-[2.5rem_minmax(0,1.2fr)_minmax(0,1fr)_auto]">
                    <span className="idx text-[14px]">
                      {String(beat.leg).padStart(2, '0')}
                    </span>
                    <span className="font-display text-[clamp(1.15rem,2vw,1.5rem)] font-semibold tracking-tight-exotiq text-ink">
                      {beat.name}
                    </span>
                    <span className="col-start-2 text-[14px] text-ink-3 sm:col-start-3">
                      {beat.tag === 'start' ? 'Mile zero' : `${beat.legMi} from the last stop`}
                    </span>
                    <span className="col-start-2 text-[13px] text-ink-3 sm:col-start-4 sm:text-right">
                      Reach pending · activation to confirm
                    </span>
                  </div>
                </Reveal>
              ))}
            </ol>
            <p className="mt-6 max-w-[56ch] text-[13px] leading-relaxed text-ink-3">
              Market-by-market reach and activation detail is being finalized
              with the tour plan — we&rsquo;d rather hand you defensible
              numbers than impressive ones.
            </p>
          </div>
        </section>

        {/* Tiers */}
        <section aria-labelledby="tiers-head" className="py-section">
          <div className="mx-auto max-w-content px-6 md:px-10">
            <div className="hairline mb-14" />
            <span className="idx text-[13px]">03</span>
            <h2
              id="tiers-head"
              className="mt-3 font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-semibold leading-[1.04] tracking-tightest text-ink"
            >
              Three ways to ride along.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {TIERS.map((tier, i) => (
                <Reveal
                  key={tier.name}
                  delay={i * 80}
                  className={
                    tier.headline
                      ? 'rounded-sm border border-line-2 bg-surface p-7'
                      : 'rounded-sm border border-line bg-canvas-2 p-7'
                  }
                >
                  <h3 className="font-display text-[1.35rem] font-semibold tracking-tight-exotiq text-ink">
                    {tier.name}
                  </h3>
                  <p className="mt-3 min-h-[3.2em] text-[15px] leading-snug text-ink-2">
                    {tier.tag}
                  </p>
                  <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[14px] text-ink-2">
                        <span aria-hidden="true" className="mt-[0.55em] h-px w-3 shrink-0 bg-jewel" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-7 text-[15px] text-ink">
                    {tier.price}
                    <span className="ml-2 text-[13px] text-ink-3">— tailored to the tier</span>
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Proof — restrained, no invented numbers */}
        <section aria-labelledby="proof-head" className="py-section">
          <div className="mx-auto max-w-content px-6 md:px-10">
            <div className="hairline mb-14" />
            <span className="idx text-[13px]">04</span>
            <h2
              id="proof-head"
              className="mt-3 font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-semibold leading-[1.04] tracking-tightest text-ink"
            >
              This already works.
            </h2>
            <p className="mt-6 max-w-[50ch] text-[16px] leading-relaxed text-ink-2">
              The drives run monthly — founders, serious owners, and sponsors
              in the same parking lot at sunrise. The audience is small, real,
              and exactly who you want your brand parked next to.
            </p>
            <p className="mt-4 max-w-[50ch] font-serif text-[15px] italic text-ink-3">
              Attendance figures and event photography are being assembled for
              the sponsor deck — ask and we&rsquo;ll walk you through it.
            </p>
          </div>
        </section>

        {/* Inquiry */}
        <section
          id="inquire"
          aria-labelledby="inquire-head"
          className="py-section"
        >
          <div className="mx-auto max-w-content px-6 md:px-10">
            <div className="hairline mb-14" />
            <div className="mx-auto max-w-[44rem] text-center">
              <h2
                id="inquire-head"
                className="font-display text-[clamp(2rem,4.4vw,3.2rem)] font-semibold leading-[1.02] tracking-tightest text-ink"
              >
                Let&rsquo;s talk about the wrap.
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-2">
                Tell us a little about your brand and which tier fits.
                We&rsquo;ll come back fast — this is a small operation.
              </p>
              <a
                href={MAILTO}
                className="mt-9 inline-flex min-h-[52px] items-center justify-center rounded-sm bg-gulf px-7 py-3.5 text-[17px] font-semibold text-on-gulf transition-colors duration-250 ease-de hover:bg-gulf-2"
              >
                Start a sponsorship conversation
              </a>
              <p className="mt-5 text-[13px] text-ink-3">
                Opens an email straight to the team — {SPONSOR_EMAIL}.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
