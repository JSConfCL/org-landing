'use client';
import { jersey10 } from '@/lib/fonts';
import { EASE, COLORS } from '@/lib/tokens';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { motion } from 'framer-motion';
import { AnimatedButton } from '@/components/AnimatedButton';
import { useCommunityModal } from '@/providers/CommunityModalProvider';
import { WhatsappLogo, CaretDown } from '@phosphor-icons/react';


const FINAL_TEXT = 'Más que eventos.\nUna red de devs que se apoyan';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const wordVariants = {
  hidden: { opacity: 0, filter: 'blur(20px)', y: 8 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const HeroInfo = () => {
  const { openModal } = useCommunityModal();
  const [showContent, setShowContent] = useState(false);

  const lines = FINAL_TEXT.split('\n');

  return (
    <Box sx={{ textAlign: 'center', maxWidth: '1200px', mx: 'auto' }}>

      {/* ── Title blur-reveal word by word ── */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        onAnimationComplete={() => setShowContent(true)}
      >
        <Typography
          component='h1'
          sx={{
            fontFamily: jersey10.style.fontFamily,
            fontWeight: 400,
            fontSize: { xs: '3.8rem', sm: '5rem', md: '6.25rem' },
            lineHeight: '82%',
            color: COLORS.black,
            mb: '20px',
            textAlign: 'center',
          }}
        >
          {lines.map((line, li) => (
            <Box key={li} component='span' sx={{ display: 'block' }}>
              {line.split(' ').map((word, wi) => (
                <motion.span
                  key={`${li}-${wi}`}
                  variants={wordVariants}
                  style={{ display: 'inline-block', margin: '0 0.14em' }}
                >
                  {word}
                </motion.span>
              ))}
            </Box>
          ))}
        </Typography>
      </motion.div>

      {/* ── Subtitle + buttons fade in after title ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <Typography
          variant='body1'
          sx={{
            mb: 6,
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: { xs: '1rem', md: '1.25rem' },
            lineHeight: '109%',
            color: COLORS.textPrimary,
            maxWidth: '900px',
            mx: 'auto',
          }}
        >
          Somos una comunidad de desarrolladores apasionados por la tecnología.
          Organizamos meetups, workshops e iniciativas para compartir conocimiento,
          conectar profesionales y construir el futuro del desarrollo en Chile.
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent='center'
          alignItems='center'
        >
          <AnimatedButton
            variant='contained'
            color='secondary'
            href='#comunidad'
            hoverColor={COLORS.charcoal} hoverTextColor='#fff'
            sx={{ px: 4, py: 1.5, fontSize: '1rem', minWidth: 200 }}
          >
            <Stack direction='row' alignItems='center' spacing={1}>
              <CaretDown size={20} weight='fill' />
              <span>Conocer más</span>
            </Stack>
          </AnimatedButton>

          <AnimatedButton
            variant='contained'
            color='secondary'
            onClick={openModal}
            hoverColor={COLORS.charcoal} hoverTextColor='#fff'
            sx={{ px: 4, py: 1.5, fontSize: '1rem', minWidth: 200 }}
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
