'use client';

import React from 'react';
import Sidebar from './components/sidebar';
import Header from './components/header';
import WelcomeSection from './components/welcome-section';
import StatsSection from './components/stats-section';
import AIGeneratorSection from './components/ai-generator-section';
import RecentProjectsSection from './components/recent-projects-section';
import TemplateLibrarySection from './components/template-library-section';
import AnalyticsSection from './components/analytics-section';
import TeamCollaborationSection from './components/team-collaboration-section';
import LearningResourcesSection from './components/learning-resources-section';
import QuickActionsSection from './components/quick-actions-section';
import MobileNavigation from './components/mobile-navigation';

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-background font-sans">
      <Sidebar />
      
      <div className="flex-1 flex flex-col ml-64">
        <Header />
        
        <main id="main-content" className="flex-1 pt-20 p-6 overflow-y-auto">
          <div className="space-y-8">
            <WelcomeSection />
            <StatsSection />
            <AIGeneratorSection />
            <RecentProjectsSection />
            <TemplateLibrarySection />
            <AnalyticsSection />
            <TeamCollaborationSection />
            <LearningResourcesSection />
            <QuickActionsSection />
          </div>
        </main>
      </div>
      
      <MobileNavigation />
    </div>
  );
}