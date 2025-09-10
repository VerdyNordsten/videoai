'use client';

import React from 'react';

export default function CreditsInformation() {
  return (
    <div className="space-y-6">
      {/* Credit Balance Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-4 md:p-6 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="font-poppins font-bold text-xl md:text-2xl mb-2">Your Credit Balance</h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3 md:mb-4">
              <div className="text-2xl md:text-3xl font-bold">411</div>
              <div className="text-xs md:text-sm opacity-80">
                <div>of 1290 monthly credits</div>
                <div>+ 0 extra credits</div>
              </div>
            </div>
            <div className="mb-3 md:mb-4">
              <div className="flex items-center justify-between text-xs md:text-sm mb-1">
                <span>Monthly Credits Usage</span>
                <span>68%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-1.5 md:h-2">
                <div className="bg-white h-1.5 md:h-2 rounded-full" style={{ width: '68%' }}></div>
              </div>
              <p className="text-xs opacity-80 mt-1">Expire on January 15, 2025</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <svg className="w-16 h-16 md:w-24 md:h-24 progress-ring mx-auto md:mx-0">
              <circle className="progress-ring-circle" stroke="rgba(255,255,255,0.3)" strokeWidth="3" fill="transparent" r="30" cx="32" cy="32"></circle>
              <circle className="progress-ring-circle" stroke="white" strokeWidth="3" fill="transparent" r="30" cx="32" cy="32" style={{ strokeDashoffset: 60 }}></circle>
            </svg>
          </div>
        </div>
        <button className="text-white hover:text-purple-200 text-xs md:text-sm underline min-h-[44px] flex items-center">
          <i className="fa-solid fa-circle-info mr-1"></i>
          <span>How I spent my credits?</span>
        </button>
      </div>

      {/* Credit Packs */}
      <div>
        <div className="mb-4 md:mb-6">
          <h2 className="font-poppins font-semibold text-lg md:text-xl text-slate-800 mb-2">Buy Credit Packs</h2>
          <p className="text-gray-600 text-xs md:text-sm">Buy credit packs and maintain the save feature access</p>
        </div>

        {/* Responsive grid - 1 column on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 gap-3 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white border border-gray-200 shadow-sm p-4 md:p-6 hover:shadow-md transition-shadow rounded-xl">
            <div className="text-center mb-3 md:mb-4">
              <div className="text-xl md:text-2xl font-bold text-slate-800 mb-1">360</div>
              <div className="text-xs md:text-sm text-gray-600">Credits</div>
            </div>
            <div className="text-center mb-3 md:mb-4">
              <div className="text-lg md:text-xl font-bold text-slate-800">$19</div>
              <div className="text-xs md:text-sm text-gray-500 line-through">$29</div>
            </div>
            <button className="w-full py-2 md:py-3 border border-transparent rounded-xl shadow-sm text-xs md:text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 min-h-[44px]">
              Buy Now
            </button>
          </div>

          <div className="bg-white border border-purple-200 shadow-sm p-4 md:p-6 hover:shadow-md transition-shadow rounded-xl relative">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">Most Popular</span>
            </div>
            <div className="text-center mb-3 md:mb-4 pt-3">
              <div className="text-xl md:text-2xl font-bold text-slate-800 mb-1">720</div>
              <div className="text-xs md:text-sm text-gray-600">Credits</div>
            </div>
            <div className="text-center mb-3 md:mb-4">
              <div className="text-lg md:text-xl font-bold text-slate-800">$35</div>
              <div className="text-xs md:text-sm text-gray-500 line-through">$58</div>
            </div>
            <button className="w-full py-2 md:py-3 border border-transparent rounded-xl shadow-sm text-xs md:text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 min-h-[44px]">
              Buy Now
            </button>
          </div>

          <div className="bg-white border border-gray-200 shadow-sm p-4 md:p-6 hover:shadow-md transition-shadow rounded-xl">
            <div className="text-center mb-3 md:mb-4">
              <div className="text-xl md:text-2xl font-bold text-slate-800 mb-1">1440</div>
              <div className="text-xs md:text-sm text-gray-600">Credits</div>
            </div>
            <div className="text-center mb-3 md:mb-4">
              <div className="text-lg md:text-xl font-bold text-slate-800">$65</div>
              <div className="text-xs md:text-sm text-gray-500 line-through">$116</div>
            </div>
            <button className="w-full py-2 md:py-3 border border-transparent rounded-xl shadow-sm text-xs md:text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 min-h-[44px]">
              Buy Now
            </button>
          </div>

          <div className="bg-white border border-gray-200 shadow-sm p-4 md:p-6 hover:shadow-md transition-shadow rounded-xl">
            <div className="text-center mb-3 md:mb-4">
              <div className="text-xl md:text-2xl font-bold text-slate-800 mb-1">2880</div>
              <div className="text-xs md:text-sm text-gray-600">Credits</div>
            </div>
            <div className="text-center mb-3 md:mb-4">
              <div className="text-lg md:text-xl font-bold text-slate-800">$120</div>
              <div className="text-xs md:text-sm text-gray-500 line-through">$232</div>
            </div>
            <button className="w-full py-2 md:py-3 border border-transparent rounded-xl shadow-sm text-xs md:text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 min-h-[44px]">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-white shadow rounded-lg p-4 md:p-6">
        <div className="space-y-3 md:space-y-4">
          <div className="flex items-start space-x-2 md:space-x-3">
            <i className="fa-solid fa-info-circle text-blue-500 mt-1"></i>
            <div>
              <h3 className="font-medium text-slate-800 mb-1">Extra Credits</h3>
              <p className="text-xs md:text-sm text-gray-600">Purchased credits show as separate balance with "No expiration date" text</p>
            </div>
          </div>
          <div className="flex items-start space-x-2 md:space-x-3">
            <i className="fa-solid fa-clock text-amber-500 mt-1"></i>
            <div>
              <h3 className="font-medium text-slate-800 mb-1">Monthly Credits</h3>
              <p className="text-xs md:text-sm text-gray-600">Monthly credits reset on your billing date and expire if unused</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}