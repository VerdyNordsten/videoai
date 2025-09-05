'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import VideoPlayer from './video-player';
import TabNavigation from './tab-navigation';
import OverviewTab from './overview-tab';
import StructureTab from './structure-tab';
import MarketingTab from './marketing-tab';
import ChecklistTab from './checklist-tab';
import ExportSection from './export-section';

interface VideoData {
  id: number;
  title: string;
  duration: string;
  viralScore: number;
  thumbnail: string;
}

export default function VideoDetailPage({ videoData }: { videoData: VideoData }) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-6">
      <VideoPlayer videoData={videoData} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          {/* Video player and timeline will be moved to video-player.tsx */}
        </div>
        
        <div className="lg:col-span-2">
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          
          <div className="p-6">
            {activeTab === 'overview' && <OverviewTab videoData={videoData} />}
            {activeTab === 'structure' && <StructureTab />}
            {activeTab === 'marketing' && <MarketingTab />}
            {activeTab === 'checklist' && <ChecklistTab />}
          </div>
        </div>
      </div>
      
      <ExportSection />
    </div>
  );
}