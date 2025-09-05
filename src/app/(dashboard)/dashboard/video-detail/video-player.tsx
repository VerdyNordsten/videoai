'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2, Play } from 'lucide-react';

interface VideoData {
  id: number;
  title: string;
  duration: string;
  viralScore: number;
  thumbnail: string;
}

export default function VideoPlayer({ videoData }: { videoData: VideoData }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon" className="rounded-full">
            <ArrowLeft className="h-5 w-5 text-blue-500" />
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
            <Share2 className="h-5 w-5 text-yellow-500" />
          </Button>
        </div>
      </div>
    </div>
  );
}