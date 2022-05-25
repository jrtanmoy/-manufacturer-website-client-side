import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3DomCI5ofJBBGayDjJS74k5iSYlvSs20eRm5VZjFMVU7Mw3exS4D5bFsAb85iFvdivget0w5FIE8izunuak5FO00pqqKTVIA');

const Payment = () => {
    const { id } = useParams();
    const url = `https://pure-anchorage-71737.herokuapp.com/purchase/${id}`;

    const { data: order, isLoading } = useQuery(['purchase', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {order.name}</p>
                    <h2 class="card-title">Please Pay for {order.productname}</h2>
                    <p>Your Order Quantity: <span className='text-orange-700'>{order.quantity}</span></p>
                    <p>Your Email: {order.email}</p>
                    <p>Please pay: ${order.price * order.quantity}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;