import React from 'react';
import Banner from '../../Banner/Banner';
import Landing from '../../Landing';
import SaleBanner from '../../SaleBanner';
import BlogsCards from '../../BlogsCards';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Landing></Landing>
           <SaleBanner></SaleBanner>
           <BlogsCards></BlogsCards>

        </div>
    );
};

export default Home;