'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { keyframes } from '@mui/material/styles';

const HALL_OF_FAME = [
  {
    name: 'Maria González',
    linkedin: 'https://www.linkedin.com/in/maria-gonzalez/',
    relevant: false,
  },
  {
    name: 'Carlos Silva',
    linkedin: 'https://www.linkedin.com/in/carlos-silva/',
    relevant: true,
  },
  {
    name: 'Ana Martínez',
    linkedin: 'https://www.linkedin.com/in/ana-martinez/',
    relevant: false,
  },
  {
    name: 'Diego Torres',
    linkedin: 'https://www.linkedin.com/in/diego-torres/',
    relevant: false,
  },
  {
    name: 'Valentina Rojas',
    linkedin: 'https://www.linkedin.com/in/valentina-rojas/',
    relevant: false,
  },
  {
    name: 'Sebastián Muñoz',
    linkedin: 'https://www.linkedin.com/in/sebastian-munoz/',
    relevant: true,
  },
  {
    name: 'Camila Fernández',
    linkedin: 'https://www.linkedin.com/in/camila-fernandez/',
    relevant: false,
  },
  {
    name: 'Mateo Castillo',
    linkedin: 'https://www.linkedin.com/in/mateo-castillo/',
    relevant: false,
  },
  {
    name: 'Josefina Núñez',
    linkedin: 'https://www.linkedin.com/in/josefina-nunez/',
    relevant: false,
  },
  {
    name: 'Felipe Contreras',
    linkedin: 'https://www.linkedin.com/in/felipe-contreras/',
    relevant: false,
  },
  {
    name: 'Catalina Morales',
    linkedin: 'https://www.linkedin.com/in/catalina-morales/',
    relevant: false,
  },
  {
    name: 'Benjamín Castro',
    linkedin: 'https://www.linkedin.com/in/benjamin-castro/',
    relevant: true,
  },
  {
    name: 'Fernanda Ramírez',
    linkedin: 'https://www.linkedin.com/in/fernanda-ramirez/',
    relevant: false,
  },
  {
    name: 'Gabriel Soto',
    linkedin: 'https://www.linkedin.com/in/gabriel-soto/',
    relevant: false,
  },
  {
    name: 'Matías Vargas',
    linkedin: 'https://www.linkedin.com/in/matias-vargas/',
    relevant: false,
  },
];

const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-25%); }
`;

const scrollRight = keyframes`
  0% { transform: translateX(-25%); }
  100% { transform: translateX(0); }
`;

const MarqueeRow = ({
  items,
  direction = 'left',
}: {
  items: typeof HALL_OF_FAME;
  direction?: 'left' | 'right';
}) => {
  // Duplicate items 4 times to ensure seamless loop and coverage
  // A standard screen needs enough items. 5 items * 4 = 20 items is safe.
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <Box sx={{ overflow: 'hidden', width: '100%', py: 1 }}>
      <Box
        sx={{
          display: 'flex',
          width: 'max-content',
          animation: `${
            direction === 'left' ? scrollLeft : scrollRight
          } 40s linear infinite`,
          '&:hover': {
            animationPlayState: 'paused',
          },
        }}
      >
        {marqueeItems.map((member, index) => (
          <Box
            key={`${member.name}-${index}`}
            sx={{
              px: 3,
              py: 1.5,
              mx: 1, // Use mx for consistent spacing instead of gap
              bgcolor: member.relevant ? '#F0DB4F' : '#F5F5F5',
              borderRadius: 100,
              fontWeight: 800,
              fontSize: '0.9rem',
              color: 'black',
              whiteSpace: 'nowrap',
            }}
          >
            {member.name}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const HomeHallOfFame = () => {
  const row1 = HALL_OF_FAME.slice(0, 5);
  const row2 = HALL_OF_FAME.slice(5, 10);
  const row3 = HALL_OF_FAME.slice(10, 15);

  return (
    <Container maxWidth='xl' sx={{ px: { xs: 4, md: 8, lg: 12 }, mb: 4 }}>
      <Grid container spacing={4}>
        <Grid size={12}>
          <Box
            sx={{
              bgcolor: 'white',
              borderRadius: '32px',
              py: { xs: 6, md: 8 },
              px: { xs: 2, md: 2 },
              textAlign: 'center',
              overflow: 'hidden', // Ensure content stays within rounded corners
            }}
          >
            <Typography
              variant='h2'
              sx={{
                color: 'black',
                fontWeight: 900,
                letterSpacing: '-0.03em',
              }}
            >
              Hall of Fame
            </Typography>
            <Typography
              sx={{
                color: '#666',
                fontWeight: 600,
                fontSize: '1.2rem',
                mb: 8,
              }}
            >
              Miembros destacados de nuestra comunidad
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <MarqueeRow items={row1} direction='right' />
              <MarqueeRow items={row2} direction='left' />
              <MarqueeRow items={row3} direction='right' />
            </Box>

            <Typography
              sx={{
                textAlign: 'center',
                mt: 8,
                color: '#AAA',
                fontWeight: 700,
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              ✨ ¿Quieres aparecer aquí? Participa activamente en nuestros
              eventos y actividades
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeHallOfFame;
