'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { StaffMember } from '@/data/data_staff';

interface StaffCardProps {
  staff: StaffMember;
  onClick: () => void;
  size?: 'large' | 'small';
  isExStaff?: boolean;
}

export const StaffCard: React.FC<StaffCardProps> = ({ 
  staff, 
  onClick,
  size = 'large',
  isExStaff = false
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const imageSize = 100;

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      sx={{
        cursor: 'pointer',
      }}
    >
      <Stack
        alignItems='center'
        spacing={1}
        sx={{
          position: 'relative',
        }}
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.08 : 1,
            boxShadow: isHovered
              ? '0 0 30px rgba(240, 219, 79, 0.6)'
              : '0 0 0px rgba(240, 219, 79, 0)',
          }}
          transition={{
            duration: 0.3,
            ease: 'easeOut',
          }}
          style={{
            borderRadius: '12px',
            display: 'inline-block',
          }}
        >
          <Box
            sx={{
              width: imageSize,
              height: imageSize,
              borderRadius: '12px',
              border: '3px solid',
              borderColor: isHovered ? '#F0DB4F' : 'primary.main',
              transition: 'all 0.3s ease',
              position: 'relative',
              zIndex: 1,
              overflow: 'hidden',
              backgroundImage: `url(${staff.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: isExStaff && !isHovered ? 'grayscale(100%)' : 'grayscale(0%)',
            }}
          />
        </motion.div>

        <Typography
          variant='body2'
          fontWeight='bold'
          textAlign='center'
          color='text.primary'
          sx={{
            textShadow: isHovered 
              ? '0 0 10px rgba(240, 219, 79, 0.5)' 
              : 'none',
            transition: 'text-shadow 0.3s ease',
          }}
        >
          {staff.fullName}
        </Typography>
      </Stack>
    </Box>
  );
};
