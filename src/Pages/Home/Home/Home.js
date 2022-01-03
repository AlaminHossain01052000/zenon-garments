import React from 'react';

import Header from '../../Header/header';
import Footer from "../../Footer/Footer";
import OurServices from '../OurServices/OurServices';
import OurBlog from '../OurBlog/OurBlog';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <OurServices></OurServices>
            <OurBlog></OurBlog>
            <Footer></Footer>
        </div >
    );
};

export default Home;