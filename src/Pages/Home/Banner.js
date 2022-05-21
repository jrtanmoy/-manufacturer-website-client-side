import React from 'react';
import banner from '../../assets/images/banner.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Tool Starts Here</h1>
                    <p className="py-6">They won’t all fit in your toolbox, but these are the essential tools you need for all sorts of repair jobs, DIY projects, and general upkeep.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;