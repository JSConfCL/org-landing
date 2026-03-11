'use client';

import React, { useState } from 'react';
import { CardActions } from '@mui/material';
import { CodeOfConductModal } from './CodeOfConductModal';
import { AnimatedButton } from '@/components/AnimatedButton';
import { BaseCard } from '@/components/BaseCard';

export const CodeOfConduct = () => {
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
            Lee Nuestros Valores
          </AnimatedButton>
        </CardActions>
      </BaseCard>

      <CodeOfConductModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
