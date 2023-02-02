import React from 'react';

const AvailableSingleProduct = ({product}) => {
    const {name,img,price}=product
    return (
        <div class="card card-compact lg:w-[350px] bg-base-100 shadow-xl">
  <figure><img className='lg:h-[150px] lg:w-full ' src={img} alt="" /></figure>
  <div class="card-body">
    <h2 class="card-title font-bold">{name}</h2>
    <p className='text-2xl text-[orange]'>Price:<span className='text-4xl' >৳</span>{price}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default AvailableSingleProduct;