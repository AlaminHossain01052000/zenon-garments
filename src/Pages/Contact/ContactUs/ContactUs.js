import React from 'react';
import Header from '../../Header/Header';
import ContactFooter from '../ContactFooter/ContactFooter';
import ContactUsBanner from '../ContactUsBanner/ContactUsBanner';
import ContactUsBlog from '../ContactUsBlog/ContactUsBlog';
import ContactUsMap from '../ContactUsMap/ContactUsMap';

const ContactUs = () => {
    return (
        <div>
            <Header></Header>
            <ContactUsBanner></ContactUsBanner>
            <ContactUsMap></ContactUsMap>
            <ContactUsBlog></ContactUsBlog>
            <ContactFooter></ContactFooter>

        </div>
    );
};

export default ContactUs;