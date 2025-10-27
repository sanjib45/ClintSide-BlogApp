import React, { useState } from 'react';
import { useFetchBlogsQuery } from '../../Redux/blog/blogredux';
import { useGetUserQuery } from '../../Redux/Authen/auth';

const Dashboard = () => {
  const [query, setQuery] = useState({ search: "", category: "" });
  
  // Fetch blog data by redux
  const { data: blogs = [], error: blogError, isLoading: blogLoading } = useFetchBlogsQuery(query);

  // Fetch user data by redux
  const { data: users = [], error: userError, isLoading: userLoading } = useGetUserQuery();

  console.log("Blogs:", blogs);
  console.log("User data:", users);

  // Error and Loading States when data fetching fails
  if (blogLoading || userLoading) {
    return <div className="text-white">Loading...</div>;
  }

  if (blogError) {
    return <div className="text-red-500">Error loading blogs: {blogError.message}</div>;
  }

  if (userError) {
    return <div className="text-red-500">Error loading users: {userError.message}</div>;
  }

  // Dashboard content
  const blogCount = blogs.blog?.length || 0;
  const usersCount = users.users?.length || 0;

  return (
    <div className="min-h-screen bg-gray-800 p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-100">Dashboard</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className="bg-blue-900 shadow-md rounded-lg p-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-300">Total Blogs</h2>
            <p className="text-2xl font-bold text-gray-100">{blogCount}</p>
          </div>
          <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-7">
        <div className="bg-blue-900 shadow-md rounded-lg p-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-300">Total Users</h2>
            <p className="text-2xl font-bold text-gray-100">{usersCount}</p>
          </div>
          <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
