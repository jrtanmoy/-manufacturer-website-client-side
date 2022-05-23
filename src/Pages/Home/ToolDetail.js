import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';


const ToolDetail = () => {
    const { toolId } = useParams();
    const [tool, setTool] = useState({});
    const [user] = useAuthState(auth);



    useEffect(() => {
        const url = `http://localhost:5000/tool/${toolId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, [tool])

    const handlePurchase = event => {
        event.preventDefault();

        const item = {
            name: user.displayName,
            email: user.email,
            address: event.target.address.value,
            phone: event.target.phone.value,
            quantity: event.target.quantity.value,

        }
        console.log(item);


    }



    return (
        <div>
            <h2 className='text-4xl text-secondary text-center font-bold my-8'>Welcome to detail</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16'>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure><img src={tool.img} alt="Shoes" /></figure>
                    <div class="card-body mt-5">
                        <h2 class="card-title text-secondary">{tool.name}</h2>
                        <p><span className='font-bold'>Price</span> : ${tool.price} /per unit</p>
                        <p><span className='font-bold'>Minimum Order Quantity : {tool.minimumQuantity} unit</span></p>
                        <p><span className='font-bold'>Available Order Quantity : {tool.availableQuantity} unit</span></p>
                        <p><span className='font-bold'>Description</span> : {tool.description}</p>
                    </div>
                </div>

                <div className=' text-center justify-items-center mb-5 '>
                    <div className='text-center'>
                        <div className=''>
                            <h5 className='text-xl mb-6'>Please Purchase</h5>
                            <form className='mt-6' onSubmit={handlePurchase}>

                                <input className="input input-bordered w-full max-w-xs mt-1" type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled />
                                <br />
                                <input className="input input-bordered w-full max-w-xs mt-1" type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                                <br />
                                <input className="input input-bordered w-full max-w-xs mt-1" type="text" name="address" placeholder='Address'  />
                                <br />
                                <input className="input input-bordered w-full max-w-xs mt-1" type="text" name="phone" placeholder="Phone Number"  />
                                <br />
                                <input className="input input-bordered w-full max-w-xs mt-1" type="number" name="quantity" placeholder='Quantity' />
                                <br />

                                <input className="input input-bordered ml-6 w-3/12 max-w-xs mt-2" type="submit" value="Purchase" />

                            </form>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    );
};

export default ToolDetail;