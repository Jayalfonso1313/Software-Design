import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Assuming you are using react-router for navigation

const HomePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
  
    const { name, age, gender } = location.state || {};
  
    const navigateToViewMenu = () => {
      navigate('/view-menu', { state: { name, age, gender } });
    };
  
    const navigateToAdmin = () => {
      navigate('/admin', { state: { adminName: 'Admin', userInfo: { name, age, gender } } });
    };
  

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-background-home">
      <div className="rounded-lg p-5 bg-white/60 backdrop-blur-sm flex flex-col items-center shadow-lg">
        <img src={require('../assets/C.png')} className="w-37.5 h-25 mb-5" alt="Coffee Icon" />
        <p className="text-lg mb-5">Welcome, {name}!</p>
        <button className="rounded-md bg-[#6F4E37] py-2.5 px-5 my-1.5 text-white" onClick={navigateToViewMenu}>
          View Menu
        </button>
        <div className="h-2.5"></div>
        <button className="rounded-md bg-[#6F4E37] py-2.5 px-5 my-1.5 text-white" onClick={navigateToAdmin}>
          Admin
        </button>
      </div>
    </div>
  );
};

export default HomePage;
