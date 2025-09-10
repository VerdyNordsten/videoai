'use client';

import React from 'react';

export default function StatsSection() {
  return (
    <section id="stats-section" className="mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-surface border border-gray-200 rounded-xl p-4 md:p-6 card-hover">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <i className="fa-solid fa-video text-primary text-xl"></i>
            </div>
            <span className="text-accent2 text-sm font-medium">+23%</span>
          </div>
          <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-1">847</h3>
          <p className="text-muted text-sm">Videos Generated</p>
        </div>

        <div className="bg-surface border border-gray-200 rounded-xl p-4 md:p-6 card-hover">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
              <i className="fa-solid fa-lightbulb text-secondary text-xl"></i>
            </div>
            <span className="text-accent2 text-sm font-medium">+15%</span>
          </div>
          <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-1">1,234</h3>
          <p className="text-muted text-sm">AI Ideas Created</p>
        </div>

        <div className="bg-surface border border-gray-200 rounded-xl p-4 md:p-6 card-hover">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-accent1/10 rounded-xl flex items-center justify-center">
              <i className="fa-solid fa-eye text-accent1 text-xl"></i>
            </div>
            <span className="text-danger text-sm font-medium">-5%</span>
          </div>
          <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-1">2.4M</h3>
          <p className="text-muted text-sm">Total Views</p>
        </div>

        <div className="bg-surface border border-gray-200 rounded-xl p-4 md:p-6 card-hover">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-accent2/10 rounded-xl flex items-center justify-center">
              <i className="fa-solid fa-heart text-accent2 text-xl"></i>
            </div>
            <span className="text-accent2 text-sm font-medium">+31%</span>
          </div>
          <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-1">89.2%</h3>
          <p className="text-muted text-sm">Engagement Rate</p>
        </div>
      </div>
    </section>
  );
}