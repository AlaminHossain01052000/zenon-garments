import React from 'react';
import './AboutTextilery.css'
import images1 from '../../../images/image1.png'
import images2 from '../../../images/experience.PNG'
// import Fade from 'react-reveal/Fade';

const AboutTextilery = () => {
    return (
        <div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-6">
                        <img src={images1} alt="" className='img-fluid image-style' />
                    </div>
                    <div className="col-md-6 about-details">
                        {/* <Fade right big>
                            <p>About Textliery</p>
                        </Fade> */}
                        <h1>We Provide The Best Textile <br /> Industry Since 2005</h1>
                        <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud</p>
                        <div className="row mt-5">
                            <div className="col-md-6">
                                <img src={images2} className='img-fluid' alt="" />
                            </div>
                            <div className="col-md-6">
                                <p><i class="fas fa-check-circle"></i> Best Quality Standards</p>
                                <p><i class="fas fa-check-circle"></i> Best Quality Standards</p>
                                <p><i class="fas fa-check-circle"></i> Best Quality Standards</p>
                                <p><i class="fas fa-check-circle"></i> Best Quality Standards</p>
                                <p><i class="fas fa-check-circle"></i> Best Quality Standards</p>
                            </div>
                        </div>
                        <p className='text-center mt-5'>Contact With Us</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTextilery;