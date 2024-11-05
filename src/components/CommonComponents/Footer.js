import React from 'react';
import { Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import './../../assets/css/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container maxWidth="lg">
                <Grid container spacing={4} className="footer-content">
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body2" color="white">
                            We are dedicated to providing top-quality services to meet your needs. Our commitment to excellence and customer satisfaction is at the core of our business.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <ul className="footer-links">
                            <li><Link href="/" color="inherit">Home</Link></li>
                            <li><Link href="#" color="inherit">About</Link></li>
                            <li><Link href="#" color="inherit">Services</Link></li>
                            <li><Link href="#" color="inherit">Contact</Link></li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={4}>
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
