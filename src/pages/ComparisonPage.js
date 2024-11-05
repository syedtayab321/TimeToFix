import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import './../assets/css/comparison.css';

const ComparisonPage = () => {
    return (
        <Container fluid className="comparison-page">
            {/* Header Section */}
            <section className="comparison-header text-center">
                <h1>How We Compare</h1>
                <p>Discover why we stand out among competitors in quality, service, and customer satisfaction.</p>
            </section>

            {/* Unique Features Section */}
            <section className="unique-features">
                <h2 className="text-center">Our Unique Features</h2>
                <Row>
                    <Col md={4}>
                        <Card className="feature-card">
                            <Card.Body>
                                <FaCheckCircle size={30} className="icon text-success mb-3" />
                                <Card.Title>Expert Technicians</Card.Title>
                                <Card.Text>Our team consists of certified professionals with years of experience.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="feature-card">
                            <Card.Body>
                                <FaCheckCircle size={30} className="icon text-success mb-3" />
                                <Card.Title>24/7 Support</Card.Title>
                                <Card.Text>We're available around the clock to assist with any of your needs.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="feature-card">
                            <Card.Body>
                                <FaCheckCircle size={30} className="icon text-success mb-3" />
                                <Card.Title>Satisfaction Guarantee</Card.Title>
                                <Card.Text>We prioritize your satisfaction and guarantee quality on every service.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>

            {/* Comparison Table Section */}
            <section className="comparison-table text-center">
                <h2>Comparison with Competitors</h2>
                <Row className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Features</th>
                                <th>Our Service</th>
                                <th>Competitor A</th>
                                <th>Competitor B</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>24/7 Support</td>
                                <td><FaCheckCircle className="text-success" /></td>
                                <td><FaTimesCircle className="text-danger" /></td>
                                <td><FaTimesCircle className="text-danger" /></td>
                            </tr>
                            <tr>
                                <td>Certified Technicians</td>
                                <td><FaCheckCircle className="text-success" /></td>
                                <td><FaCheckCircle className="text-success" /></td>
                                <td><FaTimesCircle className="text-danger" /></td>
                            </tr>
                            <tr>
                                <td>Satisfaction Guarantee</td>
                                <td><FaCheckCircle className="text-success" /></td>
                                <td><FaTimesCircle className="text-danger" /></td>
                                <td><FaTimesCircle className="text-danger" /></td>
                            </tr>
                            <tr>
                                <td>Flexible Scheduling</td>
                                <td><FaCheckCircle className="text-success" /></td>
                                <td><FaCheckCircle className="text-success" /></td>
                                <td><FaCheckCircle className="text-success" /></td>
                            </tr>
                        </tbody>
                    </table>
                </Row>
            </section>

            {/* Call-to-Action Section */}
            <section className="cta-section text-center">
                <h2>Ready to Experience the Best?</h2>
                <p>Join us and see the difference. Our commitment to quality and customer satisfaction is unmatched.</p>
                <button className="btn btn-primary">Get Started</button>
            </section>
        </Container>
    );
};

export default ComparisonPage;
