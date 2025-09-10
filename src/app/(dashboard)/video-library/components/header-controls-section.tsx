'use client';

import React, { useState } from 'react';

export default function HeaderControlsSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section id="header-controls" className="mb-6">
      <div className="bg-surface border border-gray-200 rounded-xl p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-3 flex-1">
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="Search by title, hook, caption, hashtag…" 
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <i className="fa-solid fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-muted"></i>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <select className="flex-1 min-w-[120px] px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                <option>All Platforms</option>
                <option>TikTok</option>
                <option>Instagram</option>
                <option>YouTube</option>
              </select>
              
              <select className="flex-1 min-w-[120px] px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                <option>All Status</option>
                <option>Draft</option>
                <option>Reviewed</option>
                <option>Approved</option>
                <option>Published</option>
              </select>
              
              <select className="flex-1 min-w-[120px] px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Newest</option>
                <option>Oldest</option>
                <option>A→Z</option>
                <option>Most exported</option>
                <option>Expiring soon</option>
              </select>
            </div>
          </div>
          
          <button className="bg-primary text-white font-medium px-4 py-2.5 rounded-xl btn-hover flex items-center justify-center w-full sm:w-auto">
            <i className="fa-solid fa-plus mr-2"></i>
            Analyze New Video
          </button>
        </div>
      </div>
    </section>
  );
}