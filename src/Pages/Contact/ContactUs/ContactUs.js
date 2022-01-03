import React from 'react';
import ContactFooter from '../ContactFooter/ContactFooter';
import ContactUsBanner from '../ContactUsBanner/ContactUsBanner';
import ContactUsBlog from '../ContactUsBlog/ContactUsBlog';
import './ContactUs.css';
const ContactUs = () => {
    return (
        <div>
            <h1>Hello</h1>
            <ContactUsBanner></ContactUsBanner>
            <ContactUsBlog></ContactUsBlog>
            <ContactFooter></ContactFooter>
        </div>
    );
};

export default ContactUs;