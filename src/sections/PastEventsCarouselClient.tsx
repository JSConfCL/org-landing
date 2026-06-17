'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

interface LumaEvent {
  api_id: string;
  name: string;
  start_at: string;
  cover_url?: string;
  url: string;
}

const PLACEHOLDER_COUNT = 5;

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

function EventCard({ event, index }: { event?: LumaEvent; index: number }) {
  const formattedDate = event
    ? new Date(event.start_at).toLocaleDateString('es-CL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null;

  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: EASE }}
      whileHover={event ? { y: -8, transition: { duration: 0.25 } } : {}}
      style={{
        flexShrink: 0,
        width: 'clamp(240px, 30vw, 320px)',
        borderRadius: '20px',
        overflow: 'hidden',
        scrollSnapAlign: 'start',
        backgroundColor: '#000',
        textDecoration: 'none',
        cursor: event ? 'pointer' : 'default',
      }}
    >
      {/* Imagen */}
      <Box
        sx={{
          width: '100%',
          aspectRatio: '4/3',
          ...(event?.cover_url
            ? {
                backgroundImage: `url(${event.cover_url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : {
                backgroundImage: `
                  linear-gradient(45deg,#d0d0d0 25%,transparent 25%),
                  linear-gradient(-45deg,#d0d0d0 25%,transparent 25%),
                  linear-gradient(45deg,transparent 75%,#d0d0d0 75%),
                  linear-gradient(-45deg,transparent 75%,#d0d0d0 75%)
                `,
                backgroundSize: '24px 24px',
                backgroundPosition: '0 0,0 12px,12px -12px,-12px 0px',
                backgroundColor: '#e8e8e8',
              }),
        }}
      />

      {/* Info */}
      <Box sx={{ px: 2.5, py: 2, bgcolor: '#000' }}>
        {event ? (
          <>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '0.95rem',
                color: '#fff',
                mb: 0.5,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {event.name}
            </Typography>
            <Typography sx={{ fontFamily: 'Inter', fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)' }}>
              {formattedDate}
            </Typography>
          </>
        ) : (
          <Box sx={{ height: '52px' }} />
        )}
      </Box>
    </motion.div>
  );

  if (!event) return inner;
  return (
    <a href={event.url} target='_blank' rel='noopener noreferrer' style={{ display: 'contents', textDecoration: 'none' }}>
      {inner}
    </a>
  );
}

export function PastEventsCarouselClient({ events }: { events: LumaEvent[] }) {
  const isEmpty = events.length === 0;

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '16px',
        overflowX: 'auto',
        px: { xs: '24px', md: '64px' },
        pb: 2,
        scrollSnapType: 'x mandatory',
        '&::-webkit-scrollbar': { display: 'none' },
        scrollbarWidth: 'none',
      }}
    >
      {isEmpty
        ? Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <EventCard key={i} index={i} />
          ))
        : events.map((event, i) => (
            <EventCard key={event.api_id} event={event} index={i} />
          ))}
    </Box>
  );
}
