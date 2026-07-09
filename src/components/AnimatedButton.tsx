'use client';
import { COLORS } from '@/lib/tokens';

import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { motion } from 'framer-motion';

type AnimatedButtonProps = ButtonProps & {
  hoverColor?: string;
  hoverTextColor?: string;
  target?: string;
  rel?: string;
};

export const AnimatedButton = ({
  children,
  hoverColor = COLORS.yellow,
  hoverTextColor,
  sx,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  disabled,
  fullWidth,
  ...props
}: AnimatedButtonProps) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <motion.div
      whileHover={!disabled ? { scale: 1.04 } : undefined}
      whileTap={!disabled ? { scale: 0.97 } : undefined}
      style={fullWidth ? { display: 'flex', width: '100%' } : { display: 'inline-flex' }}
    >
      <Button
        {...props}
        disabled={disabled}
        fullWidth={fullWidth}
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
            ...(hoverTextColor && {
              '&:hover': { color: hoverTextColor },
            }),
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
    </motion.div>
  );
};
