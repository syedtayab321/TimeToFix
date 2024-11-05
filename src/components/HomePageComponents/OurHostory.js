import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import  image from './../../assets/images/background.jpg';
const OurHistory = () => {
  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: '#f0f4f8',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Our History
      </Typography>
      <Typography variant="h6" align="center" sx={{ mb: 4 }}>
        Who We Are and Where We Came From
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="300"
              image={image}
              alt="Our History Image"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Our Journey
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Established in 2010, we started with a vision to provide exceptional air conditioning services to homes and businesses. Our journey began with a small team of dedicated professionals, and over the years, we have grown into a trusted name in the industry.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="300"
              image={image}
              alt="Our Values Image"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Our Values
              </Typography>
              <Typography variant="body1" color="textSecondary">
                We believe in quality, reliability, and customer satisfaction. Our mission is to ensure your comfort and peace of mind through top-notch service and support. We are committed to continuous improvement and innovation in our offerings.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h5">
          Looking Ahead
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ maxWidth: '600px', mx: 'auto', mt: 2 }}>
          As we move forward, our focus remains on expanding our services and reaching more customers while maintaining the high standards of quality that our clients have come to expect.
        </Typography>
      </Box>
    </Box>
  );
};

export default OurHistory;
