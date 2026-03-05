'use client';

import React, { useState } from 'react';
import { CardActions } from '@mui/material';
import { CallForSpeakerModalForm } from './CallForSpeakerModal';
import { AnimatedButton } from '@/components/AnimatedButton';
import { AnimatedCard } from '@/components/AnimatedCard';

export const CallForSpeaker = () => {
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
            Envía tu Propuesta
          </AnimatedButton>
        </CardActions>
      </AnimatedCard>

      <CallForSpeakerModalForm
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
