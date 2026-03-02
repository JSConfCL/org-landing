'use client';

import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

// Brand Palette based on JSChile Logo
const brand = {
  50: "#FEFCE8",
  100: "#FEF9C3",
  200: "#FEF08A",
  300: "#FDE047",
  400: "#FACC15",
  500: "#ecd51a", // Official JS Yellow (Matches Logo)
  600: "#EAB308",
  700: "#CA8A04",
  800: "#A16207",
  900: "#713F12",
};

const gray = {
  50: '#FAFAFA',
  100: '#F5F5F5',
  200: '#EEEEEE',
  300: '#E0E0E0',
  400: '#BDBDBD',
  500: '#9E9E9E',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
};

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: brand[500], // Yellow
      contrastText: '#000000',
    },
    secondary: {
      main: '#000000',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
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
      textTransform: "none", // Prevent uppercase
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
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          marginBottom: 0,
          "&:last-child": {
            paddingBottom: "32px",
          },
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "32px",
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
            backgroundColor: '#000000',
            color: '#FFFFFF',
            '&:hover': {
                backgroundColor: '#333333',
            },
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
