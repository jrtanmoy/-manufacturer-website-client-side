import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Contact from '../Shared/Contact';
import Testimonials from './Testimonials.js';
import WeProvide from './WeProvide';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Testimonials></Testimonials>
            <WeProvide></WeProvide>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;