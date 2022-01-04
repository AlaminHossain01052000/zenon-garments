import React from 'react';

import Header from '../../Header/header';
import Footer from '../../Footer/Footer';
import OurTeam from '../../AboutUs/OurTeam/Team';
import HomeBanner from '../HomeBanner/HomeBanner';
import OurProject from '../OurProject/OurProject';
import OurServices from '../OurServices/OurServices';
import OurBlog from '../OurBlog/OurBlog';
const Home = () => {
    return (
        <div>
            <Header></Header>

            <HomeBanner></HomeBanner>
            <OurProject></OurProject>
            <OurTeam></OurTeam>
            <OurServices></OurServices>
            <OurBlog></OurBlog>
            <Footer></Footer>
        </div >
    );
};

export default Home;