import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const OrderStatus = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extracting name, total, and itemsOrdered from location state
  const { name, total, itemsOrdered } = location.state || {};

  const handleConfirm = () => {
    alert(`Your order has been confirmed!\n${name}'s Orders are now Preparing...`);
    navigate('/'); 
  };

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-background-oderstatus">
      <div className="rounded-lg p-5 bg-white/70 backdrop-blur-sm shadow-lg text-center">
        <p>Summary of {name}'s Orders:</p>
        {itemsOrdered && itemsOrdered.map((item) => (
          <p key={item.cartItemId}>
            {item.name} - ₱{item.prices[item.size] ? item.prices[item.size].toFixed(2) : 'N/A'} (Size: {item.size}, Qty: {item.quantity})
          </p>
        ))}
        <p>Your total amount is: ₱{total}</p>

        <div className="flex justify-around mt-4">
          <button onClick={handleBack} className="rounded-md bg-[#6F4E37] py-2 px-4 text-white">BACK</button>
          <button onClick={handleConfirm} className="rounded-md bg-[#6F4E37] py-2 px-4 text-white">CONFIRM</button>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
