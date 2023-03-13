import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const AddProduct = () => {
    const { register,formState:{errors}, handleSubmit,reset } = useForm();
    const imageHostKey= process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);
    const handleAddProduct =(data)=>{
        console.log(data)
        const image=data.image[0];
        const formData=new FormData();
        formData.append('image',image);
        const url=`https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
        fetch(url,{
            method:"POST",
            body:formData
        })
        .then(res=>res.json())
        .then(imgData=>{
            if(imgData.success){
                console.log(imgData.data.url)
                const product={
                    name:data.name,
                   
                    price:data.price,
                    ratings:data.ratings,
                    category:data.category,
                   
                    description:data.description,
                    image:imgData.data.url

                }
                fetch('http://localhost:5000/products',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json',
                        authorization:`bearer ${localStorage.getItem('accessToken')}`

                    },
                    body:JSON.stringify(product)
                })
                .then(res=>res.json())
                .then(result=>{
                    console.log(result)
                    if(result.insertedId){
                        toast.success('product added successfully');
                        reset();
                    }
                    else{
                        toast.error('product not added')
                    }
                })
            }
            
                
        })

    }
    return (
        <div className='w-96 p-7 '>
            <h2 className='text-3xl text-primary font-bold mb-4 '>ADD A PRODUCT</h2>
            <form className=' ' onSubmit={handleSubmit(handleAddProduct)}>
                    <div className="form-control   w-full max-w-xs">
                        <label className="label">
                            <span className="label-text"> Product Name</span>

                        </label>
                        <input {...register("name", {
                            required:{
                               value:true,
                               message:'Product name is required'
                            }
                        })} type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                    </div>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label ">
                            <span className="label-text">Price</span>

                        </label>
                        <input {...register("price", {
                            required:{
                               value:true,
                               message:'Price is required'
                            }
                        })} type="text" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Ratings</span>

                        </label>
                        <input {...register("ratings", {
                            required:{
                               value:true,
                               message:'ratings is required'
                            }
                        })} type="text" placeholder="Ratings" className="input input-bordered w-full max-w-xs" />
                        
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Category</span>

                        </label>
                        <input {...register("category", {
                            required:{
                               value:true,
                               message:'category is required'
                            }
                        })} type="text" placeholder="Category" className="input input-bordered w-full max-w-xs mb-3" />
                        
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>

                        </label>
                        <textarea {...register("description", {
                            required:{
                               value:true,
                               message:'description is required'
                            }
                        })} type="text" placeholder="Description" className="input input-bordered w-full max-w-xs" />
                        
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text"> Photo</span>

                        </label>
                        <input {...register("image", {
                            required:{
                               value:true,
                               message:'image is required'
                            }
                        })} type="file"  className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}

                       


                        </label>
                    </div>
                    <input className='btn  w-full max-w-xs' type="submit" value='Add Product' />
                </form>
                   
                    
                    
                   
                    

                    
                    
                    
                   

                   
                  {/* <form onSubmit={handleSubmit(handleAddProduct)}>
                     <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text"
                         {...register("name",{
                            required:{
                                value:true,
                                message:'Name is required'
                             }
                         })} class="input input-bordered w-full max-w-xs" />
                          
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                       </div> 
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>

                        </label>
                        <input {...register("price", {
                            required:{
                               value:true,
                               message:'Price is required'
                            }
                        })} type="text" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                        </label>
                    </div>
                    
                    
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text"
                         {...register("email",{
                            required:{
                                value:true,
                                message:'Email is required'
                             },
                             pattern: {
                                 value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                 message: 'provide a valid email' // JS only: <p>error message</p> TS only support string
                             }
                         })} class="input input-bordered w-full max-w-xs" />
                          
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}


                        
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password",{
                                  required:{
                                    value:true,
                                    message:'Password is required'
                                 },
                                 minLength: {
                                     value: 6,
                                     message: 'Must 6 character or longer' // JS only: <p>error message</p> TS only support string
                                 }
                        })} 
                        class="input input-bordered w-full max-w-xs" />
                        
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                        {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}


                       
        
                    </div>
                    <input className='btn btn-primary w-full mt-4' value="Signup" type="submit" />
                    
                </form> */}
            
        </div>
    );
};

export default AddProduct;