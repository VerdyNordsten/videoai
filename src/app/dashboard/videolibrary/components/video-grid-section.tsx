'use client';

import React, { useState } from 'react';
import VideoCard from './video-card';

export default function VideoGridSection() {
  const [videos] = useState([
    {
      id: 1,
      thumbnail: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/eaa5b569ba-c6ba8621eb1cd395496e.png',
      platform: 'TikTok',
      platformColor: 'red-500',
      duration: '0:45',
      title: 'Summer Collection Launch',
      tags: ['Fashion', 'Trending'],
      videoLength: '0:45',
      language: 'English',
      createdAt: '2 days ago',
      hook: "This $20 dress went viral for a reason and you won't believe what happened next...",
      caption: "Summer vibes are here! Check out our latest collection that's taking social media by storm. From casual to chic, we've got everything you need...",
      exports: 3,
      analyzedAt: '2d ago',
      expiration: 'D-25',
      expirationColor: 'accent2'
    },
    {
      id: 2,
      thumbnail: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/d8cb9d8be4-af63841412dc31a216f8.png',
      platform: 'LinkedIn',
      platformColor: 'blue-600',
      duration: '2:15',
      title: 'Client Success Stories Q3',
      tags: ['Testimonials', 'B2B'],
      videoLength: '2:15',
      language: 'English',
      createdAt: '5 hours ago',
      hook: "How we helped 3 companies grow 300% in just 6 months - the strategy that changed everything...",
      caption: "Real results from real clients. Here's how we transformed their business with our proven methodology and strategic approach...",
      exports: 7,
      analyzedAt: '5h ago',
      expiration: 'D-28',
      expirationColor: 'accent2'
    },
    {
      id: 3,
      thumbnail: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/d4b3aba8f8-512103763c56ad1b6952.png',
      platform: 'YouTube',
      platformColor: 'red-600',
      duration: '3:42',
      title: 'How to Use Our New Feature',
      tags: ['Tutorial', 'SaaS'],
      videoLength: '3:42',
      language: 'English',
      createdAt: '1 day ago',
      hook: "This feature will change how you work forever - see the transformation in just 3 minutes...",
      caption: "Step-by-step guide to our latest update that's revolutionizing productivity. Master this in under 4 minutes...",
      exports: 12,
      analyzedAt: '1d ago',
      expiration: 'D-5',
      expirationColor: 'danger'
    },
    {
      id: 4,
      thumbnail: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/151cb5c6cf-5cb6a0b357bfdfaa8bb8.png',
      platform: 'Instagram',
      platformColor: 'pink-500',
      duration: '0:30',
      title: 'Behind the Scenes: Office Tour',
      tags: ['Brand', 'Culture'],
      videoLength: '0:30',
      language: 'English',
      createdAt: '3 days ago',
      hook: "Ever wondered what our office looks like? You'll be surprised by what we found...",
      caption: "Take a peek behind the scenes at our creative workspace where magic happens every day...",
      exports: 1,
      analyzedAt: '3d ago',
      expiration: 'D-27',
      expirationColor: 'accent2'
    },
    {
      id: 5,
      thumbnail: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/b673f14c0a-7e20a271e8c845d19815.png',
      platform: 'TikTok',
      platformColor: 'red-500',
      duration: '1:20',
      title: '5-Minute Healthy Recipe',
      tags: ['Food', 'Recipe'],
      videoLength: '1:20',
      language: 'English',
      createdAt: '1 week ago',
      hook: "This recipe broke the internet and made everyone's kitchen smell amazing in just 5 minutes...",
      caption: "Quick, healthy, and absolutely delicious - this viral recipe will change your meal prep game forever...",
      exports: 25,
      analyzedAt: '1w ago',
      expiration: 'D-23',
      expirationColor: 'accent2'
    },
    {
      id: 6,
      thumbnail: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/57a63056cd-56d57e8a0ff2d340ac86.png',
      platform: 'LinkedIn',
      platformColor: 'blue-600',
      duration: '4:15',
      title: 'Q4 Business Strategy Update',
      tags: ['Business', 'Strategy'],
      videoLength: '4:15',
      language: 'English',
      createdAt: '2 weeks ago',
      hook: "Our biggest quarter yet - here's how we achieved 400% growth and what's coming next...",
      caption: "Sharing our Q4 strategy and key insights that drove unprecedented results. The roadmap ahead...",
      exports: 8,
      analyzedAt: '2w ago',
      expiration: 'D-16',
      expirationColor: 'accent2'
    }
  ]);

  return (
    <section id="video-grid" className="mb-8">
      <div className="space-y-4">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-8">
        <button className="bg-surface border border-gray-200 text-gray-700 font-medium px-8 py-3 rounded-xl hover:bg-gray-50 btn-hover">
          Load More Videos
        </button>
      </div>
    </section>
  );
}