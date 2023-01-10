import React from 'react';
import { Link, Navigate } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-green-400 rounded-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-primary lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="font-bold text-black-600 menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/courses"}>Courses</Link>
              </li>
              
              <li>
                <Link to={"/blog"}>BLOG</Link>
              </li>
              {/* {
              user?.email?
              <>
              <li className='font-semibold'>
                <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button>
              </li>
              </>
              :
              <>
              <li><Link to={'/loginUser'}>Login</Link></li>
              </>
            } */}
            </ul>
          </div>
          <a className="bg-white btn btn-ghost normal-case text-xl text-black-600">
            <Link to={"/"}>E-learning</Link>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 font-bold text-white">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/courses"}>Courses</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
            
            {/* {
              user?.email?
              <>
              <li className='font-semibold'>
                <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button>
              </li>
              </>
              :
              <>
              <li><Link to={'/loginUser'}>Login</Link></li>
              </>
            } */}
          </ul>
        </div>
      </div>
    );
};

export default Navbar;