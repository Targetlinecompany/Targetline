import '@/lib/env';

import Customer from '@/components/home/customers/Customer';
import Exhibition from '@/components/home/exhibition/Exhibition';
import Footer from '@/components/home/footer/Footer';
import HeroSection from '@/components/home/hero-section/HeroSection';
import Services from '@/components/home/services/Services';
import TeamMember from '@/components/home/team-member/TeamMember';

export default function HomePage() {
  return (
    <main className='min-h-screen bg-[#010101]'>
      <HeroSection />
      <Exhibition />
      <Customer />
      <Services />
      <TeamMember />
      <Footer />
    </main>
  );
}
