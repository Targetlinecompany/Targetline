'use client';
import { Box, Grid, useTheme } from '@mui/material';
import React from 'react';

import EstimateStepper from './stepper';
import { MackUpEstimate } from '../app_icons';
import useAuth from '../context/useAuth';
const Estimate = () => {
  const { estimateImage } = useAuth();
  const theme = useTheme();
  return (
    <Box>
      <Grid container>
        <Grid item md={12} lg={6}>
          <EstimateStepper />
        </Grid>
        <Grid md={12} lg={6} sx={{ display: 'flex' }}>
          <Box
            sx={{
              width: '40%',
              margin: '0 auto',
              position: 'relative',
              overflow: 'hidden',

              [theme.breakpoints.down('lg')]: {
                display: 'none',
              },
            }}
          >
            <MackUpEstimate />
            <Box
              sx={{
                borderRadius: '25px',
                position: 'absolute',
                width: '89.5%',
                left: '5.4%',
                height: '100%',
                overflow: 'hidden',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top center',
                backgroundOrigin: 'content-box',
                backgroundImage: `url(${estimateImage})`,
                top: 0,
                display: 'grid',
                zIndex: -10,
              }}
            ></Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Estimate;
