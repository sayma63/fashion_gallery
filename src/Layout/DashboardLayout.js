import React from 'react';
import { Outlet } from 'react-router-dom';
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
                    <ul class="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;