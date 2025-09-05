'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Calendar, Play } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 mb-6">
          Ready to Transform Your Content?
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Join thousands of creators who've already revolutionized their content strategy with AI-powered insights. Start your free trial today and see the difference intelligent analysis can make.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-6 rounded-full font-bold text-lg">
            <Rocket className="mr-2 h-5 w-5" /> Start Free Trial
          </Button>
          <Button variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-6 rounded-full font-semibold text-lg">
            <Calendar className="mr-2 h-5 w-5" /> Book a Demo
          </Button>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button variant="ghost" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-6 rounded-full font-semibold text-lg">
            <Play className="mr-2 h-5 w-5" /> Watch Tutorial
          </Button>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span>Free 14-day trial</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;