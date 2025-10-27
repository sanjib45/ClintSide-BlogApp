import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Adminmanager from "./Adminmanager";

const Admindashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <aside
        className={`fixed inset-0 md:static md:w-1/5 lg:w-1/4 bg-white shadow-md border-r border-gray-200 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:flex md:flex-col`}
      >
        <button
          className="md:hidden p-4 text-gray-500 hover:text-gray-700"
          onClick={toggleSidebar}
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <Adminmanager />
      </aside>
      
      
      <main className="flex-1 p-6 bg-white overflow-auto md:ml-0 md:pl-0 md:pr-6">
        
        <button
          className="md:hidden p-4 text-gray-500 hover:text-gray-700"
          onClick={toggleSidebar}
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
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        </header>
        <div className="bg-gray-50 shadow-md rounded-lg p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Admindashboard;
