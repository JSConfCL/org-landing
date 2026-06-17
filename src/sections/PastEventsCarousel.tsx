import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Jersey_10 } from 'next/font/google';
import { PastEventsCarouselClient } from './PastEventsCarouselClient';
import { FadeUp } from '@/components/ScrollReveal';

const jersey10 = Jersey_10({ weight: '400', subsets: ['latin'], display: 'swap' });

interface LumaEvent {
  api_id: string;
  name: string;
  start_at: string;
  cover_url?: string;
  url: string;
}

async function fetchPastLumaEvents(): Promise<LumaEvent[]> {
  const apiKey = process.env.LUMA_API_KEY;
  const calendarId = process.env.LUMA_CALENDAR_ID;
  if (!apiKey || !calendarId) return [];
  try {
    const res = await fetch(
      `https://api.lu.ma/public/v1/calendar/get-items?calendar_api_id=${calendarId}&pagination_limit=20`,
      { headers: { 'x-luma-api-key': apiKey }, next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    const now = new Date();
    return (data.entries ?? [])
      .map((e: { event: LumaEvent }) => e.event)
      .filter((e: LumaEvent) => new Date(e.start_at) < now)
      .slice(0, 12);
  } catch {
    return [];
  }
}

export const PastEventsCarousel = async () => {
  const events = await fetchPastLumaEvents();

  return (
    <Box
      component='section'
      sx={{ bgcolor: '#111111', py: { xs: 8, md: 10 }, overflow: 'hidden' }}
    >
      <FadeUp>
        <Box sx={{ textAlign: 'center', mb: 6, px: 4 }}>
          <Typography
            component='h2'
            sx={{
              fontFamily: jersey10.style.fontFamily,
              fontWeight: 400,
              fontSize: { xs: '2rem', md: '3rem' },
              color: '#fff',
              mb: 2,
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
            Descubre lo que se viene y reserva tu lugar antes de que se llene.
          </Typography>
        </Box>
      </FadeUp>

      <PastEventsCarouselClient events={events} />
    </Box>
  );
};
