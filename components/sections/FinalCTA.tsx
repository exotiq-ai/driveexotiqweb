import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function FinalCTA() {
  return (
    <section className="py-32 bg-gradient-to-b from-midnight-blue to-deep-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-h1 text-pure-white mb-6">
          Ready to Elevate Your
          <br />
          Exotic Car Experience?
        </h2>

        <p className="text-body-lg text-metallic-silver mb-10">
          Join the Drive Exotiq community. Gain VIP access. Experience the best exotic rental
          experiences on the planet.
        </p>

        <Link href="/apply">
          <Button variant="primary" size="lg" className="px-12 py-5">
            Apply for Access
          </Button>
        </Link>
      </div>
    </section>
  );
}
