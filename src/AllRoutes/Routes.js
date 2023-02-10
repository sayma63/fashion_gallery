import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";


import Products from "../pages/Products/Products/Products";
import ProductDetails from "../pages/Products/Products/ProductDetails/ProductDetails";
import PrivateRoute from "../AllRoutes/PrivateRoute/PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";
import MyOrders from "../pages/Dashboard/MyOrders/MyOrders";


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
        {
            path:'/product/:id',
            element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
            loader:({params})=> fetch(`http://localhost:5000/products/${params.id}`)
        }

    ]
},
{
    path:'/dashboard',
    element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[

        {
            path:'/dashboard',
            element:<MyOrders></MyOrders>
        }
    ]
 
}


])