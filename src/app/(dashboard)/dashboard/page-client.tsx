'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  FaVideo, 
  FaLightbulb, 
  FaFire, 
  FaTrophy, 
  FaCloudArrowUp, 
  FaFolderOpen, 
  FaLink, 
  FaFilter, 
  FaWandMagicSparkles,
  FaBell,
  FaChevronDown,
  FaFileLines,
  FaChartLine
} from 'react-icons/fa6';
import { videoAnalysisData } from './video-detail/data';

export default function DashboardClientPage() {
  const [isFreshnessMode, setIsFreshnessMode] = useState(true);

  // Quick stats data
  const stats = [
    { 
      title: 'Videos Analyzed', 
      value: '247', 
      change: '+23% this month', 
      icon: FaVideo, 
      color: 'from-pink-500 to-pink-400',
      changeColor: 'text-pink-500'
    },
    { 
      title: 'Ideas Generated', 
      value: '1,847', 
      change: '+67% this month', 
      icon: FaLightbulb, 
      color: 'from-blue-500 to-blue-400',
      changeColor: 'text-blue-500'
    },
    { 
      title: 'Success Rate', 
      value: '89.4%', 
      change: '+5.2% this month', 
      icon: FaFire, 
      color: 'from-green-500 to-green-400',
      changeColor: 'text-green-500'
    },
    { 
      title: 'Viral Predictions', 
      value: '156', 
      change: '+12% accuracy', 
      icon: FaTrophy, 
      color: 'from-yellow-500 to-yellow-400',
      changeColor: 'text-yellow-500'
    }
  ];

  // Recent analyses data
  const recentAnalyses = videoAnalysisData;

  // Quick actions data
  const quickActions = [
    { title: 'Batch Upload', icon: FaCloudArrowUp, color: 'from-pink-500/10 to-pink-500/5' },
    { title: 'Export Ideas', icon: FaFolderOpen, color: 'from-blue-500/10 to-blue-500/5' },
    { title: 'Browse Templates', icon: FaFileLines, color: 'from-green-500/10 to-green-500/5' },
    { title: 'View Analytics', icon: FaChartLine, color: 'from-purple-500/10 to-purple-500/5' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
              Dashboard
            </h1>
            <p className="text-gray-600">Transform your videos into marketing gold</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full px-4 py-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700">247 Videos Analyzed</span>
              </div>
            </div>
            
            <button className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center hover:bg-yellow-500/40 transition-colors">
              <FaBell className="h-5 w-5 text-yellow-500" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Quick Stats */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-2xl">
                      {index === 0 && '🎬'}
                      {index === 1 && '💡'}
                      {index === 2 && '🔥'}
                      {index === 3 && '⭐'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                  <p className="text-gray-600 text-sm">{stat.title}</p>
                  <p className={`text-xs font-semibold mt-2 ${stat.changeColor}`}>{stat.change}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
      
      {/* Upload Section */}
      <section>
        <Card className="bg-white rounded-3xl shadow-xl border-0">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-2">
                Upload New Video
              </h2>
              <p className="text-gray-600">Drag & drop your video or paste a link to get started</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/5 to-green-500/5 rounded-2xl p-12 text-center mb-6 border-2 border-dashed border-blue-300 hover:border-pink-300 transition-colors">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaCloudArrowUp className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">Drop your video here</h3>
              <p className="text-gray-600 mb-6">Supports MP4, MOV, AVI up to 100MB</p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <Button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors">
                  <FaFolderOpen className="h-4 w-4 mr-2" />
                  Browse Files
                </Button>
                <span className="text-gray-400">or</span>
                <Button variant="outline" className="border-2 border-purple-500 text-purple-500 px-6 py-3 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-colors">
                  <FaLink className="h-4 w-4 mr-2" />
                  Paste Link
                </Button>
              </div>
            </div>
            
            <div className="text-center">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:to-purple-700 shadow-xl">
                <FaWandMagicSparkles className="h-5 w-5 mr-2" />
                Analyze with AI
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
      
      {/* Recent Analyses */}
      <section>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Recent Analyses</h2>
            <p className="text-gray-600">Your latest video insights and ideas</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-lg">
              <span className="text-sm text-gray-600">Freshness Mode</span>
              <div 
                className={`w-12 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-1 cursor-pointer transition-colors ${isFreshnessMode ? 'bg-gradient-to-r from-green-500 to-blue-500' : ''}`}
                onClick={() => setIsFreshnessMode(!isFreshnessMode)}
              >
                <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${isFreshnessMode ? 'translate-x-6' : ''}`}></div>
              </div>
            </div>
            
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              <FaFilter className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentAnalyses.map((analysis) => (
            <Link key={analysis.id} href={`/dashboard/video-detail/${analysis.id}`} className="block">
              <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border-l-4 border-green-500 cursor-pointer">
                <div className="relative">
                  <img className="w-full h-40 object-cover" src={analysis.thumbnail} alt={analysis.title} />
                  <div className="absolute top-3 right-3">
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${analysis.status === 'Analyzed' ? 'bg-green-500 text-white' : analysis.status === 'Processing' ? 'bg-yellow-500 text-yellow-900' : 'bg-red-300 text-red-900'}`}>
                      {analysis.status}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {analysis.duration}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{analysis.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{analysis.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{analysis.scoreLabel}</span>
                      <span className={`font-semibold ${analysis.statusColor}`}>{analysis.scoreValue}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${analysis.scoreColor} h-2 rounded-full`} 
                        style={{ width: `${analysis.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{analysis.timeAgo}</span>
                    <Button 
                      className={`rounded-lg font-semibold text-sm ${analysis.status === 'Processing' ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600'}`}
                      disabled={analysis.status === 'Processing'}
                      onClick={(e) => e.preventDefault()}
                    >
                      {analysis.action}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="text-center mt-8">
          <Button variant="outline" className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-colors">
            <FaChevronDown className="h-4 w-4 mr-2" />
            Load More Analyses
          </Button>
        </div>
      </section>
      
      {/* Quick Actions */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card key={index} className={`bg-gradient-to-br ${action.color} rounded-2xl p-6 hover:shadow-xl transition-shadow cursor-pointer border-0`}>
                <CardContent className="p-0">
                  <div className={`w-12 h-12 bg-gradient-to-br ${action.color.replace('/10', '').replace('/5', '')} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{action.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {index === 0 && 'Upload multiple videos at once'}
                    {index === 1 && 'Export to Notion, Docs, CSV'}
                    {index === 2 && 'Ready-made content structures'}
                    {index === 3 && 'Deep performance insights'}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}