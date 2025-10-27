import React, { useState } from "react";
import { useFetchBlogsQuery } from "../Redux/blog/blogredux";
import { Link } from "react-router-dom";

const Blog = () => {
  const [query, setQuery] = useState({ search: "", category: "" });

  // Fetching data from Redux
  const { data, isLoading } = useFetchBlogsQuery(query);
  const blogs = data?.blog || []; // Access the 'blog' array

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog Posts</h1>

      {isLoading ? (
        <div className="flex justify-center items-center h-48">
          <p className="text-gray-600 text-lg">Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <Link
                to={`/posts/${blog._id}`}
                key={blog._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={blog.coverimg}
                  alt={blog.title}
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">{blog.title}</h2>
                  <p className="text-gray-600 text-sm">{blog.category}</p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-600 text-lg">No blogs found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Blog;
