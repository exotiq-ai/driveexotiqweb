import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wrong turn — Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="bg-grain relative flex min-h-screen flex-col items-center justify-center bg-obsidian-950 px-6 text-center">
      <div className="pointer-events-none absolute inset-0 bg-spotlight-gold opacity-60" />
      <div className="relative z-[2] flex flex-col items-center">
        <p className="eyebrow mb-6">Error 404 · Wrong turn</p>
        <h1 className="mb-4 font-display text-display-lg font-semibold text-obsidian-50">
          This road doesn&rsquo;t exist.
        </h1>
        <p className="mb-10 max-w-prose text-obsidian-300">
          You took an exit that isn&rsquo;t on the map. Let&rsquo;s get you back to
          where the engines are running.
        </p>
        <Link
          href="/"
          className="rounded-full bg-gold-500 px-8 py-4 font-semibold text-obsidian-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] transition-all duration-250 ease-cinematic hover:-translate-y-px hover:bg-gold-400 hover:shadow-elev-gold"
        >
          Back to home
        </Link>
        <div className="gold-hairline mt-12 max-w-xs" />
      </div>
    </main>
  );
}
