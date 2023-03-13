import React from 'react';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import AvailableProduct from '../Products/AvailableProduct/AvailableProduct';

const ShowProducts = () => {
    return (
        <div className='  mt-16 h-full  ' > 
             <h1 className='text-5xl text-center uppercase text-primary  '><i>Features Products</i></h1>
    
              <div className=' flex gap-x-5  '>
                  <div className=' lg:px-5 lg:w-[20%] w-full hidden   '>
                  <LeftSideNav></LeftSideNav>
                    
                  </div>
                  <div className=' w-[75%] lg:w-full mx-auto '>
                  <AvailableProduct></AvailableProduct>
                  {/* lg:w-full */}
                       
    
                  </div>
    
    
             </div>
          </div>
    //   
    //     <div>
    //          <div className='flex h-[700px]'>
    //             <div className=' lg:px-5 lg:w-[20%] lg:flex hidden  '>
    //                 <LeftSideNav></LeftSideNav>
    //             </div>

    //             <div className='lg:w-[75%]  w-full'>
    //                 <AvailableProduct></AvailableProduct>
    //             </div>
    // </div>
    //     </div>
    );
};

export default ShowProducts;