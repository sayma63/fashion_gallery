import React from 'react';
import Banner from '../../Banner/Banner';
import Landing from '../../Landing';
import SaleBanner from '../../SaleBanner';
import BlogsCards from '../../BlogsCards';
import Features from '../../Features';
import Review from './Review/Review';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Landing></Landing>
           <SaleBanner></SaleBanner>
           <Review></Review>
           <BlogsCards></BlogsCards>
           <Features></Features>

        </div>
    );
};

export default Home;