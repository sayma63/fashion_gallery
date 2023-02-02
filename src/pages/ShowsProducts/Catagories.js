import React, { useEffect, useState } from 'react';
import Category from './Category';

const Catagories = () => {
    const[categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('catagory.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className=''>
            <h1 className='text-2xl font-bold text-green-700 mb-4 lg:block hidden'>Categories</h1>
            <div>
                {
                    categories.map(category=><Category key={category.id}
                    category={category}></Category>)
                }
            </div>
           
        </div>
    );
};

export default Catagories;