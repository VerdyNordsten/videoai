'use client';

import { Card, CardContent } from '@/components/ui/card';
import { 
  Clock, 
  Fish, 
  Gem, 
  Megaphone
} from 'lucide-react';

interface VideoData {
  id: number;
  title: string;
  duration: string;
  viralScore: number;
  thumbnail: string;
}

export default function OverviewTab({ videoData }: { videoData: VideoData }) {
  const overviewData = [
    {
      title: "Duration Analysis",
      icon: Clock,
      color: "from-pink-500/10 to-pink-500/5",
      items: [
        { label: "Total Duration", value: "24 seconds" },
        { label: "Optimal Range", value: "✓ 15-30s" },
        { label: "Retention Rate", value: "87%" }
      ]
    },
    {
      title: "Hook Analysis",
      icon: Fish,
      color: "from-blue-500/10 to-blue-500/5",
      items: [
        { label: "Hook Type", value: "Visual Pattern" },
        { label: "Strength", value: "Strong" },
        { label: "Hook Duration", value: "3 seconds" }
      ]
    },
    {
      title: "Content Pace",
      icon: Gem,
      color: "from-green-500/10 to-green-500/5",
      items: [
        { label: "Overall Pace", value: "Fast" },
        { label: "Scene Changes", value: "8 cuts" },
        { label: "Engagement", value: "High" }
      ]
    },
    {
      title: "Call to Action",
      icon: Megaphone,
      color: "from-purple-500/10 to-purple-500/5",
      items: [
        { label: "CTA Present", value: "✓ Yes" },
        { label: "CTA Type", value: "Follow for More" },
        { label: "Timing", value: "End of Video" }
      ]
    }
  ];

  const performancePrediction = [
    { label: "Viral Potential", value: "94%", color: "from-green-500 to-blue-500" },
    { label: "Engagement Rate", value: "87%", color: "from-pink-500 to-purple-500" },
    { label: "Share Probability", value: "76%", color: "from-yellow-500 to-green-500" }
  ];

  return (
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
      
      <Card className="bg-gradient-to-r from-yellow-500/10 to-pink-500/10 rounded-2xl border-0">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Prediction</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {performancePrediction.map((item, index) => (
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
  );
}