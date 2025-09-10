'use client';

import React from 'react';

export default function MobileNavigation() {
  return (
    <div id="mobile-nav" className="fixed bottom-0 left-0 right-0 bg-surface border-t border-gray-200 lg:hidden z-40">
      <div className="grid grid-cols-5 gap-1">
        <button className="flex flex-col items-center justify-center py-3 text-primary">
          <i className="fa-solid fa-home text-lg mb-1"></i>
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center py-3 text-muted hover:text-gray-900">
          <i className="fa-solid fa-upload text-lg mb-1"></i>
          <span className="text-xs">Upload</span>
        </button>
        <button className="flex flex-col items-center justify-center py-3 text-muted hover:text-gray-900">
          <i className="fa-solid fa-lightbulb text-lg mb-1"></i>
          <span className="text-xs">Ideas</span>
        </button>
        <button className="flex flex-col items-center justify-center py-3 text-muted hover:text-gray-900">
          <i className="fa-solid fa-template text-lg mb-1"></i>
          <span className="text-xs">Templates</span>
        </button>
        <button className="flex flex-col items-center justify-center py-3 text-muted hover:text-gray-900">
          <i className="fa-solid fa-cog text-lg mb-1"></i>
          <span className="text-xs">Settings</span>
        </button>
      </div>
    </div>
  );
}