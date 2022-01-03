import React from 'react';
import './OurBlog.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import BlogImg from '../../../Media/img/projectImg1.jpg'

const OurBlog = () => {
    return (
        <div className="ourBlog">
            <div className="titlePart">
                <h6 className="subTitle">Our Blog</h6>
                <h1 style={{ marginTop: '2rem' }}>Latest Blog & Articles</h1>
                <p style={{ color: 'gray', fontWeight: '400' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
            <Container style={{ marginTop: '3.5rem' }}>
                <Row xs={1} md={3} className="g-4">
                    {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={`${BlogImg}`} />
                            <Card.Body>
                                <Card.Title>Role of Fashion Merchandising in Apparel Industry</Card.Title>
                                <p style={{ color: 'gray', fontWeight: '400' }}>
                                    2 January 2022.
                                </p>
                                <p style={{ color: 'gray', fontWeight: '400' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.....
                                </p>
                                <Button variant="outline-secondary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* ))} */}
                </Row>
            </Container>
        </div>
    );
};

export default OurBlog;