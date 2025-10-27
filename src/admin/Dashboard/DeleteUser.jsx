import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteUser = () => {
  const [users, setUsers] = useState([]);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('https://backend-ad-s-blog-app-1.onrender.com/api/user/users');
        console.log('API Response:', res.data); // Log the response to check its structure

        // Access the users array from the response
        if (Array.isArray(res.data.users)) {
          setUsers(res.data.users);
        } else {
          throw new Error('Unexpected data format');
        }
      } catch (err) {
        console.error('Error fetching users:', err); // Log the error
        setError('Failed to fetch users');
      }
    };

    fetchUsers();
  }, []);

  const getToken = () => {
    return localStorage.getItem('token'); // Get the token from local storage
  };

  const handleDeleteUser = async (id) => {
    try {
      const token = getToken(); // Get the token from local storage
      await axios.delete(`https://backend-ad-s-blog-app-1.onrender.com/api/user/deluser/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      setUsers(users.filter((user) => user._id !== id));
      setResponse('User deleted successfully!');
      setError(null);
    } catch (error) {
      console.error('Error deleting user:', error);
      setResponse(null);
      setError('Failed to delete user. Please make sure you are authorized.');
    }
  };

  if (error) return <div>Error: {error}</div>;
  if (!users.length) return <div>Loading users...</div>;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Users List</h2>
      {users.map((user) => (
        <div key={user._id} className="mb-4 p-4 border rounded-md">
          <div className="mb-2">
            <span className="font-medium">Email:</span> {user.email}
          </div>
          <div className="mb-2">
            <span className="font-medium">Role:</span> {user.role}
          </div>
          <button
            onClick={() => handleDeleteUser(user._id)}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Delete User
          </button>
        </div>
      ))}

      {response && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
          <p>{response}</p>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
          <p>Error: {error}</p>
        </div>
      )}
    </div>
  );
};

export default DeleteUser;
