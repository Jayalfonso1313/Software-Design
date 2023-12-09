// AdminAnalytics.js code:

import React, { useEffect, useState } from 'react';

const AdminAnalytics = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Retrieve user information from local storage
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-cover bg-background-adminanalytics">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-5">Analytics Page</h1>
        {userInfo ? (
          <div className="w-full max-w-2xl mx-auto border border-black-300 mb-5">
            <table className="w-full table-auto bg-transparent">
              <thead>
                <tr className="bg-gray-200">
                  <th className="text-lg font-bold py-2 border-r border-black-300">Name</th>
                  <th className="text-lg font-bold py-2 border-r border-black-300">Age</th>
                  <th className="text-lg font-bold py-2">Gender</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-lg py-2 border-r border-black-300 bg-transparent">{userInfo.name}</td>
                  <td className="text-lg py-2 border-r border-black-300 bg-transparent">{userInfo.age}</td>
                  <td className="text-lg py-2 bg-transparent">{userInfo.gender}</td>
                </tr>
              </tbody>
            </table>
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
