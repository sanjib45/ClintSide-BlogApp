import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageUser = () => {
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
    return localStorage.getItem('token'); 
  };

  const handleRoleChange = async (id, newRole) => {
    try {
      const token = getToken();
      await axios.put(`https://backend-ad-s-blog-app-1.onrender.com/api/user/userupd/${id}`, { role: newRole }, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      setUsers(users.map((user) => (user._id === id ? { ...user, role: newRole } : user)));
      setResponse('User role updated successfully!');
      alert('User role updated successfully!');
      setError(null);
    } catch (error) {
      console.error('Error updating user role:', error);
      setResponse(null);
      setError('Failed to update user role. Please make sure you are authorized.');
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
            <span className="font-medium">Current Role:</span> {user.role}
          </div>
          <div className="mb-2">
            <label htmlFor={`role-${user._id}`} className="block text-sm font-medium text-gray-700">
              Update Role
            </label>
            <select
              id={`role-${user._id}`}
              value={user.role}
              onChange={(e) => handleRoleChange(user._id, e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
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

export default ManageUser;
