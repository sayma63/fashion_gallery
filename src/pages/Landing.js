import React from 'react';
import sari from '../assets/images/all photo/womensari.png'

import yellow_kurti from '../assets/images/all photo/yellow-dress.png'
import makeup from "../assets/images/all photo/makeupset.png"

const Landing = () => {
    return (
        <div className='lg:p-2 mt-5 '>
            <div className=''>
                <div className=' grid lg:grid-cols-2 lg:gap-x-5 gap-y-5  mx-auto lg:w-[75%]  '>
                    <div className=' h-[420px]  bg-[red]  '
                        style={{
                            backgroundImage: `url(${sari})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'

                        }}>
                            <h1 className='uppercase lg:p-60 p-20 text-5xl text-[white] '>New Arrivals</h1>
                    </div>
                    <div className='h-[400px] grid grid-cols-1 gap-y-5  '>
                        <div className='bg-[green]   h-[200px] '
                        style={{
                            backgroundImage: `url(${yellow_kurti})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                       

                        }}>
                            <h1 className='text-4xl text-white uppercase text-center p-20 font-serif '>kurti</h1>
                            
                        </div>
                        <div className='bg-[green]   h-[200px] '
                        style={{
                            backgroundImage: `url(${makeup})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                       

                        }}>
                              <h1 className='text-4xl text-white uppercase text-center px-10 py-2 font-mono '>Beauty</h1>
                              <h1 className='text-4xl text-white uppercase text-center  font-mono'>Enjoy20%off</h1>

                        </div>
                        
                    </div>
                   
            </div>
       </div>
       </div>


    );
};

export default Landing;