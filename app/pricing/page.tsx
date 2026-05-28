'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import BillingToggle from '@/components/pricing/BillingToggle';
import PricingCards from '@/components/pricing/PricingCards';
import ROICalculator from '@/components/pricing/ROICalculator';
import FeatureComparison from '@/components/pricing/FeatureComparison';
import PricingFAQ from '@/components/pricing/PricingFAQ';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      <Header />
      <main className="bg-deep-black">
        {/* Hero */}
        <section className="relative pt-32 pb-16 lg:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-midnight-blue via-deep-black to-deep-black" />

          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <div className="inline-block mb-6 px-4 py-2 bg-gulf-blue/10 border border-gulf-blue/30 rounded-full">
              <span className="text-gulf-blue font-semibold text-sm">
                Launch pricing &mdash; lock in before 2027 increase
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white mb-6 leading-tight">
              Simple, Transparent Pricing
            </h1>

            <p className="text-xl text-metallic-silver mb-4 max-w-2xl mx-auto">
              $39/vehicle/month &mdash; everything you need to manage and grow your exotic rental fleet.
            </p>

            <p className="text-metallic-silver/70 text-sm mb-10">
              All features included on every plan &middot; 14-day free trial &middot; No credit card required
            </p>

            <BillingToggle isAnnual={isAnnual} onToggle={setIsAnnual} />
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20 lg:pb-28">
          <div className="max-w-6xl mx-auto px-6">
            <PricingCards isAnnual={isAnnual} />
          </div>
        </section>

        {/* ROI Calculator */}
        <ROICalculator />

        {/* Feature Comparison */}
        <FeatureComparison />

        {/* FAQ */}
        <PricingFAQ />

        {/* Bottom CTA */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-midnight-blue to-deep-black">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-h2 text-pure-white mb-6">Ready to Transform Your Fleet?</h2>
            <p className="text-body-lg text-metallic-silver mb-8">
              Start your 14-day free trial today. No credit card required. All features included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="https://app.exotiq.ai/signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg" className="min-w-[200px]">
                  Start Free Trial
                </Button>
              </a>
              <a
                href="https://calendly.com/hello-exotiq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="min-w-[200px]">
                  Schedule a Demo
                </Button>
              </a>
            </div>
            <p className="text-xs text-metallic-silver/60">
              14 days free &middot; No credit card &middot; All features included
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
