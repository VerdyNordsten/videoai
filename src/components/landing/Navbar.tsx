'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Video } from 'lucide-react';
import { ThemeToggle } from '@/components/shared/ThemeToggle';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-8 h-8 rounded-lg flex items-center justify-center">
                <Video className="h-5 w-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
                VideoAI
              </span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Features
                </a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Pricing
                </a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Reviews
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-2">
              <ThemeToggle />
              <Button variant="ghost" className="text-gray-700 dark:text-gray-300">
                Login
              </Button>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                Try Free
              </Button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle mobile menu" className="ml-2">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Features
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Reviews
            </a>
            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center px-5">
                <Button variant="ghost" className="w-full">
                  Login
                </Button>
              </div>
              <div className="mt-3 px-2">
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                  Try Free
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;