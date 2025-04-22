import React from "react";
import { Link, NavLink } from "react-router-dom";
import UseAuht from '../Hooks/UseAuth'


function Navbar() {
  const { user, logOut } =UseAuht();
  // handlelogout
  const handlelogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error.message);
        // An error happened.
      });
  };


  const navLinks = [
    <NavLink
      to={"/"}
      className={({ isActive }) => (isActive ? "text-red-600 font-semibold" : "font-semibold")}
    >
      {" "}
      <li>
        <a>Home</a>
      </li>
    </NavLink>,
    <NavLink
      to={"/blog"}
      className={({ isActive }) => (isActive ? "text-red-600 font-semibold" : " font-semibold")}
    >
      {" "}
      <li>
        <a>Blog</a>
      </li>
    </NavLink>,
    <NavLink
      to={"/application"}
      className={({ isActive }) => (isActive ? "text-red-600 font-semibold" : "font-semibold")}
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
            className="menu menu-sm dropdown-content  z-1 mt-3 w-52 p-2 shadow"
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
      {user ? (
                        <div className="dropdown dropdown-end space-y-3">
                          <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                          >
                            <div className="w-10 rounded-full border-2 border-teal-600">
                              <img
                                src={user.photoURL || "/default-avatar.png"}
                                alt="User Avatar"
                              />
                            </div>
                          </label>
                          <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-4 shadow border-accent space-y-4"
                          >
                            <li>
                              <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                              <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-md shadow"  onClick={handlelogout}>Logout</button>
                            </li>
                          </ul>
                        </div>
                      ) : (
                        <div className="flex gap-4">
                          <Link
                            to="/login"
                            className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-md shadow"
                          >
                            Login
                          </Link>
                          <Link
                            to="/register"
                            className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-md shadow"
                          >
                            Register
                          </Link>
                        </div>
                      )}
      </div>
    </div>
  );
}

export default Navbar;
