import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import { AuthContext } from '../contexts/AuthProvider';
import {useNavigate,useLocation} from "react-router-dom"
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from '../allhooks/useToken';

const Login = () => {
    const { register,formState:{errors},reset, handleSubmit } = useForm();
    const {signIn,providerLogin }=useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const location=useLocation();
    const navigate=useNavigate()
    
    const [loginError,setLoginError]=useState("")
    const [googleError,setGoogleError]=useState("");
    const [loginUserEmail,setLoginUserEmail]=useState('');
    const [token]=useToken(loginUserEmail);
    let from =location.state?.from?.pathname || '/';
    useEffect(()=>{
        if(token){
            navigate(from, { replace: true });
        }
    },[token,from,navigate])
    // if(token){
    //     navigate(from, {replace:true})
    // }
    const handleLogin= data=>{
        // console.log(data);
        setLoginError('');
        signIn(data.email,data.password)
        .then(result=>{
            const user =result.user;
            reset();
             console.log(user);
             setLoginUserEmail(data.email)
          

        })
        .catch(error=>{
            console.log(error.message)
            setLoginError(error.message)
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
    // const handleResetPassword=({email})=>{
    //     console.log("email is",email)
    //     console.log("email; showed",email)
    //    resetPassword(email)
    //    .then(() => {
       
    //     alert('Password reset email sent');
    //   })
    //   .catch((error) => {
        
    //     console.log(error)
    //   });
    // }
    return (
      
        <div >
            <div className=' h-[90vh] bg-accent mt-16 flex justify-center items-center' >


                <div class="card   flex-shrink-0 m w-96  max-w-sm shadow-2xl bg-base-100 ">
                    <div class="card-body">
                        <h1 className='font-bold text-4xl text-center'>Login</h1>
                       <form onSubmit={handleSubmit(handleLogin)}>
                        {/* <div class="form-control w-full max-w-xs">
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
 

                            
                        </div> */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email"
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
 
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
 

                           
                            {/* <label class="label">
                            <p class="label-text">Forget Password? <button onClick={handleResetPassword} className='   link '>Please reset</button></p>

                            </label> */}
                        </div>
                        <input className='btn btn-primary w-full mt-3' value="Login" type="submit" />
                        <div>
                            {
                                loginError && <p className='text-red-600'>{loginError}</p>
                            }
                        </div>
                        <div>
                            {
                                googleError && <p className='text-red-600'>{googleError}</p>
                            }
                        </div>
                    </form>
                    <p>New to Fashion Gallery? <Link to='/signup' className='text-green-500'>Create new account</Link></p>
                     <div class="divider">OR</div>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline w-full hover:btn-primary'>Continue with Google</button>
                        
                        
                 </div>
             </div>
         </div>
         </div>

    );
};

export default Login;