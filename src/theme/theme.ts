import { COLORS } from '@/lib/tokens';

import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

// Brand Palette based on JSChile Logo
const brand = {
  50:  COLORS.yellowHover,
  100: COLORS.yellowHover,
  200: COLORS.yellowHover,
  300: COLORS.yellow,
  400: COLORS.yellow,
  500: COLORS.yellow,
  600: COLORS.yellowMid,
  700: COLORS.yellowDark,
  800: COLORS.olive,
  900: COLORS.oliveDark,
};

const gray = {
  50:  '#FAFAFA',
  100: '#F5F5F5',
  200: '#EEEEEE',
  300: '#E0E0E0',
  400: '#BDBDBD',
  500: '#9E9E9E',
  600: COLORS.gray,
  700: COLORS.gray,
  800: COLORS.charcoal,
  900: COLORS.black,
};

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: brand[500],
      dark: brand[500],  // keeps bg unchanged on hover — AnimatedButton's span handles it
      contrastText: COLORS.black,
    },
    secondary: {
      main: COLORS.black,
      dark: COLORS.black,  // same reason
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: COLORS.black,
      secondary: gray[600],
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontSize: '3.5rem',
      fontWeight: 900,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    button: {
      fontWeight: 700,
      textTransform: 'none', // Prevent uppercase
    },
  },
  shape: {
    borderRadius: 16, // Default for most inputs/elements
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          maxWidth: '100vw',
          overflowX: 'clip',
          scrollBehavior: 'smooth',
        },
        body: {
          maxWidth: '100vw',
          overflowX: 'clip',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        /* WCAG AA: detiene animaciones CSS para usuarios con prefers-reduced-motion */
        '@media (prefers-reduced-motion: reduce)': {
          '*, *::before, *::after': {
            animationDuration: '0.01ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.01ms !important',
            scrollBehavior: 'auto !important',
          },
        },
        a: {
          color: 'inherit',
          textDecoration: 'none',
        },
        // Remover márgenes de Typography globalmente
        '.MuiTypography-root': {
          marginBottom: 0,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          marginBottom: 0,
          '&:last-child': {
            paddingBottom: '32px',
          },
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '32px',
          paddingTop: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '24px 24px',
          borderRadius: 100,
          boxShadow: 'none',
          textTransform: 'none',
          fontWeight: 700,
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedSecondary: {
          backgroundColor: COLORS.black,
          color: '#FFFFFF',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          marginBottom: 0,
        },
        h1: {
          marginBottom: 0,
        },
        h2: {
          marginBottom: 0,
        },
        h3: {
          marginBottom: 0,
        },
        h4: {
          marginBottom: 0,
        },
        h5: {
          marginBottom: 0,
        },
        h6: {
          marginBottom: 0,
        },
        body1: {
          marginBottom: 0,
        },
        body2: {
          marginBottom: 0,
        },
        subtitle1: {
          marginBottom: 0,
        },
        subtitle2: {
          marginBottom: 0,
        },
        caption: {
          marginBottom: 0,
        },
        overline: {
          marginBottom: 0,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: 'none',
          borderRadius: 32,
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        },
      },
    },
  },
});

export default theme;
