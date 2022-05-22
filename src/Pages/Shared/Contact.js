import React from "react";
import toolsBackground from '../../assets/images/tools1.jpg';
import PrimaryButton from "./PrimaryButton";

const Contact = () => {
    return (
        <div>
            <div>
            <h1 className='text-4xl text-secondary text-center font-bold my-8'>
                Contact Us
            </h1>
            </div>
            <div style={{
                background: `url(${toolsBackground})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",
            }} className='bg-primary px-10 py-14'>
                <div className='text-center pb-14 text-white'>

                    <h1 className='text-4xl'>Stay connected with us</h1>
                </div>
                <div className='grid grid-cols-1 justify-items-center gap-5'>
                    <input
                        type='text'
                        placeholder='Email Address'
                        className='input w-full max-w-md'
                    />
                    <input
                        type='text'
                        placeholder='Subject'
                        className='input w-full max-w-md'
                    />
                    <textarea
                        className='textarea w-full max-w-md'
                        placeholder='Your message'
                        rows={6}
                    ></textarea>
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Contact;