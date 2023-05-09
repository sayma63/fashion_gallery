import React, { useState } from 'react';
import { CardElement, useElements,useStripe  } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const [cardError,setCardError]=useState('')
    const stripe = useStripe();
    const elements=useElements();
    const handleSubmit= async (event)=>{
        event.preventDefault();
        if(!stripe||!elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
          }
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
          if(error){
             console.log(error)
             setCardError(error.message)
          }
          else{
            setCardError('')
          }

    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn  mt-4 btn-secondary font-bold text-xl ' type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
        <p className="text-red-600">{cardError}</p>
        </>

        

    );
};

export default CheckoutForm;