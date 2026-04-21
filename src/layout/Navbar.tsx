'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'next/link';

import { AnimatedButton } from '@/components/AnimatedButton';
import { CommunityJoinModal } from '@/components/CommunityJoinModal';
import { Stack } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Navbar = () => {
  const [isCommunityModalOpen, setIsCommunityModalOpen] = React.useState(false);

  return (
    <>
      <AppBar
        position='sticky'
        color='transparent'
        elevation={0}
        sx={{
          top: 0,
          zIndex: 1100,
          borderBottom: '2px solid rgba(255,255,255,0.15)',
          bgcolor: 'rgba(25, 25, 25, 0.6)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          py: 1,
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Container maxWidth={false}>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Link
                href='/'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Typography
                    sx={{
                      fontWeight: 950,
                      color: '#F0DB4F',
                      fontSize: { xs: '1rem', md: '1.2rem' },
                      letterSpacing: '-0.04em',
                    }}
                  >
                    JavaScript
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 950,
                      color: 'white',
                      fontSize: { xs: '1rem', md: '1.2rem' },
                      letterSpacing: '-0.04em',
                    }}
                  >
                    Chile
                  </Typography>
                </Box>
              </Link>
            </Box>

            {/* Action Buttons & Mobile Menu Toggle */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <AnimatedButton
                onClick={() => setIsCommunityModalOpen(true)}
                variant='contained'
                color='primary'
                hoverColor='#FFE970'
                disableElevation
                sx={{
                  display: 'flex',
                  fontWeight: 950,
                  px: { xs: 1, sm: 4 },
                  py: { xs: 1, sm: 1.5 },
                  borderRadius: 100,
                  fontSize: { xs: '0.7rem', sm: '1rem' },
                  bgcolor: '#F0DB4F',
                  color: 'black',
                }}
              >
                <Stack display='flex' flexDirection='row' alignItems='center'>
                  <WhatsAppIcon sx={{ mr: 1 }} />
                  Unirse a la Comunidad
                </Stack>
              </AnimatedButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <CommunityJoinModal
        open={isCommunityModalOpen}
        onClose={() => setIsCommunityModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
