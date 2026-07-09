'use client';
import { jersey10 } from '@/lib/fonts';
import { COLORS } from '@/lib/tokens';

import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Stack } from '@mui/material';
import { X, ClockCounterClockwise } from '@phosphor-icons/react';

interface OurStoryModalProps {
  open: boolean;
  onClose: () => void;
}

const timelineData = [
  {
    year: '2013',
    title: 'Los Inicios',
    description: 'Nace la comunidad de JSChile como un pequeño grupo de entusiastas buscando compartir conocimientos y experiencias con esta tecnología web emergente.',
  },
  {
    year: '2016',
    title: 'Crecimiento y Consolidación',
    description: 'Los meetups mensuales comienzan a ser un éxito, atrayendo a centenares de desarrolladores. JS Chile se convierte en la principal agrupación de la tecnología en el país.',
  },
  {
    year: '2018',
    title: 'Hito Histórico: JSConf Chile',
    description: 'Se organiza la primera edición de la prestigiosa conferencia internacional JSConf en nuestro país, posicionando a Chile en el mapa global del desarrollo frontend.',
  },
  {
    year: '2023',
    title: 'Renacimiento Pospandemia',
    description: 'Tras unos años desafiantes, un nuevo grupo de organizadores toma la batuta para reactivar la magia de los meetups presenciales, llenando nuevamente los auditorios.',
  },
  {
    year: '2026',
    title: 'El Futuro es Ahora',
    description: 'Lanzamiento de la nueva identidad visual y plataforma web oficial. La comunidad más grande de desarrollo en Chile sigue construyendo un puente educativo accesible para todos.',
  },
];

export const OurStoryModal: React.FC<OurStoryModalProps> = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='our-story-modal-title'
      aria-describedby='our-story-modal-description'
      disableScrollLock
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '95%', sm: 600, md: 720 },
          maxHeight: '90vh',
          overflowY: 'auto',
          bgcolor: COLORS.darkOlive,
          borderRadius: '24px',
          boxShadow: 24,
          p: { xs: 3, md: 5 },
          display: 'flex',
          flexDirection: 'column',
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
          <ClockCounterClockwise size={32} weight='fill' color={COLORS.yellow} aria-hidden />
          <Typography
            id='our-story-modal-title'
            component='h2'
            sx={{
              fontFamily: jersey10.style.fontFamily,
              fontWeight: 400,
              fontSize: { xs: '1.8rem', md: '2.4rem' },
              color: COLORS.yellow,
              lineHeight: 1,
            }}
          >
            Nuestra Historia
          </Typography>
        </Stack>

        <Typography
          id='our-story-modal-description'
          sx={{
            fontFamily: 'Inter',
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.6)',
            mb: 4,
          }}
        >
          Cómo evolucionó la comunidad JSChile más activa de Chile a través de los años.
        </Typography>

        {/* Timeline */}
        <Box sx={{ position: 'relative', ml: 2 }}>
          {/* Línea vertical */}
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              bottom: 8,
              left: 4,
              width: '2px',
              bgcolor: 'rgba(255,255,255,0.1)',
            }}
          />

          {timelineData.map((item, index) => (
            <Box
              key={item.year}
              sx={{
                position: 'relative',
                pl: 5,
                pb: index !== timelineData.length - 1 ? 4 : 0,
              }}
            >
              {/* Punto */}
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: 6,
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  bgcolor: COLORS.yellow,
                  border: `2px solid ${COLORS.darkOlive}`,
                  boxShadow: `0 0 0 2px ${COLORS.yellow}`,
                  zIndex: 1,
                }}
              />

              <Typography
                sx={{
                  fontFamily: jersey10.style.fontFamily,
                  fontWeight: 400,
                  fontSize: '1.5rem',
                  color: COLORS.yellow,
                  lineHeight: 1,
                  mb: 0.25,
                }}
              >
                {item.year}
              </Typography>
              <Typography sx={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '0.92rem', color: '#fff', mb: 0.5 }}>
                {item.title}
              </Typography>
              <Typography sx={{ fontFamily: 'Inter', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};
