import React from 'react';

const BlogCard = ({card}) => {
    const {name,image,bg}=card;
    return (
        <div className={`card lg:h-32 h-[350px] lg:w-[300px] lg:card-side  shadow-xl ${bg}`} >
        <figure><img src={image} alt="Movie" className='lg:w-[200px] ' /></figure>
        <div class="card-body">
          <h2 class="card-title uppercase font-bold text-1xl">{name}</h2>
          
        </div>
      </div>
    );
};

export default BlogCard;
