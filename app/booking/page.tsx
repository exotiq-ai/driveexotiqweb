import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Book Your Ride | Drive Exotiq',
  description: 'Reserve your exotic car experience. Browse our curated fleet in Phoenix, Scottsdale, and Denver. Transparent pricing. Zero compromises.',
};

export default function BookingPage() {
  const cities = [
    {
      name: 'Phoenix',
      slug: 'phoenix',
      image: '/images/cities/phoenix.jpg', // Placeholder - will need actual image
      available: true,
    },
    {
      name: 'Scottsdale',
      slug: 'scottsdale',
      image: '/images/cities/scottsdale.jpg', // Placeholder - will need actual image
      available: true,
    },
    {
      name: 'Denver',
      slug: 'denver',
      image: '/images/cities/denver.jpg', // Placeholder - will need actual image
      available: false,
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-deep-black to-midnight-blue">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-hero text-pure-white mb-6">
              RESERVE YOUR RIDE
            </h1>
            <p className="text-body-lg text-metallic-silver max-w-2xl mx-auto">
              Book exotic experiences with vetted operators. Transparent pricing. Zero compromises.
            </p>
          </div>
        </section>

        {/* How It Works - Ultra Concise */}
        <section className="py-12 lg:py-16 bg-midnight-blue">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-caption text-gulf-blue mb-4 text-center">
              HOW IT WORKS
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
              <div className="flex items-center gap-4 md:gap-8">
                <div className="text-h3 text-pure-white">Browse</div>
                <svg className="w-6 h-6 text-gulf-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <div className="text-h3 text-pure-white">Book</div>
                <svg className="w-6 h-6 text-gulf-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <div className="text-h3 text-pure-white">Drive</div>
              </div>
            </div>
          </div>
        </section>

        {/* City Selection */}
        <section className="py-16 lg:py-24 bg-deep-black">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-h2 text-pure-white mb-12 text-center">
              SELECT YOUR CITY
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cities.map((city) => (
                <Link key={city.slug} href={city.available ? `/booking/${city.slug}` : '#'}>
                  <Card hover className="relative overflow-hidden h-full">
                    {/* Placeholder for city image */}
                    <div className="aspect-video bg-gradient-to-br from-graphite to-jet-grey mb-4 rounded-lg flex items-center justify-center">
                      <span className="text-metallic-silver text-lg font-semibold">{city.name}</span>
                    </div>
                    <h3 className="text-h3 text-pure-white mb-2">{city.name}</h3>
                    {!city.available && (
                      <div className="inline-block px-3 py-1 bg-performance-orange/20 text-performance-orange text-xs font-semibold rounded-full uppercase tracking-wide">
                        Coming Soon
                      </div>
                    )}
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
