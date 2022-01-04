import React from 'react';
import './Team.css';
// import Fade from 'react-reveal/Fade';
import img1 from '../../../images/im1.jpg'
import img2 from '../../../images/im2.jpg'
import img3 from '../../../images/im3.jpg'

const Team = () => {
    return (
        <div className='my-5'>
            {/* <Fade right big>
                <p>Our Team</p>
            </Fade> */}
            <h1 className='text-center'>Meet With Professional Team</h1>
            <h6 className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio debitis maxime quasi facilis ut molestiae <br /> harum laboriosam error excepturi fugit.</h6>
            <div className="container my-5 ">
                <div className="row row-cols-1 row-cols-md-3 g-5 img-fluid">
                    <div className="col team">
                        <img src={img1} className="card-img-top " alt="..." />

                        <div className="info">
                            <h2>Jhon Doe</h2>
                            <p>Founder/CEO</p>


                            <div className="icon">
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-youtube"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-instagram"></i>
                            </div>
                        </div>

                    </div>
                    <div className="col team">
                        <img src={img2} className="card-img-top" alt="..." />

                        <div className="info">
                            <h2>Jessia Jessy</h2>
                            <p>Marketing Manager</p>


                            <div className="icon">
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-youtube"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-instagram"></i>
                            </div>
                        </div>

                    </div>
                    <div className="col team">
                        <img src={img3} className="card-img-top" alt="..." />

                        <div className="info">
                            <h2>Strela Jhon</h2>
                            <p>Team Manager</p>


                            <div className="icon">
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-youtube"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-instagram"></i>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;