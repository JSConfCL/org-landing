'use client';
import { COLORS } from '@/lib/tokens';

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
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
  const cardWidth = 120;
  const gap = 16;
  const totalWidth = (cardWidth + gap) * staff.length;
  // non-reversed: x goes from -totalWidth → 0 (moves right)
  // reversed:     x goes from 0 → -totalWidth (moves left)
  const x = useMotionValue(reverseDirection ? 0 : -totalWidth);
  const speed = totalWidth / (staff.length * 5 * 1000); // px per ms

  // Two independent reasons to pause — use a ref so changes don't re-render
  const hovering = useRef(false);
  const modalOpen = useRef(isModalOpen);

  useEffect(() => {
    modalOpen.current = isModalOpen;
  }, [isModalOpen]);

  useAnimationFrame((_, delta) => {
    if (hovering.current || modalOpen.current) return;
    let current = x.get();
    if (reverseDirection) {
      current -= speed * delta;
      if (current <= -totalWidth) current += totalWidth;
    } else {
      current += speed * delta;
      if (current >= 0) current -= totalWidth;
    }
    x.set(current);
  });

  const triplicatedStaff = [...staff, ...staff, ...staff];

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', py: 1 }}>
      <motion.div
        style={{ display: 'flex', gap: `${gap}px`, width: 'fit-content', x }}
        onMouseEnter={() => { hovering.current = true; }}
        onMouseLeave={() => { hovering.current = false; }}
      >
        {triplicatedStaff.map((member, index) => (
          <Box key={`${member.id}-${index}`} sx={{ width: cardWidth, flexShrink: 0 }}>
            <StaffCard
              staff={member}
              onClick={() => onStaffClick(member)}
              size={size}
              isExStaff={isExStaff}
            />
          </Box>
        ))}
      </motion.div>

      <Box
        sx={{
          position: 'absolute', top: 0, left: 0, width: '100px', height: '100%',
          background: `linear-gradient(to right, ${COLORS.yellow}, transparent)`,
          pointerEvents: 'none', zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute', top: 0, right: 0, width: '100px', height: '100%',
          background: `linear-gradient(to left, ${COLORS.yellow}, transparent)`,
          pointerEvents: 'none', zIndex: 1,
        }}
      />
    </Box>
  );
};
