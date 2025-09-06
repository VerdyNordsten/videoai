'use client';

import React from 'react';
import { Navigation } from '@/components/landing/navigation';
import { HeroSection } from '@/components/landing/hero-section';
import SocialPlatformsSection from '@/components/landing/social-platforms-orbit';
import HowItWorks from '@/components/landing/how-it-works';
import SampleOutputPreview from '@/components/landing/sample-output-preview';
import FeaturesShowcase from '@/components/landing/features-showcase';
import DashboardPreview from '@/components/landing/dashboard-preview';
import Testimonials from '@/components/landing/testimonials';
import Pricing from '@/components/landing/pricing';
import FAQ from '@/components/landing/faq';
import Footer from '@/components/landing/footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <SocialPlatformsSection />
        <HowItWorks />
        <SampleOutputPreview />
        <FeaturesShowcase />
        <DashboardPreview />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;