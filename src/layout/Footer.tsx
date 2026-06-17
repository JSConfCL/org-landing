'use client';

import Box from '@mui/material/Box';
import { useCommunityModal } from '@/providers/CommunityModalProvider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Jersey_10 } from 'next/font/google';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const jersey10 = Jersey_10({ weight: '400', subsets: ['latin'], display: 'swap' });

const NAV_LINKS = [
  { label: 'Nuestra historia', href: '#historia' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Nuestros valores', href: '#valores' },
  { label: 'Staff', href: '#staff' },
];

const ACCIONES_LINKS = [
  { label: 'Enviar mi propuesta', href: 'mailto:contacto@jschile.org' },
];

const SOCIAL = [
  { Icon: TwitterIcon,   href: 'https://twitter.com/jscriptchile',           label: 'Twitter' },
  { Icon: InstagramIcon, href: 'https://instagram.com/jschile',               label: 'Instagram' },
  { Icon: WhatsAppIcon,  href: 'https://chat.whatsapp.com/GXBnfGrTbfvBo8KxOtMOZL?mode=gi_t', label: 'WhatsApp' },
  { Icon: LinkedInIcon,  href: 'https://linkedin.com/company/jscriptchile',  label: 'LinkedIn' },
];

const linkSx = {
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: '0.95rem',
  color: '#1A1A1A',
  textDecoration: 'none',
  display: 'block',
  mb: 1.5,
  '&:hover': { textDecoration: 'underline' },
};

const colTitle = (text: string) => (
  <Typography
    sx={{
      fontFamily: jersey10.style.fontFamily,
      fontWeight: 400,
      fontSize: '1.35rem',
      color: '#1A1A1A',
      mb: 2.5,
    }}
  >
    {text}
  </Typography>
);

const buttonLinkSx = {
  ...linkSx,
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  textAlign: 'left' as const,
};

const Footer = () => {
  const { openModal } = useCommunityModal();

  return (
    <Box
      id='contacto'
      component='footer'
      sx={{
        backgroundImage: "url(/assets/hero-bg.png)",
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* ── Contenido principal ── */}
      <Container maxWidth={false} sx={{ px: { xs: 4, md: 8, lg: 10 }, pt: { xs: 6, md: 8 }, pb: { xs: 4, md: 6 } }}>
        <Grid container spacing={4} alignItems='flex-start'>

          {/* Logo */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              component='img'
              src='/assets/javascript-chile-logo.png'
              alt='JavaScript Chile'
              sx={{ width: { xs: 160, md: 220 }, height: 'auto', objectFit: 'contain' }}
            />
          </Grid>

          {/* Title */}
          <Grid size={{ xs: 6, md: 2 }}>
            {colTitle('Title')}
            {NAV_LINKS.map((l) => (
              <Box key={l.label} component='a' href={l.href} sx={linkSx}>
                {l.label}
              </Box>
            ))}
          </Grid>

          {/* Acciones */}
          <Grid size={{ xs: 6, md: 2 }}>
            {colTitle('Acciones')}
            <Box component='button' onClick={openModal} sx={buttonLinkSx}>
              Unirme al Whatsapp
            </Box>
            {ACCIONES_LINKS.map((l) => (
              <Box
                key={l.label}
                component='a'
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                sx={linkSx}
              >
                {l.label}
              </Box>
            ))}
          </Grid>

          {/* Contáctanos */}
          <Grid size={{ xs: 6, md: 2 }}>
            {colTitle('Contáctanos')}
            <Box component='button' onClick={openModal} sx={buttonLinkSx}>
              Unirme al Whatsapp
            </Box>
          </Grid>

          {/* Síguenos */}
          <Grid size={{ xs: 6, md: 2 }}>
            {colTitle('Síguenos')}
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              {SOCIAL.map(({ Icon, href, label }) => (
                <IconButton
                  key={label}
                  component='a'
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={label}
                  size='small'
                  sx={{
                    color: '#1A1A1A',
                    bgcolor: 'rgba(0,0,0,0.08)',
                    borderRadius: '8px',
                    '&:hover': { bgcolor: 'rgba(0,0,0,0.15)' },
                  }}
                >
                  <Icon sx={{ fontSize: 20 }} />
                </IconButton>
              ))}
            </Box>
          </Grid>

        </Grid>
      </Container>

      {/* ── Barra inferior ── */}
      <Box
        sx={{
          borderTop: '1px solid rgba(0,0,0,0.15)',
          px: { xs: 4, md: 8, lg: 10 },
          py: { xs: 2, md: 2.5 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 1,
        }}
      >
        <Typography sx={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '0.9rem', color: '#1A1A1A' }}>
          Comunidad de JavaScript en Chile • Desde 2013
        </Typography>
        <Typography sx={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '0.9rem', color: '#1A1A1A' }}>
          © 2026 JavaScript Chile
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
