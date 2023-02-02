// import Navbar from "./components/Navbar";

import {  RouterProvider } from 'react-router-dom';
// import { publicRoute } from "./routes/publicRoutes";
// import { privateRoute } from "./routes/privateRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
// import Footer from "./components/Footer";
// import { Toaster } from "react-hot-toast";
// import Products from "./pages/Products";
// import PrivateRoute from "./authentication/PrivateRoute";
// import Login from "./pages/Login";
// import Features from "./pages/Features";
// import Landing from "./pages/Landing";
// import SaleBanner from "./pages/SaleBanner";
// import BlogsCards from "./pages/BlogsCards";
// import ShowsProducts from "./pages/ShowsProducts/ShowsProducts";
// import Category from "./pages/ShowsProducts/Category";
// import Products from "./pages/Products";
import { routes } from "./AllRoutes/Routes";
// import { showsProductRoute } from "./routes/showsProductRoute";
// import Home from "./pages/Home";
// import { showsProductRoute } from "./routes/showsProductRoute";
// import Category from "./pages/ShowsProducts/Category";

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  
  return (
    <div className="">
      <RouterProvider router={routes}></RouterProvider>
    
      
      {/* <Navbar> */}
      
     
       
       
       

     
     
     {/* <Routes>
     
      {
        publicRoute.map(({path,Component},index)=><Route key={index} path={path} element={<Component/>}></Route>)
      } */}

  {/* <Route  element={<ShowsProducts/>}>

{
        showsProductRoute.map(({path,Component},index)=><Route key={index} path={path} element={<Component/>}></Route>)
      }

 </Route>  
      
<Route element={<PrivateRoute/>}>
{
        privateRoute.map(({path,Component},index)=><Route key={index} path={path} element={<Component/>}></Route>)
      }

</Route>
 
<Route path="/showsProduct" element={<ShowsProducts></ShowsProducts>} > 
<Route index path='/catagory/:id'element={<Category></Category>}></Route>
  <Route path='/product/:id'element={<Products></Products>}></Route> 

</Route>

 


     {/* <Route path='*' element={<NotFound></NotFound>}></Route> */}


       {/* </Routes>
       <Landing></Landing>
       <ShowsProducts></ShowsProducts>
       <SaleBanner></SaleBanner>
       <BlogsCards></BlogsCards>
       
       <Features></Features>
       <Toaster></Toaster>
       
      
       <Footer></Footer>
      
     </Navbar> */}
     
     
    </div>
  );
}

export default App;
