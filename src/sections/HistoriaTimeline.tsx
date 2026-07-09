'use client';
import { jersey10 } from '@/lib/fonts';
import { EASE, COLORS } from '@/lib/tokens';

import { useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Star, RocketLaunch } from '@phosphor-icons/react';


const MILESTONES = [
  {
    year: '2013',
    title: 'El Inicio',
    description:
      'Nace la comunidad de JSChile como un pequeño grupo de entusiastas buscando compartir conocimientos y experiencias con esta tecnología web emergente.',
    isLast: false,
    // Scroll threshold at which this node activates (0 → 1)
    t: 0,
  },
  {
    year: '2016',
    title: 'Los Primeros Meetups',
    description:
      'Se realizan los primeros meetups regulares en Santiago, conectando a la comunidad developer con charlas técnicas de alto nivel y networking.',
    isLast: false,
    t: 0.2,
  },
  {
    year: '2018',
    title: 'La Expansión',
    description:
      'Speakers internacionales se suman a los eventos y la comunidad crece exponencialmente, llegando a cientos de asistentes por encuentro.',
    isLast: false,
    t: 0.38,
  },
  {
    year: '2023',
    title: 'La Consolidación',
    description:
      'JSChile se consolida como la comunidad tech más activa del país, con eventos de clase mundial y miles de miembros activos.',
    isLast: false,
    t: 0.58,
  },
  {
    year: '2026',
    title: 'El Presente',
    description:
      'Seguimos creciendo, aprendiendo y conectando a la comunidad developer de Chile. El mejor capítulo aún está por escribirse.',
    isLast: true,
    t: 0.76,
  },
];

const NODE_SIZE = 32;
const NODE_HALF = NODE_SIZE / 2;

function ChileMap() {
  return (
    <Box
      component='img'
      src='/assets/js-chile-mapa.svg'
      alt='Mapa de Chile'
      sx={{ width: 'auto', height: '100%', maxHeight: 1200, objectFit: 'contain', opacity: 0.9 }}
    />
  );
}

function MilestoneItem({
  milestone,
  scrollProgress,
}: {
  milestone: (typeof MILESTONES)[0];
  scrollProgress: MotionValue<number>;
}) {
  const { t } = milestone;
  const appear = [Math.max(0, t - 0.08), Math.min(1, t + 0.07)];

  const nodeScale = useTransform(scrollProgress, [Math.max(0, t - 0.07), t], [0.55, 1]);
  const nodeBg   = useTransform(scrollProgress, (v) => v >= t ? COLORS.yellow : 'rgba(240,219,79,0.15)');
  const iconColor = useTransform(scrollProgress, (v) => v >= t ? COLORS.textPrimary : COLORS.yellow);

  const contentOpacity = useTransform(scrollProgress, appear, [0.25, 1]);
  const contentX       = useTransform(scrollProgress, appear, [20, 0]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
      {/* Node (layered on top of the continuous line) */}
      <Box sx={{ flexShrink: 0, width: NODE_SIZE, display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div style={{ scale: nodeScale }}>
          <motion.div
            style={{
              width: NODE_SIZE,
              height: NODE_SIZE,
              borderRadius: '50%',
              backgroundColor: nodeBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <motion.div style={{ color: iconColor, display: 'flex' }}>
              {milestone.isLast ? (
                <RocketLaunch size={18} weight='fill' />
              ) : (
                <Star size={18} weight='fill' />
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </Box>

      {/* Content */}
      <motion.div style={{ opacity: contentOpacity, x: contentX, flex: 1 }}>
        <Typography
          sx={{
            fontFamily: jersey10.style.fontFamily,
            fontWeight: 400,
            fontSize: { xs: '1.6rem', md: '2.8rem' },
            color: COLORS.yellow,
            lineHeight: 1,
            mb: 0.5,
          }}
        >
          {milestone.year}
        </Typography>
        <Typography sx={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '0.95rem', color: '#fff', mb: 0.75 }}>
          {milestone.title}
        </Typography>
        <Typography sx={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, maxWidth: 500 }}>
          {milestone.description}
        </Typography>
      </motion.div>
    </Box>
  );
}

export const HistoriaTimeline = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.3', 'end 0.4'],
  });

  // Map scroll progress to the portion of line covered (0 → last milestone threshold)
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Box
      id='historia'
      component='section'
      ref={sectionRef}
      sx={{
        backgroundImage: 'url(/assets/bg-line-time.webp)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        py: { xs: 8, md: 12 },
        overflow: 'hidden',
      }}
    >
      <Container maxWidth='lg'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
            <Typography
              component='h2'
              sx={{
                fontFamily: jersey10.style.fontFamily,
                fontWeight: 400,
                fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4.375rem' },
                lineHeight: 1,
                color: COLORS.yellow,
                mb: 2,
              }}
            >
              Pero... ¿cómo empezó todo?
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: { xs: '1rem', md: '1.05rem' },
                color: 'rgba(255,255,255,0.75)',
                maxWidth: 500,
                mx: 'auto',
                lineHeight: 1.65,
              }}
            >
              Conoce cómo evolucionó la comunidad JSChile{' '}
              <Box component='strong' sx={{ color: '#fff', fontWeight: 700 }}>
                más activa de Chile a través de los años
              </Box>
            </Typography>
          </Box>
        </motion.div>

        {/* Map + Timeline */}
        <Box sx={{ maxWidth: 860, mx: 'auto' }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems='stretch'>
          {/* Chile map */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: EASE }}
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: 16, width: '100%', height: '100%' }}
            >
              <ChileMap />
            </motion.div>
          </Grid>

          {/* Timeline */}
          <Grid size={{ xs: 12, md: 7 }} sx={{ display: 'flex' }}>
            <Box sx={{ position: 'relative', height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              {/* ── Track (always visible, fades to transparent at bottom) ── */}
              <Box
                sx={{
                  position: 'absolute',
                  left: NODE_HALF - 1,
                  top: NODE_HALF,
                  bottom: NODE_HALF,
                  width: 2,
                  background: 'linear-gradient(to bottom, rgba(240,219,79,0.4) 0%, rgba(240,219,79,0.04) 100%)',
                  zIndex: 0,
                }}
              />

              {/* ── Animated yellow fill ── */}
              <motion.div
                style={{
                  position: 'absolute',
                  left: NODE_HALF - 1,
                  top: NODE_HALF,
                  width: 2,
                  height: `calc(100% - ${NODE_SIZE}px)`,
                  backgroundColor: COLORS.yellow,
                  scaleY: lineScaleY,
                  transformOrigin: 'top',
                  zIndex: 0,
                }}
              />

              {/* ── Milestones ── */}
              {MILESTONES.map((milestone) => (
                <MilestoneItem
                  key={milestone.year}
                  milestone={milestone}
                  scrollProgress={scrollYProgress}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
        </Box>
      </Container>
    </Box>
  );
};
