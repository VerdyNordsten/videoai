'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FaUpload, FaBrain, FaLightbulb, FaBolt } from 'react-icons/fa6';

const steps = [
  {
    icon: FaUpload,
    title: "Upload Video",
    description: "Drop your Reel, TikTok, or YouTube Short directly or paste the link. We support all major platforms.",
    features: [
      "Drag & drop interface",
      "URL link support",
      "Batch processing",
      "Automatic transcription"
    ]
  },
  {
    icon: FaBrain,
    title: "AI Analysis",
    description: "Our advanced AI dissects every frame, analyzing hooks, pacing, structure, and engagement patterns.",
    features: [
      "Hook identification",
      "Pacing analysis",
      "Engagement prediction",
      "Sentiment analysis"
    ]
  },
  {
    icon: FaLightbulb,
    title: "Get Fresh Ideas",
    description: "Receive actionable marketing ideas, hooks, scripts, captions, and hashtags tailored to your content.",
    features: [
      "Custom hooks & scripts",
      "Optimized captions",
      "Trending hashtags",
      "Call-to-action suggestions"
    ]
  },
  {
    icon: FaBolt,
    title: "Implement & Track",
    description: "Apply the insights to your content and track performance with our analytics dashboard.",
    features: [
      "Performance tracking",
      "A/B testing",
      "Engagement metrics",
      "ROI analysis"
    ]
  }
];

const HowItWorksStep = ({ step, index }: { step: typeof steps[0], index: number }) => {
  const Icon = step.icon;
  
  return (
    <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
          <Icon className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-2xl font-bold text-gray-900">{step.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-6">
          {step.description}
        </p>
        <ul className="space-y-2">
          {step.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center text-sm text-gray-500">
              <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default HowItWorksStep;