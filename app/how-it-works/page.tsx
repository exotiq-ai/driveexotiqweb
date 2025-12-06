import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works | Drive Exotiq',
  description: 'Learn how Drive Exotiq connects vetted drivers to curated exotic car experiences. From application to adventure in 3 simple steps.',
};

export default function HowItWorksPage() {
  const steps = [
    {
      title: 'Submit Your Application',
      content: 'You fill out a quick application with your details—name, location, driving interests, and which cities you want to rent in. Optional invite code if you were referred by an existing member.',
      checks: [
        'Driving record (clean is preferred)',
        'Insurance verification',
        'Background check',
        'Brief intro to understand your passion for exotic cars',
      ],
      timeline: 'Most applications reviewed within 24-48 hours.',
    },
    {
      title: 'Get Vetted',
      content: 'We use machine learning and API integrations to verify your information instantly. You get a renter profile score that operators can review—transparent, fair, and fast.',
      checks: [
        'Risk assessment score',
        'Verified driving history',
        'Insurance status',
        'Member since date',
      ],
      timeline: 'You\'re approved and gain access to the Drive Exotiq marketplace.',
    },
    {
      title: 'Browse Vetted Operators',
      content: 'Search by city, vehicle make/model, dates, and price range. Every operator has been vetted by Drive Exotiq. Every vehicle is maintained to our standards.',
      checks: [
        'Lamborghini Huracán, Aventador',
        'Ferrari 488, F8 Tributo',
        'McLaren 720S, 570S',
        'Porsche 911 GT3, Turbo S',
        'Bentley, Rolls-Royce, and more',
      ],
      timeline: 'See the full daily rate upfront—no hidden fees, no surprises.',
    },
    {
      title: 'Book Your Experience',
      content: 'Select your vehicle and dates, review pricing (includes our flat daily fee), confirm reservation, and receive operator contact and pickup details.',
      checks: [
        'Seamless pickup/drop-off',
        'Vehicle walkthroughs',
        '24/7 support during your rental',
      ],
      timeline: 'White-glove service from start to finish.',
    },
    {
      title: 'Drive & Connect',
      content: 'Pick up your exotic car. Feel the performance. Take it on scenic drives, track days, or just cruise the city. Return it when you\'re done.',
      checks: [
        'Exclusive community events',
        'Cars & Coffee gatherings',
        'Mountain rallies',
        'Track days',
        'Private gatherings with fellow enthusiasts',
      ],
      timeline: 'Enjoy and repeat!',
    },
  ];

  const faqs = [
    {
      q: 'How long does the vetting process take?',
      a: 'Most applications are reviewed within 24-48 hours. If additional verification is needed, we\'ll reach out directly.',
    },
    {
      q: 'What are the requirements to join?',
      a: 'Clean driving record preferred, valid insurance, and a passion for exotic cars. We evaluate each applicant individually.',
    },
    {
      q: 'How much does it cost to join?',
      a: 'Membership is currently free during our launch phase. We charge a transparent daily fee when you book a rental.',
    },
    {
      q: 'Can I rent in multiple cities?',
      a: 'Absolutely. Once vetted, you can book exotic experiences in any Drive Exotiq city.',
    },
    {
      q: 'What if the operator\'s vehicle isn\'t available?',
      a: 'Our app shows real-time availability. If something changes, we\'ll help you find an equivalent vehicle.',
    },
    {
      q: 'Do you own the vehicles?',
      a: 'No. We connect vetted renters to vetted exotic rental operators. We\'re the trusted marketplace, not the fleet owner.',
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-midnight-blue">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-h1 text-pure-white mb-6">
              From Application to Adventure:
              <br />
              How Drive Exotiq Works
            </h1>
            <p className="text-body-lg text-metallic-silver">
              Vetted drivers meet curated exotic experiences. Here's your roadmap.
            </p>
          </div>
        </section>

        {/* The Process */}
        <section className="py-24 bg-jet-grey">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-h2 text-pure-white mb-12 text-center">
              The Process
            </h2>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <Card key={index} className="border-l-4 border-gulf-blue">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-performance-orange text-pure-white text-xl font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-h3 text-pure-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-body text-metallic-silver mb-4">
                        {step.content}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {step.checks.map((check, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-body-sm text-metallic-silver">
                            <svg className="w-5 h-5 text-gulf-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {check}
                          </li>
                        ))}
                      </ul>
                      <p className="text-body-sm text-gulf-blue italic">
                        {step.timeline}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-deep-black">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-h2 text-pure-white mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <h3 className="text-h3 text-pure-white mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-body text-metallic-silver">
                    {faq.a}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-midnight-blue">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-h2 text-pure-white mb-6">
              Ready to join?
            </h2>
            <Link href="/apply">
              <Button variant="primary" size="lg">
                Apply for Access
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
