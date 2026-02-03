import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Phoenix Fleet | Book Your Exotic Car | Drive Exotiq',
  description: 'Browse and book from our Phoenix exotic car fleet. Luxury, electric, and practical vehicles available. Reserve your experience today.',
};

export default function PhoenixBookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
