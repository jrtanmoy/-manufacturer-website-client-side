import React from 'react';
import { Link } from 'react-router-dom';
import notFoundLogo from '../../assets/images/NotFound1.jpg';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='mt-16'>
            <section className='text-center'>
                <div className=''>
                    <div>
                        <h1 className='text-4xl'>
                            Oops! The page you're looking for isn't here.
                        </h1>
                        <p className='text-xl'>
                            You might have the wrong address, or the page may have moved.
                        </p>

                    </div>
                    <div>
                        <div className='grid justify-items-center'>
                            <img className='w-96' src={notFoundLogo} alt="" />
                        </div>
                        <span className='around-link'>
                            <Link
                                to='/'
                                className='homepage-link'
                            >
                                Back to homepage
                            </Link>
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;