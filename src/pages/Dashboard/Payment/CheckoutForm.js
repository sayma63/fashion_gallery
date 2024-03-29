import React, { useEffect, useState } from 'react';
import { CardElement, useElements,useStripe  } from '@stripe/react-stripe-js';

const CheckoutForm = ({order}) => {
    const [cardError,setCardError]=useState('');
    const [success,setSuccess]=useState('');
    const [transactionId,setTransactionId]=useState('');
    const[processing,setProcessing]=useState(false);

    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements=useElements();
    const {_id,price,customer,email}=order;
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: {
             "Content-Type": "application/json",
             authorization:`bearer ${localStorage.getItem("accessToken")}`
         },
          body: JSON.stringify({ price }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [price]);
    const handleSubmit= async (event)=>{
        event.preventDefault();
        if(!stripe||!elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
          }
          const {error} = await stripe.createPaymentMethod({
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
   
          setSuccess('');
          setProcessing(true)
          const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: customer,
                  email:email
                },
              },
            },
          );
          if(confirmError){
            setCardError(confirmError.message);
            return;
          }
          if(paymentIntent.status=== "succeeded"){
                 
                 //store payment information in the database
                 const payment={
                    price,
                    orderId:_id,
                    transactionId:paymentIntent.id,
                    email
                }
                 fetch('http://localhost:5000/payments',{
                    method:"POST",
                    headers: {
                        "Content-Type": "application/json",
                        authorization:`bearer ${localStorage.getItem("accessToken")}`
                    },
                    
                    body: JSON.stringify(payment),
                 }).then(res=>res.json())
                 .then(data=>{
                    console.log(data)
                     if(data.insertedId){
                        setSuccess("Congrats! Your payment completed")
                        setTransactionId(paymentIntent.id);
                     }
                 })
                 
          }
          setProcessing(false)
          console.log("paymentIntent",paymentIntent)

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
            <button className='btn  mt-4 btn-secondary font-bold text-xl ' type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
        </form>
        <p className="text-red-600">{cardError}</p>
        {
            success && <div>
                <p className='text-green-500'>{success}</p>
                <p>Your TransactionId: <span className='font-bold'>{transactionId}</span></p>
            </div>
        }
        </>

        

    );
};

export default CheckoutForm;