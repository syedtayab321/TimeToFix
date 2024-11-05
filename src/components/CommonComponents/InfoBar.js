import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Phone, Facebook, Instagram, LinkedIn, YouTube, Email } from '@mui/icons-material';

const InfoBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px 20px',
        fontSize: '0.875rem',
      }}
    >
      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
        <Phone sx={{ marginRight: '5px' }} /> 800-FIX (800-349)
      </Typography>
      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
        <Email sx={{ marginRight: '5px' }} /> info@example.com
      </Typography>

      <Box>
        <IconButton color="inherit" href="https://facebook.com" size="small">
          <Facebook />
        </IconButton>
        <IconButton color="inherit" href="https://instagram.com" size="small">
          <Instagram />
        </IconButton>
        <IconButton color="inherit" href="https://linkedin.com" size="small">
          <LinkedIn />
        </IconButton>
        <IconButton color="inherit" href="https://youtube.com" size="small">
          <YouTube />
        </IconButton>
      </Box>
    </Box>
  );
};

export default InfoBar;
