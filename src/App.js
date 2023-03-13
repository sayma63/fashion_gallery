// import Navbar from "./components/Navbar";

import {  RouterProvider } from 'react-router-dom';
// import { publicRoute } from "./routes/publicRoutes";
// import { privateRoute } from "./routes/privateRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
 import { Toaster } from "react-hot-toast";
import { routes } from "./AllRoutes/Routes";

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  
  
  return (
    <div className="max-w-[1440px]">
    
      <RouterProvider router={routes}
     
      
      > 


      </RouterProvider>
    
      <Toaster></Toaster>
     
     </div>
  );
}

export default App;
