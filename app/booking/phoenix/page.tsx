'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import iframe-resizer to avoid SSR issues
const WheelbaseIframe = dynamic(() => import('@/components/booking/WheelbaseIframe'), {
  ssr: false,
});

// Sample vehicle data - will be replaced with real data
const vehicles = [
  { id: 1, brand: 'Porsche', model: '911', category: 'Luxury', price: 150, image: '/images/cars/porsche-911.jpg' },
  { id: 2, brand: 'Mercedes-Benz', model: 'G-Wagon', category: 'Luxury', price: 200, image: '/images/cars/g-wagon.jpg' },
  { id: 3, brand: 'BMW', model: 'M3', category: 'Luxury', price: 120, image: '/images/cars/bmw-m3.jpg' },
  { id: 4, brand: 'Tesla', model: 'Model 3', category: 'Electric', price: 60, image: '/images/cars/tesla-model3.jpg' },
  { id: 5, brand: 'Tesla', model: 'Model Y', category: 'Electric', price: 69, image: '/images/cars/tesla-modely.jpg' },
  { id: 6, brand: 'Ford', model: 'Mustang Mach-E', category: 'Electric', price: 69, image: '/images/cars/mustang-mache.jpg' },
  { id: 7, brand: 'Ford', model: 'F-150 Lightning', category: 'Electric', price: 130, image: '/images/cars/f150-lightning.jpg' },
  { id: 8, brand: 'Audi', model: 'R8', category: 'Luxury', price: 600, image: '/images/cars/R8-telluride.jpg' },
  { id: 9, brand: 'Rivian', model: 'R1S', category: 'Electric', price: 129, image: '/images/cars/rivian-r1s.jpg' },
];

const categories = ['All', 'Luxury', 'Electric', 'Practical'];

const locationHours = [
  { day: 'Monday', pickup: '8:30 AM - 4:00 PM', dropoff: '7:00 AM - 7:00 PM' },
  { day: 'Tuesday', pickup: '8:30 AM - 4:00 PM', dropoff: '7:00 AM - 7:00 PM' },
  { day: 'Wednesday', pickup: '8:30 AM - 4:00 PM', dropoff: '7:00 AM - 7:00 PM' },
  { day: 'Thursday', pickup: '8:30 AM - 4:00 PM', dropoff: '7:00 AM - 7:00 PM' },
  { day: 'Friday', pickup: '8:30 AM - 4:00 PM', dropoff: 'Available' },
  { day: 'Saturday', pickup: '8:30 AM - 4:00 PM', dropoff: 'Available' },
  { day: 'Sunday', pickup: '8:30 AM - 4:00 PM', dropoff: 'Available' },
];

const faqs = [
  {
    question: 'How do I book a vehicle?',
    answer: 'Select your desired vehicle from the fleet, choose your dates, and complete the booking through our secure checkout system.',
  },
  {
    question: 'What are the age requirements?',
    answer: 'Drivers must be at least 25 years old with a valid driver\'s license and clean driving record.',
  },
  {
    question: 'What is included in the rental?',
    answer: 'All rentals include insurance, roadside assistance, and 24/7 support. Additional options like delivery and extended hours are available.',
  },
  {
    question: 'Can I cancel or modify my reservation?',
    answer: 'Yes, you can modify or cancel your reservation up to 48 hours before your pickup time. See our terms for details.',
  },
];

export default function PhoenixBookingPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredVehicles = selectedCategory === 'All' 
    ? vehicles 
    : vehicles.filter(v => v.category === selectedCategory);

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Mini Hero */}
        <section className="py-12 bg-gradient-to-b from-deep-black to-midnight-blue">
          <div className="max-w-7xl mx-auto px-6">
            <nav className="text-body-sm text-metallic-silver mb-4">
              <Link href="/booking" className="hover:text-gulf-blue transition-colors">Booking</Link>
              <span className="mx-2">/</span>
              <span className="text-pure-white">Phoenix</span>
            </nav>
            <h1 className="text-h1 text-pure-white">PHOENIX FLEET</h1>
          </div>
        </section>

        {/* Vehicle Browser */}
        <section className="py-12 lg:py-16 bg-midnight-blue">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-h2 text-pure-white mb-8">TAKE YOUR PICK</h2>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 min-h-[44px] touch-manipulation ${
                    selectedCategory === category
                      ? 'bg-gulf-blue text-pure-white'
                      : 'bg-graphite text-metallic-silver hover:bg-graphite/80 hover:text-pure-white border border-metallic-silver/20 active:scale-95'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Vehicle Grid/Carousel */}
            <div className="overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide lg:overflow-visible">
              <div className="flex gap-6 min-w-max lg:grid lg:grid-cols-4 lg:min-w-0">
                {filteredVehicles.map((vehicle) => (
                  <Card key={vehicle.id} hover className="min-w-[280px] lg:min-w-0">
                    {/* Placeholder for vehicle image */}
                    <div className="aspect-video bg-gradient-to-br from-graphite to-jet-grey mb-4 rounded-lg flex items-center justify-center">
                      <span className="text-metallic-silver text-sm">{vehicle.brand} {vehicle.model}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                      <h3 className="text-h4 text-pure-white">{vehicle.brand} {vehicle.model}</h3>
                      <Badge variant="default">{vehicle.category}</Badge>
                    </div>
                    <p className="text-body-sm text-gulf-blue font-semibold">${vehicle.price}/day</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section with Iframe */}
        <section className="py-12 lg:py-16 bg-deep-black">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-h2 text-pure-white mb-8">BOOK YOUR EXPERIENCE</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8">
              {/* Wheelbase Iframe */}
              <div className="order-2 lg:order-1">
                <WheelbaseIframe />
              </div>

              {/* Location Hours Sidebar */}
              <div className="order-1 lg:order-2">
                <Card>
                  <h3 className="text-h3 text-pure-white mb-6">Location Hours</h3>
                  <div className="space-y-4">
                    {locationHours.map((schedule, index) => (
                      <div key={index} className="border-b border-metallic-silver/10 pb-4 last:border-0">
                        <div className="text-body-sm font-semibold text-pure-white mb-1">{schedule.day}</div>
                        <div className="text-body-sm text-metallic-silver">
                          <div>Pick up: {schedule.pickup}</div>
                          <div>Drop off: {schedule.dropoff}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 bg-midnight-blue">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-8">
              {/* Placeholder for Romli logo */}
              <div className="text-metallic-silver text-sm">Romli Logo</div>
              <div className="text-metallic-silver text-sm">Insurance Coverage</div>
              <div className="text-metallic-silver text-sm">24/7 Support</div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 lg:py-16 bg-deep-black">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-h2 text-pure-white mb-12 text-center">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="cursor-pointer" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-h4 text-pure-white pr-8">{faq.question}</h3>
                    <svg
                      className={`w-6 h-6 text-gulf-blue transition-transform duration-300 flex-shrink-0 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {openFaq === index && (
                    <p className="text-body-sm text-metallic-silver mt-4">{faq.answer}</p>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
