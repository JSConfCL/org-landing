'use client';

import { useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Jersey_10 } from 'next/font/google';
import { motion, useInView } from 'framer-motion';
import StarRateIcon from '@mui/icons-material/StarRate';
import ExploreIcon from '@mui/icons-material/Explore';

const jersey10 = Jersey_10({ weight: '400', subsets: ['latin'], display: 'swap' });
const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const MILESTONES = [
  {
    year: '2013',
    title: 'El Inicio',
    description:
      'Nace la comunidad de JavaScript Chile como un pequeño grupo de entusiastas buscando compartir conocimientos y experiencias con esta tecnología web emergente.',
    isLast: false,
  },
  {
    year: '2016',
    title: 'Los Primeros Meetups',
    description:
      'Se realizan los primeros meetups regulares en Santiago, conectando a la comunidad developer con charlas técnicas de alto nivel y networking.',
    isLast: false,
  },
  {
    year: '2018',
    title: 'La Expansión',
    description:
      'Speakers internacionales se suman a los eventos y la comunidad crece exponencialmente, llegando a cientos de asistentes por encuentro.',
    isLast: false,
  },
  {
    year: '2023',
    title: 'La Consolidación',
    description:
      'JavaScript Chile se consolida como la comunidad tech más activa del país, con eventos de clase mundial y miles de miembros activos.',
    isLast: false,
  },
  {
    year: '2026',
    title: 'El Presente',
    description:
      'Seguimos creciendo, aprendiendo y conectando a la comunidad developer de Chile. El mejor capítulo aún está por escribirse.',
    isLast: true,
  },
];

function ChileMap() {
  return (
    <Box
      component='svg'
      viewBox='0 0 128 528'
      xmlns='http://www.w3.org/2000/svg'
      sx={{ width: '100%', maxWidth: { xs: 100, md: 140 }, height: 'auto', opacity: 0.85 }}
      shapeRendering='crispEdges'
    >
      <g fill='#F0DB4F'>
        {/* Far north — Arica */}
        <rect x='64' y='0'   width='24' height='8' />
        <rect x='60' y='8'   width='32' height='8' />
        {/* Tarapacá / Antofagasta */}
        <rect x='56' y='16'  width='40' height='8' />
        <rect x='56' y='24'  width='40' height='8' />
        <rect x='52' y='32'  width='44' height='8' />
        <rect x='52' y='40'  width='44' height='8' />
        {/* Atacama */}
        <rect x='48' y='48'  width='48' height='8' />
        <rect x='48' y='56'  width='48' height='8' />
        <rect x='48' y='64'  width='48' height='8' />
        {/* Coquimbo */}
        <rect x='44' y='72'  width='52' height='8' />
        <rect x='44' y='80'  width='52' height='8' />
        <rect x='44' y='88'  width='52' height='8' />
        {/* Valparaíso / RM — widest */}
        <rect x='36' y='96'  width='60' height='8' />
        <rect x='36' y='104' width='60' height='8' />
        <rect x='36' y='112' width='60' height='8' />
        <rect x='40' y='120' width='56' height='8' />
        {/* O'Higgins / Maule */}
        <rect x='44' y='128' width='52' height='8' />
        <rect x='44' y='136' width='52' height='8' />
        <rect x='44' y='144' width='48' height='8' />
        {/* Bio-Bío */}
        <rect x='40' y='152' width='48' height='8' />
        <rect x='40' y='160' width='48' height='8' />
        <rect x='40' y='168' width='48' height='8' />
        {/* Araucanía */}
        <rect x='36' y='176' width='48' height='8' />
        <rect x='36' y='184' width='44' height='8' />
        <rect x='36' y='192' width='44' height='8' />
        {/* Los Ríos / Los Lagos */}
        <rect x='28' y='200' width='44' height='8' />
        <rect x='24' y='208' width='44' height='8' />
        <rect x='20' y='216' width='40' height='8' />
        <rect x='16' y='224' width='40' height='8' />
        {/* Aysén */}
        <rect x='12' y='232' width='36' height='8' />
        <rect x='8'  y='240' width='36' height='8' />
        <rect x='8'  y='248' width='32' height='8' />
        <rect x='4'  y='256' width='36' height='8' />
        {/* Magallanes — widens out */}
        <rect x='4'  y='264' width='44' height='8' />
        <rect x='4'  y='272' width='48' height='8' />
        <rect x='4'  y='280' width='52' height='8' />
        <rect x='8'  y='288' width='48' height='8' />
        <rect x='12' y='296' width='40' height='8' />
        <rect x='16' y='304' width='32' height='8' />
        {/* Scattered southern islands */}
        <rect x='4'  y='320' width='24' height='8' />
        <rect x='16' y='336' width='16' height='8' />
        <rect x='24' y='352' width='12' height='8' />
      </g>
    </Box>
  );
}

