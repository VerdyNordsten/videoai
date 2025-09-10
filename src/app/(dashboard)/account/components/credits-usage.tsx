'use client';

import React from 'react';

export default function CreditsUsage() {
  return (
    <div className="bg-white shadow rounded-lg p-4 md:p-6">
      <div className="mb-4 md:mb-6">
        <h2 className="font-poppins font-semibold text-lg md:text-xl text-slate-800">Credit Usage History</h2>
      </div>

      {/* Mobile-friendly table with horizontal scrolling */}
      <div className="overflow-x-auto -mx-4 md:mx-0">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tool
              </th>
              <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Plan Credits
              </th>
              <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Purchased Credits
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Used
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">
                Jan 12, 2025 2:30 PM
              </td>
              <td className="px-4 py-4 text-xs md:text-sm text-gray-500">
                Hifi Standard Design (Max Design)
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                -15
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                -15
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                0
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Purchased
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">
                Jan 10, 2025 10:15 AM
              </td>
              <td className="px-4 py-4 text-xs md:text-sm text-gray-500">
                Credit Pack Purchase
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                +720
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                0
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                +720
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Used
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">
                Jan 8, 2025 4:45 PM
              </td>
              <td className="px-4 py-4 text-xs md:text-sm text-gray-500">
                AI Video Generator
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                -25
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                -25
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                0
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Refunded
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">
                Jan 5, 2025 11:20 AM
              </td>
              <td className="px-4 py-4 text-xs md:text-sm text-gray-500">
                Template Design (Refunded)
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                +10
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                +10
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                0
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Used
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">
                Jan 3, 2025 9:10 AM
              </td>
              <td className="px-4 py-4 text-xs md:text-sm text-gray-500">
                Custom Video Template
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                -30
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                -30
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                0
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Used
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">
                Dec 28, 2024 3:25 PM
              </td>
              <td className="px-4 py-4 text-xs md:text-sm text-gray-500">
                AI Content Generator
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                -20
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                -20
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                0
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Purchased
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">
                Dec 25, 2024 12:00 PM
              </td>
              <td className="px-4 py-4 text-xs md:text-sm text-gray-500">
                Holiday Credit Pack
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                +360
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                0
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                +360
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Used
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">
                Dec 22, 2024 6:15 PM
              </td>
              <td className="px-4 py-4 text-xs md:text-sm text-gray-500">
                Premium Template Access
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                -40
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                -40
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                0
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Used
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">
                Dec 20, 2024 1:40 PM
              </td>
              <td className="px-4 py-4 text-xs md:text-sm text-gray-500">
                Video Export (4K)
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                -35
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                -35
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                0
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Used
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">
                Dec 18, 2024 8:55 AM
              </td>
              <td className="px-4 py-4 text-xs md:text-sm text-gray-500">
                Advanced AI Features
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                -50
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                -50
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-xs md:text-sm text-right text-gray-500">
                0
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="px-4 md:px-6 py-3 md:py-4 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="flex items-center space-x-4 mb-3 sm:mb-0">
            <span className="text-xs md:text-sm text-gray-600">Show:</span>
            <select className="border border-gray-200 rounded-lg px-3 py-1 text-xs md:text-sm min-h-[44px]">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-xs md:text-sm text-gray-600">10 of 1–10</span>
            <div className="flex space-x-1">
              <button className="px-3 py-1 border border-gray-200 rounded-lg text-xs md:text-sm hover:bg-gray-50 min-h-[44px]">
                Previous
              </button>
              <button className="px-3 py-1 border border-gray-200 rounded-lg text-xs md:text-sm hover:bg-gray-50 min-h-[44px]">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}