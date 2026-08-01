'use client';
import { COLORS } from '@/lib/tokens';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'next/link';

import { AnimatedButton } from '@/components/AnimatedButton';
import { useCommunityModal } from '@/providers/CommunityModalProvider';
import { Stack } from '@mui/material';
import { WhatsappLogo } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const { openModal } = useCommunityModal();
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY >= window.innerHeight * 0.8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <AppBar
        position='fixed'
        color='transparent'
        elevation={0}
        sx={{
          top: 0,
          zIndex: 1100,
          borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
          bgcolor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          py: 0,
          minHeight: '45px',
          boxShadow: 'none',
        }}
      >
        {/* WCAG AA: landmark de navegación principal */}
        <Container maxWidth={false}>
          <Toolbar component='nav' aria-label='Navegación principal' disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Link
                href='/'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
              >
                <Box
                  component='img'
                  src='/assets/square-logo-cljs.svg'
                  alt='JSChile'
                  sx={{ height: { xs: 32, md: 38 }, width: 'auto' }}
                />
              </Link>

            {/* Nav links — hidden on mobile, visible after hero */}
            <Box
              component='ul'
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 0.5,
                listStyle: 'none',
                m: 0,
                p: 0,
                opacity: pastHero ? 1 : 0,
                pointerEvents: pastHero ? 'auto' : 'none',
                transform: pastHero ? 'translateY(0)' : 'translateY(-6px)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
              }}
            >
              {[
                { label: 'Eventos',          href: '#eventos'  },
                { label: 'Nuestra historia', href: '#historia' },
                { label: 'Nuestros valores', href: '#valores'  },
                { label: 'Speakers',         href: '#speakers' },
                { label: 'Staff',            href: '#staff'    },
              ].map(({ label, href }) => (
                <Box component='li' key={label}>
                  <Box
                    component='a'
                    href={href}
                    sx={{
                      display: 'block',
                      px: 1.5,
                      py: 0.75,
                      fontFamily: 'Inter',
                      fontWeight: 600,
                      fontSize: '0.82rem',
                      letterSpacing: '0.01em',
                      color: '#fff',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      bgcolor: 'rgba(0,0,0,0.35)',
                      transition: 'background 0.18s, color 0.18s',
                      '&:hover': {
                        bgcolor: 'rgba(0,0,0,0.55)',
                        color: COLORS.yellow,
                      },
                    }}
                  >
                    {label}
                  </Box>
                </Box>
              ))}
            </Box>
            </Box>

            {/* Action button */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <AnimatedButton
                onClick={openModal}
                variant='contained'
                color='primary'
                hoverColor={COLORS.yellowHover}
                disableElevation
                sx={{
                  display: 'flex',
                  fontWeight: 700,
                  px: { xs: 2, sm: 2.5 },
                  py: { xs: 0.9, sm: 0.8 },
                  borderRadius: 100,
                  fontSize: { xs: '0.85rem', sm: '0.85rem' },
                  bgcolor: COLORS.yellow,
                  color: COLORS.black,
                }}
              >
                <Stack display='flex' flexDirection='row' alignItems='center'>
                  <WhatsappLogo size={20} weight='fill' style={{ marginRight: 8 }} />
                  Unirme al WhatsApp
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
