import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider';

const ProductDetails = () => {
    const { _id, name, price, img, description, category, ratings } = useLoaderData();
    const {user}=useContext(AuthContext);

    const handlePlaceOrder = (event) => {
        event.preventDefault();

        const form=event.target;
        const userName=form.userName.value;
        const email=user?.email || "unregistered";
        const phone = form.phone.value;
        const address = form.address.value;
        
        

        const order = {
            productId:_id,
            productName:name,
            price,
            category,
            customer:userName,
            email,
            phone,
            address
           
            }

            fetch('http://localhost:5000/orders',{
                method: "POST",
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(order)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if (data.insertedId) {
                    toast('order placed successfully')
                    form.reset();
                }
            
            })
            .catch(err=>console.error(err))
    }

    return (
        <div className='lg:mt-6 mt-16'>
            <div class="hero min-h-screen bg-accent  ">
                <div class="hero-content flex-col gap-x-10 lg:flex-row">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-3xl font-bold">Order For : {name}</h1>
                        <p ><span className='text-xl text-orange-400 font-semibold '> Description:{description}</span></p>
                        <p className='font-bold'>Price:<span className='text-2xl' >৳</span>{price}</p>
                        <p className='font-bold'>Category: {category}</p>
                        <p className='font-bold'>Ratings: {ratings} stars</p>

                    </div>
                </div>
            </div>
            <div >
                <form onSubmit={handlePlaceOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-10'>
                    <input type="text" name='userName'  className="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                    <input type="text" value={name} placeholder="Product Name" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='category'value={category} placeholder="Category" className="input input-bordered w-full max-w-xs" />

                    <input type="text" name='price' placeholder="Price" value={price} className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='phone' placeholder="Phone Number" required className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='address' placeholder="Address" required className="input input-bordered w-full max-w-xs" />
                    <input type="submit" value='Place Order' placeholder="" className="input input-bordered w-full max-w-xs btn btn-primary" />

                </form>
            </div>
        </div>


    );
};

export default ProductDetails;