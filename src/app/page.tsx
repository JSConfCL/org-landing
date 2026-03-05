import StaffContainer from '@/sections/staff/StaffContainer';
import { HeroContainer } from '@/sections/hero/HeroContainer';
import { CardsContainer } from '@/sections/cards/CardsContainer';

export default function Home() {
  return (
    <main>
      <HeroContainer />
      <CardsContainer />
      <StaffContainer />
    </main>
  );
}
