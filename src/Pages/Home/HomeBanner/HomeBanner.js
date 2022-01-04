import React from 'react';
import { Carousel } from 'react-bootstrap';
import projectImg3 from '../../../Media/img/projectImg3.jpg'
import projectImg5 from '../../../Media/img/projectImg5.jpg'
import projectImg7 from '../../../Media/img/projectImg7.jpg'

const HomeBanner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={projectImg3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 style={{ color: '#0B2B43' }}>Blue Textile</h1>
                        <p style={{ fontWeight: 'bold', color: 'aqua' }}>Blue Textile dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={projectImg5}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 style={{ color: '#0B2B43' }}>Zipper Textile</h1>
                        <p style={{ fontWeight: 'bold', color: 'aqua' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={projectImg7}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 style={{ color: '#0B2B43' }}>Linen Fabric Project</h1>
                        <p style={{ fontWeight: 'bold', color: 'aqua' }}>Linen Fabric Project dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeBanner;