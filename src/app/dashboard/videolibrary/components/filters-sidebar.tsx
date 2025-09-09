'use client';

import React from 'react';

export default function FiltersSidebar() {
  return (
    <aside id="filters-sidebar" className="bg-surface border border-gray-200 rounded-xl p-6">
      {/* Folders/Campaigns */}
      <div className="mb-8">
        <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-4">Folders & Campaigns</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 bg-primary/5 border border-primary/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-folder text-primary"></i>
              <span className="font-medium text-gray-900">All Videos</span>
            </div>
            <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">47</span>
          </div>
          
          <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-folder-open text-secondary"></i>
              <span className="text-gray-700">Summer Campaign</span>
            </div>
            <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">12</span>
          </div>
          
          <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-folder-open text-accent1"></i>
              <span className="text-gray-700">Product Demos</span>
            </div>
            <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">8</span>
          </div>
          
          <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-folder-open text-accent2"></i>
              <span className="text-gray-700">Testimonials</span>
            </div>
            <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">15</span>
          </div>
          
          <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-folder-open text-muted"></i>
              <span className="text-gray-700">Brand Stories</span>
            </div>
            <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">12</span>
          </div>
        </div>
      </div>

      {/* Smart Filters */}
      <div className="mb-8">
        <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-4">Smart Filters</h3>
        <div className="flex flex-wrap gap-2">
          <button className="bg-danger/10 text-danger border border-danger/20 px-3 py-2 rounded-lg text-sm font-medium hover:bg-danger/20 transition-colors">
            <i className="fa-solid fa-clock mr-1"></i>
            Expiring &lt; 7 days
          </button>
          <button className="bg-secondary/10 text-secondary border border-secondary/20 px-3 py-2 rounded-lg text-sm font-medium hover:bg-secondary/20 transition-colors">
            <i className="fa-solid fa-text-width mr-1"></i>
            Has OCR text
          </button>
          <button className="bg-accent2/10 text-accent2 border border-accent2/20 px-3 py-2 rounded-lg text-sm font-medium hover:bg-accent2/20 transition-colors">
            <i className="fa-solid fa-star mr-1"></i>
            Strong Hook
          </button>
          <button className="bg-accent1/10 text-accent1 border border-accent1/20 px-3 py-2 rounded-lg text-sm font-medium hover:bg-accent1/20 transition-colors">
            <i className="fa-solid fa-bullhorn mr-1"></i>
            Needs CTA
          </button>
        </div>
      </div>

      {/* Tags Cloud */}
      <div className="mb-8">
        <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          <button className="bg-gray-100 hover:bg-primary hover:text-white px-3 py-1 rounded-lg text-sm transition-colors">#marketing</button>
          <button className="bg-gray-100 hover:bg-primary hover:text-white px-3 py-1 rounded-lg text-sm transition-colors">#product</button>
          <button className="bg-gray-100 hover:bg-primary hover:text-white px-3 py-1 rounded-lg text-sm transition-colors">#tutorial</button>
          <button className="bg-gray-100 hover:bg-primary hover:text-white px-3 py-1 rounded-lg text-sm transition-colors">#testimonial</button>
          <button className="bg-gray-100 hover:bg-primary hover:text-white px-3 py-1 rounded-lg text-sm transition-colors">#brand</button>
          <button className="bg-gray-100 hover:bg-primary hover:text-white px-3 py-1 rounded-lg text-sm transition-colors">#social</button>
          <button className="bg-gray-100 hover:bg-primary hover:text-white px-3 py-1 rounded-lg text-sm transition-colors">#viral</button>
          <button className="bg-gray-100 hover:bg-primary hover:text-white px-3 py-1 rounded-lg text-sm transition-colors">#trending</button>
        </div>
      </div>
    </aside>
  );
}