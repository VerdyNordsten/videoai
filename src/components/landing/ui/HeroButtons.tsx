'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Eye } from 'lucide-react';

const HeroButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-6 rounded-full font-bold text-lg">
        <Play className="mr-2 h-5 w-5" /> Start Free Analysis
      </Button>
      <Button variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-6 rounded-full font-semibold text-lg">
        <Eye className="mr-2 h-5 w-5" /> Watch Demo
      </Button>
    </div>
  );
};

export default HeroButtons;