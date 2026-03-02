import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { HeroInfo } from './HeroInfo';
import { HeroNextEvent } from './HeroNextEvent';

export const HeroContainer = () => {
  return (
    <Container maxWidth='xl' sx={{ px: { xs: 4, md: 8, lg: 12 }, mb: 4 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, lg: 8 }} sx={{ minHeight: '500px' }}>
          <HeroInfo />
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <HeroNextEvent />
        </Grid>
      </Grid>
    </Container>
  );
};
