'use client';
import { jersey10 } from '@/lib/fonts';
import { EASE, COLORS } from '@/lib/tokens';

import Box from '@mui/material/Box';
import { useCommunityModal } from '@/providers/CommunityModalProvider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { GithubLogo, InstagramLogo, WhatsappLogo, LinkedinLogo } from '@phosphor-icons/react';
import Link from 'next/link';


const NAV_LINKS = [
  { label: 'Eventos', href: '#eventos' },
  { label: 'Nuestra historia', href: '#historia' },
  { label: 'Nuestros valores', href: '#valores' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Staff', href: '#staff' },
];

const ACCIONES_LINKS = [
  { label: 'Enviar mi propuesta', href: 'mailto:contacto@jschile.org' },
];

const SOCIAL = [
  { Icon: GithubLogo,    href: 'https://github.com/JSConfCL/org-landing',     label: 'GitHub' },
  { Icon: InstagramLogo, href: 'https://instagram.com/jschile',               label: 'Instagram' },
  { Icon: WhatsappLogo,  href: 'https://chat.whatsapp.com/GXBnfGrTbfvBo8KxOtMOZL?mode=gi_t', label: 'WhatsApp' },
  { Icon: LinkedinLogo,  href: 'https://linkedin.com/company/jscriptchile',  label: 'LinkedIn' },
];

const linkSx = {
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: '0.95rem',
  color: COLORS.textPrimary,
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
      color: COLORS.textPrimary,
      mb: 1,
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
        backgroundImage: "url(/assets/Bg-footer.webp)",
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        pt: { xs: '75%', sm: '35%' },
      }}
    >
      {/* ── Contenido principal ── */}
      <Container maxWidth={false} sx={{ px: { xs: 4, md: 8, lg: 10 }, pt: { xs: 6, md: 8 }, pb: { xs: 4, md: 6 } }}>
        <Grid container spacing={4} alignItems='flex-start'>

          {/* Logo */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Link href='/' aria-label='Ir al inicio' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Box
                component='img'
                src='/assets/logo-cljs.svg'
                alt='JSChile'
                sx={{ width: { xs: 120, md: 160 }, height: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </Link>
          </Grid>

          {/* Navegación */}
          <Grid size={{ xs: 6, md: 2 }}>
            {colTitle('Navegación')}
            {/* WCAG AA: nav landmark para los enlaces del footer */}
            <Box component='nav' aria-label='Secciones del sitio'>
              {NAV_LINKS.map((l) => (
                <Box key={l.label} component='a' href={l.href} sx={linkSx}>
                  {l.label}
                </Box>
              ))}
            </Box>
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
            <Box
              component='a'
              href='mailto:contacto@jschile.org'
              sx={linkSx}
            >
              contacto@jschile.org
            </Box>
          </Grid>

          {/* Síguenos */}
          <Grid size={{ xs: 6, md: 2 }}>
            {colTitle('Síguenos')}
            {/* WCAG AA: aria-label descriptivo incluye "(abre en nueva pestaña)" */}
            <Box component='nav' aria-label='Redes sociales' sx={{ display: 'flex', gap: 0.5 }}>
              {SOCIAL.map(({ Icon, href, label }) => (
                <IconButton
                  key={label}
                  component='a'
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`${label} (abre en nueva pestaña)`}
                  size='small'
                  sx={{
                    color: COLORS.textPrimary,
                    bgcolor: 'rgba(0,0,0,0.08)',
                    borderRadius: '8px',
                    '&:hover': { bgcolor: 'rgba(0,0,0,0.15)' },
                  }}
                >
                  <Icon size={20} weight='fill' aria-hidden />
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
        <Typography sx={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '0.9rem', color: COLORS.textPrimary }}>
          Comunidad JSChile • Desde 2013
        </Typography>
        <Typography sx={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '0.9rem', color: COLORS.textPrimary }}>
          © 2026 JSChile — Hecho con 🖤 por{' '}
          <Box
            component='a'
            href='https://otroanguloweb.cl/'
            target='_blank'
            rel='noopener noreferrer'
            sx={{ color: COLORS.textPrimary, textDecoration: 'underline', '&:hover': { opacity: 0.7 } }}
          >
            Erika Pinedo
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
