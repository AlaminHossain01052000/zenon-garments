import React from 'react';
import Header from '../Header/Header';
import Pricing from '../Pricing/Pricing';
import './Service.css';

const Service = () => {
    return (
        <div className='main-container'>
            <Header></Header>
            <div>
                <img className='banner-image' src='https://ariel-vac.com/wp-content/uploads/sewing-machine-banner.jpg' alt='' />
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <button className='service-button' >SERVICE</button>

                </div>
            </div>

            <div className='service-container'>
                <div className='fabric-printing car col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                    <img className='mx-auto' src="https://itnh.com/wp-content/uploads/2018/07/surecolor_f7200_angle_with_print.png" alt='' />
                    <h4 className='text-center my-4'>Digital Fabric Printing</h4>
                    <p> Digital printing is a very exciting development in the fabric industry. This type of printing opens opportunities for customization, small run printing, and experimentation! </p>
                    <button>Order</button>
                </div>


                <div className='deying-fabric car col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                    <img className='mx-auto' src="https://botanicalcolors.com/wp-content/uploads/2018/06/Saxon-Blue-Fabric-and-Yarn.png" alt='' />
                    <h4 className='text-center my-4'>Febric Deying</h4>
                    <p>Dyeing is the application of dyes or pigments on textile materials such as fibers, yarns, and fabrics with the goal of achieving color with desired color fastness. </p>
                    <button>Order</button>
                </div>


                <div className='sweater  car col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                    <img src="https://m.media-amazon.com/images/I/51OCZJvEjxL.jpg" alt='' className='mx-auto' />
                    <h4 className='text-center my-4'>Sweater</h4>
                    <p> A sweater (North American English) or pullover, also called a jumper (British English and Australian English),[1] is a piece of clothing, typically with long sleeves, </p>
                    <button>Order</button>
                </div>
            </div>
            <div className='custom-service' >
                <div><h4>Do You Want Custom? Contact Us Now </h4>
                    <p>We are always ready to provide best service.</p></div>
            </div>

            <div className='our-info'>

                <div>
                    <h4>100+</h4>
                    <p>Successful Project</p>
                </div>

                <div>
                    <h4>540+</h4>
                    <p>Satisfied Clients</p>
                </div>

                <div>
                    <h4>20+</h4>
                    <p>Years of Experience</p>
                </div>

            </div>

        </div>
    );
};

export default Service;