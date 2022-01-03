import React from 'react';
import OurBlog from './OurBlog/OurBlog';
import OurServices from './OurServices/OurServices';

const Home = () => {
    return (
        <div>
            <OurServices></OurServices>
            <OurBlog></OurBlog>
        </div>
    );
};

export default Home;