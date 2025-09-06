'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Food Content Creator",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
      rating: 5,
      content: "This tool literally 10x'd my content ideas! I went from struggling with hooks to having a library of viral-ready concepts. My engagement went up 300% in just 2 months!",
      stat: "2.3M followers gained",
      statIcon: "📈",
      statColor: "text-green-500"
    },
    {
      name: "Marcus Rodriguez",
      role: "Fitness Influencer",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
      rating: 5,
      content: "The AI predictions are scary accurate! It told me exactly which of my videos would go viral before I even posted them. Now I create content with confidence.",
      stat: "15 viral videos predicted",
      statIcon: "🔥",
      statColor: "text-pink-500"
    },
    {
      name: "Emma Thompson",
      role: "Beauty & Lifestyle",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
      rating: 5,
      content: "As a busy entrepreneur, I don't have time to analyze trends manually. This AI does it all for me and suggests content that actually converts to sales!",
      stat: "$50K+ revenue generated",
      statIcon: "💰",
      statColor: "text-yellow-500"
    },
    {
      name: "David Kim",
      role: "Tech Reviewer",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
      rating: 5,
      content: "The hook generator alone is worth the subscription. I've never had so many creative angles for the same topic. My content feels fresh and engaging again!",
      stat: "500+ hooks generated",
      statIcon: "💡",
      statColor: "text-blue-500"
    },
    {
      name: "Lisa Park",
      role: "Travel Creator",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
      rating: 5,
      content: "Game changer for my travel content! The AI understands different niches and gives me location-specific hooks that resonate with my audience perfectly.",
      stat: "25 countries covered",
      statIcon: "🌍",
      statColor: "text-purple-500"
    },
    {
      name: "Alex Johnson",
      role: "Marketing Agency",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
      rating: 5,
      content: "We use this for all our clients' content strategies. The batch processing feature saves us 20+ hours per week, and the results speak for themselves!",
      stat: "50+ clients served",
      statIcon: "👥",
      statColor: "text-green-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-6">
            What Creators Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of content creators who've transformed their marketing with our AI insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <img src={testimonial.avatar} className="w-16 h-16 rounded-full mr-4" alt={testimonial.name} />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <div className="flex text-yellow-400 text-sm mt-1">
                      {'★'.repeat(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">{testimonial.statIcon}</span>
                  <span>{testimonial.stat}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;