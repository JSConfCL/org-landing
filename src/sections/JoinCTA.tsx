'use client';
import { jersey10 } from '@/lib/fonts';
import { EASE, COLORS } from '@/lib/tokens';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { motion } from 'framer-motion';
import { AnimatedButton } from '@/components/AnimatedButton';
import { useCommunityModal } from '@/providers/CommunityModalProvider';
import { PaperPlaneTilt, WhatsappLogo } from '@phosphor-icons/react';


export const JoinCTA = () => {
  const { openModal } = useCommunityModal();

  return (
    <Box
      component='section'
      sx={{
        bgcolor: COLORS.black,
        py: { xs: 10, md: 14 },
        px: { xs: 4, md: 8 },
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <Typography
          component='h2'
          sx={{
            fontFamily: jersey10.style.fontFamily,
            fontWeight: 400,
            fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4.375rem' },
            lineHeight: 1,
            color: COLORS.yellow,
            mb: 1,
          }}
        >
          ¡Sé parte de JSChile HOY!
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: { xs: '1rem', md: '1.15rem' },
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.85)',
            maxWidth: 560,
            mx: 'auto',
            mb: 5,
          }}
        >
          Ya sea que tengas una idea para compartir o simplemente quieras estar al tanto de lo que viene,{' '}
          <Box component='span' sx={{ fontWeight: 700, color: '#fff' }}>
            hay un lugar para ti en esta comunidad.
          </Box>
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent='center'
          alignItems='center'
        >
          <AnimatedButton
            variant='contained'
            href='https://tally.so/r/3x4Q1d'
            target='_blank'
            hoverColor={COLORS.yellowDark}
            sx={{
              px: 4,
              py: 1.6,
              fontSize: '1rem',
              fontWeight: 700,
              bgcolor: COLORS.yellow,
              color: COLORS.textPrimary,
              borderRadius: '999px',
              minWidth: 220,
            }}
          >
            <Stack direction='row' alignItems='center' spacing={1}>
              <PaperPlaneTilt size={20} weight='fill' />
              <span>Enviar mi propuesta</span>
            </Stack>
          </AnimatedButton>

          <AnimatedButton
            variant='outlined'
            onClick={openModal}
            hoverColor={COLORS.yellowHover}
            sx={{
              px: 4,
              py: 1.6,
              fontSize: '1rem',
              fontWeight: 700,
              bgcolor: '#fff',
              color: COLORS.textPrimary,
              borderRadius: '999px',
              minWidth: 220,
              border: 'none',
              '&:hover': { border: 'none' },
            }}
          >
            <Stack direction='row' alignItems='center' spacing={1}>
              <WhatsappLogo size={20} weight='fill' />
              <span>Unirme al WhatsApp</span>
            </Stack>
          </AnimatedButton>
        </Stack>
      </motion.div>
    </Box>
  );
};
