'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Box
      id='contacto'
      component='footer'
      sx={{
        bgcolor: '#FFFFFF',
        color: 'black',
        py: { xs: 1.5, md: 2 },
        px: { xs: 2, md: 4 },
        borderRadius: '32px',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: { xs: 1, md: 2 },
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
            color: 'black',
            fontSize: { xs: '1rem', md: '1.2rem' },
            letterSpacing: '-0.04em',
          }}
        >
          Chile
        </Typography>
      </Box>

      <Typography
        variant='body2'
        sx={{
          fontWeight: 500,
          color: '#666',
          fontSize: '0.75rem',
        }}
      >
        Comunidad de JavaScript • Desde 2013
      </Typography>

      <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
        <IconButton
          size='small'
          href='https://github.com/jschile'
          target='_blank'
          rel='noopener noreferrer'
          component='a'
          sx={{ color: '#000' }}
        >
          <GitHubIcon sx={{ fontSize: 18 }} />
        </IconButton>
        <IconButton
          size='small'
          href='https://linkedin.com/company/jscriptchile'
          target='_blank'
          rel='noopener noreferrer'
          component='a'
          sx={{ color: '#000' }}
        >
          <LinkedInIcon sx={{ fontSize: 18 }} />
        </IconButton>
        <IconButton
          size='small'
          href='https://twitter.com/jscriptchile'
          target='_blank'
          rel='noopener noreferrer'
          component='a'
          sx={{ color: '#000' }}
        >
          <TwitterIcon sx={{ fontSize: 18 }} />
        </IconButton>
        <IconButton
          size='small'
          href='mailto:contacto@jschile.org'
          component='a'
          sx={{ color: '#000' }}
        >
          <MailIcon sx={{ fontSize: 18 }} />
        </IconButton>
      </Box>

      <Typography
        variant='caption'
        sx={{ fontWeight: 500, color: '#999', fontSize: '0.65rem' }}
      >
        © 2026 JavaScript Chile • Desarrollado por{' '}
        <Link
          href='https://www.rivascode.dev/'
          target='_blank'
          rel='noopener noreferrer'
          color='inherit'
          underline='hover'
        >
          RivasCode
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
