'use client';

import React, { useState } from 'react';
import Sidebar from './sidebar';
import Header from './header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background font-sans">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className={`flex-1 flex flex-col ${sidebarOpen ? 'ml-0 lg:ml-64' : 'ml-0'} transition-all duration-300 lg:ml-64`}>
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
        <main className="flex-1 pt-16 lg:pt-20 p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}