'use client';
import { jersey10 } from '@/lib/fonts';
import { EASE, COLORS } from '@/lib/tokens';
import { Speaker } from '@/lib/fetchSpeakers';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { motion } from 'framer-motion';
import { PaperPlaneTilt, UsersThree, LinkedinLogo, GithubLogo, InstagramLogo, Globe } from '@phosphor-icons/react';
import { SpeakersModal } from './speakers/SpeakersModal';
import { AnimatedButton } from '@/components/AnimatedButton';

interface SpeakersSectionProps {
  sectionSpeakers: Speaker[];
  allSpeakers: Speaker[];
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const cardAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const ICON_SX = {
  color: COLORS.yellow,
  bgcolor: 'rgba(255,255,255,0.08)',
  borderRadius: '10px',
  '&:hover': { bgcolor: 'rgba(255,255,255,0.15)' },
} as const;

function SocialLinks({ speaker, size = 20 }: { speaker: Speaker; size?: number }) {
  const links = [
    { href: speaker.linkedin,  Icon: LinkedinLogo,  label: 'LinkedIn'  },
    { href: speaker.github,    Icon: GithubLogo,    label: 'GitHub'    },
    { href: speaker.instagram, Icon: InstagramLogo, label: 'Instagram' },
    { href: speaker.website,   Icon: Globe,         label: 'Sitio web' },
  ].filter((l) => l.href);

  if (!links.length) return null;

  return (
    <Stack direction='row' spacing={0.5} mt={0.75} role='list'>
      {links.map(({ href, Icon, label }) => (
        <Link
          key={href}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`${label} del speaker (abre en nueva pestaña)`}
          role='listitem'
        >
          <IconButton size='small' tabIndex={-1} aria-hidden sx={ICON_SX}>
            <Icon size={size} weight='fill' />
          </IconButton>
        </Link>
      ))}
    </Stack>
  );
}

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <motion.div variants={cardAnim} style={{ height: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          bgcolor: COLORS.darkOliveCard,
          borderRadius: '20px',
          p: 2,
          height: '100%',
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            width: 72,
            height: 72,
            flexShrink: 0,
            borderRadius: '10px',
            backgroundImage: `url(${speaker.avatar ?? '/assets/default.webp'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Box sx={{ minWidth: 0 }}>
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: '0.92rem',
              color: COLORS.yellow,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {speaker.name}
          </Typography>
          <SocialLinks speaker={speaker} size={16} />
        </Box>
      </Box>
    </motion.div>
  );
}

export const SpeakersSection = ({ sectionSpeakers, allSpeakers }: SpeakersSectionProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Box
        id='speakers'
        component='section'
        sx={{ bgcolor: COLORS.darkOlive, py: { xs: 8, md: 10 } }}
      >
        <Container maxWidth='lg' sx={{ px: { xs: 4, md: 6 } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'space-between' },
                flexDirection: { xs: 'column', md: 'row' },
                gap: 2,
                mb: { xs: 2, md: 0 },
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
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Speakers
              </Typography>

              <AnimatedButton
                variant='outlined'
                onClick={() => setModalOpen(true)}
                hoverColor='rgba(0, 0, 0, 0.2)'
                sx={{
                  bgcolor: 'transparent',
                  color: COLORS.yellow,
                  border: `1px solid ${COLORS.yellow}`,
                  px: 4,
                  py: 1.6,
                  fontSize: '1rem',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  '&:hover': { border: `1px solid ${COLORS.yellow}` },
                }}
              >
                <Stack direction='row' alignItems='center' spacing={1.5}>
                  <UsersThree size={18} weight='fill' />
                  <span>Ver todos los speakers</span>
                </Stack>
              </AnimatedButton>
            </Box>

            <Typography
              sx={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: 'rgba(255,255,255,0.7)',
                maxWidth: '100%',
                lineHeight: 1.65,
                textAlign: { xs: 'center', md: 'left' },
                mb: { xs: 2, md: 2 },
              }}
            >
              Devs, diseñadores, CTOs y builders que subieron al escenario para que tú no tengas que aprenderlo solo.
            </Typography>
          </motion.div>

          <motion.div
            variants={stagger}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, margin: '-40px' }}
          >
            <Grid container spacing={2}>
              {sectionSpeakers.map((speaker) => (
                <Grid key={speaker.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <SpeakerCard speaker={speaker} />
                </Grid>
              ))}
            </Grid>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'space-between' },
                flexDirection: { xs: 'column', md: 'row' },
                gap: 3,
                mt: { xs: 5, md: 7 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  color: '#fff',
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                ¿Tú también tienes algo que enseñar?
              </Typography>

              <AnimatedButton
                variant='contained'
                color='primary'
                href='https://tally.so/r/3x4Q1d'
                target='_blank'
                hoverColor={COLORS.yellowHover}
                sx={{
                  bgcolor: COLORS.yellow,
                  color: COLORS.black,
                  px: 4,
                  py: 1.6,
                  fontSize: '1rem',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                }}
              >
                <Stack direction='row' alignItems='center' spacing={1.5}>
                  <PaperPlaneTilt size={18} weight='fill' />
                  <span>Enviar mi propuesta</span>
                </Stack>
              </AnimatedButton>
            </Box>
          </motion.div>
        </Container>
      </Box>

      <SpeakersModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        speakers={allSpeakers}
      />
    </>
  );
};
