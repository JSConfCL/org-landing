import { CommunityJoinModal } from './CommunityJoinModal';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useState } from 'react';

export const WhatsappFab = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <>
      <Fab
        color='primary'
        aria-label='whatsapp'
        onClick={handleOpenModal}
        sx={{
          position: 'fixed',
          bottom: { xs: 16, md: 32 },
          right: { xs: 16, md: 32 },
          zIndex: 2000,

          bgcolor: '#F0DB4F',
          color: 'black',
          '&:hover': {
            bgcolor: '#FFE970',
            transform: 'scale(1.1)',
          },
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <WhatsAppIcon />
      </Fab>
      <CommunityJoinModal open={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};
