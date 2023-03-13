import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";


import Products from "../pages/Products/Products/Products";
import ProductDetails from "../pages/Products/Products/ProductDetails/ProductDetails";
import PrivateRoute from "../AllRoutes/PrivateRoute/PrivateRoute";

import DashboardLayout from "../Layout/DashboardLayout";
import MyOrders from "../pages/Dashboard/MyOrders/MyOrders";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute/AdminRoute";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import ManageProducts from "../pages/Dashboard/ManageProducts/ManageProducts";


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
        },
        {
            path:'/dashboard/allUsers',
            element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
            path:'/dashboard/addProduct',
            element:<AdminRoute><AddProduct></AddProduct></AdminRoute>
        },
        {
            path:'/dashboard/manageProducts',
            element:<AdminRoute><ManageProducts></ManageProducts></AdminRoute>
        }

    ]
 
}


])