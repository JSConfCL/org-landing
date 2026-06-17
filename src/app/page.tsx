import StaffContainer from '@/sections/staff/StaffContainer';
import { HeroContainer } from '@/sections/hero/HeroContainer';
import { CardsContainer } from '@/sections/cards/CardsContainer';
import { StatsSection } from '@/sections/StatsSection';
import { WhatsAppCTA } from '@/sections/WhatsAppCTA';
import { NextEvent } from '@/sections/NextEvent';
import { PastEventsCarousel } from '@/sections/PastEventsCarousel';
import { HistoriaTimeline } from '@/sections/HistoriaTimeline';

export default function Home() {
  return (
    <main>
      <div
        style={{
          backgroundImage: "linear-gradient(to bottom, transparent 75%, #000000 75%), url(/assets/hero-bg.png)",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <HeroContainer />
        <StatsSection />
      </div>
      <WhatsAppCTA />
      <NextEvent />
      <PastEventsCarousel />
      <HistoriaTimeline />
      <CardsContainer />
      <StaffContainer />
    </main>
  );
}
