'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DashboardPreview = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-6">
            Your Analytics Dashboard
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Get deep insights into your content performance with our comprehensive analytics suite
          </p>
        </div>
        
        <Card className="border border-gray-200">
          <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold text-gray-900">Content Performance Overview</CardTitle>
              <div className="flex space-x-2">
                <button className="w-3 h-3 bg-red-400 rounded-full"></button>
                <button className="w-3 h-3 bg-yellow-400 rounded-full"></button>
                <button className="w-3 h-3 bg-green-400 rounded-full"></button>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold">🎥</span>
                    </div>
                    <span className="text-2xl">📈</span>
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 mb-1">247</h4>
                  <p className="text-gray-600">Videos Analyzed</p>
                  <p className="text-pink-500 text-sm font-semibold mt-2">+23% this month</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold">💡</span>
                    </div>
                    <span className="text-2xl">💡</span>
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 mb-1">1,847</h4>
                  <p className="text-gray-600">Ideas Generated</p>
                  <p className="text-blue-500 text-sm font-semibold mt-2">+67% this month</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold">📊</span>
                    </div>
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 mb-1">89.4%</h4>
                  <p className="text-gray-600">Avg Accuracy</p>
                  <p className="text-green-500 text-sm font-semibold mt-2">+5.2% this month</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold">🔥</span>
                    </div>
                    <span className="text-2xl">⭐</span>
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 mb-1">156</h4>
                  <p className="text-gray-600">Viral Predictions</p>
                  <p className="text-yellow-500 text-sm font-semibold mt-2">+12% accuracy</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Recent Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4 bg-white rounded-xl p-4 border border-gray-200">
                    <img className="w-16 h-16 rounded-lg object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/dc6344f01b-a588851a551c992b0096.png" alt="TikTok video thumbnail showing dance content" />
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900">Dance Tutorial Breakdown</h5>
                      <p className="text-sm text-gray-600">Generated 12 hook variations</p>
                      <div className="flex items-center mt-2">
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">High Potential</span>
                        <span className="text-xs text-gray-500 ml-2">2 hours ago</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-white rounded-xl p-4 border border-gray-200">
                    <img className="w-16 h-16 rounded-lg object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/a1c7a156ea-67da996dee070c9788e1.png" alt="cooking recipe video thumbnail" />
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900">Recipe Content Analysis</h5>
                      <p className="text-sm text-gray-600">Optimized for food niche</p>
                      <div className="flex items-center mt-2">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Trending</span>
                        <span className="text-xs text-gray-500 ml-2">5 hours ago</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-white rounded-xl p-4 border border-gray-200">
                    <img className="w-16 h-16 rounded-lg object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7b8f1a04d0-17d8627913d5d96a013d.png" alt="beauty tutorial video thumbnail" />
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900">Beauty Routine Analysis</h5>
                      <p className="text-sm text-gray-600">High engagement potential</p>
                      <div className="flex items-center mt-2">
                        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Hot Topic</span>
                        <span className="text-xs text-gray-500 ml-2">1 day ago</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Top Performing Hooks</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <p className="font-semibold text-gray-900 mb-2">"POV: You're trying this trend..."</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Success Rate: 94%</span>
                      <div className="flex items-center">
                        <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '94%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-green-500">94%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <p className="font-semibold text-gray-900 mb-2">"This changed everything for me..."</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Success Rate: 87%</span>
                      <div className="flex items-center">
                        <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '87%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-blue-500">87%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <p className="font-semibold text-gray-900 mb-2">"Wait until you see this..."</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Success Rate: 82%</span>
                      <div className="flex items-center">
                        <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-pink-500 h-2 rounded-full" style={{width: '82%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-pink-500">82%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <p className="font-semibold text-gray-900 mb-2">"I can't believe this works..."</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Success Rate: 78%</span>
                      <div className="flex items-center">
                        <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{width: '78%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-yellow-500">78%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8">
              <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Performance Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-white rounded-xl border border-gray-200">
                    <p className="text-gray-500">Interactive chart showing engagement trends over time</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DashboardPreview;