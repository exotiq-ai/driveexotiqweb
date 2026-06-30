import type { Metadata } from 'next';
import PillarShell from '@/components/sections/PillarShell';

export const metadata: Metadata = {
  title: 'The Exotic Tour — Denver to Miami',
  description:
    'One built Audi S8, ~5,000 miles, ten markets where exotic-car culture actually lives. Follow the Denver-to-Miami Exotic Tour — or put your brand on the wrap.',
  alternates: { canonical: '/tour' },
};

export default function TourPage() {
  return (
    <PillarShell
      eyebrow="The Exotic Tour"
      title="Denver to Miami. The long way south."
      sub="Roughly 5,000 miles, one built Audi S8, ten markets where the culture actually lives. Follow every mile — or put your brand on the wrap."
      cta={{ label: 'Put your brand on the wrap', href: '/sponsor' }}
      whatsComing={[
        'The scroll-driven “Journey” — the page becomes the drive: odometer, route line, and ten city chapters',
        'A signature moment per market along the route',
        'The wrap-sponsor pitch rendered as a media-value map',
        'Event / EventSeries JSON-LD per stop for search + AI answers',
      ]}
    />
  );
}
