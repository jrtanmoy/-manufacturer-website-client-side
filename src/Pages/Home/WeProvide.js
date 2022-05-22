import React from 'react';
import delivery from '../../assets/images/delivery.png'
import time from '../../assets/images/time.png'
import money from '../../assets/images/money.png'
import offer from '../../assets/images/offer.png'

const WeProvide = () => {
    return (
        <section className='my-40'>
            <h1 className='text-4xl font-bold text-center mb-6 pb-10 text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary'>We Provide</h1>
            <div class="divider mb-10"></div>
            <div className='footer gap-x-10'>
                <div className='flex gap-x-2'>
                    <span>

                        <img src={delivery} alt="" />
                    </span>
                    <span className='ml-2'>
                        <h1 className='text-lg font-bold'>FREE DELIVERY</h1>
                        <p>Free shipping on all order</p>
                    </span>
                </div>
                <div className='flex gap-x-2'>
                    <span>

                        <img src={time} alt="" />
                    </span>
                    <span className='ml-2'>
                        <h1 className='text-lg font-bold'>ONLINE SUPPORT 24/7</h1>
                        <p>Support online 24 hours</p>
                    </span>
                </div>
                <div className='flex gap-x-2'>
                    <span>

                        <img src={money} alt="" />
                    </span>
                    <span className='ml-2'>
                        <h1 className='text-lg font-bold'>MONEY RETURN</h1>
                        <p>Back guarantee under 7 days</p>
                    </span>
                </div>
                <div className='flex gap-x-2'>
                    <span>

                        <img src={offer} alt="" />
                    </span>
                    <span className='ml-2'>
                        <h1 className='text-lg font-bold'>MEMBER DISCOUNT</h1>
                        <p>Onevery order over $30.00</p>
                    </span>
                </div>
            </div>
            <div class="divider mt-10"></div>
        </section>
    );
};

export default WeProvide;