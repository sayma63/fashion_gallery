import React from 'react';
import shoppingGirl from "../assets/images/banner pic.png"

const Home = () => {
    return (
        <div class="hero h-[60vh] w-4/5 mx-auto bg-accent mt-16 ">
  <div class="hero-content flex-col lg:flex-row ">
  <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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