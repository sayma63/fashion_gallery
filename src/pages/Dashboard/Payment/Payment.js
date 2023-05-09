import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
    console.log(stripePromise)
    const order= useLoaderData();
    const navigation= useNavigation()
    if(navigation.state === "loading"){
        return <div>
            <div className='h-screen flex justify-center items-center'>
        <button className="btn loading">loading</button>
   </div>
        </div>

        
    }
    console.log(order);
    const {productName,price}=order
    return (
        <div>
            <h3 className="text-3xl text-primary font-bold">Payment for {productName}</h3>
            <p className='text-xl font-bold'>Please pay <strong className='text-orange-400'><span className=' font-bold' >$</span>{price}</strong> for your order</p>
            <div className='w-96 my-12'>
            <Elements stripe={stripePromise}>
      <CheckoutForm 
      order={order}
      />
    </Elements>
            </div>

        </div>
    );
};

export default Payment;