'use client';

import React from 'react';
import HowItWorksStep from '@/components/landing/ui/HowItWorksStep';
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

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-6">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transform your short-form content into marketing gold with our AI-powered analysis in just four simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <HowItWorksStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;