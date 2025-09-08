'use client';

import React from 'react';

export default function LearningResourcesSection() {
  const handleStartLearning = (resourceName: string) => {
    alert(`Starting learning: ${resourceName}`);
  };

  return (
    <section id="learning-section" className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-1">Learning Center</h2>
          <p className="text-muted">Master video marketing with our tutorials and guides</p>
        </div>
        <button className="text-primary font-medium hover:underline">View All Resources</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-surface border border-gray-200 rounded-xl overflow-hidden card-hover">
          <div className="relative">
            <img 
              className="w-full h-32 object-cover" 
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/a8d30dd9cb-a58773f79999e792ca3b.png" 
              alt="video marketing tutorial thumbnail, educational design"
            />
            <div className="absolute top-3 left-3">
              <span className="bg-accent2 text-white text-xs px-2 py-1 rounded-full">Tutorial</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">Getting Started with AI Video Ideas</h3>
            <p className="text-muted text-sm mb-4">Learn how to generate compelling video concepts using our AI-powered tools.</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <i className="fa-solid fa-play-circle text-primary"></i>
                <span className="text-sm text-muted">8 min read</span>
              </div>
              <button 
                className="text-primary font-medium hover:underline"
                onClick={() => handleStartLearning('Getting Started with AI Video Ideas')}
              >
                Start Learning
              </button>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-gray-200 rounded-xl overflow-hidden card-hover">
          <div className="relative">
            <img 
              className="w-full h-32 object-cover" 
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f9aa3d9e05-d2fa907b3050e18730f3.png" 
              alt="video editing guide thumbnail, professional tutorial"
            />
            <div className="absolute top-3 left-3">
              <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">Guide</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">Advanced Editing Techniques</h3>
            <p className="text-muted text-sm mb-4">Master professional video editing with advanced techniques and best practices.</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <i className="fa-solid fa-book-open text-secondary"></i>
                <span className="text-sm text-muted">15 min read</span>
              </div>
              <button 
                className="text-primary font-medium hover:underline"
                onClick={() => handleStartLearning('Advanced Editing Techniques')}
              >
                Start Learning
              </button>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-gray-200 rounded-xl overflow-hidden card-hover">
          <div className="relative">
            <img 
              className="w-full h-32 object-cover" 
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/9e61318bea-343d247227091a004dcd.png" 
              alt="marketing strategy video thumbnail, business guide"
            />
            <div className="absolute top-3 left-3">
              <span className="bg-accent1 text-white text-xs px-2 py-1 rounded-full">Strategy</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">Video Marketing Strategy</h3>
            <p className="text-muted text-sm mb-4">Build effective video marketing campaigns that drive engagement and conversions.</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <i className="fa-solid fa-chart-line text-accent1"></i>
                <span className="text-sm text-muted">12 min read</span>
              </div>
              <button 
                className="text-primary font-medium hover:underline"
                onClick={() => handleStartLearning('Video Marketing Strategy')}
              >
                Start Learning
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}