'use client';

import React, { useState } from 'react';
import { CardActions } from '@mui/material';
import { OurStoryModal } from './OurStoryModal';
import { AnimatedButton } from '@/components/AnimatedButton';
import { AnimatedCard } from '@/components/AnimatedCard';

export const OurStory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <AnimatedCard sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardActions sx={{ p: 2 }}>
          <AnimatedButton
            variant='contained'
            color='secondary'
            fullWidth
            onClick={() => setIsModalOpen(true)}
          >
            Conoce Nuestra Historia
          </AnimatedButton>
        </CardActions>
      </AnimatedCard>

      <OurStoryModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
