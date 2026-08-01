'use client';

import { CardActions } from '@mui/material';
import { AnimatedButton } from '@/components/AnimatedButton';
import { BaseCard } from '@/components/BaseCard';

export const Gallery = () => {
  return (
    <BaseCard sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardActions sx={{ p: 2 }}>
        <AnimatedButton
          variant='contained'
          color='secondary'
          fullWidth
          href='https://gallery.jsconf.cl/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Revive los Momentos
        </AnimatedButton>
      </CardActions>
    </BaseCard>
  );
};
