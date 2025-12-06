import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function InvestorTeaser() {
  const metrics = [
    {
      number: '$13B+',
      label: 'Market Opportunity',
      description: 'U.S. luxury rental market ripe for AI disruption',
    },
    {
      number: '$180M+',
      label: 'Fleet Network',
      description: 'Multi-city operators across Denver, Scottsdale, Miami',
    },
    {
      number: '15.8%',
      label: 'Market Growth',
      description: 'CAGR in boutique P2P and luxury rental segment',
    },
  ];

  return (
    <section className="py-24 bg-midnight-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236EC1E4' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Label */}
        <p className="text-caption text-performance-orange mb-4 text-center">
          BUILDING THE FUTURE
        </p>

        {/* Headline */}
        <h2 className="text-h2 text-pure-white mb-6 text-center">
          We're Not Just Connecting Drivers to Cars.
          <br />
          We're Building Infrastructure for Premium Mobility.
        </h2>

        {/* Body Copy */}
        <p className="text-body-lg text-metallic-silver mb-12 text-center max-w-4xl mx-auto">
          Drive Exotiq is solving the trust problem that killed Turo's exotic segment while 
          building a demand engine for vetted operators nationwide. Backed by proven SaaS builders 
          and an AI development team with unicorn track records, we're positioned to become the 
          category-defining platform for premium fleet operations.
        </p>

        {/* Traction Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center bg-jet-grey/50 backdrop-blur-sm border-gulf-blue/20">
              <div className="text-4xl font-bold text-gulf-blue mb-3">
                {metric.number}
              </div>
              <h3 className="text-h4 text-pure-white mb-2">
                {metric.label}
              </h3>
              <p className="text-body-sm text-metallic-silver">
                {metric.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Backed By */}
        <div className="text-center mb-8">
          <p className="text-body text-metallic-silver mb-3">Backed By</p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <span className="text-pure-white font-semibold text-lg">1080 Ventures</span>
            <span className="text-metallic-silver">•</span>
            <span className="text-pure-white font-semibold text-lg">Lex Growth Studio</span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/investors">
            <Button variant="primary" size="lg">
              Investment Opportunity
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

