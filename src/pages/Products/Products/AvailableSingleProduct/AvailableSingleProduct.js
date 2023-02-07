import React from 'react';
import { Link  } from 'react-router-dom';

const AvailableSingleProduct = ({product}) => {
    const {_id,name,img,price}=product;
    // const navigate= useNavigate()
    // const navigateProductDetails= (id)=>{
    //    navigate(`/product/${id}`)  
    // }
    return (
        <div class="card card-compact lg:w-[350px] bg-base-100 shadow-xl">
  <figure><img className='lg:h-[275px] lg:w-full ' src={img} alt="" /></figure>
  <div class="card-body">
    <h2 class="card-title font-bold">{name}</h2>
    <p className='text-2xl text-[orange]'>Price:<span className='text-4xl' >৳</span>{price}</p>
    <div class="card-actions justify-end">
      <Link to={`/product/${_id}`} >
      <button  class="btn btn-primary">Buy Now</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default AvailableSingleProduct;