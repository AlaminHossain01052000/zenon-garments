import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../Media/img/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer' style={{ backgroundColor: "#04131E" }}>
            <Container style={{ padding: '60px 0' }}>
                <Row style={{ color: '#fff' }}>
                    <Col style={{ textAlign: 'left' }}>
                        <img style={{ width: "180px", cursor: 'pointer' }} src={`${logo}`} alt="logo" />
                        <p style={{ padding: '35px 0' }}>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod</p>
                        <div className="socialIcon">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-twitter-square"></i>
                            <i className="fab fa-youtube"></i>
                            <i className="fab fa-instagram-square"></i>
                        </div></Col>

                    <Col xs={2}>
                        <h4 className='subTitle'>Quick Links</h4>
                        <ul className='list'>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Projects</li>
                            <li>Pricing</li>
                            <li>Contact</li>
                        </ul>
                    </Col>
                    <Col xs={2}>
                        <h4 className='subTitle'>Useful Links</h4>
                        <ul className='list'>
                            <li>Privacy Policy</li>
                            <li>Terms and Conditions</li>
                            <li>Disclaimer</li>
                            <li>Support</li>
                            <li>FAQ</li>
                        </ul>
                    </Col>
                    <Col>
                        <h4 className='subTitle'>Make Appointment</h4>
                        <ul className='list'>
                            <li><i className="far fa-clock" style={{ marginRight: '8px' }}></i>9AM - 5PM , Monday - Saturday</li>
                            <li><i className="fas fa-phone-volume" style={{ marginRight: '8px' }}></i>+88023344XXXXX</li>
                            <li><i className="far fa-envelope" style={{ marginRight: '8px' }}></i>example@gmail.com</li>
                        </ul>
                    </Col>
                </Row>
                <hr style={{ height: '2px', color: "#fff" }} />
                <div style={{ color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
                    <p >Textile & Garment Industry Template Kit by Jegtheme</p>
                    <p >Copyright &copy; 2021. All rights reserved.</p>
                </div>
            </Container>
        </div >
    );
};

export default Footer;