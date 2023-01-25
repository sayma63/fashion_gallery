import React from 'react';
import shoppingGirl from "../assets/images/woman.png"

const Home = () => {
    return (
        <div class="hero h-[60vh] lg:w-4/5  mx-auto bg-accent mt-16  ">
  <div class="hero-content flex-col lg:flex-row ">
  <div>
      <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" class="text-4xl font-bold  ">Best Collections for </h1>
      <h1 data-aos="fade-right" data-aos-duration="900" data-aos-delay="400" class="text-4xl font-bold"> Women's </h1>

      <p data-aos="fade-right" data-aos-duration="800" data-aos-delay="600" class="py-6 max-w-2xl font-medium">Fashion Gallery  is the best casual and traditional ladies collection selling online shopping sites for women.It always serves customers with high quality products.</p>
      <button data-aos="zoom-in"  data-aos-delay="1300" class="btn btn-primary">Get Started</button>
    </div>
    <div className='h-[60vh]  '>
    <img src={shoppingGirl} class="h-full" alt='' />
    </div>
    
  </div>
</div>
    );
};

export default Home;
//h-[400px]  w-[50vh] mt-[-30px]