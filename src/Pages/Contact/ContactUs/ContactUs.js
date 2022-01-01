import React from 'react';
import ContactFooter from '../ContactFooter/ContactFooter';
import ContactUsBanner from '../ContactUsBanner/ContactUsBanner';
import ContactUsBlog from '../ContactUsBlog/ContactUsBlog';
import ContactUsMap from '../ContactUsMap/ContactUsMap';

const ContactUs = () => {
    return (
        <div>
            <ContactUsBanner></ContactUsBanner>
            <ContactUsMap></ContactUsMap>
            <ContactUsBlog></ContactUsBlog>
            <ContactFooter></ContactFooter>
        </div>
    );
};

export default ContactUs;