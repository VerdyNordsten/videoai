'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SampleOutputPreview = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-6">
            See What You'll Get
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real examples of AI-generated marketing insights from popular short-form content
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="border border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <img className="w-full h-64 rounded-2xl object-cover mb-4" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/dee9afbfae-6cbfffa306ac73ace59f.png" alt="smartphone mockup showing TikTok video interface with cooking content, modern clean UI" />
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-purple-600 bg-purple-100 dark:bg-purple-900/50 px-3 py-1 rounded-full">Cooking Tutorial</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2.3M views</span>
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white">5-Minute Pasta Recipe</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Original TikTok by @chefmaria</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">AI-Generated Marketing Ideas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">H</span>
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Hook Variations</h4>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg text-gray-700 dark:text-gray-300">
                        "POV: You're always hungry but have 5 minutes"
                      </p>
                      <p className="text-sm bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg text-gray-700 dark:text-gray-300">
                        "This pasta hack will save your weeknight dinners"
                      </p>
                      <p className="text-sm bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg text-gray-700 dark:text-gray-300">
                        "Stop ordering takeout when you can make this"
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">O</span>
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Content Outline</h4>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <p><span className="font-semibold text-gray-900 dark:text-white">0-3s:</span> Hook with problem statement</p>
                      <p><span className="font-semibold text-gray-900 dark:text-white">3-8s:</span> Ingredient reveal with quick cuts</p>
                      <p><span className="font-semibold text-gray-900 dark:text-white">8-15s:</span> Fast-paced cooking montage</p>
                      <p><span className="font-semibold text-gray-900 dark:text-white">15-20s:</span> Final reveal with CTA</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">#</span>
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Optimized Hashtags</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      #quickrecipes #pasta #weeknightdinner #foodhacks #cooking101 #easymeal #5minutemeals #pastatiktok #quickcook #homecooking
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">A</span>
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Audience Insights</h4>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <p><span className="font-semibold text-gray-900 dark:text-white">Primary Audience:</span> Ages 25-40, busy professionals</p>
                      <p><span className="font-semibold text-gray-900 dark:text-white">Engagement Peak:</span> 6-8 PM weekdays</p>
                      <p><span className="font-semibold text-gray-900 dark:text-white">Best Caption Length:</span> 50-75 characters</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 rounded-xl font-bold">
                  See Full Analysis
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleOutputPreview;