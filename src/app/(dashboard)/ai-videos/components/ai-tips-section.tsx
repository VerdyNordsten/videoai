'use client';

import React from 'react';

export default function AiTipsSection() {
  return (
    <section id="ai-tips-section" className="mb-6 md:mb-8">
      <div className="bg-surface border border-gray-200 rounded-xl p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 md:mb-6">
          <div>
            <h2 className="font-poppins font-semibold text-lg md:text-xl text-gray-900 mb-1">AI Analysis Tips</h2>
            <p className="text-muted text-sm md:text-base">Get better results from your video uploads</p>
          </div>
          <button className="text-primary font-medium hover:underline text-sm md:text-base">More Tips</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
              <i className="fa-solid fa-video text-primary text-sm md:text-base"></i>
            </div>
            <h3 className="font-medium text-gray-900 mb-1 text-sm md:text-base">Clear Audio</h3>
            <p className="text-xs md:text-sm text-muted">Ensure clear audio quality for better AI transcription and analysis</p>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
              <i className="fa-solid fa-clock text-secondary text-sm md:text-base"></i>
            </div>
            <h3 className="font-medium text-gray-900 mb-1 text-sm md:text-base">Optimal Length</h3>
            <p className="text-xs md:text-sm text-muted">30 seconds to 5 minutes works best for comprehensive idea generation</p>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-accent1/10 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
              <i className="fa-solid fa-lightbulb text-accent1 text-sm md:text-base"></i>
            </div>
            <h3 className="font-medium text-gray-900 mb-1 text-sm md:text-base">Show Value</h3>
            <p className="text-xs md:text-sm text-muted">Include clear value propositions or benefits in your video content</p>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-accent2/10 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
              <i className="fa-solid fa-target text-accent2 text-sm md:text-base"></i>
            </div>
            <h3 className="font-medium text-gray-900 mb-1 text-sm md:text-base">Define Audience</h3>
            <p className="text-xs md:text-sm text-muted">Videos targeting specific audiences generate more focused marketing ideas</p>
          </div>
        </div>
      </div>
    </section>
  );
}