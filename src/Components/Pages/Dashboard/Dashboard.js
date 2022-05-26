import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div>
            <div className="h-screen flex items-end justify-end px-4 pb-6">
  <button className="  z-30 lg:hidden peer h-14 w-14 rounded-full bg-cyan-500 hover:bg-cyan-600 focus:bg-cyan-600 active:bg-cyan-700 transition">
    <span className="text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 m-auto" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"/>
      </svg>
    </span>
  </button>

  <div className="z-20 fixed top-20 -left-96 lg:left-0 custom-height w-9/12 lg:w-72 bg-white shadow-2xl peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
    <nav role="navigation" className="p-6">
        

       

        <div className="mt-4 -mx-4   overflow-y-auto overflow-x-hidden h-[85vh]">
          
         
          <ul className="space-y-4">
            <li className="pr-2">
              <div className="py-2 px-4 text-gray-700 uppercase">
                <Link to="/" className="block">Atoms</Link>
              </div>
              <ul className="text-sm pb-24">
                <li>
                  <Link to = "/my-order" className="block py-2 px-5 rounded bg-cyan-500 bg-opacity-10 hover:bg-opacity-20 text-cyan-500">My Orders</Link>
                </li>
                <li>
                  <Link to = "/add-revew" className="block py-2 px-5 hover:text-gray-800 transition" href="">Add Revew</Link>
                </li>
                <li>
                  <Link to = "/my-profile" className="block py-2 px-5 hover:text-gray-800 transition" href="">My Profile</Link>
                </li>
                <li>
                  <Link to = "/manage-all-order" className="block py-2 px-5 hover:text-gray-800 transition" href="">Manage All Order</Link>
                </li>
                <li>
                  <Link to = "/add-product" className="block py-2 px-5 hover:text-gray-800 transition" href="">Add product</Link>
                </li>
                <li>
                  <Link to = "/make-admin" className="block py-2 px-5 hover:text-gray-800 transition" href="">Make Admin</Link>
                </li>
                <li>
                  <Link to = "/manage-product" className="block py-2 px-5 hover:text-gray-800 transition" href="">Manage Products</Link>
                </li>
                
              </ul>
            </li>
          </ul>
        </div>
      </nav>
  </div>

  <div className="z-10 lg:hidden fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-30 opacity-0 peer-focus:opacity-100 peer:transition duration-200"></div>
</div>
            
        </div>
    );
};

export default Dashboard;