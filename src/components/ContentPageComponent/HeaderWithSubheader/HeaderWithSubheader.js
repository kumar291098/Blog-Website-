import React from 'react';
import { CardHeader, Typography, Box } from '@mui/material';
import { Star } from '@mui/icons-material';
const HeaderWithSubheader = ({ title, subheader }) => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: 2, borderRadius: 1 }}>
      <CardHeader
        avatar={<Star color="primary" />}
        title={
          <Typography variant="h4" color="primary" gutterBottom>
            {title}
          </Typography>
        }
        subheader={
          <Typography variant="subtitle1" color="textSecondary">
            {subheader}
          </Typography>
        }
      />
    </Box>
  );
};

export default HeaderWithSubheader;