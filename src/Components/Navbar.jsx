import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinks = [
    <NavLink
      to={"/"}
      className={({ isActive }) => (isActive ? "text-red-600" : "")}
    >
      {" "}
      <li>
        <a>Home</a>
      </li>
    </NavLink>,
    <NavLink
      to={"/blog"}
      className={({ isActive }) => (isActive ? "text-red-600" : "")}
    >
      {" "}
      <li>
        <a>Blog</a>
      </li>
    </NavLink>,
    <NavLink
      to={"/application"}
      className={({ isActive }) => (isActive ? "text-red-600" : "")}
    >
      {" "}
      <li>
        <a>Application</a>
      </li>
    </NavLink>,
  ];
  return (
    <div className="navbar bg-base-100 shadow-sm px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <div className="text">
          <a className="text-xl font-bold">
            Samiha Inc<span className="text-red-700">.</span>
          </a>
          <p className="text-xs text-gray-400">Software company</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn rounded-full bg-red-600 text-white">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
