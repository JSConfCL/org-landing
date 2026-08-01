import { COLORS } from '@/lib/tokens';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AnimatedButton } from '@/components/AnimatedButton';
import { Stack } from '@mui/material';
import { Lightning, CalendarDots, Heart } from '@phosphor-icons/react';

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
            color: COLORS.black,
            gap: 1,
            letterSpacing: '0.1em',
          }}
        >
          <Box component='span'>
            <Lightning size={32} weight='fill' color={COLORS.yellow} />
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
            <Heart size={24} weight='fill' color={COLORS.yellow} />
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
            <CalendarDots size={20} weight='fill' style={{ marginRight: 8 }} />
            Ver próximos eventos
          </Stack>
        </AnimatedButton>
      </CardActions>
    </Card>
  );
};
