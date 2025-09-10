'use client';

import React from 'react';

export default function UsageBarSection() {
  return (
    <div id="usage-bar" className="mb-6">
      <div className="bg-surface border border-gray-200 rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-900 font-medium">Monthly Analysis Usage</span>
          <span className="text-muted text-sm">23/100 analyzed this month</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="gradient-progress h-2 rounded-full" style={{ width: '23%' }}></div>
        </div>
      </div>
    </div>
  );
}