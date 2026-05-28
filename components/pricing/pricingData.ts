export interface PricingPlan {
  name: string;
  slug: 'pro' | 'business' | 'enterprise';
  monthlyPrice: number | null;
  annualPrice: number | null;
  fleetRange: string;
  highlighted: boolean;
  badge?: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  ctaVariant: 'primary' | 'outline';
  features: string[];
  featurePrefix?: string;
}

export const plans: PricingPlan[] = [
  {
    name: 'Pro',
    slug: 'pro',
    monthlyPrice: 39,
    annualPrice: 390,
    fleetRange: '1-15 vehicles',
    highlighted: true,
    badge: 'Most Popular',
    description: 'Everything you need to manage and grow your exotic rental fleet.',
    ctaText: 'Start Free Trial',
    ctaHref: 'https://app.exotiq.ai/signup',
    ctaVariant: 'primary',
    features: [
      'Complete fleet dashboard',
      'MotorIQ AI pricing engine',
      'Booking calendar & CRM',
      'Document vault with alerts',
      'Stripe Connect payments',
      'Drive Exotiq marketplace listing',
      'Analytics & reports',
      'Chat support (24hr)',
      'Up to 2 locations',
    ],
  },
  {
    name: 'Business',
    slug: 'business',
    monthlyPrice: 29,
    annualPrice: 290,
    fleetRange: '16-50 vehicles',
    highlighted: false,
    description: 'Scale with lower per-vehicle costs and premium support.',
    ctaText: 'Start Free Trial',
    ctaHref: 'https://app.exotiq.ai/signup',
    ctaVariant: 'primary',
    featurePrefix: 'Everything in Pro, plus:',
    features: [
      'Priority chat + phone support',
      'Up to 5 locations',
      'Featured marketplace listing',
      'White-glove onboarding & migration',
      'Advanced analytics & exports',
      'Team roles & permissions',
    ],
  },
  {
    name: 'Enterprise',
    slug: 'enterprise',
    monthlyPrice: null,
    annualPrice: null,
    fleetRange: '51+ vehicles',
    highlighted: false,
    description: 'Custom solutions for large fleets with dedicated support.',
    ctaText: 'Schedule a Demo',
    ctaHref: 'https://calendly.com/hello-exotiq',
    ctaVariant: 'outline',
    featurePrefix: 'Everything in Business, plus:',
    features: [
      'Custom AI model training',
      'Unlimited locations',
      'Premium marketplace placement',
      'Dedicated success manager',
      'Custom integrations & API',
      'Quarterly business reviews',
      'Enterprise SLA (99.9%)',
    ],
  },
];

export const allIncludedFeatures = [
  'Fleet Dashboard',
  'MotorIQ AI Pricing Engine',
  'AI Forecasting (30-day)',
  'Booking Calendar',
  'Customer CRM',
  'Document Vault',
  'Stripe Connect Payments',
  'Drive Exotiq Marketplace',
  'Analytics & Reports',
  'Team Management',
  'Mobile Responsive',
];

export interface ComparisonRow {
  label: string;
  pro: string;
  business: string;
  enterprise: string;
}

export const comparisonRows: ComparisonRow[] = [
  { label: 'Vehicles', pro: '1-15', business: '16-50', enterprise: '51+' },
  { label: 'Locations', pro: 'Up to 2', business: 'Up to 5', enterprise: 'Unlimited' },
  { label: 'Support', pro: 'Chat (24hr)', business: 'Priority + phone', enterprise: 'Dedicated (1hr)' },
  { label: 'Marketplace', pro: 'Listed', business: 'Featured', enterprise: 'Premium + priority leads' },
  { label: 'Onboarding', pro: 'Self-serve', business: 'White-glove', enterprise: 'Custom' },
  { label: 'API Access', pro: '\u2014', business: '\u2014', enterprise: 'Full API' },
  { label: 'Custom AI', pro: '\u2014', business: '\u2014', enterprise: 'Custom model training' },
  { label: 'SLA', pro: '\u2014', business: '\u2014', enterprise: '99.9%' },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: 'How does the 14-day free trial work?',
    answer: 'Sign up with just your email \u2014 no credit card required. You get full access to every feature for 14 days. After the trial, your account switches to read-only until you subscribe. Your data is never deleted.',
  },
  {
    question: 'How does pricing work?',
    answer: 'Simple per-vehicle pricing. Pro is $39/vehicle/month (1-15 vehicles). Business is $29/vehicle/month (16-50 vehicles). All features are included on both plans. Annual billing saves you 2 months.',
  },
  {
    question: 'What if I have more than 50 vehicles?',
    answer: 'Contact us for Enterprise pricing with custom rates, dedicated support, and custom AI model training.',
  },
  {
    question: 'Are all features really included?',
    answer: 'Yes. MotorIQ AI pricing, booking calendar, CRM, document vault, Stripe Connect payments, marketplace listing, and analytics \u2014 all included on every paid plan. No feature gates.',
  },
  {
    question: 'What happens after the trial ends?',
    answer: "Read-only mode. You can still view your fleet and data, but can\u2019t create bookings, process payments, or use AI pricing until you subscribe.",
  },
  {
    question: 'Can I switch plans?',
    answer: 'If your fleet grows past 15 vehicles, you automatically qualify for the lower Business rate at your next billing cycle.',
  },
  {
    question: 'Is there a long-term contract?',
    answer: 'No. Monthly plans cancel anytime. Annual plans are prepaid with 2 months free.',
  },
  {
    question: 'What about Drive Exotiq marketplace?',
    answer: 'Every paid account is listed on Drive Exotiq (exotiq.rent). Business and Enterprise get featured placement with priority lead routing.',
  },
];
