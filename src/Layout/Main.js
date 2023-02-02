import React from 'react';
import { Outlet } from 'react-router-dom';


import Footer from '../Shared/Footer';
import Header from '../Shared/Header';




const Main = () => {
    return (
        <div>
          <Header></Header>
          
          <Outlet></Outlet>
           
          {/* <div className='flex h-[700px]'>
                <div className=' lg:px-5 lg:w-[20%] lg:flex hidden  '>
                    <LeftSideNav></LeftSideNav>
                </div>

                <div className='lg:w-[75%]  w-full'>
                    <Outlet></Outlet>
                </div>
    </div> */}
             <Footer></Footer> 
        </div>
    );
};

export default Main;