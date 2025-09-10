'use client';

import React, { useState } from 'react';

interface FormData {
  newPassword: string;
  confirmPassword: string;
  emailUpdates: boolean;
  creditsAlerts: boolean;
}

interface SecurityProps {
  formData: FormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function Security({ formData, onInputChange, onSubmit }: SecurityProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="space-y-6">
      {/* Set Password Section - Fully responsive */}
      <div className="bg-white shadow rounded-lg p-4 sm:p-6">
        <div className="mb-4 sm:mb-6">
          <h2 className="font-poppins font-semibold text-lg sm:text-xl text-slate-800">Set Password</h2>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
          {/* Responsive grid - 1 column on mobile, 2 on tablet/desktop */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="newPassword" className="block text-sm sm:text-base font-medium text-slate-800 mb-1">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={onInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-purple-50/60 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 pr-10 min-h-[44px] text-sm sm:text-base"
                />
                <button
                  type="button"
                  onClick={handleTogglePassword}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 min-h-[44px]"
                >
                  <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm sm:text-base font-medium text-slate-800 mb-1">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={onInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-purple-50/60 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 pr-10 min-h-[44px] text-sm sm:text-base"
                />
                <button
                  type="button"
                  onClick={handleToggleConfirmPassword}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 min-h-[44px]"
                >
                  <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm sm:text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 min-h-[44px]"
            >
              Set Password
            </button>
          </div>
        </form>
      </div>

      {/* Account Linking Section - Fully responsive */}
      <div className="bg-white shadow rounded-lg p-4 sm:p-6">
        <div className="mb-4 sm:mb-6">
          <h2 className="font-poppins font-semibold text-lg sm:text-xl text-slate-800">Account Linking</h2>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {/* Email & Password Card - Responsive flex layout */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 border border-gray-200 rounded-xl">
            <div className="flex items-center gap-3 mb-4 sm:mb-0">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-envelope text-gray-600"></i>
              </div>
              <div>
                <h3 className="font-medium text-slate-800">Email & Password</h3>
                <p className="text-xs sm:text-sm text-gray-500">sarah.chen@company.com</p>
              </div>
            </div>
            <button className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 min-h-[44px]">
              Change Password
            </button>
          </div>

          {/* Google Account Card - Responsive flex layout */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 border border-gray-200 rounded-xl">
            <div className="flex items-center gap-3 mb-4 sm:mb-0">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                <i className="fab fa-google text-red-500"></i>
              </div>
              <div>
                <h3 className="font-medium text-slate-800">Google Account</h3>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Connected
                  </span>
                </div>
              </div>
            </div>
            <button className="py-2 px-4 border border-red-300 rounded-md shadow-sm text-sm sm:text-base font-medium text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 min-h-[44px]">
              Disconnect
            </button>
          </div>
        </div>
      </div>

      {/* Two-Factor Authentication - Fully responsive */}
      <div className="bg-white shadow rounded-lg p-4 sm:p-6">
        <div className="mb-4 sm:mb-6">
          <h2 className="font-poppins font-semibold text-lg sm:text-xl text-slate-800">Two-Factor Authentication</h2>
        </div>

        {/* Responsive flex layout - column on mobile, row on tablet/desktop */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="mb-3 sm:mb-0">
            <h3 className="font-medium text-slate-800 mb-1">Enable 2FA</h3>
            <p className="text-xs sm:text-sm text-gray-500">Add an extra layer of security to your account</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              Disabled
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}