          {/* Plan & Billing Tab - FULLY RESPONSIVE AND MOBILE-FRIENDLY */}
          {activeTab === 'billing' && (
            <div className="space-y-6">
              {/* Your Plan Section */}
              <div className="bg-white shadow rounded-lg p-4 md:p-6">
                <div className="mb-4 md:mb-6">
                  <h2 className="font-poppins font-semibold text-lg md:text-xl text-slate-900">Your Plan</h2>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 mb-4 md:mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                      Pro Plan
                    </span>
                    <div>
                      <p className="text-lg font-semibold text-slate-900">$29/month</p>
                      <p className="text-xs md:text-sm text-gray-600">Billed monthly</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-coins text-amber-500"></i>
                      <span className="text-xs md:text-sm text-gray-600">
                        Remaining Credits: <span className="font-medium">411</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                    <button className="py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 min-h-[44px]">
                      Change Plan
                    </button>
                    <button className="py-2 px-4 border border-red-300 rounded-xl shadow-sm text-sm font-medium text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 min-h-[44px]">
                      Cancel Plan
                    </button>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-gray-600">Next billing date: January 15, 2025</p>
              </div>

              {/* Credits Quick View */}
              <div className="bg-white shadow rounded-lg p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="font-poppins font-semibold text-lg md:text-xl text-slate-900 mb-2">Credits</h2>
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-coins text-amber-500"></i>
                      <span className="font-medium text-slate-900">411 remaining credits</span>
                    </div>
                  </div>
                  <button className="py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 min-h-[44px]">
                    Buy Credits
                  </button>
                </div>
              </div>

              {/* Invoices & Billing */}
              <div className="bg-white shadow rounded-lg p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 md:mb-6">
                  <h2 className="font-poppins font-semibold text-lg md:text-xl text-slate-900">Invoices & Billing</h2>
                  <button className="py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 min-h-[44px]">
                    Manage Billing
                  </button>
                </div>

                {/* Mobile-friendly table with horizontal scrolling */}
                <div className="overflow-x-auto -mx-4 md:mx-0">
                  <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                              Date
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Amount
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Status
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              Dec 15, 2024
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              $29.00
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                Paid
                              </span>
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                              <button className="text-purple-600 hover:text-purple-900 min-h-[44px]">
                                Download PDF
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              Nov 15, 2024
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              $29.00
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                Paid
                              </span>
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
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
              </div>
            </div>
          )}