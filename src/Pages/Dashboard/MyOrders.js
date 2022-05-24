import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [purchases, setPurchases] = useState([]);
    const [user] = useAuthState(auth);


    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/purchase?email=${user.email}`)
                .then(res => res.json())
                .then(data => setPurchases(data));
        }
    })

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`http://localhost:5000/purchase/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        toast.success(`your order for this item deleted.`)
                    }
                })
        }
    }

    return (
        <div>
            <h2 className='text-lg mt-4 font-bold'>My Orders: {purchases.length}</h2>
            <div class="overflow-x-auto mt-8">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Cancel Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchases.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{a.name}</td>
                                <td>{a.productname}</td>
                                {/* <td>{a._id}</td> */}
                                <td>{a.quantity}</td>
                                <td>{a.price}</td>
                                <td><button onClick={() => handleDelete(a._id)} class="btn btn-xs btn-error">Cancel</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;