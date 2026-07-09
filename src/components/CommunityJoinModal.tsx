'use client';
import { jersey10 } from '@/lib/fonts';
import { COLORS } from '@/lib/tokens';

import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { AnimatedButton } from './AnimatedButton';
import { WhatsappLogo, X } from '@phosphor-icons/react';
import { Stack } from '@mui/material';

interface CommunityJoinModalProps {
  open: boolean;
  onClose: () => void;
}

export const CommunityJoinModal: React.FC<CommunityJoinModalProps> = ({ open, onClose }) => {
  const [accepted, setAccepted] = useState(false);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='community-join-modal-title'
      aria-describedby='community-join-modal-description'
      disableScrollLock
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '95%', sm: 500, md: 600 },
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
          <WhatsappLogo size={36} weight='fill' color={COLORS.yellow} aria-hidden />
          <Typography
            id='community-join-modal-title'
            component='h2'
            sx={{
              fontFamily: jersey10.style.fontFamily,
              fontWeight: 400,
              fontSize: { xs: '1.8rem', md: '2.4rem' },
              color: COLORS.yellow,
              lineHeight: 1,
            }}
          >
            Únete a la Comunidad
          </Typography>
        </Stack>

        <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.6)',
            mb: 3,
          }}
        >
          Bienvenido al grupo de WhatsApp de JSChile
        </Typography>

        {/* Resumen código de conducta */}
        <Box
          id='community-join-modal-description'
          sx={{
            bgcolor: 'rgba(255,255,255,0.06)',
            borderRadius: '16px',
            p: 3,
            mb: 3,
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: '0.95rem',
              color: '#fff',
              mb: 2,
            }}
          >
            Resumen del Código de Conducta
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[
              { title: 'Comunidad Inclusiva', body: 'Todos son bienvenidos sin importar género, raza, orientación sexual, capacidades o creencias.' },
              { title: 'Cero Tolerancia al Acoso', body: 'No toleramos abuso físico/verbal, intimidación, acecho, ni contenido inapropiado.' },
              { title: 'Respeto y Profesionalismo', body: 'Mantén un tono respetuoso. Cualquier violación resultará en expulsión del grupo y futuros eventos.' },
              { title: 'Reporta Problemas', body: 'Si eres víctima o testigo de acoso, contacta inmediatamente a los moderadores.' },
            ].map(({ title, body }) => (
              <Typography key={title} sx={{ fontFamily: 'Inter', fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
                <Box component='strong' sx={{ color: '#fff' }}>{title} </Box>
                <br />{body}
              </Typography>
            ))}

            <Typography sx={{ fontFamily: 'Inter', fontSize: '0.82rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.4)', mt: 1 }}>
              Somos una comunidad inclusiva que valora la diversidad. Si no estás de acuerdo con estos valores, probablemente no sea el lugar para ti.
            </Typography>
          </Box>
        </Box>

        <FormControlLabel
          control={
            <Checkbox
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              sx={{
                color: 'rgba(255,255,255,0.4)',
                '&.Mui-checked': { color: COLORS.yellow },
              }}
            />
          }
          label={
            <Typography sx={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '0.9rem', color: '#fff' }}>
              Acepto el Código de Conducta de JSChile
            </Typography>
          }
          sx={{ mb: 3, ml: 0 }}
        />

        <AnimatedButton
          variant='contained'
          href='https://chat.whatsapp.com/GXBnfGrTbfvBo8KxOtMOZL?mode=gi_t'
          target='_blank'
          rel='noopener noreferrer'
          fullWidth
          disabled={!accepted}
          hoverColor={COLORS.yellowHover}
          sx={{
            py: 1.8,
            bgcolor: COLORS.yellow,
            color: COLORS.textPrimary,
            fontWeight: 700,
            opacity: accepted ? 1 : 0.4,
            cursor: accepted ? 'pointer' : 'not-allowed',
          }}
        >
          <Stack direction='row' alignItems='center' spacing={1}>
            <WhatsappLogo size={20} weight='fill' aria-hidden />
            <span>Ir al Grupo de WhatsApp</span>
          </Stack>
        </AnimatedButton>
      </Box>
    </Modal>
  );
};
