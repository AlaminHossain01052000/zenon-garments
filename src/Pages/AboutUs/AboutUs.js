import React from 'react';
import './AboutUs.css';
// import { ProgressBar } from 'react-bootstrap';
import AboutUsBanner from './AboutUsBanner/AboutUsBanner';
import AboutTextilery from './AboutTextilery/AboutTextilery';

const AboutUs = () => {
    return (
        <div>
            <AboutUsBanner></AboutUsBanner>
            <AboutTextilery></AboutTextilery>
        </div>
    );
};

export default AboutUs;