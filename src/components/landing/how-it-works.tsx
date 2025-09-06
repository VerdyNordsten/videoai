'use client';

import React from 'react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { cn } from '@/lib/utils';
import { FaUpload, FaBrain, FaLightbulb, FaBolt } from 'react-icons/fa6';

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const steps = [
  {
    icon: <FaUpload className="h-5 w-5" />,
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
    icon: <FaBrain className="h-5 w-5" />,
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
    icon: <FaLightbulb className="h-5 w-5" />,
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
    icon: <FaBolt className="h-5 w-5" />,
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

const GridItem = ({ area, icon, title, description, features }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-gray-500">
                <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                </span>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-6">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Transform your short-form content into marketing gold with our AI-powered analysis in just four simple steps
          </p>
        </div>
        
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-2 lg:gap-4">
          <GridItem
            area="md:[grid-area:1/1/2/7]"
            icon={steps[0].icon}
            title={steps[0].title}
            description={steps[0].description}
            features={steps[0].features}
          />
          <GridItem
            area="md:[grid-area:1/7/2/13]"
            icon={steps[2].icon}
            title={steps[2].title}
            description={steps[2].description}
            features={steps[2].features}
          />
          <GridItem
            area="md:[grid-area:2/1/3/7]"
            icon={steps[1].icon}
            title={steps[1].title}
            description={steps[1].description}
            features={steps[1].features}
          />
          <GridItem
            area="md:[grid-area:2/7/3/13]"
            icon={steps[3].icon}
            title={steps[3].title}
            description={steps[3].description}
            features={steps[3].features}
          />
        </ul>
      </div>
    </section>
  );
};

export default HowItWorks;