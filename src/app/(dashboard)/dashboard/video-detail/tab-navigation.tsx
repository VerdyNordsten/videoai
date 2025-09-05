'use client';

import { Button } from '@/components/ui/button';

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function TabNavigation({ activeTab, setActiveTab }: TabNavigationProps) {
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'structure', label: 'Structure Outline' },
    { id: 'marketing', label: 'Marketing Ideas' },
    { id: 'checklist', label: 'Editing Checklist' }
  ];

  return (
    <div className="flex overflow-x-auto border-b border-gray-100">
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          variant="ghost"
          className={`px-6 py-4 font-semibold text-sm whitespace-nowrap transition-all ${
            activeTab === tab.id 
              ? 'text-blue-600 border-b-2 border-blue-600' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          <span className="mr-2">📊</span>
          {tab.label}
        </Button>
      ))}
    </div>
  );
}