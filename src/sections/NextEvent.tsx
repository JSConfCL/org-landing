'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Jersey_10 } from 'next/font/google';
import { motion } from 'framer-motion';
import { AnimatedButton } from '@/components/AnimatedButton';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Stack } from '@mui/material';

const jersey10 = Jersey_10({ weight: '400', subsets: ['latin'], display: 'swap' });
const EASE = [0.16, 1, 0.3, 1] as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};
const item = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

export const NextEvent = () => {
  return (
    <Box
      component='section'
      sx={{ bgcolor: '#111111', py: { xs: 8, md: 12 } }}
    >
      <Container maxWidth='xl' sx={{ px: { xs: 4, md: 8, lg: 12 } }}>
        <Grid container spacing={6} alignItems='center'>

          {/* Columna izquierda — stagger desde la izquierda */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              variants={stagger}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, margin: '-80px' }}
            >
              <motion.div variants={item}>
                <Typography
                  component='h2'
                  sx={{
                    fontFamily: jersey10.style.fontFamily,
                    fontWeight: 400,
                    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                    lineHeight: 1.05,
                    color: '#fff',
                    mb: 3,
                  }}
                >
                  ¿Listo para aprender,
                  <br />
                  conectar y crecer?
                </Typography>
              </motion.div>

              <motion.div variants={item}>
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    color: 'rgba(255,255,255,0.75)',
                    mb: 5,
                    maxWidth: '420px',
                  }}
                >
                  Descubre lo que se viene y reserva tu lugar antes de que se llene.
                </Typography>
              </motion.div>

              <motion.div
                variants={item}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <AnimatedButton
                  variant='contained'
                  color='primary'
                  href='https://luma.com/jschile'
                  target='_blank'
                  rel='noopener noreferrer'
                  hoverColor='#FFE970'
                  sx={{
                    px: 4,
                    py: 1.6,
                    fontSize: '1rem',
                    fontWeight: 700,
                    bgcolor: '#F0DB4F',
                    color: '#000',
                  }}
                >
                  <Stack direction='row' alignItems='center' spacing={1}>
                    <CalendarMonthIcon />
                    <span>Inscribirme GRATIS</span>
                  </Stack>
                </AnimatedButton>
              </motion.div>
            </motion.div>
          </Grid>

          {/* Columna derecha — entra desde la derecha */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 80, rotate: 3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ type: 'spring', damping: 16, stiffness: 90, delay: 0.2 }}
            >
              <Box
                sx={{
                  width: '100%',
                  aspectRatio: '4/3',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  backgroundImage: `
                    linear-gradient(45deg, #d0d0d0 25%, transparent 25%),
                    linear-gradient(-45deg, #d0d0d0 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, #d0d0d0 75%),
                    linear-gradient(-45deg, transparent 75%, #d0d0d0 75%)
                  `,
                  backgroundSize: '24px 24px',
                  backgroundPosition: '0 0, 0 12px, 12px -12px, -12px 0px',
                  backgroundColor: '#f0f0f0',
                }}
              />
            </motion.div>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};
