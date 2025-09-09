'use client';

import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Header from './components/header';
import WelcomeSection from './components/welcome-section';
import StatsSection from './components/stats-section';
import AIGeneratorSection from './components/ai-generator-section';
import RecentProjectsSection from './components/recent-projects-section';
import TemplateLibrarySection from './components/template-library-section';
import AnalyticsSection from './components/analytics-section';
import LearningResourcesSection from './components/learning-resources-section';
import QuickActionsSection from './components/quick-actions-section';

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background font-sans">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className={`flex-1 flex flex-col ${sidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300 lg:ml-64`}>
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
        <main id="main-content" className="flex-1 pt-20 p-6">
          <div className="space-y-8">
            <WelcomeSection />
            <StatsSection />
            <AIGeneratorSection />
            <RecentProjectsSection />
            <TemplateLibrarySection />
            <AnalyticsSection />
            <LearningResourcesSection />
            <QuickActionsSection />
          </div>
        </main>
      </div>
    </div>
  );
}