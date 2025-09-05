'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Fish, 
  Gem, 
  Megaphone, 
  ChevronDown
} from 'lucide-react';

export default function StructureTab() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (sectionId: string) => {
    setOpenAccordion(openAccordion === sectionId ? null : sectionId);
  };

  const structureSections = [
    {
      id: 'hook-section',
      title: 'Hook Section (0-3s)',
      description: 'Opening visual pattern that grabs attention',
      icon: Fish,
      color: 'bg-pink-500',
      currentStructure: 'Quick dance moves with upbeat music to immediately capture attention.',
      tags: [
        { label: 'Strong Hook', color: 'bg-green-500' },
        { label: 'Visual Appeal', color: 'bg-blue-500' }
      ],
      suggestions: [
        'Add text overlay: "POV: Learning this dance in 24 seconds"',
        'Start with failed attempt, then perfect execution',
        'Use trending sound for maximum reach'
      ]
    },
    {
      id: 'value-section',
      title: 'Value Section (3-18s)',
      description: 'Main content delivering the promised value',
      icon: Gem,
      color: 'bg-green-500',
      currentStructure: 'Step-by-step dance tutorial with clear movements and rhythm.',
      tags: [
        { label: 'Educational', color: 'bg-green-500' },
        { label: 'Easy to Follow', color: 'bg-blue-500' }
      ],
      suggestions: [
        'Break down into 3 simple steps with text labels',
        'Add slow-motion replay of difficult moves',
        'Include common mistakes to avoid'
      ]
    },
    {
      id: 'cta-section',
      title: 'CTA Section (18-24s)',
      description: 'Call-to-action to drive engagement',
      icon: Megaphone,
      color: 'bg-purple-500',
      currentStructure: 'Simple "follow for more" with final dance pose.',
      tags: [
        { label: 'Basic CTA', color: 'bg-yellow-500' }
      ],
      suggestions: [
        'Add "Try this and tag me!" for user-generated content',
        '"Which step was hardest? Comment below!"',
        '"Save this for later practice sessions"'
      ]
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
        Structure Outline
      </h2>
      
      <div className="space-y-4">
        {structureSections.map((section) => {
          const Icon = section.icon;
          return (
            <Card 
              key={section.id} 
              className={`bg-gradient-to-r ${section.color.replace('bg', 'from').replace('-500', '-500/10')} to-${section.color.replace('bg', '').replace('-500', '-500/5')} rounded-2xl border-0 overflow-hidden`}
            >
              <Button
                variant="ghost"
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors"
                onClick={() => toggleAccordion(section.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${section.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{section.title}</h3>
                    <p className="text-gray-600 text-sm">{section.description}</p>
                  </div>
                </div>
                <ChevronDown 
                  className={`h-5 w-5 text-gray-400 transition-transform ${
                    openAccordion === section.id ? 'rotate-180' : ''
                  }`} 
                />
              </Button>
              
              {openAccordion === section.id && (
                <div className="px-6 pb-6">
                  <Card className="bg-white rounded-xl border-0 mb-4">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Current Structure:</h4>
                      <p className="text-gray-600 text-sm mb-3">{section.currentStructure}</p>
                      <div className="flex flex-wrap gap-2">
                        {section.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className={`${tag.color} text-white text-xs px-2 py-1 rounded-full`}
                          >
                            {tag.label}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className={`${section.color.replace('bg', 'bg').replace('-500', '-500/10')} rounded-xl border-0`}>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">💡 AI Suggestions:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {section.suggestions.map((suggestion, sIndex) => (
                          <li key={sIndex}>• {suggestion}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}