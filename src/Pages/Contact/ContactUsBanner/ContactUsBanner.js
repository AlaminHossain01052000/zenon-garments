import React from 'react';
import './ContactUsBanner.css';
import factoryVideo from '../../../Media/factory-video.mp4';
const ContactUsBanner = () => {

    return (
        <div className='contact-banner-video-container mb-5'>
            <video loop="true" autoPlay="true" id="factoryVideo" >
                <source src={factoryVideo} type="video/mp4" />
            </video>
            <div className='contact-us-banner-heading'>
                <h1 className='font-roboto'>Contact Us</h1>
            </div>

        </div>
    );
};

export default ContactUsBanner;