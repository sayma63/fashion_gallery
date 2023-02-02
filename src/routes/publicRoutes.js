import Home from "../pages/hhhh"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import About from "../pages/About";
import Signup from "../pages/Signup";

// import Products from "../pages/Products";
// import Category from "../pages/ShowsProducts/Category";
// import Group from "../pages/ShowsProducts/Group";




export const publicRoute=[
    
    {path:'/', name:"Home", Component:Home},
    {path:'/about', name:"About", Component:About},
 
    {path:'/contact', name:"Contact", Component:Contact},
    {path:'/login', name:"Login", Component:Login},
    {path:'/signup', name:"Signup", Component:Signup},
    // {path:'/group/:id', name:"Group", Component:Group},
    // {path:'/product/:id', name:"Products", Component:Products},
    // {path:'/catagory/:id', name:"Catagory", Component:Category},
    // {path:'/product/:id', name:"Products", Component:Products},
   
  ];
   