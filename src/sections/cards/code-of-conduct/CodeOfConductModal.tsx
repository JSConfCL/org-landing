'use client';
import { jersey10 } from '@/lib/fonts';
import { COLORS } from '@/lib/tokens';

import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { X, Gavel } from '@phosphor-icons/react';
import { Stack } from '@mui/material';

interface CodeOfConductModalProps {
  open: boolean;
  onClose: () => void;
}

const SECTIONS = [
  {
    title: 'La versión más corta de todas',
    body: '¿Has visto como luego de algunos eventos, todos terminan hablando de "aquella persona" que causó un mal rato a uno o más asistentes? Que no sea de ti de quien hablen.',
  },
  {
    title: 'La versión no tan corta',
    body: 'En los eventos desarrollados por JSChile (JSConf, TechSchool, Conferencias, etc), así como en cualquiera de las plataformas de redes sociales buscamos crear un espacio libre de acoso. Todos son bienvenidos, sin importar género, raza, orientación sexual, capacidades, apariencia física y/o creencias. No toleramos el acoso bajo ningún tipo, forma ni contexto. Cualquier participante que viole estas reglas será sancionado y expulsado de este y futuros eventos.',
  },
  {
    title: '¿Qué se entiende por acoso?',
    body: 'Abuso físico y/o verbal relacionados al género, orientación sexual, capacidades, apariencia física, nivel de conocimiento, raza y/o creencias religiosas. Creación y/o reproducción de imágenes de contenido sexual en espacios públicos, intimidación, acecho, interrupciones groseras de charlas y/o contacto físico inapropiado.',
  },
  {
    title: '¿Qué pasa si alguien viola el código?',
    body: 'La organización se reserva el derecho de solicitar que cualquier comportamiento relacionado a lo anterior sea detenido inmediatamente. Quienes atenten contra este código podrán ser expulsados de este y futuros eventos. Si eres víctima o testigo de acoso, por favor contacta a un miembro de la organización de forma inmediata.',
  },
];

export const CodeOfConductModal: React.FC<CodeOfConductModalProps> = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='code-of-conduct-modal-title'
      aria-describedby='code-of-conduct-modal-description'
      disableScrollLock
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '95%', sm: 600, md: 780 },
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
          <Gavel size={32} weight='fill' color={COLORS.yellow} aria-hidden />
          <Typography
            id='code-of-conduct-modal-title'
            component='h2'
            sx={{
              fontFamily: jersey10.style.fontFamily,
              fontWeight: 400,
              fontSize: { xs: '1.8rem', md: '2.4rem' },
              color: COLORS.yellow,
              lineHeight: 1,
            }}
          >
            Código de Conducta
          </Typography>
        </Stack>

        <Typography
          id='code-of-conduct-modal-description'
          sx={{
            fontFamily: 'Inter',
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.6)',
            mb: 4,
          }}
        >
          Nuestro compromiso con una comunidad segura e inclusiva para todos.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {SECTIONS.map(({ title, body }) => (
            <Box key={title} sx={{ bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '16px', p: 3 }}>
              <Typography
                sx={{
                  fontFamily: jersey10.style.fontFamily,
                  fontWeight: 400,
                  fontSize: '1.3rem',
                  color: COLORS.yellow,
                  mb: 1,
                  lineHeight: 1,
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.75)',
                  lineHeight: 1.65,
                }}
              >
                {body}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};
