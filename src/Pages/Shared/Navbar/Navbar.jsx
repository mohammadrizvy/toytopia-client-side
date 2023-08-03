import React from "react";

const Navbar = () => {
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>All Toys</a>
            </li>
            <li>
              <a>My Toys</a>
            </li>
            <li>
              <a>Add Toys</a>
            </li>
            <li>
              <a>Blogs</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <p className="btn btn-ghost normal-case text-3xl">ToyTopia</p>
          <img className="w-10"
            src="https://i.ibb.co/86r5L38/web-Logo-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-black font-light px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>All Toys</a>
          </li>

          <li>
            <a>My Toy</a>
          </li>
          <li>
            <a>Add Toy</a>
          </li>

          <li>
            <a>Blogs</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img
              src="https://i.ibb.co/4sHVzFy/Internet-Download-Manager.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="btn-ghost btn font-light">Login</div>
      </div>
    </div>
  );
};

export default Navbar;
