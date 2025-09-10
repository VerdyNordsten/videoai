'use client';

import React from 'react';

export default function AnalysisResultsSection() {
  return (
    <section id="analysis-results-section" className="mb-6 md:mb-8">
      <div className="bg-surface border border-gray-200 rounded-xl p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 md:mb-6">
          <div>
            <h2 className="font-poppins font-semibold text-lg md:text-xl text-gray-900 mb-1">Recent AI Analysis</h2>
            <p className="text-muted text-sm md:text-base">Generated marketing ideas from your uploaded videos</p>
          </div>
          <button className="text-primary font-medium hover:underline text-sm md:text-base">View All Results</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-gray-50 rounded-xl p-4 md:p-6 card-hover">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/eaa5b569ba-ac9ea49a77f25fa9bd3a.png" alt="summer fashion collection video thumbnail" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm md:text-base">summer-collection-demo.mp4</h3>
                  <p className="text-sm text-muted">Fashion • 2 min ago</p>
                </div>
              </div>
              <span className="bg-accent2 text-white text-xs px-2 py-1 rounded-full self-start">5 Ideas</span>
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-gray-900 mb-2 text-sm md:text-base">Top Generated Hook:</h4>
              <div className="bg-white p-3 md:p-4 rounded-lg border border-gray-200">
                <p className="text-gray-900 font-medium mb-2 text-sm md:text-base">"Transform your summer style in just 30 seconds"</p>
                <p className="text-sm text-muted">Perfect for social media posts showcasing quick style transformations with your summer collection.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-primary rounded-full border-2 border-white"></div>
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-secondary rounded-full border-2 border-white"></div>
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-accent1 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-xs text-muted">Multiple formats</span>
              </div>
              <button className="bg-primary text-white font-medium px-3 py-2 md:px-4 md:py-2 rounded-lg btn-hover text-sm md:text-base">
                View Full Analysis
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 md:p-6 card-hover">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/32c37e0d03-4888075e7d277b078f83.png" alt="app tutorial video thumbnail" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm md:text-base">how-to-use-app.mp4</h3>
                  <p className="text-sm text-muted">Tutorial • 15 min ago</p>
                </div>
              </div>
              <span className="bg-accent1 text-white text-xs px-2 py-1 rounded-full self-start">7 Ideas</span>
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-gray-900 mb-2 text-sm md:text-base">Top Generated Hook:</h4>
              <div className="bg-white p-3 md:p-4 rounded-lg border border-gray-200">
                <p className="text-gray-900 font-medium mb-2 text-sm md:text-base">"Master this powerful feature in under 60 seconds"</p>
                <p className="text-sm text-muted">Ideal for creating quick tutorial content that highlights key app features and drives user engagement.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-secondary rounded-full border-2 border-white"></div>
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-accent2 rounded-full border-2 border-white"></div>
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-primary rounded-full border-2 border-white"></div>
                </div>
                <span className="text-xs text-muted">Tutorial focused</span>
              </div>
              <button className="bg-primary text-white font-medium px-3 py-2 md:px-4 md:py-2 rounded-lg btn-hover text-sm md:text-base">
                View Full Analysis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}