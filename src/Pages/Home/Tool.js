import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    console.log(tool);
    const { _id, name, price, description, minimumQuantity, availableQuantity, img } = tool;

    const navigate = useNavigate();
    const navigateToToolDetail = id => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body mt-5">

                <h2 className="card-title text-secondary">{name}</h2>
                <p><span className='font-bold'>Price</span> : ${price} /per unit</p>
                <p><span className='font-bold'>Minimum Order Quantity : {minimumQuantity} unit</span></p>
                <p><span className='font-bold'>Available Order Quantity : {availableQuantity} unit</span></p>
                <p><span className='font-bold'>Description</span> : {description}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => navigateToToolDetail(_id)} className="btn btn-secondary text-white uppercase">Book Now</button>
                </div>
            </div>
        </div>
    );

};

export default Tool;