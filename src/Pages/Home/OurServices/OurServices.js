import React from 'react';
import './OurServices.css'
import { Container, Row, Col } from 'react-bootstrap';

const OurServices = () => {
    return (
        <div className="ourServices">
            <Container>
                <Row>
                    <Col>
                        <h6 className="subTitle">Our Services</h6>
                        <h1>Delivering The Highest Quality Fabrics</h1>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurServices;