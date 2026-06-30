'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Emblem from '@/components/ui/Emblem';
import { cn } from '@/lib/utils';

const NAV = [
  { label: 'The Drives', href: '/drives' },
  { label: 'The Tour', href: '/tour' },
  { label: 'Community', href: '/community' },
  { label: 'Marketplace', href: '/marketplace' },
  { label: 'Stories', href: '/blog' },
];

/**
 * Header — stays out of the way of the cinematic design.
 * Transparent over the top of a page; hides on scroll-down and returns on
 * scroll-up (the moment you signal intent to navigate). Mobile = full-screen sheet.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setAtTop(y < 24);
        if (y > lastY.current && y > 140) setHidden(true);
        else if (y < lastY.current - 4) setHidden(false);
        lastY.current = y;
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color,backdrop-filter] duration-500 ease-de',
          hidden && !open ? '-translate-y-full' : 'translate-y-0',
          atTop && !open
            ? 'border-b border-transparent bg-transparent'
            : 'border-b border-line bg-canvas/80 backdrop-blur-xl'
        )}
      >
        <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-ink transition-opacity duration-250 hover:opacity-80"
            aria-label="Drive Exotiq — Home"
          >
            <Emblem className="h-[20px] w-auto" />
            <span className="font-display text-[18px] font-semibold tracking-tight-exotiq">
              Drive Exotiq
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-[14px] text-ink-2 transition-colors duration-250 hover:text-ink"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-jewel transition-all duration-250 ease-de group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="/apply"
              className="rounded-sm bg-gulf px-5 py-2.5 text-[14px] font-semibold text-on-gulf transition-colors duration-250 ease-de hover:bg-gulf-2"
            >
              Get on the list
            </Link>
          </div>

          <button
            className="relative z-50 -mr-2 p-2 text-ink lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="flex h-5 w-6 flex-col justify-between">
              <span className={`h-px w-full bg-current transition-all duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`h-px w-full bg-current transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`h-px w-full bg-current transition-all duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-canvas transition-opacity duration-400 ease-de lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8 pb-16">
          <nav className="space-y-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-display text-[30px] font-semibold tracking-tight-exotiq text-ink transition-transform duration-250 hover:translate-x-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/apply"
            onClick={() => setOpen(false)}
            className="mt-10 inline-flex items-center justify-center rounded-sm bg-gulf px-6 py-3.5 font-semibold text-on-gulf"
          >
            Get on the list
          </Link>
        </div>
      </div>
    </>
  );
}
