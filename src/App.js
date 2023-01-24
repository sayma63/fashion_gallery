import Navbar from "./components/Navbar";

import { Route, Routes } from 'react-router-dom';
import { publicRoute } from "./routes/publicRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import Footer from "./components/Footer";

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
     {/* <Route path='/' element={<Home></Home>}></Route>
     <Route path='login' element={<Login></Login>}></Route>
     <Route path='contact' element={<Contact></Contact>}></Route>
     <Route path='products' element={<Products></Products>}></Route>
     <Route path ='about' element={<About></About>}></Route> */}

      



 


     {/* <Route path='*' element={<NotFound></NotFound>}></Route> */}


       </Routes>
       <Footer></Footer>

     </Navbar>
    </div>
  );
}

export default App;
