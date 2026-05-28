import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - Exotiq Command Center | Fleet Management for Exotic Rentals',
  description: 'Simple per-vehicle pricing starting at $29/vehicle/month. All features included. 14-day free trial, no credit card required. Manage and grow your exotic rental fleet.',
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
