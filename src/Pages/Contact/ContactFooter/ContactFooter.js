import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ContactFooter = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={3}>
                        <h1>We're on a mission.</h1>
                        <p>At Banca, we’re using cutting-edge technology to transform the industry and deliver financial services that actually work for you.</p>
                    </Col>
                    <Col lg={3}>
                        <h1>Quick Links</h1>
                        <ul>
                            <li>About Us</li>
                            <li>Services</li>

                            <li>Projects</li>
                            <li>Pricing</li>
                            <li>Contact Us</li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <h1>Useful Links</h1>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Term And Condition</li>
                            <li>Disclaimer</li>
                            <li>Support</li>
                            <li>FAQ</li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <h1>Make Appointment</h1>
                        <ul>
                            <li>9 AM - 5 pm , Sunday to Thursday</li>
                            <li>Call at +2908555601</li>

                        </ul>
                    </Col>
                </Row>
                <hr />
                <div>
                    <small>Zenon Garments </small>
                    <small>Copyright © 2022. All rights reserved.</small>
                </div>
            </Container>
        </div>
    );
};

export default ContactFooter;