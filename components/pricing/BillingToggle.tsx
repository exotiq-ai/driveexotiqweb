'use client';

interface BillingToggleProps {
  isAnnual: boolean;
  onToggle: (annual: boolean) => void;
}

export default function BillingToggle({ isAnnual, onToggle }: BillingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span
        className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-pure-white' : 'text-metallic-silver'}`}
      >
        Monthly
      </span>
      <button
        onClick={() => onToggle(!isAnnual)}
        className="relative w-14 h-7 rounded-full bg-graphite border border-metallic-silver/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gulf-blue"
        aria-label={`Switch to ${isAnnual ? 'monthly' : 'annual'} billing`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-gulf-blue transition-transform duration-200 ${
            isAnnual ? 'translate-x-7' : 'translate-x-0'
          }`}
        />
      </button>
      <span
        className={`text-sm font-medium transition-colors ${isAnnual ? 'text-pure-white' : 'text-metallic-silver'}`}
      >
        Annual
        <span className="ml-1.5 text-xs text-performance-orange font-semibold">Save 2 months</span>
      </span>
    </div>
  );
}
