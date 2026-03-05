'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { AnimatedButton } from '@/components/AnimatedButton';
import { CommunityJoinModal } from '@/components/CommunityJoinModal';
import { Stack } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const DRAWER_WIDTH = 250;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isCommunityModalOpen, setIsCommunityModalOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        bgcolor: '#0B0B0B',
        height: '100%',
        color: 'white',
        pt: 4,
      }}
    >
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center', gap: 0.5 }}>
        <Typography
          sx={{
            fontWeight: 950,
            color: '#F0DB4F',
            fontSize: '1rem',
            letterSpacing: '-0.04em',
          }}
        >
          JavaScript
        </Typography>
        <Typography
          sx={{
            fontWeight: 950,
            color: 'white',
            fontSize: '1rem',
            letterSpacing: '-0.04em',
          }}
        >
          Chile
        </Typography>
      </Box>
      <List></List>
      <Box sx={{ mt: 4 }}>
        <AnimatedButton
          onClick={() => setIsCommunityModalOpen(true)}
          variant='contained'
          color='primary'
          hoverColor='#FFE970'
          disableElevation
          sx={{
            fontWeight: 800,
            px: 4,
            py: 1,
            borderRadius: 100,
            bgcolor: '#F0DB4F',
            color: 'black',
          }}
        >
          Unirse a la Comunidad
        </AnimatedButton>
      </Box>
    </Box>
  );

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
