import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface OurStoryModalProps {
  open: boolean;
  onClose: () => void;
}

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '95%', sm: 600, md: 800 },
  maxHeight: '90vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 24,
  p: { xs: 4, sm: 6 },
  display: 'flex',
  flexDirection: 'column',
  outline: 'none',
};

const timelineData = [
  {
    year: '2013',
    title: 'Los Inicios 🌱',
    description:
      'Nace la comunidad de JavaScript Chile como un pequeño grupo de entusiastas buscando compartir conocimientos y experiencias con esta tecnología web emergente.',
  },
  {
    year: '2016',
    title: 'Crecimiento y Consolidación 📈',
    description:
      'Los meetups mensuales comienzan a ser un éxito, atrayendo a centenares de desarrolladores. JS Chile se convierte en la principal agrupación de la tecnología en el país.',
  },
  {
    year: '2018',
    title: 'Hito Histórico: JSConf Chile 🎉',
    description:
      'Se organiza la primera edición de la prestigiosa conferencia internacional JSConf en nuestro país, posicionando a Chile en el mapa global del desarrollo frontend.',
  },
  {
    year: '2023',
    title: 'Renacimiento Pospandemia 🔄',
    description:
      'Tras unos años desafiantes, un nuevo grupo de organizadores toma la batuta para reactivar la magia de los meetups presenciales, llenando nuevamente los auditorios.',
  },
  {
    year: '2026',
    title: 'El Futuro es Ahora 🚀',
    description:
      'Lanzamiento de la nueva identidad visual y plataforma web oficial. La comunidad más grande de desarrollo en Chile sigue construyendo un puente educativo accesible para todos.',
  },
];

export const OurStoryModal: React.FC<OurStoryModalProps> = ({
  open,
  onClose,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='our-story-modal-title'
      aria-describedby='our-story-modal-description'
      disableScrollLock
    >
      <Box sx={modalStyle}>
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: 16, top: 16 }}
          aria-label='Cerrar modal'
        >
          <CloseIcon />
        </IconButton>

        <Typography
          id='our-story-modal-title'
          variant='h4'
          component='h2'
          fontWeight='bold'
          gutterBottom
        >
          Nuestra Historia 📖
        </Typography>

        <Typography
          id='our-story-modal-description'
          variant='body1'
          color='text.secondary'
          sx={{ mt: 1, mb: 4, lineHeight: 1.6 }}
        >
          Conoce cómo evolucionó la comunidad de JavaScript más activa de Chile
          a través de los años 💛
        </Typography>

        {/* Timeline Minimalista Custom */}
        <Box sx={{ position: 'relative', ml: { xs: 2, sm: 4 }, mt: 2 }}>
          {/* Línea vertical principal */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 4, // se ajusta para que caiga al centro del círculo
              width: '2px',
              bgcolor: 'rgba(0,0,0,0.1)',
            }}
          />

          {timelineData.map((item, index) => (
            <Box
              key={item.year}
              sx={{
                position: 'relative',
                pl: 5,
                pb: index !== timelineData.length - 1 ? 5 : 2,
              }}
            >
              {/* Punto indicador */}
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  bgcolor: '#F0DB4F', // JS Yellow
                  border: '2px solid white',
                  boxShadow: '0 0 0 2px rgba(0,0,0,0.1)',
                  zIndex: 1,
                }}
              />

              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                  variant='h6'
                  sx={{
                    fontWeight: 800,
                    color: 'text.primary',
                    lineHeight: 1.2,
                  }}
                >
                  {item.year}
                </Typography>
                <Typography
                  variant='subtitle1'
                  sx={{ fontWeight: 700, mb: 1, color: '#444' }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant='body2'
                  sx={{ color: 'text.secondary', lineHeight: 1.6 }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};
