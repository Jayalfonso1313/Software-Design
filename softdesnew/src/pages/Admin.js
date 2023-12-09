import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation

const Admin = ({ adminName }) => {
  const navigate = useNavigate();
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const loginAsAdmin = () => {
    console.log('Admin Login Details:', {
      adminUsername,
      adminPassword,
    });

    // Mock navigation for the example - replace with actual route and data
    console.log('Logged in as:', adminName);
    navigate('/admin/home', { state: { adminName } }); // Adjust route as needed
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-background-admin">
      <div className="rounded-lg p-5 flex flex-col bg-white/50 backdrop-blur-sm shadow-lg">
        <p>Login as Admin.</p>
        <input
          className="h-10 border-gray-400 border-2 my-2.5 p-2.5 w-50 bg-white"
          placeholder="Admin Username"
          value={adminUsername}
          onChange={(e) => setAdminUsername(e.target.value)}
        />
        <input
          className="h-10 border-gray-400 border-2 my-2.5 p-2.5 w-50 bg-white"
          type="password"
          placeholder="Admin Password"
          value={adminPassword}
          onChange={(e) => setAdminPassword(e.target.value)}
        />
        <button className="mt-2.5 rounded-md bg-[#6F4E37] py-2 px-4 text-white" onClick={loginAsAdmin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Admin;
