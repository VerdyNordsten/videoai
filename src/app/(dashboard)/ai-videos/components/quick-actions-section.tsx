'use client';

import React from 'react';

export default function QuickActionsSection() {
  return (
    <section id="quick-actions-section" className="mb-6 md:mb-8">
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 md:p-8">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-poppins font-semibold text-xl md:text-2xl text-gray-900 mb-2">Maximize Your AI Ideas Potential</h2>
          <p className="text-muted text-base md:text-lg">Take your generated ideas to the next level</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-surface border border-gray-200 rounded-xl p-4 md:p-6 text-center card-hover">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
              <i className="fa-solid fa-play-circle text-primary text-lg md:text-xl"></i>
            </div>
            <h3 className="font-poppins font-semibold text-base md:text-lg text-gray-900 mb-2">Video Library</h3>
            <p className="text-muted text-xs md:text-sm mb-3 md:mb-4">Access all your analyzed videos and generated ideas in one organized space</p>
            <button className="text-primary font-medium hover:underline text-sm">Browse Library</button>
          </div>

          <div className="bg-surface border border-gray-200 rounded-xl p-4 md:p-6 text-center card-hover">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
              <i className="fa-solid fa-template text-secondary text-lg md:text-xl"></i>
            </div>
            <h3 className="font-poppins font-semibold text-base md:text-lg text-gray-900 mb-2">Use Templates</h3>
            <p className="text-muted text-xs md:text-sm mb-3 md:mb-4">Transform your AI ideas into professional videos using our template library</p>
            <button className="text-secondary font-medium hover:underline text-sm">Explore Templates</button>
          </div>

          <div className="bg-surface border border-gray-200 rounded-xl p-4 md:p-6 text-center card-hover">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-accent2/10 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
              <i className="fa-solid fa-share-alt text-accent2 text-lg md:text-xl"></i>
            </div>
            <h3 className="font-poppins font-semibold text-base md:text-lg text-gray-900 mb-2">Share & Export</h3>
            <p className="text-muted text-xs md:text-sm mb-3 md:mb-4">Export your ideas to popular marketing tools or share with your team</p>
            <button className="text-accent2 font-medium hover:underline text-sm">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}