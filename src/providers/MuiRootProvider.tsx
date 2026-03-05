'use client';

import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme/theme';

import Navbar from '@/layout/Navbar';
import Footer from '@/layout/Footer';
import Box from '@mui/material/Box';
import { StarsBackground } from '@/components/StarsBackground';

export default function MuiRootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            position: 'relative',
            bgcolor: '#0B0B0B',
            zIndex: 0,
          }}
        >
          <StarsBackground />
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Navbar />
          </Box>
          <Box sx={{ flexGrow: 1, py: 4, position: 'relative', zIndex: 1 }}>
            {children}
          </Box>
          <Box sx={{ px: { xs: 4, md: 4, lg: 12 }, pb: 8, position: 'relative', zIndex: 1 }}>
            <Footer />
          </Box>
        </Box>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
