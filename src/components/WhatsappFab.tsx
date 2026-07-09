import { COLORS } from '@/lib/tokens';
import { CommunityJoinModal } from './CommunityJoinModal';
import Fab from '@mui/material/Fab';
import { WhatsappLogo } from '@phosphor-icons/react';
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

          bgcolor: COLORS.yellow,
          color: 'black',
          '&:hover': {
            bgcolor: COLORS.yellowHover,
            transform: 'scale(1.1)',
          },
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <WhatsappLogo size={24} weight='fill' />
      </Fab>
      <CommunityJoinModal open={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};
