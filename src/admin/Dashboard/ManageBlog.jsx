import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({
    title: '',
    content: '',
    author: '',
    coverimg: '',
    category: '',
  });

  // Function to get the token from localStorage
  const getToken = () => {
    return localStorage.getItem('token');
  };

  // Fetch blogs from the API with token verification
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const token = getToken();
        const response = await axios.get('https://backend-ad-s-blog-app-1.onrender.com/api/posts', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBlogs(response.data.blog);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        alert('Failed to fetch blogs. Please make sure you are logged in.');
      }
    };

    fetchBlogs();
  }, []);

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (id) => {
    try {
      const token = getToken();
      await axios.patch(`https://backend-ad-s-blog-app-1.onrender.com/api/posts/updateblog/${id}`, editData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBlogs(blogs.map((blog) => (blog._id === id ? { ...blog, ...editData } : blog)));
      setEditingId(null);
      alert('Blog updated successfully!');
    } catch (error) {
      console.error('Error updating blog:', error);
      alert('Failed to update blog. Please make sure you are authorized.');
    }
  };

  const handleEditClick = (blog) => {
    setEditingId(blog._id);
    setEditData({
      title: blog.title,
      content: blog.content,
      author: blog.author,
      coverimg: blog.coverimg,
      category: blog.category,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Manage Blogs</h1>
      <div className="grid grid-cols-1 gap-6">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog._id} className="p-4 bg-white shadow-md rounded-lg mb-6">
              {editingId === blog._id ? (
                <div>
                  <input
                    type="text"
                    name="title"
                    value={editData.title}
                    onChange={handleEditChange}
                    className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                    placeholder="Title"
                  />
                  <textarea
                    name="content"
                    value={editData.content}
                    onChange={handleEditChange}
                    className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                    rows="4"
                    placeholder="Content"
                  />
                  <input
                    type="text"
                    name="author"
                    value={editData.author}
                    onChange={handleEditChange}
                    className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                    placeholder="Author"
                  />
                  <input
                    type="text"
                    name="coverimg"
                    value={editData.coverimg}
                    onChange={handleEditChange}
                    className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                    placeholder="Cover Image URL"
                  />
                  <input
                    type="text"
                    name="category"
                    value={editData.category}
                    onChange={handleEditChange}
                    className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                    placeholder="Category"
                  />
                  <button
                    onClick={() => handleEditSubmit(blog._id)}
                    className="bg-green-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-green-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div>
                  <img src={blog.coverimg} alt={blog.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                  <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                  <p className="text-gray-700 mb-4">{blog.content}</p>
                  <p className="text-gray-600 mb-2">Author: {blog.author}</p>
                  <p className="text-gray-600 mb-2">Category: {blog.category}</p>
                  <button
                    onClick={() => handleEditClick(blog)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No blogs available. Please create some blogs first.</p>
        )}
      </div>
    </div>
  );
};

export default ManageBlog;
