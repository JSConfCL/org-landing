'use client';

import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { motion } from 'framer-motion';

type AnimatedButtonProps = ButtonProps & {
  hoverColor?: string;
  target?: string;
  rel?: string;
};

export const AnimatedButton = ({
  children,
  hoverColor = '#F0DB4F',
  sx,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  disabled,
  ...props
}: AnimatedButtonProps) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <Button
      {...props}
      disabled={disabled}
      onMouseEnter={(event) => {
        if (!disabled) setIsActive(true);
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event) => {
        setIsActive(false);
        onMouseLeave?.(event);
      }}
      onFocus={(event) => {
        if (!disabled) setIsActive(true);
        onFocus?.(event);
      }}
      onBlur={(event) => {
        setIsActive(false);
        onBlur?.(event);
      }}
      sx={[
        {
          position: 'relative',
          overflow: 'hidden',
          isolation: 'isolate',
          transition: 'color 0.25s ease',
          '&:hover': {
            color: '#000000',
          },
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
          transformOrigin: 'left center',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
    </Button>
  );
};
