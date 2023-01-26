import React from 'react';
import shoes from "../assets/images/shoes.jpg"
import bags from "../assets/images/bags.jpg"
import tops from "../assets/images/tops.jpg"
import BlogCard from './BlogCard';

const BlogsCards = () => {
    const cardData=[

         {
            id:1,
            name:"Shoes Collections",
            image:shoes,
            bg:"bg-[#a855f7]"
         },
         {
            id:2,
            name:"Bags Collections",
            image:bags,
            bg:"bg-[pink]"
         },
         {
            id:3,
            name:"Tops Collections",
            image:tops,
            bg:"bg-[#a855f7]"
         }

    ]
    return (
        // <div>
        //     <div className=''>
        //        {/* <div>
        //        <h1 className='text-4xl text-center uppercase'><i>New Blogs!!</i></h1>
        //        </div> */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:mx-auto mt-5'>
            {
               cardData.map(card=><BlogCard
               key={card.id}
               card={card}
               ></BlogCard>) 
            }
        </div>
        
    );
};

export default BlogsCards;