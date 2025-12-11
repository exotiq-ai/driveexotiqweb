import Link from 'next/link';
import Button from '@/components/ui/Button';
import HeroVideo from '@/components/sections/HeroVideo';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <HeroVideo />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
        <h1 className="text-hero text-pure-white mb-6 fade-in-up px-2 sm:px-0">
          Where Precision<br />Meets Passion
        </h1>
        <p className="text-body-lg text-metallic-silver mb-10 max-w-3xl mx-auto fade-in-up px-2 sm:px-0">
          The exotic car community built by enthusiasts, for enthusiasts.
          <br />
          Vetted drivers. Curated experiences. Zero compromises.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center fade-in-up px-4 sm:px-0">
          <Link href="/apply" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Apply for Access
            </Button>
          </Link>
          <Link href="/events" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View Upcoming Events
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
