import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './ContactUsBlog.css';
const ContactUsBlog = () => {
    const [visitorEmail, setVisitorEmail] = useState({});
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newVisitorEmail = { ...visitorEmail };
        newVisitorEmail[field] = value;
        setVisitorEmail(newVisitorEmail);
    }
    const handleEmailSending = e => {
        console.log(visitorEmail);
    }
    return (
        <div className='mb-5'>
            <Container>

                <Row>
                    <Col className="contact-us-blog-form">
                        <Form.Control className="contact-us-blog-form-field" size="lg" type="text" placeholder="Your Name" onChange={handleOnChange} required name="name" />
                        <Form.Control className="contact-us-blog-form-field" size="lg" type="text" placeholder="Your Email" onChange={handleOnChange} required name="email" />
                        <Form.Control className="contact-us-blog-form-field" size="lg" type="text" placeholder="Your Subject" onChange={handleOnChange} required name="subject" />
                        <Form.Control className="contact-us-blog-form-field" size="lg" type="text" placeholder="Your Message" onChange={handleOnChange} required name="message" />
                        <button className="btn-contact-submit" onClick={handleEmailSending}>Send Massege</button>
                    </Col>
                    <Col>
                        <div className='contact-blog-title'>
                            <div>
                                <h4 className="text-start font-ubuntu">Contact Us</h4>
                                <hr className='underlined-hr' />
                            </div>
                            <h1 className="text-start font-oswald">Get In Touch</h1>
                            <p className="text-start font-spline">We become very happy after talking to a customer. When a customer knock us we try to response to him within 24 hour. You can connect with us through Email, Facebook, Twitter or you can visit our office and factory also. We cordially welcome you.</p>
                        </div>
                        <div className='contact-blog-icons'>
                            <div className='contact-blog-icons-upper d-lg-flex d-md-flex justify-content-between'>
                                <div className='d-flex justify-content-lg-between mb-3 align-items-center'>
                                    <div className='contact-blog-single-icon'>
                                        <i className="far fa-building"></i>
                                    </div>
                                    <div>
                                        <h1 className="contact-blog-single-icon-h1">Dhaka</h1>
                                        <h4 className="contact-blog-single-icon-h4">193/43 New Polton, Dhaka </h4>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-lg-between align-items-center'>
                                    <div className='contact-blog-single-icon'>
                                        <i className="fas fa-industry"></i>
                                    </div>
                                    <div>
                                        <h1 className='contact-blog-single-icon-h1'>Gazipur</h1>
                                        <h4 className='contact-blog-single-icon-h4'>13/2 Tejgaon Shilo Area, Gazipur </h4>
                                    </div>
                                </div>
                            </div>
                            <div className='contact-blog-icons-lower d-lg-flex d-md-flex justify-content-between'>
                                <div className='d-flex align-items-center justify-content-lg-between'>
                                    <div className='contact-blog-single-icon my-3'>
                                        <i className="fas fa-phone-volume"></i>
                                    </div>
                                    <div>
                                        <h1 className='contact-blog-single-icon-h1'>Phone</h1>
                                        <h4 className='contact-blog-single-icon-h4'>+2986655510 </h4>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-lg-between align-items-center'>
                                    <div className='contact-blog-single-icon'>
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <h1 className='contact-blog-single-icon-h1'>Email</h1>
                                        <h4 className='contact-blog-single-icon-h4'>zenongarments@gmail.com </h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div>
                            <h4 className='text-start font-ubuntu'>Our Social Media</h4>
                            <div className='text-start d-flex align-items-center'>
                                <a href="/" className='contact-blog-social-icon d-flex flex-column justify-content-center align-items-center' style={{ backgroundColor: "blue" }}><i className="fab fa-facebook-f"></i></a>
                                <a href="/" className='contact-blog-social-icon d-flex flex-column justify-content-center align-items-center' style={{ backgroundColor: "#1D9BF0" }}><i className="fab fa-twitter"></i></a>

                                <a href="/" className='contact-blog-social-icon d-flex flex-column justify-content-center align-items-center' style={{ backgroundColor: "black" }}><i className="fab fa-instagram"></i></a>

                                <a href="/" className='contact-blog-social-icon d-flex flex-column justify-content-center align-items-center' style={{ backgroundColor: "#0A66C2" }}><i className="fab fa-linkedin"></i></a>

                                <a href="/" className='contact-blog-social-icon d-flex flex-column justify-content-center align-items-center' style={{ backgroundColor: "red" }}><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </Col>


                </Row>

            </Container >
        </div >
    );
};

export default ContactUsBlog;