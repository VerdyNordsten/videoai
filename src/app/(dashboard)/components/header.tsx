'use client';

import React, { useState } from 'react';

export default function Header({ sidebarOpen, setSidebarOpen }: { sidebarOpen: boolean; setSidebarOpen: (open: boolean) => void; }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header id="header" className={`fixed top-0 ${sidebarOpen ? 'left-0 lg:left-64' : 'left-0'} right-0 bg-white border-b border-gray-200 z-30 transition-all duration-300 lg:left-64`}>
      <div className="flex items-center justify-between px-4 lg:px-6 py-3 lg:py-4">
        <div className="flex items-center space-x-3 lg:space-x-4">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 text-muted hover:text-gray-900 transition-colors"
          >
            <i className={`fa-solid ${sidebarOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
          </button>
          <h1 className="font-poppins font-semibold text-xl lg:text-2xl text-gray-900">Dashboard</h1>
          <span className="text-muted hidden md:inline">/</span>
          <span className="text-muted hidden md:inline">Overview</span>
        </div>

        <div className="flex items-center space-x-3 lg:space-x-4">
          <div className="relative hidden md:block">
            <input 
              type="text" 
              placeholder="Search ideas, templates..." 
              className="w-48 lg:w-80 pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm lg:text-base"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <i className="fa-solid fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-muted"></i>
          </div>
          
          <button className="relative p-2 text-muted hover:text-gray-900 transition-colors">
            <i className="fa-regular fa-bell text-lg"></i>
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-danger text-white text-xs rounded-full flex items-center justify-center">3</span>
          </button>

          <button className="p-2 text-muted hover:text-gray-900 transition-colors hidden md:block">
            <i className="fa-solid fa-question-circle text-lg"></i>
          </button>

          <div className="flex items-center space-x-2 lg:space-x-3">
            <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" alt="Profile" className="w-8 h-8 rounded-lg" />
            <i className="fa-solid fa-chevron-down text-muted hidden lg:block"></i>
          </div>
        </div>
      </div>
      
      {/* Mobile search bar */}
      <div className="px-4 pb-3 md:hidden">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search ideas, templates..." 
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <i className="fa-solid fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-muted"></i>
        </div>
      </div>
    </header>
  );
}