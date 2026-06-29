import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TourFeature from '@/components/sections/TourFeature';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TourFeature />
      </main>
      <Footer />
    </>
  );
}
