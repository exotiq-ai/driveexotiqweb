import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Your Ride | Drive Exotiq',
  description: 'Reserve your exotic car experience. Browse our curated fleet in Phoenix.',
};

export default function BookingPage() {
  redirect('/booking/phoenix');
}
