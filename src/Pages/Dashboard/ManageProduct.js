import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageProduct = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('https://pure-anchorage-71737.herokuapp.com/tool')
            .then(res => res.json())
            .then(data => setTools(data));
    })

    // delete data from database
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`https://pure-anchorage-71737.herokuapp.com/tool/${id}`, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        toast.success(`Product is deleted.`)
                    }
                })
        }
    }

    return (
        <div>
            <h2 className='text-lg mt-4 font-bold'>All Product: {tools.length}</h2>
            <div className="overflow-x-auto mt-8">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Minimum Quantity</th>
                            <th>Available Quantity</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={a.img} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{a.name}</td>
                                <td>${a.price} /per unit</td>
                                <td>{a.minimumQuantity}</td>
                                <td>{a.availableQuantity}</td>
                                <td>{<button onClick={() => handleDelete(a._id)} className="btn btn-xs btn-error">Cancel</button>}</td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;