import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Shared/Header';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div class="drawer drawer-mobile mt-16 ">
                <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content  mt-3">
                       <Outlet></Outlet>
                   

                </div>
                <div class="drawer-side">
                    <label for="dashboard-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 w-80 bg-base-100 text-base-content ">

                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li className='mt-2'><Link to='/dashboard/allUsers'>All Users</Link></li>
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;