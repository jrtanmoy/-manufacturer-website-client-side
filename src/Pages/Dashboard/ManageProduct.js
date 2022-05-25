import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageProduct = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tool')
            .then(res => res.json())
            .then(data => setTools(data));
    }, )

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`http://localhost:5000/tool/${id}`, {
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
            <div class="overflow-x-auto mt-8">
                <table class="table w-full">
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
                                    <div class="avatar">
                                        <div class="w-12 rounded-full">
                                            <img src={a.img} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{a.name}</td>
                                <td>${a.price} /per unit</td>
                                <td>{a.minimumQuantity}</td>
                                <td>{a.availableQuantity}</td>
                                <td>{<button onClick={() => handleDelete(a._id)} class="btn btn-xs btn-error">Cancel</button>}</td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;