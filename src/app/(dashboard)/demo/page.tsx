'use client';

import React, { useState } from 'react';
import DashboardLayout from '../components/dashboard-layout';

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Tab definitions
  const tabs = [
    { id: 'overview', label: 'Video Overview' },
    { id: 'timeline', label: 'Timeline Dissection' },
    { id: 'script', label: 'Script Analysis' },
    { id: 'visual', label: 'Visual Breakdown' },
    { id: 'audio', label: 'Audio Insights' },
    { id: 'engagement', label: 'Engagement Metrics' },
    { id: 'hashtags', label: 'Hashtag Analysis' },
    { id: 'competitive', label: 'Competitive Insights' },
    { id: 'improvements', label: 'Improvements' },
    { id: 'export', label: 'Export Options' }
  ];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  // Mock data for demonstration
  const videoData = {
    title: "How to Create Viral Content in 2024",
    platform: "TikTok",
    url: "https://tiktok.com/@creator/video/123456789",
    duration: "1:24",
    coreSummary: "This video provides actionable tips for creating content that performs well on social media platforms in 2024, focusing on storytelling techniques and visual engagement strategies.",
    contentPurpose: "Educational",
    hookSection: {
      timestamp: "0:00-0:03",
      description: "Starts with a bold question: 'What if I told you the secret to going viral is hiding in plain sight?'",
      strength: 8
    },
    peakEngagement: {
      timestamp: "0:45",
      description: "Reveals the 3-step framework with on-screen text overlay and dramatic pause"
    },
    endingCTA: {
      description: "Encourages viewers to follow for more content creation tips and asks them to comment with their biggest content challenge"
    }
  };

  return (
    <DashboardLayout>
      <div className="w-full bg-gray-50 min-h-screen">
        {/* Main content area with proper padding for mobile */}
        <div className="container mx-auto px-4 py-6">
          {/* Page header - responsive font sizes */}
          <div className="mb-6">
            <h1 className="font-poppins font-semibold text-2xl md:text-3xl text-gray-900">Video Analysis Demo</h1>
            <p className="text-gray-600 mt-2">Interactive demonstration of all video analysis features</p>
          </div>

          {/* Video Info Card */}
          <div className="bg-white shadow rounded-lg p-4 md:p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="font-poppins font-semibold text-lg md:text-xl text-gray-900">{videoData.title}</h2>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {videoData.platform}
                  </span>
                  <span className="text-sm text-gray-600">{videoData.duration}</span>
                  <span className="text-sm text-gray-600">•</span>
                  <span className="text-sm text-gray-600">{videoData.contentPurpose}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 text-sm font-medium">
                  Analyze New Video
                </button>
                <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-sm font-medium">
                  Save Analysis
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3">{videoData.url}</p>
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
            {/* Video Overview Tab */}
            {activeTab === 'overview' && (
              <div className="bg-white shadow rounded-lg p-4 md:p-6">
                <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-4">Video Overview</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Core Summary</h3>
                    <p className="text-gray-600">{videoData.coreSummary}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Content Purpose</h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {videoData.contentPurpose}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Timeline Dissection Tab */}
            {activeTab === 'timeline' && (
              <div className="bg-white shadow rounded-lg p-4 md:p-6">
                <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-4">Timeline Dissection</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-4 py-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Hook
                      </span>
                      <span className="text-sm font-medium text-gray-900">{videoData.hookSection.timestamp}</span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Strength: {videoData.hookSection.strength}/10
                      </span>
                    </div>
                    <p className="text-gray-600">{videoData.hookSection.description}</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4 py-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Peak Engagement
                      </span>
                      <span className="text-sm font-medium text-gray-900">{videoData.peakEngagement.timestamp}</span>
                    </div>
                    <p className="text-gray-600">{videoData.peakEngagement.description}</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4 py-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        CTA
                      </span>
                    </div>
                    <p className="text-gray-600">{videoData.endingCTA.description}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Script Analysis Tab */}
            {activeTab === 'script' && (
              <div className="bg-white shadow rounded-lg p-4 md:p-6">
                <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-4">Script & Narration Analysis</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Auto Transcript</h3>
                    <div className="bg-gray-50 rounded-lg p-4 max-h-60 overflow-y-auto">
                      <p className="text-gray-700 text-sm">
                        [0:00] What if I told you the secret to going viral is hiding in plain sight? 
                        [0:05] Most creators are missing this one crucial element... 
                        [0:10] Today I'm going to reveal the 3-step framework that helped me grow from 0 to 100K followers in just 6 months.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Storytelling Pattern</h4>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Problem→Solution
                      </span>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Emotional Triggers</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          Curiosity
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          Aspiration
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          Urgency
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Visual Breakdown Tab */}
            {activeTab === 'visual' && (
              <div className="bg-white shadow rounded-lg p-4 md:p-6">
                <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-4">Visual & Editing Breakdown</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Shot Types</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Close-ups</span>
                        <span className="font-medium">45%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Wide shots</span>
                        <span className="font-medium">30%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">B-roll</span>
                        <span className="font-medium">25%</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Editing Metrics</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total cuts</span>
                        <span className="font-medium">24</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Avg. cut duration</span>
                        <span className="font-medium">3.5s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Audio Insights Tab */}
            {activeTab === 'audio' && (
              <div className="bg-white shadow rounded-lg p-4 md:p-6">
                <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-4">Audio & Sound Insights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Music Analysis</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Type</span>
                        <span className="font-medium">Trending Sound</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tempo</span>
                        <span className="font-medium">128 BPM</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Voice Style</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Style</span>
                        <span className="font-medium">Natural Talk</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Quality</span>
                        <span className="font-medium">Clear</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Engagement Metrics Tab */}
            {activeTab === 'engagement' && (
              <div className="bg-white shadow rounded-lg p-4 md:p-6">
                <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-4">Engagement & Performance Metrics</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-700">125K</div>
                      <div className="text-sm text-gray-600">Views</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-700">15.2K</div>
                      <div className="text-sm text-gray-600">Likes</div>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-yellow-700">842</div>
                      <div className="text-sm text-gray-600">Comments</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-700">4.2K</div>
                      <div className="text-sm text-gray-600">Shares</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Audience Retention</h3>
                    <div className="h-32 flex items-end justify-between">
                      {[85, 78, 82, 90, 95, 88, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15].map((value, index) => (
                        <div key={index} className="flex flex-col items-center flex-1">
                          <div 
                            className="w-full bg-purple-500 rounded-t" 
                            style={{ height: `${value}%` }}
                          ></div>
                          <div className="text-xs text-gray-500 mt-1">{index * 5}s</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Hashtag Analysis Tab */}
            {activeTab === 'hashtags' && (
              <div className="bg-white shadow rounded-lg p-4 md:p-6">
                <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-4">Hashtag & Caption Analysis</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Original Caption</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700">
                        Want to know the secret to going viral? 🚀 Check out my latest video where I reveal the 3-step framework that helped me grow from 0 to 100K followers in just 6 months! #ContentCreation #ViralContent #SocialMediaTips
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Hashtags Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {['#ContentCreation', '#ViralContent', '#SocialMediaTips', '#CreatorLife', '#VideoMarketing'].map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Recommended Hashtags</h3>
                    <div className="flex flex-wrap gap-2">
                      {['#DigitalMarketing', '#YouTubeTips', '#TikTokGrowth', '#ContentStrategy', '#AudienceEngagement'].map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Competitive Insights Tab */}
            {activeTab === 'competitive' && (
              <div className="bg-white shadow rounded-lg p-4 md:p-6">
                <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-4">Competitive Insights</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Success Factors</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Strong hook with curiosity gap</li>
                      <li>Clear value proposition in first 5 seconds</li>
                      <li>Consistent on-screen text reinforcement</li>
                      <li>Effective call-to-action at the end</li>
                      <li>Optimal video length for platform (1:24)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Potential Improvements</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Add more B-roll footage to increase visual interest</li>
                      <li>Include captions for accessibility and silent viewing</li>
                      <li>Consider faster pacing in the middle section</li>
                      <li>Add personal story element for emotional connection</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Improvements Tab */}
            {activeTab === 'improvements' && (
              <div className="bg-white shadow rounded-lg p-4 md:p-6">
                <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-4">Recommended Improvements</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Alternative Hooks</h3>
                    <div className="space-y-3">
                      <div className="border border-gray-200 rounded-lg p-3">
                        <div className="flex items-start gap-2">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-800 text-xs font-medium">1</span>
                          <p className="text-gray-700">"I grew my following by 1000% using this ONE secret..."</p>
                        </div>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-3">
                        <div className="flex items-start gap-2">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-800 text-xs font-medium">2</span>
                          <p className="text-gray-700">"This rookie mistake is killing your content growth..."</p>
                        </div>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-3">
                        <div className="flex items-start gap-2">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-800 text-xs font-medium">3</span>
                          <p className="text-gray-700">"Why your best content gets ignored (and how to fix it)"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Content Repurpose Ideas</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="border border-gray-200 rounded-lg p-3">
                        <h4 className="font-medium text-gray-900">Instagram Carousel</h4>
                        <p className="text-sm text-gray-600 mt-1">Turn key tips into visual slides</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-3">
                        <h4 className="font-medium text-gray-900">Twitter Thread</h4>
                        <p className="text-sm text-gray-600 mt-1">Break down framework into tweetable insights</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-3">
                        <h4 className="font-medium text-gray-900">Blog Post</h4>
                        <p className="text-sm text-gray-600 mt-1">Expand on each step with examples</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Export Options Tab */}
            {activeTab === 'export' && (
              <div className="bg-white shadow rounded-lg p-4 md:p-6">
                <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-4">Export & Save Options</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <i className="fa-solid fa-file-pdf text-blue-600"></i>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Export to PDF</h3>
                        <p className="text-sm text-gray-600">Download complete analysis</p>
                      </div>
                    </div>
                    <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
                      Generate PDF
                    </button>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <i className="fa-solid fa-file-lines text-green-600"></i>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Export to Notion</h3>
                        <p className="text-sm text-gray-600">Save to your workspace</p>
                      </div>
                    </div>
                    <button className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium">
                      Send to Notion
                    </button>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <i className="fa-solid fa-file-word text-purple-600"></i>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Export to Google Docs</h3>
                        <p className="text-sm text-gray-600">Edit and share analysis</p>
                      </div>
                    </div>
                    <button className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 text-sm font-medium">
                      Create Google Doc
                    </button>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                        <i className="fa-solid fa-file-code text-amber-600"></i>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">New Script Template</h3>
                        <p className="text-sm text-gray-600">Generate based on insights</p>
                      </div>
                    </div>
                    <button className="w-full py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 text-sm font-medium">
                      Create Template
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}