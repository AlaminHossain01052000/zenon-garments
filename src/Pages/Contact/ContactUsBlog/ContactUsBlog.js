import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

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
        <div>
            <Container>
                <div>
                    <h1>Contact Us</h1>
                    <hr />
                </div>
                <Row>
                    <Col>
                        <Form.Control size="lg" type="text" placeholder="Your Name" onChange={handleOnChange} required name="name" />
                        <Form.Control size="lg" type="text" placeholder="Your Email" onChange={handleOnChange} required name="email" />
                        <Form.Control size="lg" type="text" placeholder="Your Subject" onChange={handleOnChange} required name="subject" />
                        <Form.Control size="lg" type="text" placeholder="Your Message" onChange={handleOnChange} required name="message" />
                        <button onClick={handleEmailSending}>Submit</button>
                    </Col>
                    <Col>
                        <div className='contact-blog-title'>
                            <h1>Get In Touch</h1>
                            <p>We become very happy after talking to a customer. When a customer knock us we try to response to him within 24 hour. You can connect with us through Email, Facebook, Twitter or you can visit our office and factory also. We cordially welcome you.</p>
                        </div>
                        <div className='contact-blog-icons'>
                            <div className='contact-blog-icons-upper d-flex justify-content-between'>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <i class="far fa-building"></i>
                                    </div>
                                    <div>
                                        <h1>Dhaka</h1>
                                        <h4>193/43 New Polton, Dhaka </h4>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <i class="fas fa-industry"></i>
                                    </div>
                                    <div>
                                        <h1>Gazipur</h1>
                                        <h4>13/2 Tejgaon Shilo Area, Gazipur </h4>
                                    </div>
                                </div>
                            </div>
                            <div className='contact-blog-icons-lower d-flex justify-content-between'>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <i class="fas fa-phone-volume"></i>
                                    </div>
                                    <div>
                                        <h1>Phone</h1>
                                        <h4>+2986655510 </h4>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <h1>Email</h1>
                                        <h4>zenongarments@gmail.com </h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div>
                            <h1>Our Social Media</h1>
                            <div>
                                <a href="/"><i class="fab fa-facebook-f"></i></a>
                                <a href="/"><i class="fab fa-twitter"></i></a>
                                <a href="/"><i class="fab fa-instagram"></i></a>
                                <a href="/"><i class="fab fa-linkedin"></i></a>
                                <a href="/"><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </Col>


                </Row>

            </Container >
        </div >
    );
};

export default ContactUsBlog;