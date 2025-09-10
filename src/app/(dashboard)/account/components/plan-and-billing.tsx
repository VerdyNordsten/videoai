'use client';

import React from 'react';

export default function PlanAndBilling() {
  return (
    <div className="space-y-6">
      {/* Your Plan Section */}
      <div className="bg-white shadow rounded-lg p-4 md:p-6">
        <div className="mb-4 md:mb-6">
          <h2 className="font-poppins font-semibold text-lg md:text-xl text-slate-800">Your Plan</h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 mb-4 md:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              Pro Plan
            </span>
            <div>
              <p className="text-lg font-semibold text-slate-800">$29/month</p>
              <p className="text-xs md:text-sm text-gray-500">Billed monthly</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-coins text-amber-500"></i>
              <span className="text-xs md:text-sm text-gray-500">
                Remaining Credits: <span className="font-medium">411</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
            <button className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 min-h-[44px]">
              Change Plan
            </button>
            <button className="py-2 px-4 border border-red-300 rounded-md shadow-sm text-sm font-medium text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 min-h-[44px]">
              Cancel Plan
            </button>
          </div>
        </div>

        <p className="text-xs md:text-sm text-gray-500">Next billing date: January 15, 2025</p>
      </div>

      {/* Credits Quick View */}
      <div className="bg-white shadow rounded-lg p-4 md:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-poppins font-semibold text-lg md:text-xl text-slate-800 mb-2">Credits</h2>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-coins text-amber-500"></i>
              <span className="font-medium text-slate-800">411 remaining credits</span>
            </div>
          </div>
          <button className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 min-h-[44px]">
            Buy Credits
          </button>
        </div>
      </div>

      {/* Invoices & Billing */}
      <div className="bg-white shadow rounded-lg p-4 md:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6">
          <h2 className="font-poppins font-semibold text-lg md:text-xl text-slate-800 mb-2 sm:mb-0">Invoices & Billing</h2>
          <button className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 min-h-[44px]">
            Manage Billing
          </button>
        </div>

        {/* Mobile-friendly table */}
        <div className="overflow-x-auto -mx-4 md:mx-0">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">
                  Dec 15, 2024
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900">
                  $29.00
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Paid
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-right text-xs md:text-sm">
                  <button className="text-purple-600 hover:text-purple-900 min-h-[44px]">
                    Download PDF
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">
                  Nov 15, 2024
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900">
                  $29.00
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Paid
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-right text-xs md:text-sm">
                  <button className="text-purple-600 hover:text-purple-900 min-h-[44px]">
                    Download PDF
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}