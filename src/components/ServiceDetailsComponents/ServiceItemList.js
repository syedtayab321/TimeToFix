import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

const services = [
  {
    title: "AC Repair",
    description: "Expert air conditioning repair and maintenance for optimal cooling.",
    icon: <AcUnitIcon fontSize="large" color="primary" />,
  },
  {
    title: "Plumbing",
    description: "Comprehensive plumbing solutions to fix leaks, clogs, and installations.",
    icon: <PlumbingIcon fontSize="large" color="secondary" />,
  },
  {
    title: "Electrical Services",
    description: "Reliable electrical services for installations and troubleshooting.",
    icon: <ElectricBoltIcon fontSize="large" color="success" />,
  },
  {
    title: "Home Cleaning",
    description: "Professional cleaning services to keep your home spotless and fresh.",
    icon: <CleaningServicesIcon fontSize="large" color="warning" />,
  },
];

const ServiceItemList = () => {
  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: '#e0f7fa', // Light blue background color
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 1200 }}>
        <Typography variant="h3" align="center" gutterBottom>
          What's Included in Our Home Services
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary" paragraph>
          Our range of home services is designed to provide comfort and convenience for all your needs.
        </Typography>
        <Grid container spacing={4} mt={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: 'white',
                  boxShadow: 3,
                  textAlign: 'center',
                  padding: 2,
                  '&:hover': {
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ServiceItemList;
