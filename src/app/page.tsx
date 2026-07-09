import { COLORS } from '@/lib/tokens';
import StaffContainer from '@/sections/staff/StaffContainer';
import { JoinCTA } from '@/sections/JoinCTA';
import { HeroContainer } from '@/sections/hero/HeroContainer';
import { StatsSection } from '@/sections/StatsSection';
import { WhatsAppCTA } from '@/sections/WhatsAppCTA';
import { NextEvent } from '@/sections/NextEvent';
import { PastEventsCarousel } from '@/sections/PastEventsCarousel';
import { HistoriaTimeline } from '@/sections/HistoriaTimeline';
import { NuestrosValores } from '@/sections/NuestrosValores';
import { BrandBanner } from '@/sections/BrandBanner';
import { SpeakersSectionWrapper } from '@/sections/SpeakersSectionWrapper';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <main id='main-content'>
      <Box
        sx={{
          backgroundImage: {
            xs: `linear-gradient(to bottom, transparent 45%, ${COLORS.black} 65%), url(/assets/hero-bg.webp)`,
            md: `linear-gradient(to bottom, transparent 75%, ${COLORS.black} 75%), url(/assets/hero-bg.webp)`,
          },
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <HeroContainer />
        <StatsSection />
      </Box>
      <WhatsAppCTA />
      <div id='eventos'>
        <NextEvent />
        <PastEventsCarousel />
      </div>
      <HistoriaTimeline />
      <NuestrosValores />
      <BrandBanner />
      {/* Sections below scroll over the sticky BrandBanner */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <SpeakersSectionWrapper />
        <div style={{ backgroundColor: COLORS.darkOlive }}>
          <StaffContainer />
        </div>
        <JoinCTA />
      </div>
    </main>
  );
}
