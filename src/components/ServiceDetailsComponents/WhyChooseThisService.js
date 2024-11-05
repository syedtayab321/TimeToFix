import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import StarRateIcon from '@mui/icons-material/StarRate';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import ScheduleIcon from '@mui/icons-material/Schedule';

const details = [
  {
    title: "Unmatched Expertise",
    description: "Our team is composed of seasoned professionals with years of experience in home services, including AC repair, plumbing, electrical work, and more. Each technician is thoroughly trained and certified, ensuring the highest standards of service.",
    icon: <BuildIcon fontSize="large" color="primary" />,
  },
  {
    title: "Quality Assurance",
    description: "We guarantee top-notch quality in every service. From using premium materials to following industry-best practices, our focus is on delivering durable and reliable solutions for your home needs.",
    icon: <StarRateIcon fontSize="large" color="secondary" />,
  },
  {
    title: "Dedicated Customer Support",
    description: "Our customer support team is available around the clock to answer any questions and provide assistance. We believe in building lasting relationships, so your satisfaction is our top priority.",
    icon: <HeadsetMicIcon fontSize="large" color="success" />,
  },
  {
    title: "Convenience and Flexibility",
    description: "We work around your schedule, offering flexible appointment times to suit your busy life. Our team is prompt, efficient, and always respectful of your time and space.",
    icon: <ScheduleIcon fontSize="large" color="warning" />,
  },
];

const WhyChooseThisService = () => {
  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: '#e3f2fd',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 1200 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Why Choose Our Home Services
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary" paragraph>
          We’re committed to providing the best home service experience, with a focus on professionalism, quality, and reliability.
        </Typography>
        <Grid container spacing={4} mt={3}>
          {details.map((detail, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: 'white',
                  boxShadow: 3,
                  textAlign: 'center',
                  padding: 3,
                  '&:hover': {
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    {detail.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {detail.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {detail.description}
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

export default WhyChooseThisService;
