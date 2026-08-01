'use client';
import { COLORS } from '@/lib/tokens';
import { jersey10 } from '@/lib/fonts';

import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { DATA_STAFF, StaffMember } from '@/data/data_staff';
import StaffModal from './StaffModal';

import { Star, SquaresFour } from '@phosphor-icons/react';
import { StaffCarousel } from './StaffCarousel';


const StaffContainer: React.FC = () => {
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (staff: StaffMember) => {
    setSelectedStaff(staff);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedStaff(null), 300);
  };

  const currentStaff = DATA_STAFF.filter((staff) => !staff.isExStaff);
  const exStaff = DATA_STAFF.filter((staff) => staff.isExStaff);

  return (
    <Container id='staff' maxWidth='xl' sx={{ px: { xs: 4, md: 8, lg: 12 }, py: { xs: 10, md: 16 } }}>
      <Grid container spacing={4}>
        <Grid size={12}>
          <Box
            sx={{
              bgcolor: COLORS.yellow,
              borderRadius: '32px',
              py: { xs: 3, md: 4 },
              px: { xs: 1, md: 2 },
              textAlign: 'center',
              overflow: 'hidden',
            }}
          >
            <Box sx={{ mb: 3 }}>
              <Stack
                direction='row'
                alignItems='center'
                justifyContent='center'
                spacing={1}
                sx={{ mb: 1 }}
              >
                <Star size={32} weight='fill' color={COLORS.black} />

                <Typography
                  component='h3'
                  sx={{ fontFamily: jersey10.style.fontFamily, fontWeight: 400, fontSize: '3.125rem', color: 'black' }}
                >
                  Staff 2026
                </Typography>
              </Stack>
              <StaffCarousel
                staff={currentStaff}
                onStaffClick={handleOpenModal}
                size='large'
                isModalOpen={isModalOpen}
              />
            </Box>

            <Box>
              <Stack
                direction='row'
                alignItems='center'
                justifyContent='center'
                spacing={1}
                sx={{ mb: 1 }}
              >
                <Typography
                  component='h3'
                  sx={{ fontFamily: jersey10.style.fontFamily, fontWeight: 400, fontSize: '1.5rem', mb: 1, color: 'black' }}
                >
                  2023 al 2025
                </Typography>
              </Stack>
              <StaffCarousel
                staff={exStaff}
                onStaffClick={handleOpenModal}
                size='small'
                isExStaff={true}
                isModalOpen={isModalOpen}
                reverseDirection={true}
              />
            </Box>

            <StaffModal
              open={isModalOpen}
              onClose={handleCloseModal}
              staff={selectedStaff}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StaffContainer;
