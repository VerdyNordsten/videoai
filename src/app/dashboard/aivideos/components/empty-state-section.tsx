'use client';

import React from 'react';

export default function EmptyStateSection() {
  return (
    <section id="empty-state-section" className="mb-6 md:mb-8 hidden">
      <div className="bg-surface border border-gray-200 rounded-xl p-8 md:p-12 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-6">
            <i className="fa-solid fa-video text-gray-400 text-2xl md:text-3xl"></i>
          </div>
          <h2 className="font-poppins font-semibold text-lg md:text-xl text-gray-900 mb-2 md:mb-3">No videos uploaded yet</h2>
          <p className="text-muted mb-4 md:mb-6 text-sm md:text-base">Upload videos to generate AI Ideas. All completed results will be stored in Video Library for future reference and use.</p>
          <button className="bg-primary text-white font-medium px-4 py-2 md:px-6 md:py-3 rounded-xl btn-hover text-sm md:text-base">
            <i className="fa-solid fa-plus mr-2"></i>
            Upload Video
          </button>
        </div>
      </div>
    </section>
  );
}