'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { AnimatedButton } from '@/components/AnimatedButton';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
    title: 'Conference Audience',
  },
  {
    img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
    title: 'Meetup Collaboration',
  },
  {
    img: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40',
    title: 'Tech Speaker',
  },
  {
    img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b',
    title: 'Networking Event',
  },
  {
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
    title: 'Hackathon Team',
  },
];

const pattern = [
  { rows: 2, cols: 2 },
  { rows: 2, cols: 1 },
  { rows: 1, cols: 1 },
  { rows: 1, cols: 1 },
  { rows: 1, cols: 1 },
];

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const HomeGallery = () => {
  return (
    <Container maxWidth='xl' sx={{ px: { xs: 4, md: 8, lg: 12 }, mb: 4 }}>
      <Grid container spacing={4}>
        <Grid size={12}>
          <Box
            sx={{
              bgcolor: 'white',
              borderRadius: '32px',
              p: { xs: 6, md: 10 },
            }}
          >
            <Grid container spacing={8} alignItems='center'>
              <Grid size={{ xs: 12, lg: 5 }}>
                <Typography variant='h2' sx={{ mb: 4, color: 'black' }}>
                  Galería de Eventos
                </Typography>
                <Typography
                  sx={{
                    mb: 6,
                    color: '#666',
                    fontWeight: 600,
                    fontSize: '1.4rem',
                    lineHeight: 1.5,
                  }}
                >
                  Revive los mejores momentos de nuestros meetups y
                  conferencias. Inspiración y aprendizaje en cada encuentro.
                </Typography>
                <AnimatedButton
                  variant='contained'
                  color='secondary'
                  href='https://gallery.jsconf.cl/'
                  target='_blank'
                  rel='noopener noreferrer'
                  sx={{ py: 2.5, px: 8 }}
                >
                  Galería Completa →
                </AnimatedButton>
              </Grid>
              <Grid size={{ xs: 12, lg: 7 }}>
                <Box sx={{ width: '100%', height: 'auto' }}>
                  <ImageList
                    variant='quilted'
                    cols={3}
                    rowHeight={200}
                    gap={16}
                  >
                    {itemData.map((item, index) => {
                      const layout = pattern[index % pattern.length];
                      return (
                        <ImageListItem
                          key={item.img}
                          cols={layout.cols || 1}
                          rows={layout.rows || 1}
                        >
                          <img
                            {...srcset(item.img, 200, layout.rows, layout.cols)}
                            alt={item.title}
                            loading='lazy'
                            style={{
                              borderRadius: '16px',
                              display: 'block',
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        </ImageListItem>
                      );
                    })}
                  </ImageList>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeGallery;
