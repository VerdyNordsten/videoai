'use client';

import React, { useState } from 'react';
import DashboardLayout from '../components/dashboard-layout';
import HeaderControlsSection from './components/header-controls-section';
import FiltersSidebar from './components/filters-sidebar';
import UsageBarSection from './components/usage-bar-section';
import VideoGridSection from './components/video-grid-section';

export default function VideoLibraryPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-poppins font-semibold text-xl md:text-2xl text-gray-900">VidLabs</h1>
              <p className="text-muted text-sm hidden md:block">All analyzed videos and their AI ideas, organized for quick retrieval.</p>
            </div>
            <button 
              className="lg:hidden bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center"
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            >
              <i className="fa-solid fa-filter mr-2"></i>
              Filters
            </button>
          </div>
          <p className="text-muted text-sm md:hidden mt-2">All analyzed videos and their AI ideas, organized for quick retrieval.</p>
        </div>
        
        <HeaderControlsSection />
        
        <div className="flex flex-col lg:flex-row gap-6">
          <div className={`lg:block w-full lg:w-80 ${mobileFiltersOpen ? 'block' : 'hidden'}`}>
            <div className="lg:hidden mb-4">
              <button 
                className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center"
                onClick={() => setMobileFiltersOpen(false)}
              >
                <i className="fa-solid fa-times mr-2"></i>
                Close Filters
              </button>
            </div>
            <FiltersSidebar />
          </div>
          
          <div className="flex-1">
            <UsageBarSection />
            <VideoGridSection />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}