import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Addblog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [coverimg, setCoverImg] = useState("");
  const [category, setCategory] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      console.log('Token retrieved from local storage:', storedToken);
      setToken(storedToken);
    } else {
      console.error('No token found in local storage');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      console.error('No token available, unable to submit post');
      return;
    }

    const postData = {
      title,
      content,
      author,
      coverimg,
      category,
    };

    try {
      const response = await axios.post('https://backend-ad-s-blog-app-1.onrender.com/api/posts/addposts', postData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Post created successfully:', response.data);
      alert('Blog post created successfully');

      // Clear form fields after submission
      setTitle("");
      setContent("");
      setAuthor("");
      setCoverImg("");
      setCategory("");
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Create a Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            Content
          </label>
          <textarea
            id="content"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="4"
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
            Author
          </label>
          <input
            type="text"
            id="author"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="coverImg" className="block text-sm font-medium text-gray-700 mb-1">
            Cover Image URL
          </label>
          <input
            type="text"
            id="coverImg"
            value={coverimg}
            onChange={(e) => setCoverImg(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <input
            type="text"
            id="category"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default Addblog;
