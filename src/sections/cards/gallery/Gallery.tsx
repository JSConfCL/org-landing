'use client';

import React, { useState } from 'react';
import { CardActions } from '@mui/material';
import { GalleryModal } from './GalleryModal';
import { AnimatedButton } from '@/components/AnimatedButton';
import { BaseCard } from '@/components/BaseCard';

export const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <BaseCard sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardActions sx={{ p: 2 }}>
          <AnimatedButton
            variant='contained'
            color='secondary'
            fullWidth
            onClick={() => setIsModalOpen(true)}
          >
            Revive los Momentos
          </AnimatedButton>
        </CardActions>
      </BaseCard>

      <GalleryModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
