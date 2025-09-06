'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FaWandMagicSparkles, FaChartLine, FaClock, FaPalette, FaLayerGroup, FaDownload, FaUsers, FaBolt } from 'react-icons/fa6';

const FeaturesShowcase = () => {
  const features = [
    {
      icon: FaWandMagicSparkles,
      title: "AI Hook Generator",
      description: "Generate multiple hook variations that grab attention in the first 3 seconds and boost your engagement rates.",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      icon: FaChartLine,
      title: "Engagement Prediction",
      description: "Predict how well your content will perform before posting with our advanced engagement scoring algorithm.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: FaClock,
      title: "Optimal Timing",
      description: "Discover the perfect pacing and timing for each segment to maximize viewer retention and completion rates.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: FaPalette,
      title: "Brand Style Matching",
      description: "Adapt successful content patterns to match your unique brand voice and visual identity seamlessly.",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: FaLayerGroup,
      title: "Batch Processing",
      description: "Analyze multiple videos at once and get comprehensive insights across your entire content library.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: FaDownload,
      title: "Export Anywhere",
      description: "Export your insights to Notion, Google Docs, CSV, or integrate directly with your favorite tools via API.",
      gradient: "from-teal-500 to-green-600"
    },
    {
      icon: FaUsers,
      title: "Team Collaboration",
      description: "Work together with your team members to analyze content, share insights, and manage projects.",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: FaBolt,
      title: "Real-time Analysis",
      description: "Get instant insights as soon as you upload your video with our lightning-fast processing engine.",
      gradient: "from-red-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-6">
            Powerful Features
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to transform short-form content into marketing success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;