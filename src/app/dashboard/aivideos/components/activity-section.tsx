'use client';

import React from 'react';

export default function ActivitySection() {
  return (
    <section id="activity-section" className="mb-6 md:mb-8">
      <div className="bg-surface border border-gray-200 rounded-xl p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 md:mb-6">
          <div>
            <h2 className="font-poppins font-semibold text-lg md:text-xl text-gray-900 mb-1">Recent Activity</h2>
            <p className="text-muted text-sm md:text-base">Track your AI Ideas workspace activity</p>
          </div>
          <button className="text-primary font-medium hover:underline text-sm md:text-base">View All</button>
        </div>

        <div className="space-y-3 md:space-y-4">
          <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-50 rounded-xl">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-accent2 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-check text-white text-xs md:text-sm"></i>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">AI analysis completed for <span className="font-medium">summer-collection-demo.mp4</span></p>
              <p className="text-xs text-muted mt-1">Generated 5 marketing ideas • 2 minutes ago</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-50 rounded-xl">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-secondary rounded-full flex items-center justify-center">
              <i className="fa-solid fa-upload text-white text-xs md:text-sm"></i>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">Video uploaded: <span className="font-medium">brand-story-behind-scenes.mov</span></p>
              <p className="text-xs text-muted mt-1">Upload in progress • 5 minutes ago</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-50 rounded-xl">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-accent1 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-eye text-white text-xs md:text-sm"></i>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">Viewed analysis results for <span className="font-medium">how-to-use-app.mp4</span></p>
              <p className="text-xs text-muted mt-1">Accessed 7 generated marketing ideas • 15 minutes ago</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-50 rounded-xl">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full flex items-center justify-center">
              <i className="fa-solid fa-share text-white text-xs md:text-sm"></i>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">Shared AI ideas with team member <span className="font-medium">Marcus Johnson</span></p>
              <p className="text-xs text-muted mt-1">Collaboration • 1 hour ago</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}