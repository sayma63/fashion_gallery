import React from 'react';


import twoGirl from '../assets/images/all photo/two-young-girl.png'
const SaleBanner = () => {
    return (
        <div className=' lg:mx-auto lg:w-[90%] mt-10'>
            <div className='bg-primary lg:h-[70vh] h-[60vh] flex items-center justify-center '
                style={{
                    backgroundImage: `url(${twoGirl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: ""

                }}>
                <div className='bg-[#f9a8d4] lg:p-3 rounded-lg '>
                    <h1 className='text-2xl text-black text-center font-serif'><i>Trend Design!</i></h1>

                    <h1 className='text-5xl text-black lg:mx-40 text-center uppercase font-mono  '>Change Over</h1>

                    <h1 className='text-2xl text-black lg:ml-4  lg:px-3 px-5 mx-auto bg-[white] font-serif mb-2'>Up to 50% OFF All New Products Limited Time Offer </h1>


                </div>


            </div>
        </div>
    );
};

export default SaleBanner;