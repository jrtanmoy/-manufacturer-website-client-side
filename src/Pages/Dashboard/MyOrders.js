import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [purchases, setPurchases] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()


    useEffect(() => {
        if (user) {
            fetch(`https://pure-anchorage-71737.herokuapp.com/purchase?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setPurchases(data)
                });
        }
    })

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`https://pure-anchorage-71737.herokuapp.com/purchase/${id}`, {
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
            <div className="overflow-x-auto mt-8">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Cancel Item</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchases.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.name}</td>
                                <td>{a.productname}</td>
                                {/* <td>{a._id}</td> */}
                                <td>{a.quantity}</td>
                                <td>${a.price * a.quantity}</td>
                                <td>{!a.paid && <button onClick={() => handleDelete(a._id)} className="btn btn-xs btn-error">Cancel</button>}</td>
                                <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(a.price && a.paid) && <div>
                                        <p><span className='text-success'>paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                    </div>}
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;