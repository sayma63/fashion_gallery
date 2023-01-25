import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import About from "../pages/About";
import Signup from "../pages/Signup";




export const publicRoute=[
    {path:'/', name:"Home", Component:Home},
    {path:'/about', name:"About", Component:About},
 
    {path:'/contact', name:"Contact", Component:Contact},
    {path:'/login', name:"Login", Component:Login},
    {path:'/signup', name:"Signup", Component:Signup},
   
  ];
   