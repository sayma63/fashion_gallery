import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { MdOutlinePayments } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { GiReturnArrow } from "react-icons/gi";


const Features = () => {

    return (
        <div className=' lg:mt-10 bg-blue-50 ' >
            <div>
                <h1 className='text-4xl text-center text-sky-600 uppercase mb-5 mt-8 font-serif'>Why Choose Us</h1>
            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:w-[80%] mx-auto mb-10 '>
                <div class="card lg:h-[230px] bg-base-100 shadow-xl">
                    <figure className='    '>
                        <p className=' text-8xl text-pink-900 text-center mt-5  '><FaShippingFast></FaShippingFast></p>
                    </figure>
                    <div class="card-body items-center  text-center">
                        <h2 class="card-title font-bold  ">Free Delivery</h2>
                        <p> For order over Tk 1000</p>
                    </div>
                </div>
                <div class="card lg:h-[230px] bg-base-100 shadow-2xl">
                    <figure class="">
                        <p className=' text-8xl text-pink-900 text-center mt-5 '><GiReturnArrow></GiReturnArrow></p>
                    </figure>
                    <div class="card-body items-center  text-center">
                        <h2 class="card-title font-bold">30 Days Return</h2>
                        <p>If goods have Problems</p>

                    </div>
                </div>
                <div class="card lg:h-[230px] bg-[red] shadow-xl">
                    <figure class="">
                        <p className=' text-8xl text-[black] text-center mt-5 '><MdOutlinePayments></MdOutlinePayments></p>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title  font-bold">Secure Payment</h2>
                        <p>100% secure payment</p>

                    </div>
                </div>
                <div class="card lg:h-[230px] bg-base-100 shadow-xl">
                    <figure>
                        <p  className=' text-8xl text-pink-900 text-center mt-5 '><BiSupport></BiSupport></p>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title font-bold">24/7 Support</h2>
                        <p>Dedicated Support</p>

                    </div>
                </div>
            </div>

        </div>

    );
};

export default Features;