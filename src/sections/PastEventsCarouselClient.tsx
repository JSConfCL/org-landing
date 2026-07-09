'use client';
import { COLORS } from '@/lib/tokens';
import { useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { Images } from '@phosphor-icons/react';
import { AnimatedButton } from '@/components/AnimatedButton';
import { Stack } from '@mui/material';
import type { CalEvent } from '@/types/events';

const CARD_WIDTH = 320;
const IMAGE_SIZE = 116;
const GAP = 14;
const ITEM_WIDTH = CARD_WIDTH + GAP;

function EventCard({ event }: { event: CalEvent }) {
  const date = new Date(event.start).toLocaleDateString('es-CL', {
    timeZone: 'America/Santiago',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  const card = (
    <Box
      sx={{
        width: CARD_WIDTH,
        height: IMAGE_SIZE,
        borderRadius: '14px',
        overflow: 'hidden',
        bgcolor: COLORS.oliveDark,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'row',
        transition: 'transform 0.2s',
        '&:hover': { transform: 'scale(1.02)' },
      }}
    >
      <Box
        role='img'
        aria-label={`Portada de ${event.title}`}
        sx={{
          width: IMAGE_SIZE,
          height: IMAGE_SIZE,
          flexShrink: 0,
          backgroundImage: event.cover_url
            ? `url(${event.cover_url})`
            : 'url(/assets/default.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Box
        sx={{
          px: 2,
          py: 1.5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
          minWidth: 0,
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '0.88rem',
            color: '#fff',
            lineHeight: 1.35,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {event.title}
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: '0.75rem',
            color: '#fff',
            textTransform: 'capitalize',
            mt: 0.5,
          }}
        >
          {date}
        </Typography>

        {event.location && (
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.75)',
              mt: 0.5,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {event.location.split(',')[0]}
          </Typography>
        )}
      </Box>
    </Box>
  );

  return (
    <a
      href={event.url}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={`Ver evento: ${event.title}, ${date}`}
      style={{ display: 'contents', textDecoration: 'none' }}
    >
      {card}
    </a>
  );
}

function InfiniteRow({ events, reversed }: { events: CalEvent[]; reversed: boolean }) {
  const totalWidth = ITEM_WIDTH * events.length;
  // reversed row moves right (x: -totalWidth → 0), normal moves left (x: 0 → -totalWidth)
  const x = useMotionValue(reversed ? -totalWidth : 0);
  const paused = useRef(false);
  // px per ms to complete one full loop in `events.length * 14` seconds
  const speed = totalWidth / (events.length * 14 * 1000);

  useAnimationFrame((_, delta) => {
    if (paused.current) return;
    let current = x.get();
    if (reversed) {
      current += speed * delta;
      if (current >= 0) current -= totalWidth;
    } else {
      current -= speed * delta;
      if (current <= -totalWidth) current += totalWidth;
    }
    x.set(current);
  });

  const tripled = [...events, ...events, ...events];

  return (
    <Box sx={{ overflow: 'hidden', width: '100%', py: 0.75 }}>
      <motion.div
        style={{ display: 'flex', gap: GAP, width: 'fit-content', x }}
        onMouseEnter={() => { paused.current = true; }}
        onMouseLeave={() => { paused.current = false; }}
      >
        {tripled.map((event, i) => (
          <EventCard key={`${event.uid}-${i}`} event={event} />
        ))}
      </motion.div>
    </Box>
  );
}

export function PastEventsCarouselClient({ events }: { events: CalEvent[] }) {
  const half = Math.ceil(events.length / 2);
  const row1 = events.slice(0, half);
  const row2 = events.slice(half);

  return (
    <>
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <InfiniteRow events={row1.length >= 3 ? row1 : events} reversed={false} />
        <InfiniteRow events={row2.length >= 3 ? row2 : events} reversed={true} />

        <Box
          aria-hidden='true'
          sx={{
            position: 'absolute', top: 0, left: 0, width: 140, height: '100%',
            background: `linear-gradient(to right, ${COLORS.black}, transparent)`,
            pointerEvents: 'none', zIndex: 2,
          }}
        />
        <Box
          aria-hidden='true'
          sx={{
            position: 'absolute', top: 0, right: 0, width: 140, height: '100%',
            background: `linear-gradient(to left, ${COLORS.black}, transparent)`,
            pointerEvents: 'none', zIndex: 2,
          }}
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <AnimatedButton
          variant='contained'
          href='https://gallery.jsconf.cl/'
          target='_blank'
          rel='noopener noreferrer'
          hoverColor={COLORS.yellowHover}
          sx={{ bgcolor: COLORS.yellow, color: COLORS.textPrimary, px: 4, py: 1.75, fontSize: '1rem' }}
        >
          <Stack direction='row' alignItems='center' spacing={1.5}>
            <Images size={20} weight='fill' />
            <span>Revive los momentos</span>
          </Stack>
        </AnimatedButton>
      </Box>
    </>
  );
}
