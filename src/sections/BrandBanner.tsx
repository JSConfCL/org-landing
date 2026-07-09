'use client';
import { COLORS } from '@/lib/tokens';
import { jersey10 } from '@/lib/fonts';

import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useInView } from 'framer-motion';


const WHITE = 'Comunidad ';
const YELLOW = 'JSCHILE';
const FULL = WHITE + YELLOW;
const CHAR_DELAY = 90;

export const BrandBanner = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || count >= FULL.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), CHAR_DELAY);
    return () => clearTimeout(t);
  }, [inView, count]);

  const whiteText = FULL.slice(0, Math.min(count, WHITE.length));
  const yellowText = count > WHITE.length ? FULL.slice(WHITE.length, count) : '';
  const done = count >= FULL.length;

  return (
    <Box
      ref={ref}
      component='section'
      sx={{
        bgcolor: COLORS.darkBg,
        minHeight: { xs: '40vh', md: '80vh' },
        position: 'sticky',
        top: 0,
        zIndex: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: { xs: 'center', md: 'flex-start' },
        overflow: 'hidden',
        px: 2,
        pt: { xs: 6, md: 22 },
        pb: { xs: 4, md: 6 },
      }}
    >
      <Typography
        component='h2'
        aria-label='Comunidad JSChile'
        sx={{
          fontFamily: jersey10.style.fontFamily,
          fontWeight: 400,
          fontSize: { xs: '3.5rem', sm: '5.5rem', md: '9rem', lg: '11rem' },
          lineHeight: 1,
          textAlign: 'center',
          userSelect: 'none',
        }}
      >
        <Box component='span' sx={{ color: '#fff' }}>{whiteText}</Box>
        <Box component='span' sx={{ color: COLORS.yellow }}>{yellowText}</Box>
        {!done && (
          <Box
            component='span'
            sx={{
              color: COLORS.yellow,
              '@keyframes blink': {
                '0%, 100%': { opacity: 1 },
                '50%': { opacity: 0 },
              },
              animation: 'blink 0.65s step-end infinite',
            }}
          >
            _
          </Box>
        )}
      </Typography>
    </Box>
  );
};
