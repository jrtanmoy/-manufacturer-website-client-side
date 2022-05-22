import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ToolDetail = () => {
    const { toolId } = useParams();
    const [tool, setTool] = useState({});



    useEffect(() => {
        const url = `http://localhost:5000/tool/${toolId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, [tool])



    return (
        <div>
            <h2 className='text-center  mt-4 mb-4'>Welcome to detail</h2>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure><img src={tool.img} alt="Shoes" /></figure>
                <div class="card-body mt-5">
                    <h2 class="card-title text-secondary">{tool.name}</h2>
                    <p><span className='font-bold'>Price</span> : ${tool.price} /per unit</p>
                    <p><span className='font-bold'>Minimum Order Quantity : {tool.minimumQuantity} unit</span></p>
                    <p><span className='font-bold'>Available Order Quantity : {tool.availableQuantity} unit</span></p>
                    <p><span className='font-bold'>Description</span> : {tool.description}</p>
                </div>
            </div>
            
            
        </div>
    );
};

export default ToolDetail;