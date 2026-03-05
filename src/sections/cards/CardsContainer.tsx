'use client';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { CodeOfConduct } from './code-of-conduct/CodeOfConduct';
import { CallForSpeaker } from './call-for-speaker/CallForSpeaker';
import { OurStory } from './our-story/OurStory';
import { Gallery } from './gallery/Gallery';

export const CardsContainer = () => {
  return (
    <Container maxWidth='xl' sx={{ px: { xs: 4, md: 8, lg: 12 }, mb: 4 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <OurStory />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <CallForSpeaker />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <CodeOfConduct />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Gallery />
        </Grid>
      </Grid>
    </Container>
  );
};
