'use client';

import { COLORS } from '@/lib/tokens';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme/theme';
import Footer from '@/layout/Footer';
import Box from '@mui/material/Box';

import { WhatsappFab } from '@/components/WhatsappFab';
import { CommunityModalProvider } from '@/providers/CommunityModalProvider';
import Navbar from '@/layout/Navbar';

export default function MuiRootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CommunityModalProvider>
          <Navbar />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              position: 'relative',
              bgcolor: COLORS.black,
              zIndex: 0,
            }}
          >
            <Box sx={{ flexGrow: 1, position: 'relative', zIndex: 1 }}>
              {children}
            </Box>

            <Footer />

            <WhatsappFab />
          </Box>
        </CommunityModalProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
