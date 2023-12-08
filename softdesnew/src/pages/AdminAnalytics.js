import React from 'react';

const AdminAnalytics = ({ userInfo }) => {
  const { name, age, gender } = userInfo || {};

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-5">Analytics Page</h1>
        {name && age && gender ? (
          <div className="w-4/5 border border-gray-300 mb-5">
            <div className="flex border-b border-gray-300">
              <div className="flex-1 text-lg font-bold py-2">Name</div>
              <div className="flex-1 text-lg font-bold py-2">Age</div>
              <div className="flex-1 text-lg font-bold py-2">Gender</div>
            </div>
            <div className="flex">
              <div className="flex-1 text-lg py-2">{name}</div>
              <div className="flex-1 text-lg py-2">{age}</div>
              <div className="flex-1 text-lg py-2">{gender}</div>
            </div>
          </div>
        ) : (
          <p>No user information available.</p>
        )}
        {/* Add your analytics content here */}
      </div>
    </div>
  );
};

export default AdminAnalytics;
