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

    const handleUpdateRestock = event => {
        event.preventDefault();
        
        const restockquantity = parseInt(event.target.quantity.value);
        console.log(restockquantity);
        
        
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

            <div className=' text-center justify-items-center mt-4 mb-5 '>
                <div>
                    <span className='text-2xl font-bold'>Your Name : {user.displayName}</span>
                    <br />
                    <span className='text-2xl font-bold'>Your Email : {user.email}</span>
                </div>
                <div className='text-center'>
                    <div className='mb-4'>
                        <form className='mt-6' onSubmit={handleUpdateRestock}>
                            <h5 className='text-xl mb-6'>Your Order Quantity:</h5>
                            <div className='flex'>

                                <input className="input input-bordered w-6/12 max-w-xs" type="number" name="quantity"  placeholder='Quantity' />

                                <input className="input input-bordered ml-6 w-3/12 max-w-xs" type="submit" value="Add" />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            </div>



        </div>
    );
};

export default ToolDetail;