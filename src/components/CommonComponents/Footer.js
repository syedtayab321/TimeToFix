import React from 'react';
import { Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import './../../assets/css/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container maxWidth="lg">
                <Grid container spacing={4} className="footer-content">
                    {/* About Us Section */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body2" color="white">
                            We are committed to providing top-quality services with a focus on customer satisfaction and excellence in everything we do.
                        </Typography>
                    </Grid>

                    {/* Quick Links Section */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <ul className="footer-links">
                            <li><Link href="/" color="inherit">Home</Link></li>
                            <li><Link href="#" color="inherit">About Us</Link></li>
                            <li><Link href="#" color="inherit">Services</Link></li>
                            <li><Link href="#" color="inherit">FAQs</Link></li>
                            <li><Link href="#" color="inherit">Contact Us</Link></li>
                        </ul>
                    </Grid>

                    {/* Services Section */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Services
                        </Typography>
                        <ul className="footer-links">
                            <li><Link href="#" color="inherit">AC Repair</Link></li>
                            <li><Link href="#" color="inherit">Electrical</Link></li>
                            <li><Link href="#" color="inherit">Plumbing</Link></li>
                            <li><Link href="#" color="inherit">Painting</Link></li>
                            <li><Link href="#" color="inherit">Water Tank Cleaning</Link></li>
                        </ul>
                    </Grid>

                    {/* Social Media Section */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <div className="social-icons">
                            <IconButton href="https://facebook.com" target="_blank" color="inherit">
                                <Facebook />
                            </IconButton>
                            <IconButton href="https://twitter.com" target="_blank" color="inherit">
                                <Twitter />
                            </IconButton>
                            <IconButton href="https://instagram.com" target="_blank" color="inherit">
                                <Instagram />
                            </IconButton>
                            <IconButton href="https://linkedin.com" target="_blank" color="inherit">
                                <LinkedIn />
                            </IconButton>
                        </div>
                    </Grid>
                </Grid>

                {/* Bottom Copyright Section */}
                <div className="footer-bottom">
                    <Typography variant="body2" color="white" align="center">
                        © {new Date().getFullYear()} Your Company Name. All rights reserved.
                    </Typography>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
