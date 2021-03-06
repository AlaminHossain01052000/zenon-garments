import React from 'react';

import Footer from '../../Footer/Footer';
import OurTeam from '../../AboutUs/OurTeam/Team';
import HomeBanner from '../HomeBanner/HomeBanner';
import OurProject from '../OurProject/OurProject';
import OurServices from '../OurServices/OurServices';
import OurBlog from '../OurBlog/OurBlog';
import Review from '../Review/Review';
import Header from '../../Header/Header';
const Home = () => {
    return (
        <div>
            <Header></Header>

            <HomeBanner></HomeBanner>
            <OurProject></OurProject>
            <OurTeam></OurTeam>
            <OurServices></OurServices>
            <Review></Review>
            <OurBlog></OurBlog>
            <Footer></Footer>
        </div >
    );
};

export default Home;