'use client';

import React from 'react';

export default function WelcomeSection() {
  return (
    <section id="welcome-section" className="mb-8">
      <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 md:p-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl mb-2">Welcome back, Sarah! 👋</h2>
            <p className="text-white/90 text-base md:text-lg mb-4">Ready to create amazing marketing videos? You've generated 12 videos this week!</p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
              <button className="w-full sm:w-auto bg-white text-primary font-semibold px-6 py-3 rounded-xl btn-hover">
                <i className="fa-solid fa-plus mr-2"></i>
                Create New Video
              </button>
              <button className="w-full sm:w-auto border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-xl btn-hover hover:bg-white/10">
                View Templates
              </button>
            </div>
          </div>
          <div className="md:block">
            <img 
              className="w-32 h-32 md:w-48 md:h-48 rounded-xl opacity-90 mx-auto" 
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/db28acd4f7-5572c2896c88bcbf6356.png" 
              alt="creative marketing video dashboard illustration, modern gradient style"
            />
          </div>
        </div>
      </div>
    </section>
  );
}