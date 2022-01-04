import React from 'react';
import { Link } from 'react-router-dom';
import './ContactBanner.css';

const ContactBanner = () => {
    return (
        <div className='contact_banner'>
            <div className="contact_banner my-5"></div>
            <div className='contact-info text-center'>
                <h2>Don't Hsitate To Contact Us If You Have Any Question</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque optio eveniet id <br /> facilis aut natus dignissimos, ex iure mollitia laboriosam.</p>
                <div className="d-flex justify-content-center">
                    <div className='phone mx-5'>
                        <h3><i class="fas fa-phone-square-alt"></i> 00990099</h3>
                    </div>
                    <div className="mail">
                        <h3><i class="fas fa-envelope-open-text"></i> zenon@com</h3>
                    </div>

                </div>
                <div className='mt-2'>
                    <Link to="/contact_us">
                        <button className='btn button-style px-5 py-3'>Contact</button>
                    </Link>
                </div>


            </div>
        </div>
    );
};

export default ContactBanner;