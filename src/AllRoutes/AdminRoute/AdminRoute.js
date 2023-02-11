import React, { useContext } from 'react';
import {Navigate,useLocation} from "react-router-dom"
import useAdmin from '../../allhooks/useAdmin';
import { AuthContext } from '../../contexts/AuthProvider';

const AdminRoute = ({children}) => {
    const location =useLocation()
    const {user,loading} =useContext(AuthContext);
    const [isAdmin,adminLoading]=useAdmin(user?.email)
    if(loading || adminLoading){
        return <progress class="progress w-96 flex justify-center items-center"></progress>
    }
    if(user && isAdmin){
        return children; 
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
      
};

export default AdminRoute;