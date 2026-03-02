import Box from '@mui/material/Box';
import HomeHallOfFame from '@/sections/HomeHallOfFame';
import Staff from '@/sections/staff/Staff';
import { HeroContainer } from '@/sections/hero/HeroContainer';
import { CardsContainer } from '@/sections/cards/CardsContainer';

export default function Home() {
  return (
    <Box component='main'>
      <Box id='hero'>
        <HeroContainer />
      </Box>
      <Box id='info'>
        <CardsContainer />
      </Box>
      {/* ocultar temporalmente hasta que se actualice el contenido 
      <Box id='hall-of-fame'>
        <HomeHallOfFame />
      </Box>
      */}
      <Box id='staff'>
        <Staff />
      </Box>
    </Box>
  );
}
