'use client';
import { jersey10 } from '@/lib/fonts';
import { COLORS } from '@/lib/tokens';

import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import { X, LinkedinLogo, InstagramLogo, Globe, Envelope } from '@phosphor-icons/react';
import { StaffMember } from '@/data/data_staff';

interface StaffModalProps {
  open: boolean;
  onClose: () => void;
  staff: StaffMember | null;
}

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
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: 400 },
          bgcolor: COLORS.darkOlive,
          borderRadius: '24px',
          boxShadow: 24,
          p: { xs: 3, md: 4 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
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

        <Box
          component='img'
          src={staff.imageUrl}
          alt={`Foto de ${staff.fullName}`}
          sx={{
            width: 100,
            height: 100,
            borderRadius: '16px',
            objectFit: 'cover',
            border: `3px solid ${COLORS.yellow}`,
            mb: 2,
            mt: 1,
          }}
        />

        <Typography
          id='staff-modal-title'
          component='h2'
          sx={{
            fontFamily: jersey10.style.fontFamily,
            fontWeight: 400,
            fontSize: '1.8rem',
            color: COLORS.yellow,
            lineHeight: 1,
            textAlign: 'center',
            mb: 0.5,
          }}
        >
          {staff.fullName}
        </Typography>

        <Typography
          id='staff-modal-description'
          sx={{
            fontFamily: 'Inter',
            fontSize: '0.9rem',
            color: 'rgba(255,255,255,0.7)',
            textAlign: 'center',
            mb: 0.25,
          }}
        >
          {staff.role}
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.4)',
            textAlign: 'center',
            mb: 3,
          }}
        >
          {staff.date}
        </Typography>

        <Box sx={{ display: 'flex', gap: 1 }} role='list' aria-label='Redes sociales'>
          {staff.linkedin && (
            <Link
              href={staff.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`LinkedIn de ${staff.fullName} (abre en nueva pestaña)`}
              role='listitem'
            >
              <IconButton
                size='small'
                tabIndex={-1}
                aria-hidden
                sx={{
                  color: COLORS.yellow,
                  bgcolor: 'rgba(255,255,255,0.08)',
                  borderRadius: '10px',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.15)' },
                }}
              >
                <LinkedinLogo size={22} weight='fill' />
              </IconButton>
            </Link>
          )}
          {staff.instagram && (
            <Link
              href={staff.instagram}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`Instagram de ${staff.fullName} (abre en nueva pestaña)`}
              role='listitem'
            >
              <IconButton
                size='small'
                tabIndex={-1}
                aria-hidden
                sx={{
                  color: COLORS.yellow,
                  bgcolor: 'rgba(255,255,255,0.08)',
                  borderRadius: '10px',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.15)' },
                }}
              >
                <InstagramLogo size={22} weight='fill' />
              </IconButton>
            </Link>
          )}
          {staff.website && (
            <Link
              href={staff.website}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`Sitio web de ${staff.fullName} (abre en nueva pestaña)`}
              role='listitem'
            >
              <IconButton
                size='small'
                tabIndex={-1}
                aria-hidden
                sx={{
                  color: COLORS.yellow,
                  bgcolor: 'rgba(255,255,255,0.08)',
                  borderRadius: '10px',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.15)' },
                }}
              >
                <Globe size={22} weight='fill' />
              </IconButton>
            </Link>
          )}
          {staff.email && (
            <Link
              href={`mailto:${staff.email}`}
              aria-label={`Enviar email a ${staff.fullName}`}
              role='listitem'
            >
              <IconButton
                size='small'
                tabIndex={-1}
                aria-hidden
                sx={{
                  color: COLORS.yellow,
                  bgcolor: 'rgba(255,255,255,0.08)',
                  borderRadius: '10px',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.15)' },
                }}
              >
                <Envelope size={22} weight='fill' />
              </IconButton>
            </Link>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default StaffModal;
