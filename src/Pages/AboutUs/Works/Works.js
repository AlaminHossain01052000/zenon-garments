import React from 'react';
import './Works.css';
// import Fade from 'react-reveal/Fade';
import image2 from '../../../images/image-2.jpg'
import image3 from '../../../images/image-3.jpg'
import image4 from '../../../images/image-4.jpg'

const Works = () => {
    return (
        <div>
            <div>
                {/* <Fade right big>
                    <p>Our Process</p>
                </Fade> */}
                <h1 className='text-center'>How We Works</h1>
                <h6 className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua</h6>
            </div>

            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-3 g-5 img-fluid">
                    <div className="col">
                        <div>
                            <img src={image2} className="card-img-top " height={"300px"} alt="..." />

                            <div className='circle'>
                                <h1 className='mt-2'>01</h1>
                            </div>
                            <div className="details">
                                <h3>Start Consultation</h3>
                                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, et?</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <img src={image3} className="card-img-top" height={"300px"} alt="..." />

                        <div className='circle'>
                            <h1 className='mt-2'>02</h1>
                        </div>

                        <div className="details">
                            <h3>Choose Best Material</h3>
                            <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, et?</h6>
                        </div>

                    </div>
                    <div className="col">
                        <img src={image4} className="card-img-top" height={"300px"} alt="..." />

                        <div className='circle'>
                            <h1 className='mt-2'>03</h1>
                        </div>
                        <div className="details">
                            <h3>Ready To Export</h3>
                            <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, et?</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;