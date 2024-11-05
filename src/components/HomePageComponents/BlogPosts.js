import React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import './../../assets/css/blogPosts.css';
import electricalImage from './../../assets/services_images/electrical.jpg';
import acImage from './../../assets/services_images/Ac_Repair.jpg';
import paintingImage from './../../assets/services_images/painting.jpg';

const blogPosts = [
    {
        id: 1,
        title: 'The Importance of Professional Services',
        description: 'Discover why quality service matters in today’s world...',
        imageUrl: electricalImage,
    },
    {
        id: 2,
        title: 'Tips for Maintaining Your Home',
        description: 'Learn essential tips for keeping your home in top shape...',
        imageUrl: acImage,
    },
    {
        id: 3,
        title: 'Choosing the Right Service Provider',
        description: 'How to select the best service provider for your needs...',
        imageUrl: paintingImage,
    },
];

const BlogPosts = () => {
    return (
        <Container maxWidth="lg" className="blog-posts-section">
            <Typography variant="h4" align="center" gutterBottom className="section-title">
                Our Blog
            </Typography>
            <Grid container spacing={4}>
                {blogPosts.map((post) => (
                    <Grid item xs={12} sm={6} md={4} key={post.id}>
                        <Card className="blog-card">
                            <CardMedia
                                component="img"
                                height="200"
                                image={post.imageUrl}
                                alt={post.title}
                                className="blog-image"
                            />
                            <CardContent>
                                <Typography variant="h6" className="blog-title" gutterBottom>
                                    {post.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" className="blog-description">
                                    {post.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default BlogPosts;
