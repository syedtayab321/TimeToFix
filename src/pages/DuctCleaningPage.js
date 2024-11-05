import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBroom, FaCheckCircle, FaStar } from 'react-icons/fa';
import './../assets/css/acService.css';

export default function DuctCleaningPage() {
    return (
        <Container fluid className="service-page">
            <section className="intro-section text-center">
                <h1>Professional Duct Cleaning Services</h1>
                <p>Improve air quality and energy efficiency with our expert duct cleaning solutions.</p>
            </section>

            {/* Service Details Section */}
            <section className="details-section">
                <h2>Why Choose Our Duct Cleaning Services?</h2>
                <Row className="text-center">
                    <Col md={4}>
                        <Card className="service-card">
                            <Card.Body>
                                <FaBroom size={40} className="icon mb-3" />
                                <Card.Title>Thorough Cleaning</Card.Title>
                                <Card.Text>We remove dust, dirt, and allergens to improve air quality.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="service-card">
                            <Card.Body>
                                <FaCheckCircle size={40} className="icon mb-3" />
                                <Card.Title>Certified Technicians</Card.Title>
                                <Card.Text>Our professionals are trained and certified in duct cleaning.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="service-card">
                            <Card.Body>
                                <FaStar size={40} className="icon mb-3" />
                                <Card.Title>Customer Satisfaction</Card.Title>
                                <Card.Text>We prioritize customer satisfaction with every service.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </Container>
    );
}
