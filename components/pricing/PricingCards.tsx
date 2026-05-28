'use client';

import Button from '@/components/ui/Button';
import { plans } from './pricingData';

interface PricingCardsProps {
  isAnnual: boolean;
}

export default function PricingCards({ isAnnual }: PricingCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {plans.map((plan) => {
        const isEnterprise = plan.slug === 'enterprise';
        const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
        const period = isAnnual ? '/vehicle/year' : '/vehicle/month';

        return (
          <div
            key={plan.slug}
            className={`relative rounded-2xl p-px transition-all duration-300 ${
              plan.highlighted
                ? 'bg-gradient-to-b from-gulf-blue via-gulf-blue/40 to-transparent'
                : isEnterprise
                ? 'bg-gradient-to-b from-performance-orange/40 via-metallic-silver/20 to-transparent'
                : 'bg-metallic-silver/20'
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                <span className="bg-gulf-blue text-deep-black text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  {plan.badge}
                </span>
              </div>
            )}
            <div
              className={`h-full rounded-2xl p-6 lg:p-8 flex flex-col ${
                isEnterprise
                  ? 'bg-gradient-to-b from-midnight-blue to-jet-grey'
                  : 'bg-jet-grey'
              }`}
            >
              <h3 className="text-caption text-gulf-blue mb-4">{plan.name}</h3>

              {price !== null ? (
                <div className="mb-2">
                  <span className="text-4xl lg:text-5xl font-bold text-pure-white">${price}</span>
                  <span className="text-metallic-silver text-sm ml-1">{period}</span>
                </div>
              ) : (
                <div className="mb-2">
                  <span className="text-4xl lg:text-5xl font-bold text-pure-white">Custom</span>
                  <span className="text-metallic-silver text-sm ml-1">pricing</span>
                </div>
              )}

              {price !== null && (
                <p className="text-metallic-silver text-xs mb-4">
                  {isAnnual
                    ? `or $${plan.monthlyPrice}/vehicle/month billed monthly`
                    : `or $${plan.annualPrice}/vehicle/year \u2014 save 2 months`}
                </p>
              )}

              <p className="text-metallic-silver text-sm mb-1 font-medium">{plan.fleetRange}</p>
              <p className="text-metallic-silver/70 text-sm mb-6">{plan.description}</p>

              <a
                href={plan.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-4"
              >
                <Button
                  variant={plan.ctaVariant}
                  size="md"
                  className="w-full"
                >
                  {plan.ctaText}
                </Button>
              </a>

              {!isEnterprise && (
                <p className="text-center text-xs text-metallic-silver/60 mb-6">
                  14 days free &middot; No credit card required
                </p>
              )}

              <div className="border-t border-metallic-silver/10 pt-6 mt-auto">
                {plan.featurePrefix && (
                  <p className="text-sm text-pure-white font-medium mb-3">{plan.featurePrefix}</p>
                )}
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <svg
                        className="w-4 h-4 text-gulf-blue mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-metallic-silver">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
