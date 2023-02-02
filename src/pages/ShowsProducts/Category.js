import React from 'react';
import { Link } from "react-router-dom"

const Category=({category})=> {
    const { id,name, img } = category
    return (
        <div>
            
            <Link to={`/category/${id}`} className='flex items-center gap-x-2 '>
                <div class="avatar">
                    <div class="w-16 rounded mb-2">
                        <img src={img} alt="" />
                    </div>
                </div>
                <p className='text-xl'>{name}</p>

            </Link>
        </div>
    );
};

export default Category;