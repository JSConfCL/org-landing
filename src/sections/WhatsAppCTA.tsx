'use client';
import { jersey10 } from '@/lib/fonts';
import { EASE, COLORS } from '@/lib/tokens';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { AnimatedButton } from '@/components/AnimatedButton';
import { useCommunityModal } from '@/providers/CommunityModalProvider';
import { WhatsappLogo } from '@phosphor-icons/react';
import { Stack } from '@mui/material';


export const WhatsAppCTA = () => {
  const { openModal } = useCommunityModal();

  return (
    <>
      <Box
        component='section'
        sx={{
          backgroundImage: 'url(/assets/banner-inivitation-whatsapp.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          minHeight: { xs: '130vw', sm: '55vw', md: '45vw' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          textAlign: 'center',
          pt: { xs: 5, md: 8 },
          pb: { xs: 8, md: 10 },
          px: { xs: 4, md: 8 },
        }}
      >
        {/* Icono oscilante */}
        <motion.div
          initial={{ scale: 0, rotate: -30, opacity: 0 }}
          whileInView={{ scale: 1, rotate: [null, 15, -10, 8, -4, 0], opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <Box sx={{ mb: 1 }}>
            <WhatsappLogo size={64} weight='fill' color={COLORS.black} />
          </Box>
        </motion.div>

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        >
          <Typography
            component='h2'
            sx={{
              fontFamily: jersey10.style.fontFamily,
              fontWeight: 400,
              fontSize: { xs: '2.8rem', sm: '3.8rem', md: '5rem' },
              lineHeight: 1.1,
              color: COLORS.textPrimary,
              mb: 4,
            }}
          >
            Únete a donde pasan las cosas
          </Typography>
        </motion.div>

        {/* Botón con spring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', damping: 14, stiffness: 120, delay: 0.35 }}
        >
          <AnimatedButton
            variant='contained'
            color='secondary'
            onClick={openModal}
            hoverColor={COLORS.charcoal}
            sx={{
              px: 4,
              py: 1.6,
              fontSize: '1rem',
              fontWeight: 700,
              bgcolor: COLORS.black,
              color: '#fff',
            }}
          >
            <Stack direction='row' alignItems='center' spacing={1}>
              <WhatsappLogo size={20} weight='fill' />
              <span>Unirme al WhatsApp</span>
            </Stack>
          </AnimatedButton>
        </motion.div>
      </Box>

    </>
  );
};
