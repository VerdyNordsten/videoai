'use client';

import React, { useState } from 'react';

interface FormData {
  fullName: string;
  email: string;
  username: string;
  timezone: string;
  language: string;
  emailUpdates: boolean;
  creditsAlerts: boolean;
}

interface AccountInformationProps {
  formData: FormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function AccountInformation({ formData, onInputChange, onSubmit }: AccountInformationProps) {
  return (
    <div className="space-y-6">
      {/* Personal Details Section */}
      <div className="bg-white shadow rounded-lg p-4 md:p-6">
        <div className="mb-4 md:mb-6">
          <h2 className="font-poppins font-semibold text-lg md:text-xl text-slate-800">Personal Details</h2>
          <p className="text-gray-600 text-sm md:text-base mt-1">A view of your account details, you may manage your account at anytime.</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="fullName" className="block text-sm md:text-base font-medium text-slate-800 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={onInputChange}
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-purple-50/60 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 min-h-[44px] text-sm md:text-base"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm md:text-base font-medium text-slate-800 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                readOnly
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-100 border-0 rounded-xl text-gray-600 cursor-not-allowed min-h-[44px] text-sm md:text-base"
              />
              <p className="text-xs md:text-sm text-gray-500 mt-1">Linked via Google OAuth</p>
            </div>
          </div>

          <div>
            <label htmlFor="username" className="block text-sm md:text-base font-medium text-slate-800 mb-1">
              Username
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                readOnly
                className="flex-1 px-3 md:px-4 py-2 md:py-3 bg-gray-100 border-0 rounded-xl text-gray-600 cursor-not-allowed min-h-[44px] text-sm md:text-base"
              />
              <button
                type="button"
                className="px-4 py-2 md:py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors min-h-[44px] flex items-center justify-center text-sm md:text-base"
              >
                <i className="fa-solid fa-copy text-gray-600 mr-2"></i>
                Copy
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm md:text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 min-h-[44px]"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>

      {/* Profile Settings Section */}
      <div className="bg-white shadow rounded-lg p-4 md:p-6">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h2 className="font-poppins font-semibold text-lg md:text-xl text-slate-800">Profile Settings</h2>
          <button className="text-gray-400 hover:text-gray-600 min-h-[44px] flex items-center justify-center">
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div>
            <label className="block text-sm md:text-base font-medium text-slate-800 mb-2 md:mb-4">
              Profile Picture
            </label>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                alt="Profile"
                className="w-16 h-16 md:w-24 md:h-24 rounded-full mx-auto sm:mx-0"
              />
              <div className="flex flex-col sm:flex-row gap-2">
                <button className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm md:text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 min-h-[44px]">
                  Upload New
                </button>
                <button className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm md:text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 min-h-[44px]">
                  Remove
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="timezone" className="block text-sm md:text-base font-medium text-slate-800 mb-1">
                Timezone
              </label>
              <select
                id="timezone"
                name="timezone"
                value={formData.timezone}
                onChange={onInputChange}
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-purple-50/60 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 min-h-[44px] text-sm md:text-base"
              >
                <option>UTC-08:00 (Pacific Time)</option>
                <option>UTC-05:00 (Eastern Time)</option>
                <option>UTC+00:00 (GMT)</option>
              </select>
            </div>
            <div>
              <label htmlFor="language" className="block text-sm md:text-base font-medium text-slate-800 mb-1">
                Language
              </label>
              <select
                id="language"
                name="language"
                value={formData.language}
                onChange={onInputChange}
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-purple-50/60 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 min-h-[44px] text-sm md:text-base"
              >
                <option>English (EN)</option>
                <option>Indonesian (ID)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm md:text-base font-medium text-slate-800 mb-3 md:mb-4">
              Notifications
            </label>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 text-sm md:text-base">Email updates</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="emailUpdates"
                    checked={formData.emailUpdates}
                    onChange={onInputChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 text-sm md:text-base">Credits alerts</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="creditsAlerts"
                    checked={formData.creditsAlerts}
                    onChange={onInputChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}