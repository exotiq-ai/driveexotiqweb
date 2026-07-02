import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TourBackground from '@/components/tour/TourBackground';
import TourBeat from '@/components/tour/TourBeat';
import JsonLd, { breadcrumbs } from '@/components/JsonLd';
import { BEATS } from '@/components/tour/data';

export const metadata: Metadata = {
  title: 'The Exotic Tour — Denver to Miami',
  description:
    'One 2017 Audi S8, ten markets, 5,000 miles from Denver to Miami in 2026. Drive Exotiq’s exotic tour — seeking a wrap sponsor.',
  alternates: { canonical: '/tour' },
};

/**
 * Safe structured data only: the ten market beats as an ItemList + breadcrumbs.
 * No Event/EventSeries until real dates are confirmed — never fabricate dates.
 */
const TOUR_ITEM_LIST = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Drive Exotiq 2026 exotic tour — Denver to Miami, ten markets',
  description:
    'The ten market stops of the Drive Exotiq 2026 exotic tour, driven in one 2017 Audi S8, summer into fall 2026.',
  numberOfItems: BEATS.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: BEATS.map((beat) => ({
    '@type': 'ListItem',
    position: beat.leg,
    name: beat.name,
    url: `https://driveexotiq.com/tour#${beat.id}`,
  })),
};

/**
 * THE JOURNEY — /tour. A SERVER component: the real copy (one <h1>, ten <section>
 * city beats, the finale) renders server-side for crawlers and reads one screen at
 * a time. TourBackground is a fixed decorative windshield (cross-dissolve + route +
 * odometer) the page scrolls over — so imagery and text never overlap.
 */
export default function TourPage() {
  return (
    <>
      <JsonLd data={breadcrumbs([{ name: 'The Tour', path: '/tour' }])} />
      <JsonLd data={TOUR_ITEM_LIST} />
      <Header />
      <TourBackground />

      <main id="main" className="relative z-[1]">
        {/* Intro — the one <h1> */}
        <section className="flex min-h-[100svh] items-center">
          <div className="mx-auto w-full max-w-content px-6 md:px-10 lg:pl-[200px]">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gulf" />
              <span className="text-[13px] tracking-[0.04em] text-ink-2">
                The Journey · Denver → Miami · summer–fall 2026
              </span>
            </div>
            <h1 className="mt-6 max-w-[20ch] font-display text-[clamp(2.4rem,6vw,4.8rem)] font-semibold leading-[0.98] tracking-tightest text-ink">
              Before first light, in Denver, the engine is already warm.
            </h1>
            <p className="mt-7 max-w-[52ch] text-[clamp(1rem,1.6vw,1.2rem)] leading-snug text-ink-2">
              One 2017 Audi S8, ten markets, ~5,000 miles — Drive
              Exotiq&rsquo;s Denver-to-Miami exotic tour, summer into fall
              2026.
            </p>
            <p className="mt-4 max-w-[56ch] text-[14px] leading-relaxed text-ink-3">
              Drive Exotiq is the community front door to the exotiq.rent
              exotic-car marketplace.
            </p>
            <p className="mt-5 font-serif text-[clamp(1.1rem,2vw,1.5rem)] italic text-ink-3">
              a long way south, the long way.
            </p>
            <p className="mt-12 text-[12px] tracking-[0.16em] text-ink-3">Scroll the drive ↓</p>
          </div>
        </section>

        {/* Ten city beats — one per screen */}
        {BEATS.map((beat) => (
          <section
            key={beat.id}
            id={beat.id}
            aria-labelledby={`${beat.id}-name`}
            className="flex min-h-[100svh] items-center"
          >
            <div className="mx-auto w-full max-w-content px-6 md:px-10 lg:pl-[200px]">
              <TourBeat>
                <div className="flex items-center gap-3 text-[12px] tracking-[0.04em] text-gulf">
                  <span className="h-px w-6 bg-gulf" />
                  <span className="tabular-nums">
                    LEG {beat.leg} / {BEATS.length}
                  </span>
                  <span className="tabular-nums tracking-[0.1em] text-ink-3">
                    · {beat.legMi}
                    {beat.tag ? ` · ${beat.tag}` : ''}
                  </span>
                </div>
                <h2
                  id={`${beat.id}-name`}
                  className="mt-4 font-display text-[clamp(2.6rem,9vw,5.5rem)] font-semibold leading-[0.94] tracking-tightest text-ink"
                >
                  {beat.name}
                </h2>
                <p className="mt-4 max-w-[26ch] font-serif text-[clamp(1.2rem,3vw,1.7rem)] italic leading-snug text-ink-2">
                  {beat.dek}
                </p>
                <p className="mt-5 max-w-[44ch] text-[15px] leading-relaxed text-ink-3">
                  {beat.note}
                </p>
              </TourBeat>
            </div>
          </section>
        ))}

        {/* Finale */}
        <section
          aria-labelledby="tour-finale"
          className="flex min-h-[100svh] items-center justify-center"
        >
          <div className="mx-auto max-w-content px-6 text-center md:px-10">
            <p className="font-serif text-[clamp(1.1rem,2vw,1.4rem)] italic text-gulf">
              the end of the line, under a falling sun.
            </p>
            <h2
              id="tour-finale"
              className="mx-auto mt-5 max-w-[18ch] font-display text-[clamp(2.6rem,8vw,5rem)] font-semibold leading-[0.94] tracking-tightest text-ink"
            >
              5,000 miles. Ten cities. One blank canvas.
            </h2>
            <p className="mx-auto mt-6 max-w-[44ch] text-[clamp(1rem,1.6vw,1.15rem)] leading-snug text-ink-2">
              This is the car. This is the route. The wrap is still yours to claim.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/sponsor"
                className="inline-flex min-h-[52px] items-center justify-center rounded-sm bg-gulf px-7 py-3.5 text-[17px] font-semibold text-on-gulf transition-colors duration-250 ease-de hover:bg-gulf-2"
              >
                Sponsor the wrap
              </Link>
              <Link
                href="/apply"
                className="inline-flex min-h-[52px] items-center justify-center rounded-sm border border-line-2 px-7 py-3.5 text-[17px] font-semibold text-ink transition-colors duration-250 ease-de hover:border-ink-3 hover:bg-white/[0.03]"
              >
                Get on the list
              </Link>
            </div>
            <p className="mt-10 text-[12px] tabular-nums tracking-[0.1em] text-ink-3">
              ~5,000 tour miles · ten markets · one car
            </p>
          </div>
        </section>
      </main>

      <div className="relative z-[1]">
        <Footer />
      </div>
    </>
  );
}
