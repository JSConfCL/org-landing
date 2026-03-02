'use client';

import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { AnimatedButton } from '@/components/AnimatedButton';

interface GalleryModalProps {
  open: boolean;
  onClose: () => void;
}

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '80%', md: '70%' },
  maxWidth: '900px',
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  overflow: 'auto',
  outline: 'none',
};

const itemData = [
  {
    img: '/assets/events/2026/1ra-junta/junta-vasual-2026-02-06-18.35.01.jpeg',
    title: 'Conference Audience',
  },
  {
    img: '/assets/events/2026/1ra-junta/junta-casual 2026-02-07-08.34.59.jpg',
    title: 'Meetup Collaboration',
  },
  {
    img: '/assets/events/2026/1ra-junta/junta-casual-2026-02-06-18.35.12.jpeg',
    title: 'Tech Speaker',
  },
  {
    img: '/assets/events/2026/1ra-junta/junta-casual-2026-02-06-18.35.15.jpeg',
    title: 'Networking Event',
  },
  {
    img: '/assets/events/2026/1ra-junta/junta-casual-2026-02-06-18.35.18.jpeg',
    title: 'Hackathon Team',
  },
  {
    img: '/assets/events/2026/1ra-junta/junta-casual-2026-02-06-18.35.16.jpeg',
    title: 'Tech Meetup',
  },
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
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  open,
  onClose,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='gallery-modal-title'
      disableScrollLock
    >
      <Box sx={modalStyle}>
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
          aria-label='Cerrar modal'
        >
          <CloseIcon />
        </IconButton>

        <Typography
          id='gallery-modal-title'
          variant='h4'
          component='h2'
          fontWeight='bold'
          sx={{ mb: 2 }}
        >
          📸 Galería de Eventos
        </Typography>

        <Typography variant='body1' color='text.secondary' sx={{ mb: 3 }}>
          Revive los mejores momentos de nuestros meetups y conferencias.
          Inspiración y aprendizaje en cada encuentro. 🎉
        </Typography>

        <Box sx={{ width: '100%', mb: 3 }}>
          <ImageList variant='quilted' cols={3} rowHeight={150} gap={12}>
            {itemData.map((item, index) => {
              const layout = pattern[index % pattern.length];
              return (
                <ImageListItem
                  key={item.img}
                  cols={layout.cols}
                  rows={layout.rows}
                >
                  <img
                    {...srcset(item.img, 150, layout.rows, layout.cols)}
                    alt={item.title}
                    loading='lazy'
                    style={{
                      borderRadius: '8px',
                      objectFit: 'cover',
                    }}
                  />
                </ImageListItem>
              );
            })}
          </ImageList>
        </Box>

        <AnimatedButton
          variant='contained'
          color='secondary'
          fullWidth
          href='https://gallery.jsconf.cl/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Ver Galería Completa →
        </AnimatedButton>
      </Box>
    </Modal>
  );
};
