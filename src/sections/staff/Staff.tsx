'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { DATA_STAFF, StaffMember } from '@/data/data_staff';
import StaffModal from './StaffModal';
import { StaffCarousel } from '@/components/StaffCarousel';

const Staff: React.FC = () => {
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
              <Typography
                variant='h5'
                component='h3'
                fontWeight='bold'
                textAlign='center'
                sx={{ mb: 1, color: 'black' }}
              >
                ⭐ Staff 2026
              </Typography>
              <StaffCarousel 
                staff={currentStaff}
                onStaffClick={handleOpenModal}
                size='large'
                isModalOpen={isModalOpen}
              />
            </Box>

            <Box>
              <Typography
                variant='h5'
                component='h3'
                fontWeight='bold'
                textAlign='center'
                sx={{ mb: 1, color: 'black' }}
              >
                📅 2023 al 2025
              </Typography>
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

export default Staff;
