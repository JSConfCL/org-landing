'use client';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'next/link';

import { AnimatedButton } from '@/components/AnimatedButton';
import { useCommunityModal } from '@/providers/CommunityModalProvider';
import { Stack } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Navbar = () => {
  const { openModal } = useCommunityModal();

  return (
    <>
      <AppBar
        position='sticky'
        color='transparent'
        elevation={0}
        sx={{
          top: 0,
          zIndex: 1100,
          borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
          bgcolor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(5.4px)',
          WebkitBackdropFilter: 'blur(5.4px)',
          py: 1,
          boxShadow: 'none',
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
                      color: '#000',
                      fontSize: { xs: '1rem', md: '1.2rem' },
                      letterSpacing: '-0.04em',
                    }}
                  >
                    JavaScript
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 950,
                      color: '#000',
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
                onClick={openModal}
                variant='contained'
                color='secondary'
                hoverColor='#333'
                disableElevation
                sx={{
                  display: 'flex',
                  fontWeight: 950,
                  px: { xs: 1, sm: 4 },
                  py: { xs: 1, sm: 1.5 },
                  borderRadius: 100,
                  fontSize: { xs: '0.7rem', sm: '1rem' },
                  bgcolor: '#000',
                  color: '#fff',
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

    </>
  );
};

export default Navbar;
