import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation

const AdminHome = ({ adminName }) => {
  const navigate = useNavigate();

  const navigateToInventory = () => {
    navigate('/admin/inventory', {replace: true}); // Adjust the route as needed
  };

  const navigateToAnalytics = () => {
    navigate('/admin/analytics',  {replace: true}); // Adjust the route and parameters as needed
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-background-adminhome">
      <div className="rounded-lg p-5 bg-white/90 backdrop-blur-sm shadow-lg flex flex-col items-center">
        <img src={require('../assets/C.png')} className="w-37.5 h-25 mb-5" alt="Coffee Icon" />
        <p className="text-lg mb-5">Welcome, Admin!</p>
        <button className="rounded-md bg-[#6F4E37] py-2.5 px-5 my-1.5 text-white" onClick={navigateToInventory}>
          Inventory
        </button>
        <div className="h-2.5"></div> {/* Spacing */}
        <button className="rounded-md bg-[#6F4E37] py-2.5 px-5 my-1.5 text-white" onClick={navigateToAnalytics}>
          Analytics
        </button>
      </div>
    </div>
  );
};

export default AdminHome;
