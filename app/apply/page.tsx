import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ApplicationForm from '@/components/forms/ApplicationForm';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Get on the List',
  description:
    'Get on the list for invite-only sunrise drives, the 2026 tour, and the exotiq.rent waitlist. Drive Exotiq, an Exotiq Inc. brand.',
  alternates: { canonical: '/apply' },
};

const STEPS = [
  {
    title: 'Get on the list.',
    body: 'One list covers the drives, the tour, and the marketplace.',
  },
  {
    title: 'We review every name.',
    body: 'This stays small on purpose. No bots, no bulk approvals.',
  },
  {
    title: 'You hear from us first.',
    body: 'When a drive fits your city — or the tour rolls through — your invite lands in your inbox.',
  },
];

/**
 * /apply — the single conversion spine (BUILD-SPEC §5.8). A SERVER component:
 * all copy server-rendered; the form island posts to /api/applications as before.
 */
export default function ApplyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-6 pb-section pt-36 md:px-10">
        {/* Head */}
        <div className="max-w-[46rem]">
          <h1 className="font-display text-[clamp(2.6rem,6vw,4.5rem)] font-bold leading-[1.0] tracking-tightest text-ink">
            Get on the list.
          </h1>
          <p className="mt-6 max-w-[46ch] text-[clamp(1.05rem,1.8vw,1.25rem)] leading-snug text-ink-2">
            One list for the drives, the tour, and the marketplace. We review
            every name and keep it small — no noise, no spam.
          </p>
          <p className="mt-4 max-w-[52ch] font-serif text-[15px] italic leading-relaxed text-ink-3">
            Drive Exotiq is the community front door to the exotiq.rent
            exotic-car marketplace. An Exotiq Inc. brand.
          </p>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-20">
          {/* Form */}
          <div className="max-w-[40rem]">
            <div className="hairline mb-10" />
            <ApplicationForm />
          </div>

          {/* How it works — quiet hairline list, no cards */}
          <aside aria-label="How the list works" className="lg:pt-1">
            <h2 className="text-[13px] tracking-[0.02em] text-ink-3">
              How the list works
            </h2>
            <ol className="mt-6 space-y-8">
              {STEPS.map((step, i) => (
                <li key={step.title} className="border-t border-line pt-5">
                  <span className="idx text-[13px]">0{i + 1}</span>
                  <h3 className="mt-2 text-[16px] font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink-2">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-10 border-t border-line pt-5 font-serif text-[15px] italic leading-relaxed text-metal">
              Last Sunday of the month. Before the city wakes.
            </p>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
