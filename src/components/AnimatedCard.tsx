'use client';

import * as React from 'react';
import Card, { CardProps } from '@mui/material/Card';
import { motion } from 'framer-motion';

type AnimatedCardProps = CardProps & {
  hoverColor?: string;
};

export const AnimatedCard = ({
  children,
  hoverColor = '#000000',
  sx,
  onMouseEnter,
  onMouseLeave,
  ...props
}: AnimatedCardProps) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <Card
      {...props}
      onMouseEnter={(event) => {
        setIsActive(true);
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event) => {
        setIsActive(false);
        onMouseLeave?.(event);
      }}
      sx={[
        {
          position: 'relative',
          overflow: 'hidden',
          isolation: 'isolate',
          transition: 'all 0.25s ease',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <motion.span
        aria-hidden
        animate={{ scaleX: isActive ? 1 : 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: hoverColor,
          transformOrigin: 'right center',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
    </Card>
  );
};
