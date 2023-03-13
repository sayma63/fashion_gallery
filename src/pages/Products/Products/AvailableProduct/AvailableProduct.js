import React, { useEffect, useState } from 'react';
import AvailableSingleProduct from '../AvailableSingleProduct/AvailableSingleProduct';

const AvailableProduct = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <h1>Available Product:{products.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 lg:px-5'>
                {
                    products.map(product=><AvailableSingleProduct key={product.id}
                    product={product}
                    ></AvailableSingleProduct>)
                }
            </div>
        </div>
    );
};

export default AvailableProduct;