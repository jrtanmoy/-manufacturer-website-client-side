import React from 'react';
import businessSummary from '../../assets/images/business-summary.png'
import PrimaryButton from '../Shared/PrimaryButton';

const BusinessSummary = () => {
    return (
        <div>
            <div className='text-center pb-8'>
                <h1 className="text-5xl font-bold">Business Summary</h1>
            </div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={businessSummary} className="max-w-md rounded-lg shadow-2xl" alt='' />
                    <div>
                        <div class="stats shadow">

                            <div class="stat">
                                <div class="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div class="stat-title">Countries</div>
                                <div class="stat-value">60</div>
                                <div class="stat-desc">Jan 1st - April 1st</div>
                            </div>

                            <div class="stat">
                                <div class="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div class="stat-title">Happy Clints</div>
                                <div class="stat-value">520 +</div>
                                <div class="stat-desc">↗︎ 400 (92%)</div>
                            </div>

                            <div class="stat">
                                <div class="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                    </svg>
                                </div>
                                <div class="stat-title">Feedbacks</div>
                                <div class="stat-value">632 +</div>
                                <div class="stat-desc">↘︎ 90 (94%)</div>
                            </div>

                        </div>
                        <div class="stats shadow mt-4">

                            <div class="stat">
                                <div class="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div class="stat-title"> Complete Projects</div>
                                <div class="stat-value">440</div>
                                <div class="stat-desc">Jan 1st - April 1st</div>
                            </div>

                            <div class="stat">
                                <div class="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                                </div>
                                <div class="stat-title">New Registers</div>
                                <div class="stat-value">4,200</div>
                                <div class="stat-desc">↗︎ 400 (92%)</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;