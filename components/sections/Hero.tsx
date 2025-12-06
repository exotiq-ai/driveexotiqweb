import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1621847739473-3ce3e980b08e"
          alt="Exotic supercar in motion"
          fill
          className="object-cover brightness-[0.3]"
          priority
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-midnight-blue/50 to-deep-black opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <h1 className="text-hero text-pure-white mb-6 fade-in-up">
          Where Precision Meets Passion
        </h1>
        <p className="text-body-lg text-metallic-silver mb-10 max-w-3xl mx-auto fade-in-up">
          The exotic car community built by enthusiasts, for enthusiasts.
          <br />
          Vetted drivers. Curated experiences. Zero compromises.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up">
          <Link href="/apply">
            <Button variant="primary" size="lg">
              Apply for Access
            </Button>
          </Link>
          <Link href="/events">
            <Button variant="outline" size="lg">
              Denver Event - Dec 12
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
