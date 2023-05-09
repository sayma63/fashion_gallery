import React, { useContext } from 'react';
import {Navigate,useLocation} from "react-router-dom"
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const location =useLocation()
    const {user,loading} =useContext(AuthContext);
    if(loading){
        return <progress class="progress w-96 flex justify-center items-center"></progress>
    }
    if(!user){
        return <Navigate to='/login'state={{from: location}} replace></Navigate>
    }
      return children;
};

export default PrivateRoute;