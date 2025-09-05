'use client';

import React from 'react';
import HeroTitle from '@/components/landing/ui/HeroTitle';
import HeroSubtitle from '@/components/landing/ui/HeroSubtitle';
import HeroButtons from '@/components/landing/ui/HeroButtons';
import UserTrustSection from '@/components/landing/ui/UserTrustSection';
import FloatingElements from '@/components/landing/ui/FloatingElements';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <HeroTitle />
              <HeroSubtitle />
            </div>
            
            <HeroButtons />
            
            <UserTrustSection />
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img className="w-full h-96 lg:h-[500px] rounded-3xl shadow-2xl object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b41d83299d-0640b815cb9627801370.png" alt="modern UI mockup showing video analysis dashboard with colorful pastel interface, floating AI bubbles, mobile phone displaying short video content" />
            </div>
            
            <FloatingElements />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;