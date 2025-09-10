'use client';

import React from 'react';
import DashboardLayout from '../components/dashboard-layout';
import WelcomeSection from '../components/welcome-section';
import StatsSection from '../components/stats-section';
import AIGeneratorSection from '../components/ai-generator-section';
import RecentProjectsSection from '../components/recent-projects-section';
import TemplateLibrarySection from '../components/template-library-section';
import AnalyticsSection from '../components/analytics-section';
import LearningResourcesSection from '../components/learning-resources-section';
import QuickActionsSection from '../components/quick-actions-section';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 md:space-y-8">
        <WelcomeSection />
        <StatsSection />
        <AIGeneratorSection />
        <RecentProjectsSection />
        <TemplateLibrarySection />
        <AnalyticsSection />
        <LearningResourcesSection />
        <QuickActionsSection />
      </div>
    </DashboardLayout>
  );
}