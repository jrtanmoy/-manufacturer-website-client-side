import React, { useState } from 'react';
import { toast } from 'react-toastify';


const ManageAllOrderRow = ({ purchase, refetch, index }) => {
    const { productname, name, email, _id, paid } = purchase;
    const [approved, setApproved] = useState(true);


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

    const handleUpdateStatus = id => {
        setApproved(false);
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productname}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                {(paid && approved) && <p>pending</p>}
                {(paid && !approved) && <p>shiped</p>}
                {(!paid && approved) && <p>unpaid</p>}
            </td>
            <td>
                {!paid && <button onClick={() => handleDelete(_id)} className="btn btn-xs">cancel order</button>}
                {paid && <button onClick={() => handleUpdateStatus(_id)} className="btn btn-success btn-xs">update status</button>}

            </td>
        </tr >
    );
};

export default ManageAllOrderRow;