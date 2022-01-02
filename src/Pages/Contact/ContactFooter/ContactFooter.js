import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ContactFooter.css';
const ContactFooter = () => {
    return (
        <div className='contact-footer'>
            <Container>
                <Row>
                    <Col lg={3}>
                        <h1 className='text-start'>We're on a mission.</h1>
                        <p className='text-start'>At Zenon Garments, we’re using cutting-edge technology to transform the industry and deliver financial services that actually work for you.</p>
                    </Col>
                    <Col lg={3}>
                        <h1 className='mb-5'>Quick Links</h1>
                        <ul>
                            <li>About Us</li>
                            <li>Services</li>

                            <li>Projects</li>
                            <li>Pricing</li>
                            <li>Contact Us</li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <h1 className='mb-5'>Useful Links</h1>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Term And Condition</li>
                            <li>Disclaimer</li>
                            <li>Support</li>
                            <li>FAQ</li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <h1 className='text-start'>Make Appointment</h1>
                        <ul className="appointment-box">
                            <li>9 AM - 5 pm , Sunday to Thursday</li>
                            <li>Call at +2908555601</li>

                        </ul>
                    </Col>
                </Row>
                <hr />
                <div>
                    <small className="font-roboto">Zenon Garments </small>
                    <small className="font-roboto">Copyright © 2022. All rights reserved.</small>
                </div>
            </Container>
        </div>
    );
};

export default ContactFooter;