'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import { StaffMember } from '@/data/data_staff';
import { StaffCard } from './StaffCard';

interface StaffCarouselProps {
  staff: StaffMember[];
  onStaffClick: (staff: StaffMember) => void;
  size?: 'large' | 'small';
  isExStaff?: boolean;
  isModalOpen?: boolean;
  reverseDirection?: boolean;
}

export const StaffCarousel: React.FC<StaffCarouselProps> = ({
  staff,
  onStaffClick,
  size = 'large',
  isExStaff = false,
  isModalOpen = false,
  reverseDirection = false,
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Pausar si el modal está abierto
  React.useEffect(() => {
    if (isModalOpen) {
      setIsPaused(true);
    } else if (!isHovering) {
      setIsPaused(false);
    }
  }, [isModalOpen, isHovering]);

  // Duplicar el array para crear efecto infinito
  const triplicatedStaff = [...staff, ...staff, ...staff];
  const duplicatedStaff = reverseDirection
    ? triplicatedStaff.reverse()
    : triplicatedStaff;

  const cardWidth = 120;
  const gap = 16;
  const totalWidth = (cardWidth + gap) * staff.length;
  const animationValues = reverseDirection
    ? [0, -totalWidth]
    : [-totalWidth, 0];

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        py: 1,
      }}
    >
      <motion.div
        key={animationKey}
        style={{
          display: 'flex',
          gap: `${gap}px`,
          width: 'fit-content',
        }}
        animate={{
          x: isPaused ? undefined : animationValues,
        }}
        transition={{
          duration: staff.length * 5,
          ease: 'linear',
          repeat: Infinity,
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {duplicatedStaff.map((member, index) => (
          <Box
            key={`${member.id}-${index}`}
            sx={{
              width: cardWidth,
              flexShrink: 0,
            }}
          >
            <StaffCard
              staff={member}
              onClick={() => onStaffClick(member)}
              size={size}
              isExStaff={isExStaff}
            />
          </Box>
        ))}
      </motion.div>

      {/* Gradientes en los bordes para efecto fade */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100px',
          height: '100%',
          background: 'linear-gradient(to right, white, transparent)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100px',
          height: '100%',
          background: 'linear-gradient(to left, white, transparent)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
    </Box>
  );
};
