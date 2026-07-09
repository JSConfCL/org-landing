'use client';
import { EASE, COLORS } from '@/lib/tokens';
import { jersey10 } from '@/lib/fonts';

import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion, useInView } from 'framer-motion';


const BORDER_SUBTLE = '8px solid rgba(220, 215, 200, 0.85)';
const BORDER_WHITE  = '8px solid rgba(255, 255, 255, 1)';

/* ── Count-up animado ── */
function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 60;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / total;
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (frame >= total) clearInterval(timer);
    }, 20);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString('es-CL')}{suffix}</span>;
}

const STATS = [
  { prefix: '+', target: 120, label: 'Eventos', sub: 'desde 2013' },
  { prefix: '+', target: 4800, label: 'Asistentes', sub: 'desde 2013' },
  { prefix: '+', target: 200, label: 'Speakers', sub: 'desde 2013' },
  { prefix: '+', target: 1500, suffix: ' en', label: 'WhatsApp', sub: 'desde 2013' },
];

const PHOTOS = [
  {
    src: '/assets/events/group-crowd.webp',
    alt: 'Asistentes en evento JSChile',
    border: BORDER_SUBTLE,
    containerSx: {
      transform: 'rotate(-7.27deg)',
      zIndex: 1,
      width: { xs: 180, sm: 280, md: 370 },
      marginRight: { xs: '-50px', md: '-100px' },
    },
    fromRotate: -20,
    delay: 0.1,
  },
  {
    src: '/assets/events/group-selfie.webp',
    alt: 'JSConf Chile — foto grupal',
    border: BORDER_WHITE,
    containerSx: {
      transform: { xs: 'rotate(-0.42deg) translateY(-30px)', md: 'rotate(-0.42deg) translateY(-70px)' },
      zIndex: 3,
      width: { xs: 220, sm: 340, md: 480 },
    },
    fromRotate: 8,
    delay: 0.5,
  },
  {
    src: '/assets/events/group-stage.webp',
    alt: 'Escenario JSConf Chile',
    border: BORDER_SUBTLE,
    containerSx: {
      transform: 'rotate(7.2deg)',
      zIndex: 1,
      width: { xs: 180, sm: 280, md: 370 },
      marginLeft: { xs: '-50px', md: '-100px' },
    },
    fromRotate: 20,
    delay: 0.3,
  },
];

export const StatsSection = () => {
  return (
    <Box id='comunidad' component='section' aria-label='Datos de la comunidad' sx={{ pb: { xs: 8, md: 14 } }}>

      {/* ── Fotos rotadas ── */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pl: '48px',
          pr: '48px',
          pb: '20px',
          mb: '0px',
          pt: '200px',
          minHeight: '460px',
        }}
      >
        {PHOTOS.map((photo) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, y: -160, rotate: photo.fromRotate }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', damping: 13, stiffness: 85, delay: photo.delay }}
            style={{ display: 'flex', position: 'relative', zIndex: photo.containerSx.zIndex as number }}
          >
            <Box
              sx={{
                ...photo.containerSx,
                flexShrink: 0,
                aspectRatio: '4/3',
                borderRadius: '25px',
                overflow: 'hidden',
                border: photo.border,
                boxShadow: '4px 10px 36px rgba(0,0,0,0.65)',
              }}
            >
              <Box
                component='img'
                src={photo.src}
                alt={photo.alt}
                sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </Box>
          </motion.div>
        ))}
      </Box>

      {/* ── Stats con count-up ── */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          px: { xs: 6, md: 12, lg: 16 },
        }}
      >
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
          >
            <Box
              sx={{
                px: { xs: 2, md: 4 },
                py: { xs: 3, md: 2 },
                borderLeft: i === 0
                  ? 'none'
                  : { xs: i % 2 === 0 ? 'none' : '1px solid rgba(255,255,255,0.2)', md: '1px solid rgba(255,255,255,0.2)' },
                borderTop: i < 2
                  ? 'none'
                  : { xs: '1px solid rgba(255,255,255,0.2)', md: 'none' },
              }}
            >
              <Typography
                sx={{
                  fontFamily: jersey10.style.fontFamily,
                  fontSize: { xs: '1.6rem', md: '2.2rem', lg: '2.8rem' },
                  color: COLORS.yellow,
                  lineHeight: 1.05,
                }}
              >
                {stat.prefix}
                <CountUp target={stat.target} suffix={stat.suffix} />
              </Typography>
              <Typography
                sx={{
                  fontFamily: jersey10.style.fontFamily,
                  fontSize: { xs: '1.5rem', md: '2rem', lg: '2.5rem' },
                  color: COLORS.yellow,
                  lineHeight: 1.15,
                  mb: 0.5,
                }}
              >
                {stat.label}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.85rem', md: '1rem' }, color: 'rgba(255,255,255,0.55)' }}>
                {stat.sub}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};
