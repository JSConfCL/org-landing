import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BoltIcon from '@mui/icons-material/Bolt';
import { AnimatedButton } from '@/components/AnimatedButton';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const HeroNextEvent = () => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'white',
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant='h5'
          sx={{
            fontWeight: 800,
            color: '#000',
            gap: 1,
            letterSpacing: '0.1em',
          }}
        >
          <Box component='span'>
            <BoltIcon sx={{ color: 'primary.main', fontSize: '2rem' }} />
          </Box>
          PRÓXIMOS EVENTOS
        </Typography>

        <Typography
          variant='h6'
          mt={2}
          lineHeight={2}
          // sx={{
          //   fontWeight: 600,
          //   fontSize: '1.2rem',
          // }}
        >
          ¿Listo para aprender, conectar y crecer? Descubre nuestros próximos
          eventos y súmate a la comunidad
          <Box component='span'>
            <FavoriteIcon
              sx={{ color: 'primary.main', fontSize: '1.5rem', pt: 1 }}
            />
          </Box>
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
