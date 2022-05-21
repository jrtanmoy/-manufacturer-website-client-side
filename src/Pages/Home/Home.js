import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Testimonials from './Testimonials.js';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;