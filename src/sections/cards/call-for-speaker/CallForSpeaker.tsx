'use client';
import { CardActions } from '@mui/material';
import { AnimatedButton } from '@/components/AnimatedButton';
import { BaseCard } from '@/components/BaseCard';

export const CallForSpeaker = () => {
  return (
    <>
      <BaseCard
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardActions sx={{ p: 2 }}>
          <AnimatedButton
            variant='contained'
            color='secondary'
            fullWidth
            onClick={() => window.open('https://tally.so/r/3x4Q1d', '_blank')}
          >
            Envía tu Propuesta
          </AnimatedButton>
        </CardActions>
      </BaseCard>
    </>
  );
};
