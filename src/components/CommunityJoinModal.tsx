'use client';

import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { AnimatedButton } from './AnimatedButton';

interface CommunityJoinModalProps {
  open: boolean;
  onClose: () => void;
}

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '95%', sm: 500, md: 650 },
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

export const CommunityJoinModal: React.FC<CommunityJoinModalProps> = ({
  open,
  onClose,
}) => {
  const [accepted, setAccepted] = useState(false);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='community-join-modal-title'
      aria-describedby='community-join-modal-description'
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
          id='community-join-modal-title'
          variant='h4'
          component='h2'
          fontWeight='bold'
          gutterBottom
          sx={{ pr: 3 }}
        >
          🎉 Únete a nuestra Comunidad
        </Typography>

        <Typography
          variant='body2'
          color='text.secondary'
          sx={{ mb: 4, fontWeight: 500 }}
        >
          Bienvenido al grupo de WhatsApp de JavaScript Chile 💛
        </Typography>

        <Box
          id='community-join-modal-description'
          sx={{
            backgroundColor: '#F5F5F5',
            borderRadius: 2,
            p: 3,
            mb: 4,
          }}
        >
          <Typography
            variant='h6'
            fontWeight='bold'
            sx={{ fontSize: '1rem' }}
          >
            📋 Resumen del Código de Conducta
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant='body2' sx={{ lineHeight: 1.6 }}>
              <strong>Nuestra Comunidad es Inclusiva 🤝</strong>
              <br />
              Todos son bienvenidos sin importar género, raza, orientación sexual,
              capacidades o creencias.
            </Typography>

            <Typography variant='body2' sx={{ lineHeight: 1.6 }}>
              <strong>Cero Tolerancia al Acoso 🚫</strong>
              <br />
              No toleramos abuso físico/verbal, intimidación, acecho, ni contenido
              inapropiado de ninguna forma o contexto.
            </Typography>

            <Typography variant='body2' sx={{ lineHeight: 1.6 }}>
              <strong>Respeto y Profesionalismo 💬</strong>
              <br />
              Mantén un tono respetuoso. Cualquier violación resultará en
              expulsión del grupo y futuros eventos.
            </Typography>

            <Typography variant='body2' sx={{ lineHeight: 1.6 }}>
              <strong>Reporta Problemas 🆘</strong>
              <br />
              Si eres víctima o testigo de acoso, contacta inmediatamente a los
              moderadores.
            </Typography>

            <Typography
              variant='body2'
              sx={{
                lineHeight: 1.6,
                fontStyle: 'italic',
                color: '#666',
                mt: 2,
              }}
            >
              Somos una comunidad inclusiva que valora la diversidad. Si no estás
              de acuerdo con estos valores, probablemente no sea el lugar para ti
              😉
            </Typography>
          </Box>
        </Box>

        <FormControlLabel
          control={
            <Checkbox
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              color='primary'
            />
          }
          label={
            <Typography variant='body2' sx={{ fontWeight: 600 }}>
              Acepto el Código de Conducta de JavaScript Chile
            </Typography>
          }
          sx={{ mb: 3, ml: 0 }}
        />

        <AnimatedButton
          variant='contained'
          color='primary'
          href='https://chat.whatsapp.com/GXBnfGrTbfvBo8KxOtMOZL?mode=gi_t'
          target='_blank'
          rel='noopener noreferrer'
          fullWidth
          disabled={!accepted}
          hoverColor='#FFE970'
          sx={{
            py: 2,
            opacity: accepted ? 1 : 0.5,
            cursor: accepted ? 'pointer' : 'not-allowed',
          }}
        >
          ✨ Ir al Grupo de WhatsApp
        </AnimatedButton>
      </Box>
    </Modal>
  );
};
