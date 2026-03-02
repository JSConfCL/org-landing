import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import MailIcon from '@mui/icons-material/Mail';
import { StaffMember } from '@/data/data_staff';

interface StaffModalProps {
  open: boolean;
  onClose: () => void;
  staff: StaffMember | null;
}

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 400 },
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  outline: 'none',
};

const StaffModal: React.FC<StaffModalProps> = ({ open, onClose, staff }) => {
  if (!staff) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='staff-modal-title'
      aria-describedby='staff-modal-description'
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

        <Avatar
          src={staff.imageUrl}
          alt={staff.fullName}
          sx={{ width: 120, height: 120 }}
        />

        <Typography
          id='staff-modal-title'
          variant='h5'
          component='h2'
          fontWeight='bold'
          gutterBottom
          textAlign='center'
        >
          {staff.fullName}
        </Typography>

        <Typography variant='subtitle1' color='text.secondary' gutterBottom>
          {staff.role}
        </Typography>

        <Typography variant='body2' color='text.secondary' sx={{ mb: 3 }}>
          {staff.date}
        </Typography>

        <Box sx={{ display: 'flex', gap: 1 }}>
          {staff.linkedin && (
            <Link
              href={staff.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <IconButton size='small' sx={{ color: 'primary.main' }}>
                <LinkedInIcon />
              </IconButton>
            </Link>
          )}
          {staff.instagram && (
            <Link
              href={staff.instagram}
              target='_blank'
              rel='noopener noreferrer'
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <IconButton size='small' sx={{ color: '#E4405F' }}>
                <InstagramIcon />
              </IconButton>
            </Link>
          )}
          {staff.website && (
            <Link
              href={staff.website}
              target='_blank'
              rel='noopener noreferrer'
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <IconButton size='small' sx={{ color: '#000' }}>
                <LanguageIcon />
              </IconButton>
            </Link>
          )}
          {staff.email && (
            <Link
              href={`mailto:${staff.email}`}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <IconButton size='small' sx={{ color: 'primary.main' }}>
                <MailIcon />
              </IconButton>
            </Link>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default StaffModal;
