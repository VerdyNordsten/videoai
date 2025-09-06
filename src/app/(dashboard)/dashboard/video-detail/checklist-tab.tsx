'use client';

import { Card, CardContent } from '@/components/ui/card';
import { 
  FaScissors, 
  FaFont, 
  FaVolumeHigh, 
  FaRocket
} from 'react-icons/fa6';

export default function ChecklistTab() {
  const checklistItems = [
    {
      title: 'Editing Techniques',
      icon: FaScissors,
      color: 'text-pink-500',
      items: [
        { label: 'Cut every 1.5-2 seconds to maintain attention', checked: true },
        { label: 'Use jump cuts for energy and pace', checked: true },
        { label: 'Add slow-motion for complex moves', checked: false },
        { label: 'Include close-ups of footwork', checked: false },
        { label: 'Use transitions between different angles', checked: false }
      ]
    },
    {
      title: 'Text & Graphics',
      icon: FaFont,
      color: 'text-blue-500',
      items: [
        { label: 'Bold, readable captions throughout', checked: true },
        { label: 'Number each step (1, 2, 3)', checked: false },
        { label: 'Add arrows for direction cues', checked: false },
        { label: 'Use contrasting colors for text', checked: false },
        { label: 'Include "SAVE" reminder at the end', checked: false }
      ]
    },
    {
      title: 'Audio & Music',
      icon: FaVolumeHigh,
      color: 'text-green-500',
      items: [
        { label: 'Use trending or upbeat music', checked: true },
        { label: 'Sync moves with beat drops', checked: false },
        { label: 'Add sound effects for emphasis', checked: false },
        { label: 'Ensure audio levels are consistent', checked: false },
        { label: 'Fade in/out for smooth transitions', checked: false }
      ]
    },
    {
      title: 'Optimization Tips',
      icon: FaRocket,
      color: 'text-purple-500',
      items: [
        { label: 'Keep first 3 seconds captivating', checked: true },
        { label: 'End with clear call-to-action', checked: false },
        { label: 'Use vertical 9:16 aspect ratio', checked: false },
        { label: 'Export in high quality (1080p+)', checked: false },
        { label: 'Test on mobile before posting', checked: false }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
        Editing Checklist
      </h2>
      
      <Card className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl border-0">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {checklistItems.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index}>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Icon className={`h-5 w-5 ${section.color} mr-2`} />
                    {section.title}
                  </h3>
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <label key={itemIndex} className="flex items-start space-x-3 cursor-pointer">
                        <input 
                          type="checkbox" 
                          className={`mt-1 rounded border-${section.color.replace('text-', '')} text-${section.color.replace('text-', '')} focus:ring-${section.color.replace('text-', '')}`}
                          defaultChecked={item.checked}
                        />
                        <span className="text-sm text-gray-700">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Progress Bar */}
          <div className="mt-8 pt-6 border-t border-white/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">Checklist Progress</span>
              <span className="text-sm font-bold text-green-500">30%</span>
            </div>
            <div className="w-full bg-white/70 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-500" 
                style={{ width: '30%' }}
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}