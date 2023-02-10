import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dark, setDark] = useState(false);
  console.log(dark)
  const handleLogOut = () => {
    logOut()
      .then(() => {

      })
      .catch(err => console.log(err))

  }
  const menuItems = <React.Fragment>
    <li>
      <NavLink to='/' className="rounded-lg">Home</NavLink>
    </li>
    <li>
      <NavLink to='/about' className="rounded-lg">About</NavLink>
    </li>
    <li>
      <NavLink to='/products' className="rounded-lg">Products</NavLink>
    </li>
    <li>
      <NavLink to='/dashboard' className="rounded-lg">Dashboard</NavLink>
    </li>
    <li>
      <NavLink to='/contact' className="rounded-lg">Contact</NavLink>
    </li>
    {user?.uid ? <li>
      <button onClick={handleLogOut} className="rounded-lg">SignOut</button>
    </li> : <li>
      <NavLink to='/login' className="rounded-lg">Login</NavLink>
    </li>}
    <li class="dropdown dropdown-hover dropdown-end ">

      <label tabindex="0" class="btn btn-primary btn-outline rounded-lg ">Book Now</label>
      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 ">
        <li>
          <NavLink to='/contact' className="rounded-lg">Item1</NavLink>
        </li>
        <li>
          <NavLink to='/login' className="rounded-lg">Item2</NavLink>
        </li>

      </ul>

    </li>
  </React.Fragment>
  
  return (

    <div class="  navbar bg-base-100 fixed top-0 z-50 flex justify-between lg:px-20  " data-theme={dark ? "dark" : "light"}>
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2  shadow bg-base-100 rounded-box w-52 gap-y-2 ">
            {menuItems}

          </ul>
        </div>
        <div>
 
        <Link to='/' className="lg:flex-1 lg:px-2  lg:mx-2 lg:text-3xl text-xl font-serif">Fashion Gallery</Link>
        </div>
        {/* <div class="flex-1 px-2 mx-2 text-3xl font-serif ">Fashion Gallery</div> */}
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal gap-x-2 ">
          {menuItems}
          <label class="swap swap-rotate">


            <input type="checkbox" onClick={() => setDark(!dark)} />


            <svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>



            <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

          </label>
        </ul>
        

      </div>
      
      <label for="dashboard-drawer" tabindex="1" class="btn btn-ghost  lg:hidden ">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      
     
    </div>

  );
};

export default Header;