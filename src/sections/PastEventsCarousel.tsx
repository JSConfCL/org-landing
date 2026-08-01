import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { jersey10 } from '@/lib/fonts';
import { COLORS } from '@/lib/tokens';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PastEventsCarouselClient } from './PastEventsCarouselClient';
import { FadeUp } from '@/components/ScrollReveal';
import type { CalEvent, EventsJson } from '@/types/events';

async function loadPastEvents(): Promise<CalEvent[]> {
  try {
    const raw = await readFile(join(process.cwd(), 'public', 'events.json'), 'utf-8');
    const data: EventsJson = JSON.parse(raw);
    return data.past;
  } catch {
    return [];
  }
}

export const PastEventsCarousel = async () => {
  const events = await loadPastEvents();

  return (
    <Box
      component='section'
      aria-labelledby='past-events-heading'
      sx={{ bgcolor: COLORS.darkBg, py: { xs: 8, md: 10 }, overflow: 'hidden' }}
    >
      <FadeUp>
        <Box sx={{ textAlign: 'center', mb: 6, px: 4 }}>
          <Typography
            id='past-events-heading'
            component='h2'
            sx={{
              fontFamily: jersey10.style.fontFamily,
              fontWeight: 400,
              fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4.375rem' },
              lineHeight: 1,
              color: '#fff',
              mb: 0.5,
            }}
          >
            Lo que nos perdimos juntos
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            {events.length} eventos desde que empezamos
          </Typography>
        </Box>
      </FadeUp>

      <PastEventsCarouselClient events={events} />
    </Box>
  );
};
