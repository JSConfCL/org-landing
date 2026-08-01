'use client';
import { jersey10 } from '@/lib/fonts';
import { COLORS } from '@/lib/tokens';
import { Speaker } from '@/lib/fetchSpeakers';

import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { X, Microphone, LinkedinLogo, GithubLogo, InstagramLogo, Globe } from '@phosphor-icons/react';

interface SpeakersModalProps {
  open: boolean;
  onClose: () => void;
  speakers: Speaker[];
}

const ICON_SX = {
  color: COLORS.yellow,
  bgcolor: 'rgba(255,255,255,0.08)',
  borderRadius: '10px',
  '&:hover': { bgcolor: 'rgba(255,255,255,0.15)' },
} as const;

function ModalSpeakerCard({ speaker }: { speaker: Speaker }) {
  const links = [
    { href: speaker.linkedin,  Icon: LinkedinLogo,  label: 'LinkedIn'  },
    { href: speaker.github,    Icon: GithubLogo,    label: 'GitHub'    },
    { href: speaker.instagram, Icon: InstagramLogo, label: 'Instagram' },
    { href: speaker.website,   Icon: Globe,         label: 'Sitio web' },
  ].filter((l) => l.href);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        bgcolor: COLORS.darkOliveCard,
        borderRadius: '16px',
        p: 2,
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          width: 60,
          height: 60,
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
            fontSize: '0.88rem',
            color: COLORS.yellow,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {speaker.name}
        </Typography>
        {links.length > 0 && (
          <Stack direction='row' spacing={0.5} mt={0.5} role='list'>
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
                  <Icon size={18} weight='fill' />
                </IconButton>
              </Link>
            ))}
          </Stack>
        )}
      </Box>
    </Box>
  );
}

export const SpeakersModal: React.FC<SpeakersModalProps> = ({ open, onClose, speakers }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='speakers-modal-title'
      aria-describedby='speakers-modal-desc'
      disableScrollLock
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '95%', sm: '85%', md: '75%' },
          maxWidth: 900,
          maxHeight: '90vh',
          overflowY: 'auto',
          bgcolor: COLORS.darkOlive,
          borderRadius: '24px',
          boxShadow: 24,
          p: { xs: 3, md: 5 },
          outline: 'none',
        }}
      >
        <IconButton
          onClick={onClose}
          aria-label='Cerrar modal'
          sx={{
            position: 'absolute',
            right: 16,
            top: 16,
            color: '#fff',
            bgcolor: 'rgba(255,255,255,0.1)',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
          }}
        >
          <X size={20} weight='fill' />
        </IconButton>

        <Stack direction='row' alignItems='center' spacing={1.5} sx={{ mb: 1 }}>
          <Microphone size={32} weight='fill' color={COLORS.yellow} aria-hidden />
          <Typography
            id='speakers-modal-title'
            component='h2'
            sx={{
              fontFamily: jersey10.style.fontFamily,
              fontWeight: 400,
              fontSize: { xs: '2rem', md: '2.8rem' },
              color: COLORS.yellow,
              lineHeight: 1,
            }}
          >
            Todos los Speakers
          </Typography>
        </Stack>

        <Typography
          id='speakers-modal-desc'
          sx={{
            fontFamily: 'Inter',
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.6)',
            mb: 4,
          }}
        >
          {speakers.length} speakers que han subido al escenario de JSChile.
        </Typography>

        <Grid container spacing={2}>
          {speakers.map((speaker) => (
            <Grid key={speaker.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <ModalSpeakerCard speaker={speaker} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Modal>
  );
};
