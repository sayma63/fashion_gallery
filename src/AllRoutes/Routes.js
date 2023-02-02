import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Group from "../pages/ShowsProducts/Group";
import Products from "../pages/Products/Products/Products";


export const routes=createBrowserRouter([

{
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        
        {
            path:'/signup',
            element:<Signup></Signup>
        },
        {
            path:'/products',
            element:<Products></Products>
        },
        // {
        //     path:'/group/:id',
        //     element:<Group></Group>
        // }

    ]
}


])