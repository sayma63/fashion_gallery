import React from 'react';

const BlogCard = ({card}) => {
    const {name,image,bg}=card;
    return (
        <div className={`card lg:h-32  h-[350px] lg:w-[425px] lg:mx-auto lg:card-side mt-5 shadow-xl ${bg}`} >
        <figure><img src={image} alt="Movie" className='lg:w-[200px] w-full ' /></figure>
        <div class="card-body">
          <h2 class="card-title uppercase font-bold text-1xl">{name}</h2>
          
        </div>
      </div>
    );
};

export default BlogCard;
