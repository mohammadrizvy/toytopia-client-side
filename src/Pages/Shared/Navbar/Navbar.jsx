import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user ,logOut } = useContext(AuthContex);

  const handleLogout = (event) => {
    logOut()
      .then(() => {
        Swal.fire("LogOut Success");
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="navbar flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 py-2">
      <div className="navbar-start flex items-center">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
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
              <Link to={"/"}>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <a>All Toys</a>
            </li>
            {user && (
              // Show "My Toys" and "Add Toy" links when user is logged in
              <>
                <li>
                  <a>My Toys</a>
                </li>
                <li>
                  <a>Add Toy</a>
                </li>
              </>
            )}
            <li>
              <a>Blogs</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <img
            className="w-12 lg:w-20 mr-2"
            src="https://i.ibb.co/86r5L38/web-Logo-removebg-preview.png"
            alt=""
          />
          <p className="font-bold text-2xl lg:text-5xl">ToyTopia</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <a>All Toys</a>
          </li>
          {user && (
            <>
              <li>
                <a>My Toy</a>
              </li>
              <li>
                <a>Add Toy</a>
              </li>
            </>
          )}
          <li>
            <a>Blogs</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center mt-4 lg:mt-0">
        {user && user.photoURL ? (
          <div
            className="avatar tooltip tooltip-left"
            data-tip={user.displayName}
          >
            <div className="w-10 rounded-full">
              <img src={user.photoURL} alt="" />
            </div>
          </div>
        ) : (
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://i.ibb.co/4sHVzFy/Internet-Download-Manager.jpg"
                alt=""
              />
            </div>
          </div>
        )}

        {user ? (
          <Link to={"/"}>
            <div onClick={handleLogout} className="btn-ghost btn ml-4 lg:ml-0">
              Logout
            </div>
          </Link>
        ) : (
          <Link to={"/login"}>
            <div className="btn-ghost btn ml-4 lg:ml-0">Login</div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
