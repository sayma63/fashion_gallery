import Navbar from "./components/Navbar";

import { Route, Routes } from 'react-router-dom';
import { publicRoute } from "./routes/publicRoutes";
import { privateRoute } from "./routes/privateRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Products from "./pages/Products";
import PrivateRoute from "./authentication/PrivateRoute";
import Login from "./pages/Login";
import Features from "./pages/Features";
import Landing from "./pages/Landing";

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  
  return (
    <div className="App">
     <Navbar>
     <Routes>
      {
        publicRoute.map(({path,Component},index)=><Route key={index} path={path} element={<Component/>}></Route>)
      }
     
<Route element={<PrivateRoute/>}>
{
        privateRoute.map(({path,Component},index)=><Route key={index} path={path} element={<Component/>}></Route>)
      }


</Route>

 


     {/* <Route path='*' element={<NotFound></NotFound>}></Route> */}


       </Routes>
       <Landing></Landing>
       <Features></Features>
       <Toaster></Toaster>
       
      
       <Footer></Footer>
      
     </Navbar>
    
     
    </div>
  );
}

export default App;
