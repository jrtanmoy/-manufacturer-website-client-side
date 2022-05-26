import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault();

        // get data from input field and store
        const product = {
            name: event.target.name.value,
            price: event.target.price.value,
            minimumQuantity: event.target.minimumQuantity.value,
            availableQuantity: event.target.availableQuantity.value,
            description: event.target.description.value,
            img: event.target.img.value,

        }
        console.log(product);
        fetch('https://pure-anchorage-71737.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast('Your product is successfully submitted!!');
                    event.target.reset();
                }
            })


    }


    return (
        <div>
            <h2 className='text-2xl text-secondary text-center font-bold my-8'>Want to Add a New Product!!</h2>



            <div className=' text-center justify-items-center mb-5 '>
                <div className='text-center'>
                    <div className=''>
                        <h5 className='text-xl mb-6'>Please Add</h5>
                        <form className='mt-6' onSubmit={handleAddProduct}>
                            <input className="input input-bordered w-full max-w-xs mt-1" type="text" name="name" placeholder='Product Name' required />
                            <br />
                            <input className="input input-bordered w-full max-w-xs mt-1" type="number"
                                name="price" placeholder='Price' required />
                            <br />
                            <input className="input input-bordered w-full max-w-xs mt-1" type="number"
                                name="minimumQuantity" placeholder='Minimum Quantity' required />
                            <br />
                            <input className="input input-bordered w-full max-w-xs mt-1" type="number"
                                name="availableQuantity" placeholder='Available Quantity' required />
                            <br />
                            <input className="input input-bordered w-full max-w-xs mt-1" type="text" name="description" placeholder='Description' required />
                            <br />
                            <input className="input input-bordered w-full max-w-xs mt-1" type="text" name="img" placeholder='Image Link' required />
                            <br />

                            <button className="btn mt-2" type='submit'>Add</button>
                        </form>
                    </div>

                </div>
            </div>




        </div>
    );
};

export default AddProduct;