import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const order= useLoaderData();
    console.log(order);
    return (
        <div>
            <h3 className="text-3xl text-primary font-bold">Payment</h3>
        </div>
    );
};

export default Payment;