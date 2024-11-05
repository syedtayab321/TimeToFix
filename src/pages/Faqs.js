import React from 'react';
import { Container, Accordion, Card } from 'react-bootstrap';
import { FaQuestionCircle } from 'react-icons/fa';
import './../assets/css/Faqs.css';

const FaqPage = () => {
    return (
        <Container fluid className="faq-page">
            {/* Header Section */}
            <section className="faq-header text-center">
                <FaQuestionCircle size={50} className="icon mb-3" />
                <h1>Frequently Asked Questions</h1>
                <p>Find answers to the most common questions about our services</p>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What services do you offer?</Accordion.Header>
                        <Accordion.Body>
                            We offer a range of home services including AC repair, duct cleaning, plumbing, electrical work, painting, handyman services, and water tank cleaning.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How can I book a service?</Accordion.Header>
                        <Accordion.Body>
                            You can easily book a service through our website or by contacting our customer support team. We offer flexible scheduling options to meet your needs.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What payment methods do you accept?</Accordion.Header>
                        <Accordion.Body>
                            We accept various payment methods including credit cards, debit cards, and online payments for your convenience.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Are your technicians certified?</Accordion.Header>
                        <Accordion.Body>
                            Yes, all our technicians are certified professionals with extensive experience in their respective fields.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Do you offer any guarantees on your services?</Accordion.Header>
                        <Accordion.Body>
                            Yes, we provide a satisfaction guarantee on all our services to ensure you’re happy with the results.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </section>
        </Container>
    );
};

export default FaqPage;
