import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from '../contexts/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';

const Signup = () => {
    const { register,formState:{errors},reset, handleSubmit } = useForm();
    const {createUser,updateUser,providerLogin}=useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [googleError,setGoogleError]=useState("");
    const[signUpError,setSignUpError]=useState('');
    
    const handleSignup= data=>{
        console.log(data)
        setSignUpError('')
        createUser(data.email,data.password)

        .then(result=>{
            const user =result.user;
            console.log(user);
                 toast('User created successfully.')
                 reset();
                 
                 
                 
            const userInfo ={
                displayName:data.name
            }
            updateUser(userInfo)
            .then(()=>{})
            .catch(err=>console.log(err))

        })
        .catch(error=>{
            console.log(error)
            setSignUpError(error.message)
        })
       
    }
   
   
    const handleGoogleSignIn=()=>{
        providerLogin(googleProvider)
        .then(result=>{
          const user =result.user;
          console.log(user);
        

      })
      .catch(error=>{
          console.log(error.message)
          setGoogleError(error.message)
          
      })
    }
    return (
        <div >
        <div className=' h-[100vh] bg-accent mt-16 flex justify-center items-center' >


            <div class="card   flex-shrink-0 m w-96  max-w-sm shadow-2xl bg-base-100 ">
                <div class="card-body">
                    <h1 className='font-bold text-4xl text-center'>Signup</h1>
                   <form onSubmit={handleSubmit(handleSignup)}>
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
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    <div>
                            {
                                googleError && <p className='text-red-600'>{googleError}</p>
                            }
                        </div>
                </form>
                <p>Already have an account <Link to='/login' className='text-green-500'>Please Login</Link></p>
                 <div class="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full hover:btn-primary'>Continue with Google</button>
                    
                    
             </div>
         </div>
     </div>
     </div>
    );
};

export default Signup;