'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-deep-black/80 backdrop-blur-xl border-b border-white/10 supports-[backdrop-filter]:bg-deep-black/60">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Icon + Text */}
            <Link href="/" className="flex items-center gap-3 relative z-50">
              {/* D Icon */}
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0">
                <img
                  src="/images/logos/blue-d-icon.svg"
                  alt="Drive Exotiq Icon"
                  className="w-full h-full"
                />
              </div>
              {/* Text Logo */}
              <Image 
                src="/images/logos/drive-exotiq-logo.svg" 
                alt="Drive Exotiq" 
                width={180}
                height={40}
                className="h-8 md:h-10 lg:h-12 w-auto"
                priority
                unoptimized
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/how-it-works" className="text-pure-white/90 hover:text-gulf-blue transition-colors text-[15px] font-medium">
                How It Works
              </Link>
              <Link href="/events" className="text-pure-white/90 hover:text-gulf-blue transition-colors text-[15px] font-medium">
                Events
              </Link>
              <Link href="/cities" className="text-pure-white/90 hover:text-gulf-blue transition-colors text-[15px] font-medium">
                Cities
              </Link>
              <Link href="/investors" className="text-pure-white/90 hover:text-gulf-blue transition-colors text-[15px] font-medium">
                Investors
              </Link>
              <Link href="/apply">
                <Button variant="primary" size="sm">
                  Apply
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-pure-white relative z-50 p-2 -mr-2 touch-manipulation"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 ease-out ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 ease-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 ease-out ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Full Screen Mobile Menu - Apple Style */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-out ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop with blur */}
        <div className="absolute inset-0 bg-deep-black/95 backdrop-blur-2xl" />
        
        {/* Menu Content */}
        <div className="relative h-full flex flex-col justify-center px-8 pb-20">
          <nav className="space-y-2">
            <Link
              href="/how-it-works"
              className="block text-pure-white text-[32px] font-semibold py-3 hover:text-gulf-blue transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/events"
              className="block text-pure-white text-[32px] font-semibold py-3 hover:text-gulf-blue transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/cities"
              className="block text-pure-white text-[32px] font-semibold py-3 hover:text-gulf-blue transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cities
            </Link>
            <Link
              href="/investors"
              className="block text-pure-white text-[32px] font-semibold py-3 hover:text-gulf-blue transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Investors
            </Link>
          </nav>
          
          {/* CTA Button */}
          <div className="mt-12">
            <Link href="/apply" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" size="lg" className="w-full">
                Apply for Access
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
