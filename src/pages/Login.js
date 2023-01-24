import React from 'react';

const Login = () => {
    return (
        <div className=' h-screen flex justify-center bg-accent items-center    ' >
            <div class="card flex-shrink-0 w-full mx-auto  shadow-2xl max-w-sm  bg-base-100">
                <div class="card-body">
                    <div class="form-control">
                        <h1 className='text-center text-4xl font-bold'>Login</h1>
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" class="input input-bordered" />
                        <label class="label">
                            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Login</button>
                    </div>
                    <div class="divider">OR</div> 
                    <button className='btn btn-glass hover:btn-primary'>Continue with Google</button>
                </div>
            </div>
        </div>

    );
};

export default Login;