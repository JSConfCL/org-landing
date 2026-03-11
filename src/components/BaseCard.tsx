'use client';

import * as React from 'react';
import Card, { CardProps } from '@mui/material/Card';

export type BaseCardProps = CardProps;

export const BaseCard = ({
  children,
  sx,
  ...props
}: BaseCardProps) => {
  return (
    <Card
      {...props}
      sx={[
        {
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.25s ease',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Card>
  );
};
