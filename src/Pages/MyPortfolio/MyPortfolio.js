import React from 'react';
import picture from '../../assets/images/joy.jpg'

const MyPortfolio = () => {
    return (
        <div>
            <h1 className="text-4xl text-secondary text-center font-bold my-8">My Portfolio</h1>
            <div className="hero mt-6">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={picture} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-2xl font-bold">My name is Joy Roy.</h1>
                        <p className="text-xl"><span className='font-bold'>My Email :</span> roy28301@gmail.com</p>
                        <p className="text-xl"><span className='font-bold'>Educational background :</span> Currently i'm studing in honours 2nd year in national university. My major is Mathematics. I  passed ssc from Govt Daulatpur Mohasin high School with containing GPA 5 out of 5. Then i admited Govt Model School & college. From there i passed my hsc with containing GPA 4.83 out of 5. Then i admitted to my current institute.</p>
                        <p className="text-xl"><span className='font-bold'>list of technologies or skills I have as a web developer:</span></p>
                        <p className="text-lg font-bold">1. HTML</p>
                        <p className="text-lg font-bold">2. CSS</p>
                        <p className="text-lg font-bold">3. JAVASCRIPT </p>
                        <p className="text-lg font-bold">4. BOOTSTRAP </p>
                        <p className="text-lg font-bold">5. TAILWIND </p>
                        <p className="text-lg font-bold">6. REACT </p>
                        <p className="text-lg font-bold">7. MONGODB </p>
                        <p className="text-lg font-bold">8. NODE.JS </p>

                        <p className="text-xl"><span className='font-bold'>Some of my projects link:</span></p>
                        <a className='text-blue-600 text-lg no-underline hover:underline ' href='https://groxi-warehouse.web.app/' >a) Site 1</a>
                        <br />
                        <a className='text-blue-600 text-lg no-underline hover:underline ' href='https://independent-service-prov-3df5f.web.app/' >b) Site 2</a>
                        <br />
                        <a className='text-blue-600 text-lg no-underline hover:underline ' href='https://peppy-phoenix-2e7c24.netlify.app/' >c) Site 3</a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;