import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {_id,name,price,img,description,category,ratings} =useLoaderData();

    //  const { id } =useParams();
    //  const [item,setItem]=useState({});
    //  const {_id,name,quantity,price,img,description,category,ratings}=item;
    // useEffect(()=>{
    //     const url=`/${id}`
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>setItem(data))
    // },[])
    return (
        <div>


<div class="hero min-h-screen  bg-base-300">
  <div class="hero-content flex-col gap-x-10 lg:flex-row">
    <img src={img} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-3xl font-bold">Order For : {name}</h1>
      <p ><span className='text-xl text-orange-400 font-semibold '> Description:{description}</span></p>
      <p className='font-bold'>Price:<span className='text-2xl' >৳</span>{price}</p>
      <p className='font-bold'>Category: {category}</p>
      <p className='font-bold'>Ratings: {ratings} stars</p>

    </div>
  </div>
</div>

           {/* <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-auto mb-4">
                <figure className='px-10 pt-10'><img src={img} className="w-full" style={{ height: '200px' }} alt="" /></figure>
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Order For:{name}</h2>
                    <p><span> Description:{description}</span></p>
                    <p>Price:{perUnitPrice}</p>
                    <p>Minimum quantity:{minimumOrderQuantity}</p>
                    <p> Available quantity:{availableQuantity}</p>




                </div> */}
            </div>
           
        
    );
};

export default ProductDetails;