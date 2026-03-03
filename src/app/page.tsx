import Staff from '@/sections/staff/Staff';
import { HeroContainer } from '@/sections/hero/HeroContainer';
import { CardsContainer } from '@/sections/cards/CardsContainer';

export default function Home() {
  return (
    <main>
      <HeroContainer />
      <CardsContainer />
      <Staff />
    </main>
  );
}
