import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to get the token from localStorage
  const getToken = () => {
    return localStorage.getItem('token');
  };

  // Fetch blogs from the API with token verification
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = getToken();
        const response = await axios.get('https://backend-ad-s-blog-app-1.onrender.com/api/posts', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBlogs(response.data.blog);
      } catch (error) {
        setError('Failed to fetch blogs. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Function to handle blog delete blogs
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      setLoading(true);
      setError(null);
      try {
        const token = getToken();
        await axios.delete(`https://backend-ad-s-blog-app-1.onrender.com/api/posts/delblog/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBlogs(blogs.filter((blog) => blog._id !== id));
        alert('Blog deleted successfully!');
      } catch (error) {
        setError('Failed to delete blog. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Manage Blogs</h1>
      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 gap-6">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog._id} className="p-4 bg-white shadow-md rounded-lg mb-6">
              <img
                src={blog.coverimg}
                alt={blog.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-700 mb-4">{blog.content}</p>
              <p className="text-gray-600 mb-2">Author: {blog.author}</p>
              <p className="text-gray-600 mb-2">Category: {blog.category}</p>
              <button
                onClick={() => handleDelete(blog._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No blogs available. Please create some blogs first.</p>
        )}
      </div>
    </div>
  );
};

export default DeleteBlog;
