'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FAQ = () => {
  const faqs = [
    {
      question: "How accurate are the AI predictions?",
      answer: "Our AI has been trained on millions of successful short-form videos and achieves an average accuracy rate of 89.4% in predicting engagement patterns. The more you use it, the better it gets at understanding your specific audience and niche."
    },
    {
      question: "Which platforms do you support?",
      answer: "We support all major short-form video platforms including TikTok, Instagram Reels, YouTube Shorts, Facebook Reels, and more. You can upload videos directly or paste links from these platforms."
    },
    {
      question: "Can I export the generated ideas?",
      answer: "Absolutely! Pro and Agency users can export their AI-generated insights to Notion, Google Docs, CSV files, or integrate directly with their favorite tools via our API. This makes it easy to incorporate insights into your existing workflow."
    },
    {
      question: "Is there a limit on video length?",
      answer: "Our platform is optimized for short-form content (15 seconds to 3 minutes). This includes TikToks, Reels, and Shorts. For longer content, we recommend breaking it into shorter segments for analysis."
    },
    {
      question: "Do you offer team collaboration features?",
      answer: "Yes! Our Agency plan includes team collaboration features, allowing multiple team members to work together on content analysis, share insights, and manage projects collectively with role-based permissions."
    },
    {
      question: "What makes your AI different from competitors?",
      answer: "Our AI doesn't just analyze what's popular - it understands the psychology behind viral content. We analyze micro-expressions, pacing, visual elements, and audience psychology to generate truly actionable insights that go beyond basic metrics."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about our AI-powered video analysis platform
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;