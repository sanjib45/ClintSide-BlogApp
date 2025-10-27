import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Singleblog = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null); // Initialize with null
  const [loading, setLoading] = useState(true); // Initialize with true
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        console.log(`Fetching blog post with ID: ${id}`);
        const response = await axios.get(
          `https://backend-ad-s-blog-app-1.onrender.com/api/posts/${id}`
        );
        console.log("Fetched blog post:", response.data);
        setPost(response.data);
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError("Failed to fetch the blog post.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-5">
      {post.blog ? (
        <div className="max-w-3xl mx-auto p-5 bg-white shadow-md rounded-lg">
          {post.blog.coverimg && (
            <img
              src={post.blog.coverimg}
              alt={post.blog.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
          )}
          <div className="p-5">
            <h1 className="text-3xl font-bold mb-4">{post.blog.title}</h1>
            <p className="text-gray-600 mb-6">
              Published At{" "}
              {new Date(post.blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-gray-600 mb-6 text-lg">By {post.blog.author}</p>
            <div className="text-gray-800 leading-relaxed">
              {post.blog.content}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-10">No blog post found.</div>
      )}
    </div>
  );
};

export default Singleblog;
