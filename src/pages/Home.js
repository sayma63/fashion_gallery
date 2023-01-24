import React from 'react';
import shoppingGirl from "../assets/images/banner pic.png"

const Home = () => {
    return (
        <div class="hero h-[75vh] w-4/5 mx-auto bg-accent mt-16 ">
  <div class="hero-content flex-col lg:flex-row ">
  <div>
      <h1 class="text-5xl font-bold">Best Collections </h1>
      <h1 class="text-5xl font-bold">for Women's </h1>

      <p class="py-6 max-w-2xl font-medium">Fashion Gallery  is the best casual and traditional ladies collection selling online shopping sites for women.It always serves customers with high quality products.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
    <div className='h-[60vh]  '>
    <img src={shoppingGirl} class="h-[400px]  w-[50vh] mt-[-30px]" alt='' />
    </div>
    
  </div>
</div>
    );
};

export default Home;