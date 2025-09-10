'use client';

import React, { useState } from 'react';
import DashboardLayout from '../components/dashboard-layout';
import AccountInformation from './components/account-information';
import Security from './components/security';
import PlanAndBilling from './components/plan-and-billing';
import CreditsInformation from './components/credits-information';
import CreditsUsage from './components/credits-usage';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('account');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: 'Sarah Chen',
    email: 'sarah.chen@company.com',
    username: 'sarah-chen-2024',
    timezone: 'UTC-08:00 (Pacific Time)',
    language: 'English (EN)',
    emailUpdates: true,
    creditsAlerts: true,
    newPassword: '',
    confirmPassword: ''
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setToastMessage('Settings updated successfully!');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  // Tab definitions
  const tabs = [
    { id: 'account', label: 'Account Information' },
    { id: 'security', label: 'Security' },
    { id: 'billing', label: 'Plan & Billing' },
    { id: 'credits', label: 'Credits Information' },
    { id: 'usage', label: 'Credits Usage' }
  ];

  return (
    <DashboardLayout>
      <div className="w-full bg-gray-50 min-h-screen">
        {/* Main content area with proper padding for mobile */}
        <div className="container mx-auto px-4 py-6">
          {/* Page header - responsive font sizes */}
          <div className="mb-6">
            <h1 className="font-poppins font-semibold text-2xl md:text-3xl text-gray-900">Account Settings</h1>
          </div>

          {/* Responsive Navigation - Desktop tabs, Mobile accordion */}
          <div className="mb-6">
            {/* Desktop navigation - hidden on mobile/tablet */}
            <div className="hidden md:flex border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm md:text-base ${
                      activeTab === tab.id
                        ? 'border-purple-500 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Mobile navigation - dropdown/accordion style */}
            <div className="md:hidden">
              <div className="relative">
                <button
                  type="button"
                  className="w-full flex items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 min-h-[44px]"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <span>
                    {tabs.find(tab => tab.id === activeTab)?.label || 'Select Section'}
                  </span>
                  <i className={`fas fa-chevron-down transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`}></i>
                </button>

                {/* Mobile dropdown menu */}
                {isMobileMenuOpen && (
                  <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg">
                    <div className="py-1" role="none">
                      {tabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => handleTabChange(tab.id)}
                          className={`block w-full text-left px-4 py-3 text-sm ${
                            activeTab === tab.id
                              ? 'bg-purple-50 text-purple-600'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Content Area - Modular Components */}
          <div className="space-y-6">
            {/* Account Information Tab */}
            {activeTab === 'account' && (
              <AccountInformation 
                formData={formData} 
                onInputChange={handleInputChange} 
                onSubmit={handleSubmit} 
              />
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <Security 
                formData={formData} 
                onInputChange={handleInputChange} 
                onSubmit={handleSubmit} 
              />
            )}

            {/* Plan & Billing Tab */}
            {activeTab === 'billing' && (
              <PlanAndBilling />
            )}

            {/* Credits Information Tab */}
            {activeTab === 'credits' && (
              <CreditsInformation />
            )}

            {/* Credits Usage Tab */}
            {activeTab === 'usage' && (
              <CreditsUsage />
            )}
          </div>
        </div>

        {/* Toast Notification */}
        {showToast && (
          <div className="fixed top-4 right-4 bg-green-500 text-white p-3 md:p-4 rounded-lg shadow-lg z-50 flex items-center space-x-2 min-h-[44px]">
            <i className="fa-solid fa-check-circle"></i>
            <span className="text-sm md:text-base">{toastMessage}</span>
          </div>
        )}

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </DashboardLayout>
  );
}