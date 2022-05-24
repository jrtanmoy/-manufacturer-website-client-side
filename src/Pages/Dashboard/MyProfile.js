import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    const handleUpdate = event => {
        event.preventDefault();

        const userinfo = {
            name: user.displayName,
            email: user.email,
            address: event.target.address.value,
            phone: event.target.phone.value,
            education: event.target.education.value,
            linkdinlink: event.target.linkdinlink.value

        }
        console.log(userinfo);

        const url = `http://localhost:5000/userinfo/${user.email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userinfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.upsertedId) {
                toast('You successfully add your information!!');
                event.target.reset();
            }
            else if(data.modifiedCount){
                toast('You successfully update your information!!');
                event.target.reset();
            }
        })


    }


    return (
        <div>
        <h2 className='text-4xl text-secondary text-center font-bold my-8'>Your profile is here!!!!!</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16'>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="card-body mt-5">
                    <h2 class="card-title text-secondary">Your info:</h2>
                    <p><span className='font-bold'>Name : ${user?.displayName}</span></p>
                    <p><span className='font-bold'>Email : {user?.email}</span></p>
                </div>
            </div>

            <div className=' text-center justify-items-center mb-5 '>
                <div className='text-center'>
                    <div className=''>
                        <h5 className='text-xl mb-6'>Add or Update Your Info</h5>
                        <form className='mt-6' onSubmit={handleUpdate}>

                            <input className="input input-bordered w-full max-w-xs mt-1" type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled />
                            <br />
                            <input className="input input-bordered w-full max-w-xs mt-1" type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                            <br />
                            <input className="input input-bordered w-full max-w-xs mt-1" type="text" name="address" placeholder='Location' required  />
                            <br />
                            <input className="input input-bordered w-full max-w-xs mt-1" type="text" name="phone" placeholder="Phone Number" required />
                            <br />
                            <input className="input input-bordered w-full max-w-xs mt-1" type="text"
                             name="education" placeholder="Education" required />
                            <br />
                            <input className="input input-bordered w-full max-w-xs mt-1" type="text"
                             name="linkdinlink" placeholder="Linkdin Profile Link"  />
                            <br />
                            <button className="btn mt-2" type='submit' >Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>



    </div>
    );
};

export default MyProfile;