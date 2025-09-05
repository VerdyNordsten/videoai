'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Home, ShieldQuestionIcon, Headset, Bug } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-blue-200 rounded-full opacity-25 animate-float-delay-1"></div>
        <div className="absolute bottom-32 left-20 w-28 h-28 bg-green-200 rounded-full opacity-20 animate-float-delay-2"></div>
        <div className="absolute bottom-20 right-32 w-20 h-20 bg-yellow-200 rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-200 rounded-full opacity-25 animate-float-delay-1"></div>
      </div>

      {/* Main 404 Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12 text-center">
        {/* Illustration */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <div className="w-48 h-48 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-2xl">
              {/* Confused Cat with Camera Illustration */}
              <div className="relative">
                {/* Cat Body */}
                <div className="w-20 h-24 bg-gradient-to-b from-yellow-200 to-pink-200 rounded-2xl relative">
                  {/* Cat Head */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-b from-pink-200 to-purple-200 rounded-full">
                    {/* Ears */}
                    <div className="absolute -top-3 left-2 w-4 h-6 bg-purple-200 rounded-t-full transform -rotate-12"></div>
                    <div className="absolute -top-3 right-2 w-4 h-6 bg-purple-200 rounded-t-full transform rotate-12"></div>
                    {/* Eyes */}
                    <div className="absolute top-4 left-3 w-2 h-2 bg-gray-800 rounded-full"></div>
                    <div className="absolute top-4 right-3 w-2 h-2 bg-gray-800 rounded-full"></div>
                    {/* Confused expression */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-800 rounded-full"></div>
                    <div className="absolute top-7 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-gray-800 rounded-full"></div>
                  </div>
                  {/* Arms holding camera */}
                  <div className="absolute top-4 -left-2 w-3 h-8 bg-pink-200 rounded-full transform -rotate-12"></div>
                  <div className="absolute top-4 -right-2 w-3 h-8 bg-pink-200 rounded-full transform rotate-12"></div>
                </div>
                
                {/* Camera */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gray-800 rounded-lg">
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-600 rounded-full">
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-400 rounded-full">
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                {/* Question marks */}
                <div className="absolute -top-12 -right-8 text-2xl text-purple-400 animate-float">?</div>
                <div className="absolute -top-8 -left-6 text-lg text-blue-400 animate-float-delay-1">?</div>
              </div>
            </div>
            
            {/* Floating sparkles */}
            <div className="absolute -top-4 -right-4 text-yellow-400 text-xl animate-float-delay-2">✨</div>
            <div className="absolute -bottom-4 -left-4 text-green-400 text-lg animate-float">⭐</div>
          </div>
        </div>

        {/* 404 Headline */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold gradient-text mb-4 leading-none">
            404
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-400 via-blue-400 to-green-400 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <div className="mb-12 space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Oops! That page didn't render a great hook.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Let's get you back to content magic. This page seems to have gone viral... in the wrong direction!
          </p>
        </div>

        {/* Action Button */}
        <div className="flex justify-center mb-12">
          <Link href="/sign-in">
            <Button 
              className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:scale-105 shadow-2xl border-0 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                <Home className="h-6 w-6 mr-3 transition-transform duration-300 group-hover:rotate-12" />
                <span className="transition-all duration-300">Back to Home</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </Button>
          </Link>
        </div>

        {/* Help Links */}
        <div className="border-t border-muted/20 pt-8">
          <p className="text-muted-foreground mb-4">Need help? We're here for you!</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <span className="text-blue-500 hover:text-purple-500 transition-colors font-semibold hover:underline cursor-pointer">
              <ShieldQuestionIcon className="h-4 w-4 mr-2 inline" />
              Help Center
            </span>
            <span className="text-green-500 hover:text-blue-500 transition-colors font-semibold hover:underline cursor-pointer">
              <Headset className="h-4 w-4 mr-2 inline" />
              Contact Support
            </span>
            <span className="text-pink-500 hover:text-purple-500 transition-colors font-semibold hover:underline cursor-pointer">
              <Bug className="h-4 w-4 mr-2 inline" />
              Report Issue
            </span>
          </div>
        </div>

        {/* Fun Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-4 border border-pink-200/20 shadow-lg">
            <div className="text-2xl font-bold gradient-text">99.9%</div>
            <div className="text-sm text-muted-foreground">Pages that work</div>
          </div>
          <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-4 border border-blue-200/20 shadow-lg">
            <div className="text-2xl font-bold gradient-text">24/7</div>
            <div className="text-sm text-muted-foreground">AI analyzing</div>
          </div>
          <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-4 border border-green-200/20 shadow-lg">
            <div className="text-2xl font-bold gradient-text">∞</div>
            <div className="text-sm text-muted-foreground">Creative ideas</div>
          </div>
        </div>
      </main>

      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #FFB3BA 2px, transparent 2px), 
              radial-gradient(circle at 75% 75%, #BAE1FF 2px, transparent 2px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>
    </div>
  );
}