'use client';

import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';

export function SocialLoginButtons() {
  return (
    <div className="grid grid-cols-1 gap-4 mb-8">
      <Button
        variant="outline"
        className="flex items-center justify-center py-3 px-4 rounded-xl border-2 border-blue-200/30 bg-white hover:border-blue-400 hover:bg-blue-400/5 transition-all hover:scale-105 dark:border-blue-800/30 dark:bg-gray-800 dark:hover:border-blue-600 dark:hover:bg-blue-900/20"
      >
        <FcGoogle className="mr-2 h-5 w-5" />
        <span className="font-semibold text-foreground dark:text-white">Continue with Google</span>
      </Button>
    </div>
  );
}