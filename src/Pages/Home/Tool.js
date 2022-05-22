import React from 'react';

const Tool = ({ tool }) => {
    const { name, price, description, minimumQuantity, availableQuantity, img } = tool;


    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body mt-5">

                <h2 class="card-title text-secondary">{name}</h2>
                <p><span className='font-bold'>Price</span> : ${price} /per unit</p>
                <p><span className='font-bold'>Minimum Order Quantity : {minimumQuantity} unit</span></p>
                <p><span className='font-bold'>Available Order Quantity : {availableQuantity} unit</span></p>
                <p><span className='font-bold'>Description</span> : {description}</p>
                <div class="card-actions justify-center">
                    <button class="btn btn-secondary text-white uppercase">Book Now</button>
                </div>
            </div>
        </div>
    );

};

export default Tool;