import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { AnimatedButton } from '@/components/AnimatedButton';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { Stack } from '@mui/material';

interface CallForSpeakerModalProps {
  open: boolean;
  onClose: () => void;
}

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '95%', sm: 500, md: 600 },
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

export const CallForSpeakerModalForm: React.FC<CallForSpeakerModalProps> = ({
  open,
  onClose,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='call-for-speaker-modal-title'
      aria-describedby='call-for-speaker-modal-description'
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

        <Stack
          direction='row'
          alignItems='center'
          justifyContent='flex-start'
          spacing={1.5}
          sx={{ mb: 2 }}
        >
          <KeyboardVoiceIcon
            sx={{ color: 'primary.main', fontSize: '2.5rem' }}
          />

          <Typography variant='h5' component='h2' sx={{ pr: 3 }}>
            Postular como Speaker
          </Typography>
        </Stack>

        <Typography
          variant='body1'
          color='text.secondary'
          sx={{ mb: 4, lineHeight: 1.6 }}
        >
          Próximamente abriremos el Call for Speakers para nuestro próximo
          evento. ¡Mantente atento a nuestras redes sociales para más
          información!
        </Typography>

        <AnimatedButton
          variant='contained'
          color='secondary'
          fullWidth
          onClick={onClose}
          sx={{ mt: 2 }}
        >
          Entendido
        </AnimatedButton>
      </Box>
    </Modal>
  );
};
