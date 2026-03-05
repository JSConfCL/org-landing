'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { DATA_STAFF, StaffMember } from '@/data/data_staff';
import StaffModal from './StaffModal';

import StarIcon from '@mui/icons-material/Star';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
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
    <Container maxWidth='xl' sx={{ px: { xs: 4, md: 8, lg: 12 }, mb: 2 }}>
      <Grid container spacing={4}>
        <Grid size={12}>
          <Box
            sx={{
              bgcolor: 'white',
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
                <StarIcon sx={{ color: 'primary.main', fontSize: '2rem' }} />

                <Typography
                  variant='h5'
                  component='h3'
                  fontWeight='bold'
                  sx={{ color: 'black' }}
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
                <CalendarViewMonthIcon
                  sx={{ color: 'primary.main', fontSize: '2rem' }}
                />

                <Typography
                  variant='h5'
                  component='h3'
                  fontWeight='bold'
                  textAlign='center'
                  sx={{ mb: 1, color: 'black' }}
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
