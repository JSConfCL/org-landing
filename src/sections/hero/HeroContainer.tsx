import Box from '@mui/material/Box';
import { HeroInfo } from './HeroInfo';

export const HeroContainer = () => {
  return (
    <Box
      component='section'
      aria-label='Comunidad JSChile'
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 3, md: 8 },
          py: { xs: 8, md: 10 },
        }}
      >
        <HeroInfo />
      </Box>
    </Box>
  );
};
