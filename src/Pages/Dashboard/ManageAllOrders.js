import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageAllOrderRow from './ManageAllOrderRow';


const ManageAllOrders = () => {
    const { data: purchases, isLoading, refetch } = useQuery('purchases', () => fetch('https://pure-anchorage-71737.herokuapp.com/purchases', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">All Orders: {purchases.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Buyer</th>
                            <th>Email</th>
                            <th>Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           purchases.map((purchase, index)=><ManageAllOrderRow
                           key={purchase._id}
                           purchase={purchase}
                           index={index}
                           refetch={refetch}
                           ></ManageAllOrderRow>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;