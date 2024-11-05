import React from 'react';
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import  image1 from './../../assets/services_images/plumbing.jpg'
const ServiceDashboard = () => {
  return (
    <Box sx={{ p: 3, display: 'flex', justifyContent: 'center' }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Our Service
            </Typography>
            <Typography variant="body1" paragraph>
              Here are the details about our service. We provide high-quality solutions tailored to meet
              your needs, ensuring satisfaction and value. Our team is dedicated and committed to delivering
              the best services with a customer-first approach.
            </Typography>
            <Typography variant="body1" paragraph>
              Contact us to learn more and let us help you achieve your goals. We offer personalized
              consultations and are ready to assist you at every step.
            </Typography>
            <Button
              variant="contained"
              color="success"
              startIcon={<WhatsAppIcon />}
              href="https://wa.me/your_number"
              sx={{ mt: 2 }}
            >
              Contact on WhatsApp
            </Button>
          </CardContent>
        </Grid>

        {/* Service Image Section */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="100%"
              image={image1}
              alt="Service Image"
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServiceDashboard;
