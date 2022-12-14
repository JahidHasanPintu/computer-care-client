import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';

const Navbar = () => {
    // Sign out process 
    const [user] = useAuthState(auth);
  const menuItems = <>
        <li><Link to = "/home">Home</Link></li>
        <li><Link to = "/blog">Blog</Link></li>
       
        <li> {user?<Link to = "/dashboard">Dashboard</Link>:""} </li>
        <li><Link to = "/portfolio">Portfolio</Link></li>
        
  </>



  const handleSignOut = () =>{
      signOut(auth);
  }
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        { menuItems}
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl" to = "/">Computer Care</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    { menuItems}
    </ul>
  </div>
  <div className="navbar-end">
  {
    user?<Link onClick={handleSignOut} className="btn" to = "/" >Logout ({user?.displayName})</Link>
                        
    :<Link className="btn"  to = "/login" >Login</Link>
      }
    
  </div>
</div>
        </div>
    );
};

export default Navbar;