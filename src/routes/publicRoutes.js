import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import Products from "../pages/Products"
import About from "../pages/About";




export const publicRoute=[
    {path:'/', name:"Home", Component:Home},
    {path:'/about', name:"About", Component:About},
    {path:'/products', name:"Products", Component:Products},
    {path:'/contact', name:"Contact", Component:Contact},
    {path:'/login', name:"Login", Component:Login},
   
  ];
   