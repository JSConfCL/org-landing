'use client';
import { jersey10 } from '@/lib/fonts';
import { EASE, COLORS } from '@/lib/tokens';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { motion } from 'framer-motion';
import { Gavel } from '@phosphor-icons/react';
import { CodeOfConductModal } from './cards/code-of-conduct/CodeOfConductModal';
import { AnimatedButton } from '@/components/AnimatedButton';
import { Stack } from '@mui/material';


const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export const NuestrosValores = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Box
        id='valores'
        component='section'
        sx={{ bgcolor: COLORS.darkBg, pt: { xs: 8, md: 12 }, pb: { xs: 3, md: 4 } }}
      >
        <Container maxWidth='lg' sx={{ px: { xs: 4, md: 10, lg: 16 } }}>
          {/* Row 1 — title + button */}
          <motion.div
            variants={item}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={item}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: { xs: 'center', md: 'center' },
                  justifyContent: { xs: 'center', md: 'space-between' },
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: { xs: 2, md: 3 },
                  mb: { xs: 3, md: 3 },
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                <Typography
                  component='h2'
                  sx={{
                    fontFamily: jersey10.style.fontFamily,
                    fontWeight: 400,
                    fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4.375rem' },
                    color: COLORS.yellow,
                    lineHeight: 1,
                  }}
                >
                  Nuestros valores
                </Typography>

                <AnimatedButton
                  variant='contained'
                  color='primary'
                  onClick={() => setModalOpen(true)}
                  hoverColor={COLORS.yellowHover}
                  sx={{
                    bgcolor: COLORS.yellow,
                    color: COLORS.black,
                    px: 4,
                    py: 1.6,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    fontWeight: 700,
                    textAlign: 'center',
                    lineHeight: 1.3,
                  }}
                >
                  <Stack direction='row' alignItems='center' spacing={1.5}>
                    <Gavel size={20} weight='fill' />
                    <span>Ver código de conducta completo</span>
                  </Stack>
                </AnimatedButton>
              </Box>
            </motion.div>
          </motion.div>

          {/* Row 2 — paragraphs */}
          <motion.div
            variants={stagger}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.div variants={item}>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontSize: { xs: '1rem', md: '1.05rem' },
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: 1.75,
                  mb: 3,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Queremos que cada evento sea un espacio seguro y libre de acoso{' '}
                <Box component='strong' sx={{ color: '#fff' }}>
                  para todos
                </Box>
                , sin importar género, orientación sexual, raza, capacidades, apariencia física o
                creencias.
              </Typography>
            </motion.div>

            <motion.div variants={item}>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontSize: { xs: '1rem', md: '1.05rem' },
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: 1.75,
                  mb: 3,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                <Box component='strong' sx={{ color: '#fff' }}>
                  No toleramos ningún tipo de acoso, directo o indirecto.
                </Box>{' '}
                Quien no respete esto será excluido del evento y de futuras instancias.
              </Typography>
            </motion.div>

            <motion.div variants={item}>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontSize: { xs: '1rem', md: '1.05rem' },
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: 1.75,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                ¿Viste o viviste algo así? Acércate a cualquier persona del staff (las
                identificamos al inicio de cada evento). Te vamos a ayudar.
              </Typography>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      <CodeOfConductModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
