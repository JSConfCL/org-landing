'use client';

import { Jersey_10 } from 'next/font/google';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { motion } from 'framer-motion';
import { AnimatedButton } from '@/components/AnimatedButton';
import { useCommunityModal } from '@/providers/CommunityModalProvider';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const jersey10 = Jersey_10({ weight: '400', subsets: ['latin'], display: 'swap' });

const EASE = [0.16, 1, 0.3, 1] as const;

export const HeroInfo = () => {
  const { openModal } = useCommunityModal();

  return (
    <Box sx={{ textAlign: 'center', maxWidth: '1200px', mx: 'auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <Typography
          component='h1'
          sx={{
            fontFamily: jersey10.style.fontFamily,
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '6.25rem',
            lineHeight: '76%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            color: '#000',
            mb: '10px',
          }}
        >
          Más que eventos.
          <br />
          Una red de devs que se apoyan
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
      >
        <Typography
          variant='body1'
          sx={{
            mb: 6,
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '1.25rem',
            lineHeight: '109%',
            color: '#1A1A1A',
            maxWidth: '900px',
            mx: 'auto',
          }}
        >
          Somos una comunidad de desarrolladores apasionados por la tecnología.
          Organizamos meetups, workshops e iniciativas para compartir conocimiento,
          conectar profesionales y construir el futuro del desarrollo en Chile.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent='center'
          alignItems='center'
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <AnimatedButton
              variant='contained'
              color='secondary'
              href='#comunidad'
              hoverColor='#F0DB4F'
              sx={{ px: 4, py: 1.5, fontSize: '1rem', minWidth: 200 }}
            >
              <Stack direction='row' alignItems='center' spacing={1}>
                <KeyboardArrowDownIcon />
                <span>Conocer más</span>
              </Stack>
            </AnimatedButton>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <AnimatedButton
              variant='contained'
              color='secondary'
              onClick={openModal}
              hoverColor='#F0DB4F'
              sx={{ px: 4, py: 1.5, fontSize: '1rem', minWidth: 200 }}
            >
              <Stack direction='row' alignItems='center' spacing={1}>
                <WhatsAppIcon />
                <span>Unirme al WhatsApp</span>
              </Stack>
            </AnimatedButton>
          </motion.div>
        </Stack>
      </motion.div>

    </Box>
  );
};
