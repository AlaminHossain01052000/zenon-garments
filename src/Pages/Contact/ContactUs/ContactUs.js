import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/header';
import ContactFooter from '../ContactFooter/ContactFooter';
import ContactUsBanner from '../ContactUsBanner/ContactUsBanner';
import ContactUsBlog from '../ContactUsBlog/ContactUsBlog';
<<<<<<< HEAD
import ContactUsMap from '../ContactUsMap/ContactUsMap';

const ContactUs = () => {
    return (
        <div>
            <Header></Header>
=======
import './ContactUs.css';
const ContactUs = () => {
    return (
        <div>
            <h1>Hello</h1>
>>>>>>> contact
            <ContactUsBanner></ContactUsBanner>
            <ContactUsMap></ContactUsMap>
            <ContactUsBlog></ContactUsBlog>
            <ContactFooter></ContactFooter>

        </div>
    );
};

export default ContactUs;