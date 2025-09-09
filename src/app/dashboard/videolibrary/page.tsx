'use client';

import React from 'react';
import HeaderControlsSection from './components/header-controls-section';
import FiltersSidebar from './components/filters-sidebar';
import UsageBarSection from './components/usage-bar-section';
import VideoGridSection from './components/video-grid-section';

export default function VideoLibraryPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="font-poppins font-semibold text-xl md:text-2xl text-gray-900">VidLabs</h1>
        <p className="text-muted text-sm hidden md:block">All analyzed videos and their AI ideas, organized for quick retrieval.</p>
      </div>
      
      <HeaderControlsSection />
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="hidden lg:block w-full lg:w-80">
          <FiltersSidebar />
        </div>
        
        <div className="flex-1">
          <UsageBarSection />
          <VideoGridSection />
        </div>
      </div>
    </div>
  );
}