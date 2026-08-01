import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { COLORS } from '@/lib/tokens';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import type { CalEvent, EventsJson } from '@/types/events';
import { NextEventClient } from './NextEventClient';

async function loadUpcomingEvents(): Promise<CalEvent[]> {
  try {
    const raw = await readFile(join(process.cwd(), 'public', 'events.json'), 'utf-8');
    const data: EventsJson = JSON.parse(raw);
    return data.upcoming; // already sorted ascending by start date
  } catch {
    return [];
  }
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('es-CL', {
    timeZone: 'America/Santiago',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString('es-CL', {
    timeZone: 'America/Santiago',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export const NextEvent = async () => {
  const events = await loadUpcomingEvents();
  if (events.length === 0) return null;

  const [first, ...rest] = events;

  const dateLabel    = formatDate(first.start);
  const timeLabel    = `${formatTime(first.start)} hrs`;
  const shortAddress = first.location ? first.location.split(',')[0] : null;

  const otherEvents = rest.map(e => ({
    uid:       e.uid,
    title:     e.title,
    url:       e.url,
    dateLabel: formatDate(e.start),
    timeLabel: `${formatTime(e.start)} hrs`,
  }));

  return (
    <Box
      component='section'
      aria-labelledby='next-event-heading'
      sx={{ bgcolor: COLORS.darkBg, py: { xs: 8, md: 12 } }}
    >
      <Container maxWidth='xl' sx={{ px: { xs: 4, md: 8, lg: 12 } }}>
        <NextEventClient
          event={first}
          dateLabel={dateLabel}
          timeLabel={timeLabel}
          shortAddress={shortAddress}
          otherEvents={otherEvents}
        />
      </Container>
    </Box>
  );
};
