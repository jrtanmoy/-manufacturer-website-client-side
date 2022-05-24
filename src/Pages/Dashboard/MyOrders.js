import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
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
    }, [user])

    return (
        <div>
            <h2 className='text-lg mt-4 font-bold'>My Orders: {purchases.length}</h2>
            <div class="overflow-x-auto mt-8">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchases.map(a => <tr>
                                <th>1</th>
                                <td>{a.productname}</td>
                                <td>{a.quantity}</td>
                                <td>{a.price}</td>
                                <td>{a.address}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;