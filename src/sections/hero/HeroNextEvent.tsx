import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BoltIcon from '@mui/icons-material/Bolt';
import { AnimatedButton } from '@/components/AnimatedButton';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Stack } from '@mui/material';

export const HeroNextEvent = () => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant='overline'
          sx={{
            fontWeight: 800,
            color: '#000',
            mb: 1.5,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            letterSpacing: '0.1em',
            fontSize: '0.8rem',
          }}
        >
          <Box
            component='span'
            sx={{ color: 'primary.main', fontSize: '1.2rem' }}
          >
            <BoltIcon />
          </Box>{' '}
          PRÓXIMOS EVENTOS
        </Typography>
        <Typography
          variant='body1'
          sx={{
            fontWeight: 600,
            fontSize: '1rem',
          }}
        >
          🚀 ¿Listo para aprender, conectar y crecer? Descubre nuestros próximos
          eventos y súmate a la comunidad 💛
        </Typography>
      </CardContent>
      <CardActions>
        <AnimatedButton
          variant='contained'
          color='secondary'
          fullWidth
          href='https://luma.com/jschile'
          target='_blank'
        >
          <Stack display='flex' flexDirection='row' alignItems='center'>
            <CalendarMonthIcon sx={{ mr: 1 }} />
            Ver próximos eventos
          </Stack>
        </AnimatedButton>
      </CardActions>
    </Card>
  );
};
