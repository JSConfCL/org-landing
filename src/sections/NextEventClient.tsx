'use client';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { CalendarDots, MapPin, ArrowRight } from '@phosphor-icons/react';
import { jersey10 } from '@/lib/fonts';
import { EASE, COLORS } from '@/lib/tokens';
import { AnimatedButton } from '@/components/AnimatedButton';
import type { CalEvent } from '@/types/events';

interface OtherEvent {
  uid: string;
  title: string;
  url: string;
  dateLabel: string;
  timeLabel: string;
}

interface Props {
  event: CalEvent;
  dateLabel: string;
  timeLabel: string;
  shortAddress: string | null;
  otherEvents: OtherEvent[];
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

export function NextEventClient({ event, dateLabel, timeLabel, shortAddress, otherEvents }: Props) {
  return (
    <Grid container spacing={6} alignItems='center'>
      {/* Left column */}
      <Grid size={{ xs: 12, md: 6 }}>
        <motion.div
          variants={stagger}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={slideLeft}>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: '0.78rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: COLORS.yellow,
                mb: 1.5,
              }}
            >
              Próximo evento
            </Typography>
          </motion.div>

          <motion.div variants={slideLeft}>
            <Typography
              id='next-event-heading'
              component='h2'
              sx={{
                fontFamily: jersey10.style.fontFamily,
                fontWeight: 400,
                fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4.375rem' },
                lineHeight: 0.85,
                color: '#fff',
                mb: 2,
              }}
            >
              {event.title}
            </Typography>
          </motion.div>

          <motion.div variants={slideLeft}>
            <Stack direction='row' alignItems='center' spacing={1} sx={{ mb: shortAddress ? 1 : 3 }}>
              <CalendarDots size={18} color={COLORS.yellow} weight='fill' aria-hidden='true' />
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontSize: '0.95rem',
                  color: 'rgba(255,255,255,0.8)',
                  textTransform: 'capitalize',
                }}
              >
                {dateLabel} · {timeLabel}
              </Typography>
            </Stack>
          </motion.div>

          {shortAddress && (
            <motion.div variants={slideLeft}>
              <Stack direction='row' alignItems='center' spacing={1} sx={{ mb: 3 }}>
                <MapPin size={18} color={COLORS.yellow} weight='fill' aria-hidden='true' />
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontSize: '0.95rem',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                >
                  {shortAddress}
                </Typography>
              </Stack>
            </motion.div>
          )}

          <motion.div variants={slideLeft}>
            <AnimatedButton
              variant='contained'
              href={event.url}
              target='_blank'
              rel='noopener noreferrer'
              hoverColor={COLORS.yellowHover}
              sx={{
                px: 4,
                py: 1.6,
                fontSize: '1rem',
                fontWeight: 700,
                bgcolor: COLORS.yellow,
                color: COLORS.black,
              }}
            >
              <Stack direction='row' alignItems='center' spacing={1}>
                <CalendarDots size={20} weight='fill' aria-hidden='true' />
                <span>Inscribirme GRATIS</span>
              </Stack>
            </AnimatedButton>
          </motion.div>

          {/* Upcoming events after the main one */}
          {otherEvents.length > 0 && (
            <motion.div variants={slideLeft}>
              <Box
                sx={{
                  mt: 4,
                  pt: 3,
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    fontSize: '0.72rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.4)',
                    mb: 2,
                  }}
                >
                  También próximamente
                </Typography>

                <Stack spacing={1.5}>
                  {otherEvents.map(e => (
                    <Box
                      key={e.uid}
                      component='a'
                      href={e.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 2,
                        textDecoration: 'none',
                        p: 1.5,
                        borderRadius: '10px',
                        border: '1px solid rgba(255,255,255,0.08)',
                        transition: 'border-color 0.2s, background 0.2s',
                        '&:hover': {
                          borderColor: 'rgba(255,255,255,0.2)',
                          bgcolor: 'rgba(255,255,255,0.04)',
                        },
                      }}
                    >
                      <Box sx={{ minWidth: 0 }}>
                        <Typography
                          sx={{
                            fontFamily: 'Inter',
                            fontWeight: 600,
                            fontSize: '0.88rem',
                            color: '#fff',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {e.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: 'Inter',
                            fontSize: '0.75rem',
                            color: 'rgba(255,255,255,0.4)',
                            textTransform: 'capitalize',
                            mt: 0.25,
                          }}
                        >
                          {e.dateLabel} · {e.timeLabel}
                        </Typography>
                      </Box>
                      <ArrowRight size={16} color='rgba(255,255,255,0.3)' style={{ flexShrink: 0 }} />
                    </Box>
                  ))}
                </Stack>
              </Box>
            </motion.div>
          )}
        </motion.div>
      </Grid>

      {/* Right column — cover image */}
      <Grid size={{ xs: 12, md: 6 }}>
        <motion.div
          initial={{ opacity: 0, x: 80, rotate: 3 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', damping: 16, stiffness: 90, delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Box
            role='img'
            aria-label={`Portada: ${event.title}`}
            sx={{
              width: { xs: '100%', md: '75%' },
              aspectRatio: '1/1',
              borderRadius: '24px',
              overflow: 'hidden',
              backgroundImage: event.cover_url
                ? `url(${event.cover_url})`
                : 'url(/assets/default.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </motion.div>
      </Grid>
    </Grid>
  );
}
