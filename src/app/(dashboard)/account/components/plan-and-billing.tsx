'use client';

import React from 'react';

export default function PlanAndBilling() {
  return (
    <div className="w-full">
      {/* Your Plan and Invoices Sections - Responsive Flex Layout */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        {/* Your Plan Section */}
        <div className="bg-white rounded-lg shadow p-4 md:flex-1" style={{height: '290px', display: 'flex', flexDirection: 'column'}}>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Plan</h2>
          
          <div className="border border-gray-200 rounded-lg p-4 mb-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  Pro Plan
                </span>
                <div>
                  <p className="text-lg font-semibold text-gray-900">$29/month</p>
                  <p className="text-sm text-gray-500">Billed monthly</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-1.5">
            <button className="flex-1 sm:flex-none sm:w-auto px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 text-sm font-medium">
              Change Plan
            </button>
            <button className="flex-1 sm:flex-none sm:w-auto px-4 py-2 bg-white text-red-700 border border-red-300 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-sm font-medium">
              Cancel Plan
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">Next billing date: January 15, 2025</p>
        </div>

        {/* Invoices & Billing Section */}
        <div className="bg-white rounded-lg shadow p-4 md:flex-1" style={{display: 'flex', flexDirection: 'column'}}>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Invoices & Billing</h2>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 text-sm font-medium sm:w-auto">
              Manage Billing
            </button>
          </div>
          
          <div className="overflow-x-auto" style={{flex: '1 1 auto', minHeight: '0'}}>
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-500">Date</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-500">Amount</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-gray-500">Status</th>
                  <th className="text-right py-3 px-2 text-sm font-medium text-gray-500">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-2 text-sm text-gray-900">Dec 15, 2024</td>
                  <td className="py-3 px-2 text-sm text-gray-500">$29.00</td>
                  <td className="py-3 px-2 text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                  <td className="py-3 px-2 text-right text-sm">
                    <button className="text-purple-600 hover:text-purple-900">
                      Download PDF
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-2 text-sm text-gray-900">Dec 15, 2024</td>
                  <td className="py-3 px-2 text-sm text-gray-500">$29.00</td>
                  <td className="py-3 px-2 text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                  <td className="py-3 px-2 text-right text-sm">
                    <button className="text-purple-600 hover:text-purple-900">
                      Download PDF
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-2 text-sm text-gray-900">Dec 15, 2024</td>
                  <td className="py-3 px-2 text-sm text-gray-500">$29.00</td>
                  <td className="py-3 px-2 text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                  <td className="py-3 px-2 text-right text-sm">
                    <button className="text-purple-600 hover:text-purple-900">
                      Download PDF
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-2 text-sm text-gray-900">Dec 15, 2024</td>
                  <td className="py-3 px-2 text-sm text-gray-500">$29.00</td>
                  <td className="py-3 px-2 text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                  <td className="py-3 px-2 text-right text-sm">
                    <button className="text-purple-600 hover:text-purple-900">
                      Download PDF
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-2 text-sm text-gray-900">Dec 15, 2024</td>
                  <td className="py-3 px-2 text-sm text-gray-500">$29.00</td>
                  <td className="py-3 px-2 text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                  <td className="py-3 px-2 text-right text-sm">
                    <button className="text-purple-600 hover:text-purple-900">
                      Download PDF
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-2 text-sm text-gray-900">Nov 15, 2024</td>
                  <td className="py-3 px-2 text-sm text-gray-500">$29.00</td>
                  <td className="py-3 px-2 text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                  <td className="py-3 px-2 text-right text-sm">
                    <button className="text-purple-600 hover:text-purple-900">
                      Download PDF
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-2 text-sm text-gray-900">Oct 15, 2024</td>
                  <td className="py-3 px-2 text-sm text-gray-500">$29.00</td>
                  <td className="py-3 px-2 text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                  <td className="py-3 px-2 text-right text-sm">
                    <button className="text-purple-600 hover:text-purple-900">
                      Download PDF
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-2 text-sm text-gray-900">Sep 15, 2024</td>
                  <td className="py-3 px-2 text-sm text-gray-500">$29.00</td>
                  <td className="py-3 px-2 text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                  <td className="py-3 px-2 text-right text-sm">
                    <button className="text-purple-600 hover:text-purple-900">
                      Download PDF
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}