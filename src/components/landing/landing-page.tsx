'use client';

import React from 'react';
import HeroSection from '@/components/landing/hero-section';
import HowItWorks from '@/components/landing/how-it-works';
import SampleOutputPreview from '@/components/landing/sample-output-preview';
import FeaturesShowcase from '@/components/landing/features-showcase';
import DashboardPreview from '@/components/landing/dashboard-preview';
import Testimonials from '@/components/landing/testimonials';
import Pricing from '@/components/landing/pricing';
import FAQ from '@/components/landing/faq';
import Integrations from '@/components/landing/integrations';
import FinalCTA from '@/components/landing/final-cta';
import Footer from '@/components/landing/footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <HowItWorks />
        <SampleOutputPreview />
        <FeaturesShowcase />
        <DashboardPreview />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Integrations />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;