'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Jersey_10 } from 'next/font/google';
import { motion } from 'framer-motion';
import { AnimatedButton } from '@/components/AnimatedButton';
import { useCommunityModal } from '@/providers/CommunityModalProvider';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Stack } from '@mui/material';

const jersey10 = Jersey_10({ weight: '400', subsets: ['latin'], display: 'swap' });
const EASE = [0.16, 1, 0.3, 1] as const;

export const WhatsAppCTA = () => {
  const { openModal } = useCommunityModal();

  return (
    <>
      <Box
        component='section'
        sx={{
          background: 'linear-gradient(105deg, #EFD000 0%, #E8A000 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          py: { xs: 8, md: 10 },
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
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              bgcolor: '#1A1A1A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 3,
            }}
          >
            <WhatsAppIcon sx={{ color: '#E8A000', fontSize: '2rem' }} />
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
              fontSize: { xs: '2.2rem', md: '3.5rem' },
              lineHeight: 1.1,
              color: '#1A1A1A',
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatedButton
            variant='contained'
            color='secondary'
            onClick={openModal}
            hoverColor='#333'
            sx={{
              px: 5,
              py: 1.8,
              fontSize: '1rem',
              fontWeight: 600,
              bgcolor: '#1A1A1A',
              color: '#fff',
            }}
          >
            <Stack direction='row' alignItems='center' spacing={1}>
              <WhatsAppIcon />
              <span>Unirme al WhatsApp</span>
            </Stack>
          </AnimatedButton>
        </motion.div>
      </Box>

    </>
  );
};
