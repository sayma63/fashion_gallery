import React, { useContext } from 'react';
import {Navigate,Outlet,useLocation} from "react-router-dom"
import { AuthContext } from '../contexts/AuthProvider';
const PrivateRoute = () => {
    const location =useLocation()
    const {user,loading} =useContext(AuthContext);
    if(loading){
        return <progress class="progress w-96 flex justify-center items-center"></progress>
    }
    if(!user){
        return <Navigate to='/login' state={{from:location}}></Navigate>
    }
      return <Outlet/>;
        
   
};

export default PrivateRoute;
