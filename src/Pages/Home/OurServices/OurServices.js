import React from 'react';
import './OurServices.css'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import sew from '../../../Media/img/sew-T5LCRK.png';
import satin from '../../../Media/img/satin.png';
import digital from '../../../Media/img/digital.png';

const OurServices = () => {
    return (
        <div className="ourServices">
            <Container>
                <Row style={{ paddingBottom: '2rem' }}>
                    <Col>
                        <h6 className="subTitle">Our Services</h6>
                        <h1 style={{ marginTop: '2rem' }}>Delivering The Highest Quality Fabrics</h1>
                    </Col>
                    <Col>
                        <p style={{ color: 'gray', fontWeight: '400' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                        <Button variant="outline-success">All Services</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <div className="layer">
                            </div>
                            <Card.Body style={{ padding: '35px' }}>
                                <img style={{ width: '20%' }} src={`${sew}`} alt="" />
                                <h4 style={{ margin: "2rem 0" }}>Fabric Dyeing</h4>
                                <p style={{ color: 'gray', fontWeight: '400' }}>
                                    Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                </p>
                                <Button variant="outline-secondary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <div className="layer">
                            </div>
                            <Card.Body style={{ padding: '35px' }}>
                                <img style={{ width: '20%' }} src={`${satin}`} alt="" />
                                <h4 style={{ margin: "2rem 0" }}>Satin Weaving</h4>
                                <p style={{ color: 'gray', fontWeight: '400' }}>
                                    Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                </p>
                                <Button variant="outline-secondary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <div className="layer">
                            </div>
                            <Card.Body style={{ padding: '35px' }}>
                                <img style={{ width: '20%' }} src={`${digital}`} alt="" />
                                <h4 style={{ margin: "2rem 0" }}>Digital Fabric Printing</h4>
                                <p style={{ color: 'gray', fontWeight: '400' }}>
                                    Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                </p>
                                <Button variant="outline-secondary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurServices;