import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Avatar } from '@mui/material';
import './../../assets/css/reviews.css';
import image1 from './../../assets/person_images/1.jpg';
import image2 from './../../assets/person_images/2.jpg';
import image3 from './../../assets/person_images/3.jpg';

const reviewsData = [
    { id: 1, name: 'John Doe', review: 'Excellent service and professional team!', avatarUrl: image1 },
    { id: 2, name: 'Jane Smith', review: 'Very satisfied with the quality and support.', avatarUrl: image2 },
    { id: 3, name: 'Mike Johnson', review: 'A great experience, highly recommend!', avatarUrl: image3 },
];

const UserReviews = () => {
    return (
        <Container maxWidth="lg" className="user-reviews-section">
            <Typography variant="h4" align="center" gutterBottom className="section-title">
                User Reviews
            </Typography>
            <Grid container spacing={4}>
                {reviewsData.map((review) => (
                    <Grid item xs={12} sm={6} md={4} key={review.id}>
                        <Card className="review-card">
                            <CardContent>
                                <Avatar src={review.avatarUrl} alt={review.name} className="review-avatar" />
                                <Typography variant="h6" className="review-name" gutterBottom>
                                    {review.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" className="review-text">
                                    "{review.review}"
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default UserReviews;
