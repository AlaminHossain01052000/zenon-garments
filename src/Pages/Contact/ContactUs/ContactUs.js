import React from 'react';
import ContactFooter from '../ContactFooter/ContactFooter';
import ContactUsBanner from '../ContactUsBanner/ContactUsBanner';
import ContactUsBlog from '../ContactUsBlog/ContactUsBlog';

const ContactUs = () => {
    return (
        <div>
            <ContactUsBanner></ContactUsBanner>
            <ContactUsBlog></ContactUsBlog>
            <ContactFooter></ContactFooter>
        </div>
    );
};

export default ContactUs;