function MilestoneItem({
  milestone,
  index,
}: {
  milestone: (typeof MILESTONES)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <Box ref={ref} sx={{ display: 'flex', alignItems: 'flex-start', gap: { xs: 2, md: 3 } }}>
      {/* Spine */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flexShrink: 0,
          width: 32,
        }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ type: 'spring', stiffness: 240, damping: 20, delay: index * 0.05 }}
        >
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              bgcolor: '#F0DB4F',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {milestone.isLast ? (
              <ExploreIcon sx={{ fontSize: 18, color: '#1A1A1A' }} />
            ) : (
              <StarRateIcon sx={{ fontSize: 18, color: '#1A1A1A' }} />
            )}
          </Box>
        </motion.div>

        {!milestone.isLast && (
          <motion.div
            initial={{ scaleY: 0, originY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.05 + 0.25, ease: EASE }}
            style={{ width: 2, flexGrow: 1, backgroundColor: 'rgba(240,219,79,0.3)', minHeight: 72, marginTop: 6, transformOrigin: 'top' }}
          />
        )}
      </Box>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, delay: index * 0.07 + 0.1, ease: EASE }}
        style={{ flex: 1, paddingBottom: milestone.isLast ? 0 : 40 }}
      >
        <Typography
          sx={{
            fontFamily: jersey10.style.fontFamily,
            fontWeight: 400,
            fontSize: { xs: '2.2rem', md: '2.8rem' },
            color: '#F0DB4F',
            lineHeight: 1,
            mb: 0.5,
          }}
        >
          {milestone.year}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '0.95rem',
            color: '#fff',
            mb: 0.75,
          }}
        >
          {milestone.title}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '0.9rem',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.65,
            maxWidth: 420,
          }}
        >
          {milestone.description}
        </Typography>
      </motion.div>
    </Box>
  );
}

export const HistoriaTimeline = () => {
  return (
    <Box
      id='historia'
      component='section'
      sx={{
        background:
          'radial-gradient(ellipse 60% 50% at 20% 75%, rgba(130, 100, 0, 0.3) 0%, transparent 70%), #0D0D0D',
        py: { xs: 8, md: 12 },
        overflow: 'hidden',
      }}
    >
      <Container maxWidth='xl' sx={{ px: { xs: 4, md: 8, lg: 12 } }}>
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
                fontSize: { xs: '2.2rem', md: '3.5rem' },
                color: '#F0DB4F',
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
              Conoce cómo evolucionó la comunidad de JavaScript{' '}
              <Box component='strong' sx={{ color: '#fff', fontWeight: 700 }}>
                más activa de Chile a través de los años
              </Box>
            </Typography>
          </Box>
        </motion.div>

        {/* Map + Timeline */}
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems='flex-start'>
          {/* Chile map */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: EASE }}
              style={{ display: 'flex', justifyContent: 'center', paddingTop: 16 }}
            >
              <ChileMap />
            </motion.div>
          </Grid>

          {/* Timeline */}
          <Grid size={{ xs: 12, md: 8 }}>
            {MILESTONES.map((milestone, i) => (
              <MilestoneItem key={milestone.year} milestone={milestone} index={i} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
