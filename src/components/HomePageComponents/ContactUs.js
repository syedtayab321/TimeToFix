import React from 'react';
import { Container, TextField, Button, Typography, Grid, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import './../../assets/css/conatct.css';

const ContactUsForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
    };

    return (
        <Container maxWidth="sm" className="contact-us-container">
            <Paper elevation={3} className="contact-us-paper">
                <Typography variant="h4" gutterBottom align="center">
                    Contact Us
                </Typography>
                <form onSubmit={handleSubmit} className="contact-form">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Your Name"
                                variant="outlined"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                type="email"
                                variant="outlined"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Subject"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Message"
                                variant="outlined"
                                multiline
                                rows={4}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} className="submit-button">
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                endIcon={<SendIcon />}
                                fullWidth
                            >
                                Send Message
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default ContactUsForm;
