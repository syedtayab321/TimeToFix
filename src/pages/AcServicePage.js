import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaTools, FaRegCalendarCheck, FaBolt, FaSnowflake } from 'react-icons/fa';
import './../assets/css/acService.css';

export default function AcServicePage() {
    return (
        <Container fluid className="landing-page">
            {/* Intro Section */}
            <section className="intro-section text-center">
                <div className="intro-content">
                    <h1>Welcome to Premium AC Services</h1>
                    <p>Your go-to solution for all AC installation, maintenance, and repair needs!</p>
                    <Button variant="primary" size="lg" className="cta-button">Learn More</Button>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <h2>About Our AC Services</h2>
                <Row className="text-center">
                    <Col md={4}>
                        <Card className="service-card">
                            <Card.Body>
                                <FaTools size={40} className="icon mb-3" />
                                <Card.Title>Installation</Card.Title>
                                <Card.Text>Get expert installation services to ensure optimal performance.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="service-card">
                            <Card.Body>
                                <FaRegCalendarCheck size={40} className="icon mb-3" />
                                <Card.Title>Maintenance</Card.Title>
                                <Card.Text>Regular maintenance to extend the life of your AC unit.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="service-card">
                            <Card.Body>
                                <FaBolt size={40} className="icon mb-3" />
                                <Card.Title>Repair</Card.Title>
                                <Card.Text>Quick and reliable repairs to keep you cool.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <h2>Why Choose Our Services?</h2>
                <Row className="text-center">
                    <Col md={3} sm={6}>
                        <Card className="feature-card">
                            <Card.Body>
                                <FaSnowflake size={30} className="icon mb-2" />
                                <Card.Title>Energy Efficiency</Card.Title>
                                <Card.Text>We focus on reducing your energy costs.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={6}>
                        <Card className="feature-card">
                            <Card.Body>
                                <FaTools size={30} className="icon mb-2" />
                                <Card.Title>Professional Technicians</Card.Title>
                                <Card.Text>All technicians are certified and experienced.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={6}>
                        <Card className="feature-card">
                            <Card.Body>
                                <FaRegCalendarCheck size={30} className="icon mb-2" />
                                <Card.Title>24/7 Support</Card.Title>
                                <Card.Text>We’re available round-the-clock for your needs.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={6}>
                        <Card className="feature-card">
                            <Card.Body>
                                <FaBolt size={30} className="icon mb-2" />
                                <Card.Title>Quick Response</Card.Title>
                                <Card.Text>Fast service for urgent repairs and maintenance.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>

            {/* Benefits Section */}
            <section className="benefits-section">
                <h2>Our Benefits</h2>
                <ul className="benefits-list">
                    <li><FaTools /> Certified and experienced technicians</li>
                    <li><FaRegCalendarCheck /> 24/7 Customer Support</li>
                    <li><FaBolt /> Flexible appointment scheduling</li>
                </ul>
            </section>
        </Container>
    );
}
