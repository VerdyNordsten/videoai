'use client';

import { Card, CardContent } from '@/components/ui/card';

export default function MarketingTab() {
  const marketingIdeas = [
    {
      title: 'Before/After Hook',
      tag: { label: 'Trending', color: 'bg-pink-500' },
      hookOptions: [
        '"POV: Me before vs after watching this tutorial"',
        '"24 seconds that changed my dance game forever"'
      ],
      structure: [
        '0-3s: Show "before" attempt (messy)',
        '3-18s: Tutorial breakdown',
        '18-24s: Show "after" (perfect execution)'
      ],
      caption: '"From zero to hero in 24 seconds! 💃 Which move gave you trouble? Drop a 🔥 if you nailed it on the first try!"',
      hashtags: '#DanceTutorial #LearnOnTikTok #DanceChallenge #QuickTutorial #DanceSkills'
    },
    {
      title: 'Challenge Format',
      tag: { label: 'Viral Potential', color: 'bg-blue-500' },
      hookOptions: [
        '"Can you learn this dance in 24 seconds? Let\'s see!"',
        '"24-second dance challenge - are you up for it?"'
      ],
      structure: [
        '0-3s: Challenge announcement',
        '3-18s: Step-by-step tutorial',
        '18-24s: "Your turn! Tag me!"'
      ],
      caption: '"The 24-second dance challenge is here! 🕺 Can you master all the moves? Tag 3 friends who need to try this!"',
      hashtags: '#24SecondChallenge #DanceChallenge #TikTokChallenge #ViralDance #ChallengeAccepted'
    },
    {
      title: 'Educational Angle',
      tag: { label: 'High Retention', color: 'bg-green-500' },
      hookOptions: [
        '"3 dance mistakes everyone makes (and how to fix them)"',
        '"Dance teacher explains the secret to smooth moves"'
      ],
      structure: [
        '0-3s: Educational hook',
        '3-18s: Teaching with explanations',
        '18-24s: Practice encouragement'
      ],
      caption: '"As a dance teacher, I see these mistakes daily! 💯 Master these basics and your flow will improve instantly. What\'s your biggest dance struggle?"',
      hashtags: '#DanceTips #LearnToDance #DanceTeacher #DanceBasics #EducationalContent'
    },
    {
      title: 'Trending Sound',
      tag: { label: 'Algorithm Boost', color: 'bg-yellow-500' },
      hookOptions: [
        '"This sound is everywhere - here\'s the perfect dance!"',
        '"POV: Finally found the dance for this trending sound"'
      ],
      structure: [
        '0-3s: Sound recognition hook',
        '3-18s: Dance that matches the beat',
        '18-24s: Encourage use of sound'
      ],
      caption: '"When you hear this sound, you HAVE to do this dance! 🎵 It\'s literally perfect for the beat. Use this sound and show me your version!"',
      hashtags: '#TrendingSound #ViralSound #DanceToThis #TikTokTrend #MustTryDance'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
        Marketing Ideas
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {marketingIdeas.map((idea, index) => (
          <Card 
            key={index} 
            className={`bg-gradient-to-br from-${idea.tag.color.replace('bg-', '')}/10 to-${idea.tag.color.replace('bg-', '')}/5 rounded-2xl border-0 hover:shadow-xl transition-shadow`}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">{idea.title}</h3>
                <span className={`${idea.tag.color} text-white text-xs px-2 py-1 rounded-full`}>
                  {idea.tag.label}
                </span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🎯 Hook Options:</h4>
                  <div className="space-y-2">
                    {idea.hookOptions.map((option, optIndex) => (
                      <div key={optIndex} className="bg-white/70 rounded-lg p-3 text-sm">
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">📝 Structure:</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    {idea.structure.map((step, stepIndex) => (
                      <div key={stepIndex}>{step}</div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">💬 Caption:</h4>
                  <div className="bg-white/70 rounded-lg p-3 text-sm">
                    {idea.caption}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">#️⃣ Hashtags:</h4>
                  <div className={`text-sm ${idea.tag.color}`}>
                    {idea.hashtags}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}