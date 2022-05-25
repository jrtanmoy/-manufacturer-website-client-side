import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyReview = () => {

    const [user] = useAuthState(auth);
    const [isDisabled, setDisabled] = useState(false);

    const handlePurchase = event => {
        event.preventDefault();

        const rattingQuantity = parseInt(event.target.ratting.value)
        console.log(rattingQuantity);

        if((0 >= rattingQuantity) || (rattingQuantity >= 6)){
            toast(`you have to ratting between 1 to 5 quantity`)
            setDisabled(true);
            event.target.reset();
            return;
        }




        const review = {
            name: user.displayName,
            email: user.email,
            ratting: event.target.ratting.value,
            description: event.target.description.value,

        }
        console.log(review);
        fetch('https://pure-anchorage-71737.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast('Your review is successfully submitted!!');
                    event.target.reset();
                }
            })


    }

    return (
        <div>
            <h2 className='text-2xl text-secondary text-center font-bold my-8'>Want to give us review!!</h2>



            <div className=' text-center justify-items-center mb-5 '>
                <div className='text-center'>
                    <div className=''>
                        <h5 className='text-xl mb-6'>Please Review</h5>
                        <form className='mt-6' onSubmit={handlePurchase}>
                            <input className="input input-bordered w-full max-w-xs mt-1" type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled />
                            <br />
                            <input className="input input-bordered w-full max-w-xs mt-1" type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                            <br />
                            <input className="input input-bordered w-full max-w-xs mt-1" type="number"
                            name="ratting" placeholder='Ratting (should be 1 to 5)' required />
                            <br />
                            <input className="input input-bordered w-full max-w-xs mt-1" type="text" name="description" placeholder='Description' required />
                            <br />

                            <button className="btn mt-2" type='submit' disabled={isDisabled}>Add</button>
                        </form>
                    </div>

                </div>
            </div>




        </div>
    );
};

export default MyReview;