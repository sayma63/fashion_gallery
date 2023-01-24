import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"

const Login = () => {
    const { register,formState:{errors}, handleSubmit } = useForm();
    const handleLogin= data=>{
        console.log(data)
    }
    return (
      
        <div >
            <div className=' h-[90vh] bg-accent mt-16 flex justify-center items-center' >


                <div class="card   flex-shrink-0 m w-96  max-w-sm shadow-2xl bg-base-100 ">
                    <div class="card-body">
                        <h1 className='font-bold text-4xl text-center'>Login</h1>
                       <form onSubmit={handleSubmit(handleLogin)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text"
                             {...register("name",{
                                required:{
                                    value:true,
                                    message:'Name is required'
                                 },
                                 pattern: {
                                     value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                     message: 'provide a valid email' // JS only: <p>error message</p> TS only support string
                                 }
                             })} class="input input-bordered w-full max-w-xs" />
                              
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
 
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
 

                            
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
 

                           
                            <label class="label">
                                <span class="label-text">Forget Password?</span>

                            </label>
                        </div>
                        <input className='btn btn-primary w-full' value="Login" type="submit" />
                    </form>
                    <p>New to Fashion Gallery? <Link to='/signup' className='text-green-500'>Create new account</Link></p>
                     <div class="divider">OR</div>
                    <button className='btn btn-outline w-full hover:btn-primary'>Continue with Google</button>
                        
                        
                 </div>
             </div>
         </div>
         </div>

    );
};

export default Login;