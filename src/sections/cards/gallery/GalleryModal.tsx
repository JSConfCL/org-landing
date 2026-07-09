'use client';
import { jersey10 } from '@/lib/fonts';
import { COLORS } from '@/lib/tokens';

import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { AnimatedButton } from '@/components/AnimatedButton';
import { X, Camera } from '@phosphor-icons/react';
import { Stack } from '@mui/material';

interface GalleryModalProps {
  open: boolean;
  onClose: () => void;
}

const itemData = [
  { img: '/assets/events/2026/1ra-junta/junta-casual-2026-02-06-18.35.01.webp', title: '1ra Junta Casual JS Chile Febrero 2026' },
  { img: '/assets/events/2026/1ra-junta/junta-casual-2026-02-07-08.34.59.webp', title: '1ra Junta Casual JS Chile Febrero 2026' },
  { img: '/assets/events/2026/1ra-junta/junta-casual-2026-02-06-18.35.12.webp', title: '1ra Junta Casual JS Chile Febrero 2026' },
  { img: '/assets/events/2026/1ra-junta/junta-casual-2026-02-06-18.35.15.webp', title: '1ra Junta Casual JS Chile Febrero 2026' },
  { img: '/assets/events/2026/1ra-junta/junta-casual-2026-02-06-18.35.18.webp', title: '1ra Junta Casual JS Chile Febrero 2026' },
  { img: '/assets/events/2026/1ra-junta/junta-casual-2026-02-06-18.35.16.webp', title: '1ra Junta Casual JS Chile Febrero 2026' },
];

const pattern = [
  { rows: 2, cols: 2 },
  { rows: 1, cols: 1 },
  { rows: 1, cols: 1 },
  { rows: 1, cols: 1 },
  { rows: 1, cols: 1 },
  { rows: 1, cols: 1 },
];

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='gallery-modal-title'
      aria-describedby='gallery-modal-desc'
      disableScrollLock
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '95%', sm: '85%', md: '70%' },
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

        <Stack direction='row' alignItems='center' spacing={1.5} sx={{ mb: 1, pr: 4 }}>
          <Camera size={32} weight='fill' color={COLORS.yellow} aria-hidden />
          <Typography
            id='gallery-modal-title'
            component='h2'
            sx={{
              fontFamily: jersey10.style.fontFamily,
              fontWeight: 400,
              fontSize: { xs: '1.8rem', md: '2.4rem' },
              color: COLORS.yellow,
              lineHeight: 1,
            }}
          >
            Galería de Eventos
          </Typography>
        </Stack>

        <Typography
          id='gallery-modal-desc'
          sx={{
            fontFamily: 'Inter',
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.6)',
            mb: 4,
          }}
        >
          Revive los mejores momentos de nuestros meetups y conferencias.
        </Typography>

        <Box sx={{ width: '100%', mb: 3 }}>
          <ImageList variant='quilted' cols={3} rowHeight={150} gap={8}>
            {itemData.map((item, index) => {
              const layout = pattern[index % pattern.length];
              return (
                <ImageListItem key={item.img} cols={layout.cols} rows={layout.rows}>
                  <img
                    {...srcset(item.img, 150, layout.rows, layout.cols)}
                    alt={item.title}
                    loading='lazy'
                    style={{ borderRadius: '12px', objectFit: 'cover' }}
                  />
                </ImageListItem>
              );
            })}
          </ImageList>
        </Box>

        <AnimatedButton
          variant='contained'
          fullWidth
          href='https://gallery.jsconf.cl/'
          target='_blank'
          rel='noopener noreferrer'
          hoverColor={COLORS.yellowHover}
          sx={{
            bgcolor: COLORS.yellow,
            color: COLORS.textPrimary,
            fontWeight: 700,
            py: 1.8,
          }}
        >
          Ver Galería Completa →
        </AnimatedButton>
      </Box>
    </Modal>
  );
};
