import React from 'react';
import { Container, Typography, Grid, CardMedia, CardContent } from '@mui/material';
import './../../assets/css/aboutus.css';
import image from './../../assets/images/background.jpg';
const AboutUs = () => {
    return (
        <Container maxWidth="md" className="about-us-section">
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <CardMedia
                        component="img"
                        height="400"
                        image={image}
                        alt="About Our Company"
                        className="about-image"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            About Our Company
                        </Typography>
                        <Typography variant="body1" color="textSecondary" paragraph>
                            Our company is dedicated to providing top-notch services that meet the needs of our clients. With years of experience in the industry, we strive for excellence in everything we do. Our team is skilled, professional, and always ready to help.
                        </Typography>
                        <Typography variant="body1" color="textSecondary" paragraph>
                            We believe in delivering quality services with integrity, efficiency, and transparency. Join us on our journey to redefine industry standards.
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutUs;
