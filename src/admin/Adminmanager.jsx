import React from "react";
import { NavLink } from "react-router-dom";

const Adminmanager = () => {
  return (
    <div
      className="space-y -5
bg-white p-8 md:h-[calc(100vh-98px)] flex flex-col justify-between"
    >
      <div className="mb-5">
        <img
          
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCKAJZhVhAqjbMqToEQGwFKw7E0fcxSo4WzA&s"
          alt=""
        />
        <p className="font-semibold">Admin</p>
      </div>
      <hr />
      <ul className="space-y-5 pt-5">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "text-black"
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/addblog"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "text-black"
            }
          >
            Add blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/manageblog"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "text-black"
            }
          >
            Manage Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/deleteblog"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "text-black"
            }
          >
            Delete blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/manageuser"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "text-black"
            }
          >
            Manage User Role
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/deleteuser"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "text-black"
            }
          >
            Delete User
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Adminmanager;
