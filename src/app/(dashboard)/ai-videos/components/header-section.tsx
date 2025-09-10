'use client';

import React from 'react';

export default function HeaderSection() {
  return (
    <section id="header-section" className="mb-6 md:mb-8">
      <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 md:p-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-6 md:mb-0 md:mr-6">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl mb-2">AI Ideas Workspace</h2>
            <p className="text-white/90 text-base md:text-lg mb-4">Drop videos here to generate fresh marketing ideas. Upload multiple videos and let AI analyze them to create compelling content concepts.</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent2 rounded-full pulse-dot"></div>
                <span className="text-white/90 text-sm">AI Analysis Active</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fa-solid fa-clock text-white/70"></i>
                <span className="text-white/90 text-sm">Average processing: 2-3 min</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img className="w-32 h-32 md:w-48 md:h-48 rounded-xl opacity-90" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/84727dda01-f3fe9f942dcfa05274a9.png" alt="AI video analysis workspace illustration, modern gradient style with upload icons" />
          </div>
        </div>
      </div>
    </section>
  );
}