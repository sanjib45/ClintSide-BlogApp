import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutUserMutation } from "../Redux/Authen/auth";
import { logout } from "../Redux/Authen/authslice";

const navList = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const [logoutUser] = useLogoutUserMutation();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      const Logout = await logoutUser().unwrap();
      dispatch(logout());
      if (!Logout) {
        window.alert("Failed to logout");
      } else {
        window.alert("Logout sucessfully");
      }
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <header className="bg-white border-gray-200 dark:bg-gray-900">
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZCnMDbwBxJKErgEbeXK0mMTIyCx3rFZQQQ&s"
            alt="Brand Logo"
            className="h-10 rounded-full"
          />
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-500 dark:text-gray-400 sm:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`w-full sm:flex sm:w-auto ${isOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 text-gray-400">
            {navList.map((list, index) => (
              <li key={index}>
                <NavLink
                  to={list.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-400"
                  }
                >
                  {list.name}
                </NavLink>
              </li>
            ))}

            {user ? (
              user.user.role === "user" ? (
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-red-600 dark:text-red-400"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li className="flex space-x-8">
                  <Link to="/dashboard">
                    <button className="text-blue-600 dark:text-blue-400">
                      Dashboard
                    </button>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-red-600 dark:text-red-400"
                  >
                    Logout
                  </button>
                </li>
              )
            ) : (
              <li>
                <Link
                  to="/login"
                  className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
