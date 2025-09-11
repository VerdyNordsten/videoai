'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { logout } from '../actions';
import { toast } from 'sonner';

export default function Sidebar({ sidebarOpen, setSidebarOpen }: { sidebarOpen: boolean; setSidebarOpen: (open: boolean) => void; }) {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const pathname = usePathname();

  const handleLogout = async () => {
    setIsLoggingOut(true);
    const toastId = toast.loading('Logging out...');
    
    try {
      await logout();
      // If we get here, it means the redirect didn't happen for some reason
      toast.success('Logged out successfully', {
        id: toastId,
        description: 'You have been successfully logged out.'
      });
      // Manually redirect if the server redirect didn't work
      window.location.href = '/login';
    } catch (error: any) {
      // Even if there's an error, we should still redirect to login
      if (error?.digest?.includes('NEXT_REDIRECT')) {
        // The redirect should have happened, but if we're here, manually redirect
        window.location.href = '/login';
        return;
      }
      
      toast.error('Logout failed', {
        id: toastId,
        description: error.message || 'Failed to log out. Please try again.'
      });
      setIsLoggingOut(false);
    }
  };

  // Function to determine if a link is active
  const isActive = (path: string) => {
    if (path === '/explore') {
      return pathname === '/explore' || pathname === '/';
    }
    if (path === '/account') {
      return pathname === '/account';
    }
    if (path === '/demo') {
      return pathname === '/demo';
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      {/* Mobile overlay - visible on all screens when sidebar is open */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      
      {/* Sidebar - behaves like mobile on tablets (lg:hidden) */}
      <div 
        id="sidebar" 
        className={`fixed left-0 top-0 h-full w-64 gradient-sidebar shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="p-4 lg:p-6">
          <div className="flex items-center justify-between mb-6 lg:mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <i className="fa-solid fa-video text-white text-lg"></i>
              </div>
              <div className="text-white">
                <h1 className="font-poppins font-semibold text-lg">AI VideoGen</h1>
                <p className="text-white/70 text-xs lg:text-sm">Marketing Ideas</p>
              </div>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-white p-2"
            >
              <i className="fa-solid fa-times"></i>
            </button>
          </div>

          <nav className="space-y-1 lg:space-y-2">
            <Link 
              href="/explore" 
              className={`flex items-center space-x-3 px-3 lg:px-4 py-3 rounded-xl backdrop-blur-sm transition-all ${
                isActive('/explore') 
                  ? 'text-white bg-white/20' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <i className="fa-solid fa-home text-lg"></i>
              <span className="font-medium text-sm lg:text-base">Dashboard</span>
            </Link>
            
            <Link 
              href="/ai-videos" 
              className={`flex items-center space-x-3 px-3 lg:px-4 py-3 rounded-xl transition-all ${
                isActive('/ai-videos') 
                  ? 'text-white bg-white/20' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <i className="fa-solid fa-lightbulb text-lg"></i>
              <span className="font-medium text-sm lg:text-base">AI Ideas</span>
              <span className="ml-auto bg-accent1 text-white text-xs px-2 py-1 rounded-full">New</span>
            </Link>
            
            <Link 
              href="/video-library" 
              className={`flex items-center space-x-3 px-3 lg:px-4 py-3 rounded-xl transition-all ${
                isActive('/video-library') 
                  ? 'text-white bg-white/20' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <i className="fa-solid fa-play-circle text-lg"></i>
              <span className="font-medium text-sm lg:text-base">Video Library</span>
            </Link>
            
            <span className="flex items-center space-x-3 px-3 lg:px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all cursor-pointer">
              <i className="fa-solid fa-template text-lg"></i>
              <span className="font-medium text-sm lg:text-base">Templates</span>
            </span>
            
            <span className="flex items-center space-x-3 px-3 lg:px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all cursor-pointer">
              <i className="fa-solid fa-chart-line text-lg"></i>
              <span className="font-medium text-sm lg:text-base">Analytics</span>
            </span>
            
            <Link 
              href="/account" 
              className={`flex items-center space-x-3 px-3 lg:px-4 py-3 rounded-xl transition-all ${
                isActive('/account') 
                  ? 'text-white bg-white/20' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <i className="fa-solid fa-cog text-lg"></i>
              <span className="font-medium text-sm lg:text-base">Account Settings</span>
            </Link>
            
            <Link 
              href="/demo" 
              className={`flex items-center space-x-3 px-3 lg:px-4 py-3 rounded-xl transition-all ${
                isActive('/demo') 
                  ? 'text-white bg-white/20' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <i className="fa-solid fa-flask text-lg"></i>
              <span className="font-medium text-sm lg:text-base">Demo Features</span>
            </Link>
            
            <button 
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="flex items-center space-x-3 w-full px-3 lg:px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all cursor-pointer disabled:opacity-50"
            >
              {isLoggingOut ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin text-lg"></i>
                  <span className="font-medium text-sm lg:text-base">Logging Out...</span>
                </>
              ) : (
                <>
                  <i className="fa-solid fa-sign-out-alt text-lg"></i>
                  <span className="font-medium text-sm lg:text-base">Log Out</span>
                </>
              )}
            </button>
          </nav>

          <div className="mt-6 lg:mt-8 p-3 lg:p-4 bg-white/10 rounded-xl backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2 lg:mb-3">
              <span className="text-white/90 text-sm font-medium">Monthly Usage</span>
              <span className="text-white/70 text-xs">85%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div className="gradient-progress h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <p className="text-white/70 text-xs mt-2">850 / 1000 videos generated</p>
            <button className="w-full mt-3 bg-accent1 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-yellow-500 transition-colors">
              Upgrade Plan
            </button>
          </div>
        </div>

        <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6">
          <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm">
            <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" alt="User Avatar" className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg" />
            <div className="text-white">
              <p className="font-medium text-sm">Sarah Chen</p>
              <p className="text-white/70 text-xs">Pro Member</p>
            </div>
            <i className="fa-solid fa-chevron-up text-white/70 ml-auto"></i>
          </div>
        </div>
      </div>
    </>
  );
}