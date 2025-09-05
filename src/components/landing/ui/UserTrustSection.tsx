'use client';

import React from 'react';

const UserTrustSection = () => {
  return (
    <div className="flex items-center space-x-6 pt-4">
      <div className="flex -space-x-2">
        <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900" alt="User" />
        <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900" alt="User" />
        <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900" alt="User" />
        <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg" className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900" alt="User" />
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">10,000+ creators trust us</p>
        <div className="flex text-yellow-400">
          <span>★★★★★</span>
          <span className="text-gray-600 dark:text-gray-400 ml-1 text-sm">4.9/5</span>
        </div>
      </div>
    </div>
  );
};

export default UserTrustSection;