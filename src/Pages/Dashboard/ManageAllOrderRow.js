import React from 'react';
import { toast } from 'react-toastify';


const ManageAllOrderRow = ({ purchase, refetch,index }) => {
    const {productname, name, email, _id } = purchase;


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`https://pure-anchorage-71737.herokuapp.com/purchases/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        refetch();
                        toast.success(`Order has been deleted.`)
                    }
                })
        }
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productname}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td><button onClick={() => handleDelete(_id)} class="btn btn-xs">cancel order</button></td>
        </tr>
    );
};

export default ManageAllOrderRow;