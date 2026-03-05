import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const HeroInfo = () => {
  return (
    <Card
      sx={{
        bgcolor: 'primary.main', // Matches the yellow in the logo (Standard JS Yellow)
        color: 'black',
        height: '100%',
        borderRadius: '32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        p: 4,
        position: 'relative',
        overflow: 'hidden',
        border: 'none',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
      }}
    >
      <Grid container spacing={4} alignItems='center'>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography
            variant='h1'
            sx={{
              fontWeight: 800,
              mb: 3,
              lineHeight: 1,
              fontSize: { xs: '2.5rem', md: '4rem' },
              letterSpacing: '-0.04em',
            }}
          >
            JavaScript Chile
          </Typography>
          <Typography
            variant='body1'
            sx={{
              mb: 0,
              fontWeight: 600,
              lineHeight: 1.5,
              maxWidth: '520px',
              fontSize: '1.1rem',
              color: '#1A1A1A',
              position: 'relative',
              zIndex: 1,
            }}
          >
            Somos una comunidad de desarrolladores apasionados por la
            tecnología. Organizamos meetups, workshops e iniciativas para
            compartir conocimiento, conectar profesionales y construir el futuro
            del desarrollo en Chile.
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Logo from Assets - Bigger size as requested */}
          <Box
            component='img'
            src='/assets/javascript-chile-logo.png'
            alt='JS Chile Logo large'
            sx={{
              width: { xs: 200, md: 280 },
              height: 'auto',
              objectFit: 'contain',
              //mixBlendMode: "multiply", // Helps blend the logo background if slightly different
            }}
          />
        </Grid>
      </Grid>
    </Card>
  );
};
