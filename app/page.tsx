import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import HowItWorks from '@/components/sections/HowItWorks';
import AppPreview from '@/components/sections/AppPreview';
import Events from '@/components/sections/Events';
import Cities from '@/components/sections/Cities';
// import InstagramFeed from '@/components/sections/InstagramFeed'; // Commented out - Instagram CORS issues, saved for future implementation
import SocialCTA from '@/components/sections/SocialCTA';
import InvestorTeaser from '@/components/sections/InvestorTeaser';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <AppPreview />
        <Events />
        <Cities />
        <SocialCTA />
        <InvestorTeaser />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
