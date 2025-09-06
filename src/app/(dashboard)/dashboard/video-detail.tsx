'use client';

import { useState } from 'react';
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

export default function VideoDetailPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (sectionId: string) => {
    setOpenAccordion(openAccordion === sectionId ? null : sectionId);
  };

  // Mock data for the video analysis
  const videoData = {
    title: "Dance Tutorial Breakdown",
    duration: "24 seconds",
    viralScore: 94,
    thumbnail: "https://storage.googleapis.com/uxpilot-auth.appspot.com/dc6344f01b-a588851a551c992b0096.png"
  };

  const sceneTimeline = [
    { id: 'hook', title: 'Hook', duration: '0-3s', color: 'bg-pink-500' },
    { id: 'value', title: 'Value', duration: '3-18s', color: 'bg-green-500' },
    { id: 'cta', title: 'CTA', duration: '18-24s', color: 'bg-purple-500' }
  ];

  const quickStats = [
    { label: "Viral Score", value: "94%" },
    { label: "Ideas Generated", value: "12" }
  ];

  const overviewData = [
    {
      title: "Duration Analysis",
      icon: FaClock,
      color: "from-pink-500/10 to-pink-500/5",
      items: [
        { label: "Total Duration", value: "24 seconds" },
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
  ];

  const performancePrediction = [
    { label: "Viral Potential", value: "94%", icon: "eye", color: "from-green-500 to-blue-500" },
    { label: "Engagement Rate", value: "87%", icon: "heart", color: "from-pink-500 to-purple-500" },
    { label: "Share Probability", value: "76%", icon: "share", color: "from-yellow-500 to-green-500" }
  ];

  const structureSections = [
    {
      id: 'hook-section',
      title: 'Hook Section (0-3s)',
      description: 'Opening visual pattern that grabs attention',
      icon: FaFish,
      color: 'bg-pink-500',
      currentStructure: 'Quick dance moves with upbeat music to immediately capture attention.',
      tags: [
        { label: 'Strong Hook', color: 'bg-green-500' },
        { label: 'Visual Appeal', color: 'bg-blue-500' }
      ],
      suggestions: [
        'Add text overlay: "POV: Learning this dance in 24 seconds"',
        'Start with failed attempt, then perfect execution',
        'Use trending sound for maximum reach'
      ]
    },
    {
      id: 'value-section',
      title: 'Value Section (3-18s)',
      description: 'Main content delivering the promised value',
      icon: FaGem,
      color: 'bg-green-500',
      currentStructure: 'Step-by-step dance tutorial with clear movements and rhythm.',
      tags: [
        { label: 'Educational', color: 'bg-green-500' },
        { label: 'Easy to Follow', color: 'bg-blue-500' }
      ],
      suggestions: [
        'Break down into 3 simple steps with text labels',
        'Add slow-motion replay of difficult moves',
        'Include common mistakes to avoid'
      ]
    },
    {
      id: 'cta-section',
      title: 'CTA Section (18-24s)',
      description: 'Call-to-action to drive engagement',
      icon: FaBullhorn,
      color: 'bg-purple-500',
      currentStructure: 'Simple "follow for more" with final dance pose.',
      tags: [
        { label: 'Basic CTA', color: 'bg-yellow-500' }
      ],
      suggestions: [
        'Add "Try this and tag me!" for user-generated content',
        '"Which step was hardest? Comment below!"',
        '"Save this for later practice sessions"'
      ]
    }
  ];

  const marketingIdeas = [
    {
      title: 'Before/After Hook',
      tag: { label: 'Trending', color: 'bg-pink-500' },
      hookOptions: [
        '"POV: Me before vs after watching this tutorial"',
        '"24 seconds that changed my dance game forever"'
      ],
      structure: [
        '0-3s: Show "before" attempt (messy)',
        '3-18s: Tutorial breakdown',
        '18-24s: Show "after" (perfect execution)'
      ],
      caption: '"From zero to hero in 24 seconds! 💃 Which move gave you trouble? Drop a 🔥 if you nailed it on the first try!"',
      hashtags: '#DanceTutorial #LearnOnTikTok #DanceChallenge #QuickTutorial #DanceSkills'
    },
    {
      title: 'Challenge Format',
      tag: { label: 'Viral Potential', color: 'bg-blue-500' },
      hookOptions: [
        '"Can you learn this dance in 24 seconds? Let\'s see!"',
        '"24-second dance challenge - are you up for it?"'
      ],
      structure: [
        '0-3s: Challenge announcement',
        '3-18s: Step-by-step tutorial',
        '18-24s: "Your turn! Tag me!"'
      ],
      caption: '"The 24-second dance challenge is here! 🕺 Can you master all the moves? Tag 3 friends who need to try this!"',
      hashtags: '#24SecondChallenge #DanceChallenge #TikTokChallenge #ViralDance #ChallengeAccepted'
    },
    {
      title: 'Educational Angle',
      tag: { label: 'High Retention', color: 'bg-green-500' },
      hookOptions: [
        '"3 dance mistakes everyone makes (and how to fix them)"',
        '"Dance teacher explains the secret to smooth moves"'
      ],
      structure: [
        '0-3s: Educational hook',
        '3-18s: Teaching with explanations',
        '18-24s: Practice encouragement'
      ],
      caption: '"As a dance teacher, I see these mistakes daily! 💯 Master these basics and your flow will improve instantly. What\'s your biggest dance struggle?"',
      hashtags: '#DanceTips #LearnToDance #DanceTeacher #DanceBasics #EducationalContent'
    },
    {
      title: 'Trending Sound',
      tag: { label: 'Algorithm Boost', color: 'bg-yellow-500' },
      hookOptions: [
        '"This sound is everywhere - here\'s the perfect dance!"',
        '"POV: Finally found the dance for this trending sound"'
      ],
      structure: [
        '0-3s: Sound recognition hook',
        '3-18s: Dance that matches the beat',
        '18-24s: Encourage use of sound'
      ],
      caption: '"When you hear this sound, you HAVE to do this dance! 🎵 It\'s literally perfect for the beat. Use this sound and show me your version!"',
      hashtags: '#TrendingSound #ViralSound #DanceToThis #TikTokTrend #MustTryDance'
    }
  ];

  const checklistItems = [
    {
      title: 'Editing Techniques',
      icon: FaScissors,
      color: 'text-pink-500',
      items: [
        { label: 'Cut every 1.5-2 seconds to maintain attention', checked: true },
        { label: 'Use jump cuts for energy and pace', checked: true },
        { label: 'Add slow-motion for complex moves', checked: false },
        { label: 'Include close-ups of footwork', checked: false },
        { label: 'Use transitions between different angles', checked: false }
      ]
    },
    {
      title: 'Text & Graphics',
      icon: FaFont,
      color: 'text-blue-500',
      items: [
        { label: 'Bold, readable captions throughout', checked: true },
        { label: 'Number each step (1, 2, 3)', checked: false },
        { label: 'Add arrows for direction cues', checked: false },
        { label: 'Use contrasting colors for text', checked: false },
        { label: 'Include "SAVE" reminder at the end', checked: false }
      ]
    },
    {
      title: 'Audio & Music',
      icon: FaVolumeHigh,
      color: 'text-green-500',
      items: [
        { label: 'Use trending or upbeat music', checked: true },
        { label: 'Sync moves with beat drops', checked: false },
        { label: 'Add sound effects for emphasis', checked: false },
        { label: 'Ensure audio levels are consistent', checked: false },
        { label: 'Fade in/out for smooth transitions', checked: false }
      ]
    },
    {
      title: 'Optimization Tips',
      icon: FaRocket,
      color: 'text-purple-500',
      items: [
        { label: 'Keep first 3 seconds captivating', checked: true },
        { label: 'End with clear call-to-action', checked: false },
        { label: 'Use vertical 9:16 aspect ratio', checked: false },
        { label: 'Export in high quality (1080p+)', checked: false },
        { label: 'Test on mobile before posting', checked: false }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" className="rounded-full">
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
                    {sceneTimeline.map((item, index) => (
                      <div 
                        key={item.id}
                        className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 ${item.color} rounded-full border-2 border-white`}
                        style={{ left: `${index * 50}%` }}
                      ></div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {sceneTimeline.map((item) => (
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
                {quickStats.map((stat, index) => (
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
                { id: 'overview', label: 'Overview', icon: 'chart-pie' },
                { id: 'structure', label: 'Structure Outline', icon: 'list-ol' },
                { id: 'marketing', label: 'Marketing Ideas', icon: 'lightbulb' },
                { id: 'checklist', label: 'Editing Checklist', icon: 'check-square' }
              ].map((tab) => (
                <Button
                  key={tab.id}
                  variant="ghost"
                  className={`px-6 py-4 font-semibold text-sm whitespace-nowrap transition-all ${
                    activeTab === tab.id 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="mr-2">📊</span> {/* Placeholder for icons */}
                  {tab.label}
                </Button>
              ))}
            </div>
            
            {/* Tab Content */}
            <CardContent className="p-6">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
                    Video Overview
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {overviewData.map((section, index) => {
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
                        {performancePrediction.map((item, index) => (
                          <div key={index} className="text-center">
                            <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                              <span className="text-white text-xl">📊</span> {/* Placeholder for icons */}
                            </div>
                            <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                            <div className="text-sm text-gray-600">{item.label}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
              
              {/* Structure Outline Tab */}
              {activeTab === 'structure' && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
                    Structure Outline
                  </h2>
                  
                  <div className="space-y-4">
                    {structureSections.map((section) => {
                      const Icon = section.icon;
                      return (
                        <Card 
                          key={section.id} 
                          className={`bg-gradient-to-r ${section.color.replace('bg', 'from').replace('-500', '-500/10')} to-${section.color.replace('bg', '').replace('-500', '-500/5')} rounded-2xl border-0 overflow-hidden`}
                        >
                          <Button
                            variant="ghost"
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors"
                            onClick={() => toggleAccordion(section.id)}
                          >
                            <div className="flex items-center space-x-4">
                              <div className={`w-12 h-12 ${section.color} rounded-xl flex items-center justify-center`}>
                                <Icon className="h-6 w-6 text-white" />
                              </div>
                              <div>
                                <h3 className="font-bold text-gray-900">{section.title}</h3>
                                <p className="text-gray-600 text-sm">{section.description}</p>
                              </div>
                            </div>
                            <FaChevronDown 
                              className={`h-5 w-5 text-gray-400 transition-transform ${
                                openAccordion === section.id ? 'rotate-180' : ''
                              }`} 
                            />
                          </Button>
                          
                          {openAccordion === section.id && (
                            <div className="px-6 pb-6">
                              <Card className="bg-white rounded-xl border-0 mb-4">
                                <CardContent className="p-4">
                                  <h4 className="font-semibold text-gray-900 mb-2">Current Structure:</h4>
                                  <p className="text-gray-600 text-sm mb-3">{section.currentStructure}</p>
                                  <div className="flex flex-wrap gap-2">
                                    {section.tags.map((tag, tagIndex) => (
                                      <span 
                                        key={tagIndex} 
                                        className={`${tag.color} text-white text-xs px-2 py-1 rounded-full`}
                                      >
                                        {tag.label}
                                      </span>
                                    ))}
                                  </div>
                                </CardContent>
                              </Card>
                              
                              <Card className={`${section.color.replace('bg', 'bg').replace('-500', '-500/10')} rounded-xl border-0`}>
                                <CardContent className="p-4">
                                  <h4 className="font-semibold text-gray-900 mb-2">💡 AI Suggestions:</h4>
                                  <ul className="text-sm text-gray-600 space-y-1">
                                    {section.suggestions.map((suggestion, sIndex) => (
                                      <li key={sIndex}>• {suggestion}</li>
                                    ))}
                                  </ul>
                                </CardContent>
                              </Card>
                            </div>
                          )}
                        </Card>
                      );
                    })}
                  </div>
                </div>
              )}
              
              {/* Marketing Ideas Tab */}
              {activeTab === 'marketing' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
                    Marketing Ideas
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {marketingIdeas.map((idea, index) => (
                      <Card 
                        key={index} 
                        className={`bg-gradient-to-br from-${idea.tag.color.replace('bg-', '')}/10 to-${idea.tag.color.replace('bg-', '')}/5 rounded-2xl border-0 hover:shadow-xl transition-shadow`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-gray-900">{idea.title}</h3>
                            <span className={`${idea.tag.color} text-white text-xs px-2 py-1 rounded-full`}>
                              {idea.tag.label}
                            </span>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">🎯 Hook Options:</h4>
                              <div className="space-y-2">
                                {idea.hookOptions.map((option, optIndex) => (
                                  <div key={optIndex} className="bg-white/70 rounded-lg p-3 text-sm">
                                    {option}
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">📝 Structure:</h4>
                              <div className="space-y-1 text-sm text-gray-600">
                                {idea.structure.map((step, stepIndex) => (
                                  <div key={stepIndex}>{step}</div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">💬 Caption:</h4>
                              <div className="bg-white/70 rounded-lg p-3 text-sm">
                                {idea.caption}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">#️⃣ Hashtags:</h4>
                              <div className={`text-sm ${idea.tag.color}`}>
                                {idea.hashtags}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Editing Checklist Tab */}
              {activeTab === 'checklist' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
                    Editing Checklist
                  </h2>
                  
                  <Card className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl border-0">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {checklistItems.map((section, index) => {
                          const Icon = section.icon;
                          return (
                            <div key={index}>
                              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                <Icon className={`h-5 w-5 ${section.color} mr-2`} />
                                {section.title}
                              </h3>
                              <div className="space-y-3">
                                {section.items.map((item, itemIndex) => (
                                  <label key={itemIndex} className="flex items-start space-x-3 cursor-pointer">
                                    <input 
                                      type="checkbox" 
                                      className={`mt-1 rounded border-${section.color.replace('text-', '')} text-${section.color.replace('text-', '')} focus:ring-${section.color.replace('text-', '')}`}
                                      defaultChecked={item.checked}
                                    />
                                    <span className="text-sm text-gray-700">{item.label}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="mt-8 pt-6 border-t border-white/50">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-gray-700">Checklist Progress</span>
                          <span className="text-sm font-bold text-green-500">30%</span>
                        </div>
                        <div className="w-full bg-white/70 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-500" 
                            style={{ width: '30%' }}
                          ></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
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