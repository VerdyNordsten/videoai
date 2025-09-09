'use client';

import React from 'react';
import HeaderSection from './components/header-section';
import UploadSection from './components/upload-section';
import UploadQueueSection from './components/upload-queue-section';
import AnalysisResultsSection from './components/analysis-results-section';
import EmptyStateSection from './components/empty-state-section';
import QuickActionsSection from './components/quick-actions-section';
import AiTipsSection from './components/ai-tips-section';
import ActivitySection from './components/activity-section';

export default function AIVideosPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      <HeaderSection />
      <UploadSection />
      <UploadQueueSection />
      <AnalysisResultsSection />
      <EmptyStateSection />
      <QuickActionsSection />
      <AiTipsSection />
      <ActivitySection />
    </div>
  );
}