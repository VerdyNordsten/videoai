'use client';

import React from 'react';

export default function QuickActionsSection() {
  const handleAction = (action: string) => {
    alert(`Starting action: ${action}`);
  };

  return (
    <section id="quick-actions-section" className="mb-8">
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 md:p-8">
        <div className="text-center mb-8">
          <h2 className="font-poppins font-semibold text-xl md:text-2xl text-gray-900 mb-2">Ready to Create Something Amazing?</h2>
          <p className="text-muted text-base md:text-lg">Choose your preferred way to start your next video project</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface border-2 border-dashed border-primary/30 rounded-xl p-6 md:p-8 text-center hover:border-primary/60 hover:bg-primary/5 transition-all card-hover group">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <i className="fa-solid fa-magic-wand-sparkles text-primary text-2xl"></i>
            </div>
            <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">Generate AI Ideas</h3>
            <p className="text-muted text-sm mb-4">Let AI create unique video concepts tailored to your brand and audience</p>
            <button 
              className="bg-primary text-white font-medium px-4 py-3 rounded-xl btn-hover w-full text-sm md:text-base"
              onClick={() => handleAction('Generate AI Ideas')}
            >
              Start Generating
            </button>
          </div>

          <div className="bg-surface border-2 border-dashed border-secondary/30 rounded-xl p-6 md:p-8 text-center hover:border-secondary/60 hover:bg-secondary/5 transition-all card-hover group">
            <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
              <i className="fa-solid fa-template text-secondary text-2xl"></i>
            </div>
            <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">Use Template</h3>
            <p className="text-muted text-sm mb-4">Start with professionally designed templates and customize to your needs</p>
            <button 
              className="bg-secondary text-white font-medium px-4 py-3 rounded-xl btn-hover w-full text-sm md:text-base"
              onClick={() => handleAction('Use Template')}
            >
              Browse Templates
            </button>
          </div>

          <div className="bg-surface border-2 border-dashed border-accent2/30 rounded-xl p-6 md:p-8 text-center hover:border-accent2/60 hover:bg-accent2/5 transition-all card-hover group">
            <div className="w-16 h-16 bg-accent2/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent2/20 transition-colors">
              <i className="fa-solid fa-upload text-accent2 text-2xl"></i>
            </div>
            <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">Upload Content</h3>
            <p className="text-muted text-sm mb-4">Upload your existing content and enhance it with our editing tools</p>
            <button 
              className="bg-accent2 text-white font-medium px-4 py-3 rounded-xl btn-hover w-full text-sm md:text-base"
              onClick={() => handleAction('Upload Content')}
            >
              Upload Files
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}