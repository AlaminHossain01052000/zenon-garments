import React from 'react';
import './OurProject.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import projectImg1 from '../../../Media/img/projectImg1.jpg'
import projectImg2 from '../../../Media/img/projectImg2.jpg'
import projectImg3 from '../../../Media/img/projectImg3.jpg'
import projectImg4 from '../../../Media/img/projectImg4.jpg'
import projectImg5 from '../../../Media/img/projectImg5.jpg'
import projectImg6 from '../../../Media/img/projectImg6.jpg'
import projectImg7 from '../../../Media/img/projectImg7.jpg'

const OurProject = () => {
    return (
        <div className='ourProject'>
            <div className="titlePart">
                <h6 className="subTitle">Our Project</h6>
                <h1 style={{ marginTop: '2rem' }}>Our Latest Projects</h1>
                <p style={{ color: 'gray', fontWeight: '400', width: '40%', margin: 'auto' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
            <Container style={{ marginTop: '3.5rem' }}>
                <Row>
                    <Col xs={12} md={4} className="gX-2">
                        <Card style={{ height: '28rem', display: 'blog', overflow: 'hidden' }}>
                            <div className="layer">
                                <div className="content">
                                    <h3>Satin Fabric</h3>
                                    <p style={{ fontWeight: '500' }}>Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                </div>
                            </div>
                            <Card.Img style={{ height: '100%', width: 'fit-content' }} variant="top" src={`${projectImg1}`} />
                        </Card>
                    </Col>
                    <Col xs={12} md={4} className="gX-2">
                        <Card style={{ height: '28rem', display: 'blog', overflow: 'hidden' }}>
                            <div className="layer">
                                <div className="content">
                                    <h3>Fashion Project</h3>
                                    <p style={{ fontWeight: '500' }}>Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                </div>
                            </div>
                            <Card.Img style={{ height: '100%', width: 'fit-content' }} variant="top" src={`${projectImg2}`} />
                        </Card>
                    </Col>
                    <Col xs={12} md={4} className="gX-2">
                        <Card style={{ height: '28rem', display: 'blog', overflow: 'hidden' }}>
                            <div className="layer">
                                <div className="content">
                                    <h3>Blue Textile</h3>
                                    <p style={{ fontWeight: '500' }}>Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                </div>
                            </div>
                            <Card.Img style={{ height: '100%', width: 'fit-content' }} variant="top" src={`${projectImg3}`} />
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container style={{ marginTop: '3.5rem' }}>
                <Row>
                    <Col xs={12} md={3} className="gX-2">
                        <Card style={{ height: '28rem', display: 'blog', overflow: 'hidden' }}>
                            <div className="layer">
                                <div className="content">
                                    <h3>Cotton Fabric</h3>
                                    <p style={{ fontWeight: '500' }}>Lorem ipsum dolor sit amet, consec adipiscing elit</p>
                                </div>
                            </div>
                            <Card.Img style={{ height: '100%', width: 'fit-content' }} variant="top" src={`${projectImg4}`} />
                        </Card>
                    </Col>
                    <Col xs={12} md={3} className="gX-2">
                        <Card style={{ height: '28rem', display: 'blog', overflow: 'hidden' }}>
                            <div className="layer">
                                <div className="content">
                                    <h3>Zipper Textile</h3>
                                    <p style={{ fontWeight: '500' }}>Lorem ipsum dolor sit amet, consec adipiscing elit</p>
                                </div>
                            </div>
                            <Card.Img style={{ height: '100%', width: 'fit-content' }} variant="top" src={`${projectImg5}`} />
                        </Card>
                    </Col>
                    <Col xs={12} md={3} className="gX-2">
                        <Card style={{ height: '28rem', display: 'blog', overflow: 'hidden' }}>
                            <div className="layer">
                                <div className="content">
                                    <h3>Colorful Fabric</h3>
                                    <p style={{ fontWeight: '500' }}>Lorem ipsum dolor sit amet, consec adipiscing elit</p>
                                </div>
                            </div>
                            <Card.Img style={{ height: '100%', width: 'fit-content' }} variant="top" src={`${projectImg6}`} />
                        </Card>
                    </Col>
                    <Col xs={12} md={3} className="gX-2">
                        <Card style={{ height: '28rem', display: 'blog', overflow: 'hidden' }}>
                            <div className="layer">
                                <div className="content">
                                    <h3>Linen Fabric Project</h3>
                                    <p style={{ fontWeight: '500' }}>Lorem ipsum dolor sit amet, consec adipiscing elit</p>
                                </div>
                            </div>
                            <Card.Img style={{ height: '100%', width: 'fit-content' }} variant="top" src={`${projectImg7}`} />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurProject;