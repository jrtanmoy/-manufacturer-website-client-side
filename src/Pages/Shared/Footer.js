import React from 'react';

import payment from '../../assets/images/payment-card1.png'

const Footer = () => {
    return (
        <footer className="p-10">
            <div className='footer my-20'>
                <div>
                    <span className="footer-title">Contact Us</span>
                    <div className='flex gap-x-2'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <span>
                            Your address goes here
                        </span>
                    </div>
                    <div className='flex gap-x-2'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>
                        <span>
                            Mail Us : info@example.com
                        </span>
                    </div>
                    <div className='flex gap-x-2'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                        </span>
                        <span>
                            Phone: + 00 123 456789 10
                        </span>
                    </div>
                    <div>
                        <img src={payment} alt="payment card" />
                    </div>

                </div>
                <div>
                    <span className="footer-title">Information</span>
                    <a className="link link-hover">Site Map</a>
                    <a className="link link-hover">Specials</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Delivery Information</a>
                    <a className="link link-hover">Order History</a>
                    <a className="link link-hover">Privacy Policy</a>
                </div>
                <div>
                    <span className="footer-title">My Account</span>
                    <a className="link link-hover">Login</a>
                    <a className="link link-hover">My Account</a>
                    <a className="link link-hover">Checkout</a>
                    <a className="link link-hover">Address</a>
                    <a className="link link-hover">Order Status</a>
                    <a className="link link-hover">Site Map</a>
                </div>
                <div>
                    <span className="footer-title">Customer Service</span>
                    <a className="link link-hover">My Account</a>
                    <a className="link link-hover">New</a>
                    <a className="link link-hover">Gift Cards</a>
                    <a className="link link-hover">Return Policy</a>
                    <a className="link link-hover">Your Orders</a>
                    <a className="link link-hover">Subway</a>
                </div>
                <div>
                    <span className="footer-title">Let Us Help You</span>
                    <a className="link link-hover">My Account</a>
                    <a className="link link-hover">My Orders</a>
                    <a className="link link-hover">Shipping</a>
                    <a className="link link-hover">Amazon Prime</a>
                    <a className="link link-hover">Replacements</a>
                    <a className="link link-hover">Manage</a>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;