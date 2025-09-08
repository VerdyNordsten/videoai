import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  FaArrowLeft, 
  FaShare, 
  FaPlay, 
  FaClock, 
  FaFish, 
  FaGem, 
  FaBullhorn, 
  FaChevronDown,
  FaScissors, 
  FaFont, 
  FaVolumeHigh, 
  FaRocket,
  FaDownload
} from 'react-icons/fa6';
import { videoAnalysisData } from '../data';

// Define the type for our video data
type VideoData = typeof videoAnalysisData[number];

export default function VideoDetailPage({ params }: { params: { id: string } }) {
  // Find the video data based on the ID
  const videoData = videoAnalysisData.find(video => video.id === parseInt(params.id));

  // If video not found, return 404
  if (!videoData) {
    notFound();
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" className="rounded-full" onClick={() => window.history.back()}>
              <FaArrowLeft className="h-5 w-5 text-blue-500" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
                Analysis Results
              </h1>
              <p className="text-gray-600">{videoData.title} • {videoData.duration}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full px-4 py-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-semibold text-gray-700">{videoData.viralScore}% Viral Score</span>
              </div>
            </div>
            
            <Button variant="outline" size="icon" className="rounded-full">
              <FaShare className="h-5 w-5 text-yellow-500" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Video Player & Timeline */}
        <div className="lg:col-span-1">
          <Card className="bg-white rounded-3xl shadow-xl border-0 sticky top-6">
            <CardContent className="p-6">
              {/* Video Player */}
              <div className="relative mb-6">
                <div className="aspect-[9/16] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl overflow-hidden">
                  <img 
                    src={videoData.thumbnail} 
                    className="w-full h-full object-cover" 
                    alt={videoData.title} 
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white">
                      <FaPlay className="h-8 w-8 text-gray-700 ml-1" />
                    </Button>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {videoData.duration}
                </div>
              </div>
              
              {/* Scene Timeline */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Scene Timeline</h3>
                <div className="space-y-4">
                  <div className="h-2 bg-gradient-to-r from-pink-500 via-green-500 to-purple-500 rounded-full relative mb-4">
                    {[
                      { id: 'hook', title: 'Hook', duration: '0-3s', color: 'bg-pink-500' },
                      { id: 'value', title: 'Value', duration: '3-18s', color: 'bg-green-500' },
                      { id: 'cta', title: 'CTA', duration: '18-24s', color: 'bg-purple-500' }
                    ].map((item, index) => (
                      <div 
                        key={item.id}
                        className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 ${item.color} rounded-full border-2 border-white`}
                        style={{ left: `${index * 50}%` }}
                      ></div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {[
                      { id: 'hook', title: 'Hook', duration: '0-3s', color: 'bg-pink-500' },
                      { id: 'value', title: 'Value', duration: '3-18s', color: 'bg-green-500' },
                      { id: 'cta', title: 'CTA', duration: '18-24s', color: 'bg-purple-500' }
                    ].map((item) => (
                      <div key={item.id} className="text-center">
                        <div className={`${item.color}/20 rounded-lg p-2`}>
                          <div className="font-semibold text-gray-900">{item.duration}</div>
                          <div className="text-gray-600">{item.title}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Viral Score", value: `${videoData.viralScore}%` },
                  { label: "Ideas Generated", value: "12" }
                ].map((stat, index) => (
                  <div key={index} className="bg-blue-500/10 rounded-xl p-3 text-center">
                    <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Right Column - Tabbed Analysis */}
        <div className="lg:col-span-2">
          <Card className="bg-white rounded-3xl shadow-xl border-0 overflow-hidden">
            {/* Tab Navigation */}
            <div className="flex overflow-x-auto border-b border-gray-100">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'structure', label: 'Structure Outline' },
                { id: 'marketing', label: 'Marketing Ideas' },
                { id: 'checklist', label: 'Editing Checklist' }
              ].map((tab) => (
                <Button
                  key={tab.id}
                  variant="ghost"
                  className={`px-6 py-4 font-semibold text-sm whitespace-nowrap transition-all ${
                    'overview' === tab.id 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => {}}
                >
                  <span className="mr-2">📊</span>
                  {tab.label}
                </Button>
              ))}
            </div>
            
            {/* Tab Content */}
            <CardContent className="p-6">
              {/* Overview Tab */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
                  Video Overview
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Duration Analysis",
                      icon: FaClock,
                      color: "from-pink-500/10 to-pink-500/5",
                      items: [
                        { label: "Total Duration", value: videoData.duration },
                        { label: "Optimal Range", value: "✓ 15-30s" },
                        { label: "Retention Rate", value: "87%" }
                      ]
                    },
                    {
                      title: "Hook Analysis",
                      icon: FaFish,
                      color: "from-blue-500/10 to-blue-500/5",
                      items: [
                        { label: "Hook Type", value: "Visual Pattern" },
                        { label: "Strength", value: "Strong" },
                        { label: "Hook Duration", value: "3 seconds" }
                      ]
                    },
                    {
                      title: "Content Pace",
                      icon: FaClock,
                      color: "from-green-500/10 to-green-500/5",
                      items: [
                        { label: "Overall Pace", value: "Fast" },
                        { label: "Scene Changes", value: "8 cuts" },
                        { label: "Engagement", value: "High" }
                      ]
                    },
                    {
                      title: "Call to Action",
                      icon: FaBullhorn,
                      color: "from-purple-500/10 to-purple-500/5",
                      items: [
                        { label: "CTA Present", value: "✓ Yes" },
                        { label: "CTA Type", value: "Follow for More" },
                        { label: "Timing", value: "End of Video" }
                      ]
                    }
                  ].map((section, index) => {
                    const Icon = section.icon;
                    return (
                      <Card key={index} className={`bg-gradient-to-br ${section.color} rounded-2xl border-0`}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-gray-900">{section.title}</h3>
                            <Icon className="h-5 w-5 text-blue-500" />
                          </div>
                          <div className="space-y-3">
                            {section.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex justify-between">
                                <span className="text-gray-600">{item.label}</span>
                                <span className="font-semibold">{item.value}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
                
                {/* Performance Prediction */}
                <Card className="bg-gradient-to-r from-yellow-500/10 to-pink-500/10 rounded-2xl border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Prediction</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { label: "Viral Potential", value: `${videoData.viralScore}%`, color: "from-green-500 to-blue-500" },
                        { label: "Engagement Rate", value: "87%", color: "from-pink-500 to-purple-500" },
                        { label: "Share Probability", value: "76%", color: "from-yellow-500 to-green-500" }
                      ].map((item, index) => (
                        <div key={index} className="text-center">
                          <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                            <span className="text-white text-xl">📊</span>
                          </div>
                          <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                          <div className="text-sm text-gray-600">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Export CTA */}
      <div className="text-center mt-8">
        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:to-purple-700 shadow-xl">
          <FaDownload className="h-5 w-5 mr-3" />
          Export All Ideas
        </Button>
        <p className="text-gray-600 text-sm mt-3">Export to Notion, Google Docs, or CSV format</p>
      </div>
    </div>
  );
}