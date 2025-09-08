'use client';

import React from 'react';

export default function WelcomeSection() {
  return (
    <section id="welcome-section" className="mb-8">
      <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h2 className="font-poppins font-bold text-3xl mb-2">Welcome back, Sarah! 👋</h2>
            <p className="text-white/90 text-lg mb-4">Ready to create amazing marketing videos? You've generated 12 videos this week!</p>
            <div className="flex items-center space-x-4">
              <button className="bg-white text-primary font-semibold px-6 py-3 rounded-xl btn-hover">
                <i className="fa-solid fa-plus mr-2"></i>
                Create New Video
              </button>
              <button className="border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-xl btn-hover hover:bg-white/10">
                View Templates
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              className="w-48 h-48 rounded-xl opacity-90" 
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/db28acd4f7-5572c2896c88bcbf6356.png" 
              alt="creative marketing video dashboard illustration, modern gradient style"
            />
          </div>
        </div>
      </div>
    </section>
  );
}