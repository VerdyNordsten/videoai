'use client';

import React from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import HowItWorks from '@/components/landing/HowItWorks';
import SampleOutputPreview from '@/components/landing/SampleOutputPreview';
import FeaturesShowcase from '@/components/landing/FeaturesShowcase';
import DashboardPreview from '@/components/landing/DashboardPreview';
import Testimonials from '@/components/landing/Testimonials';
import Pricing from '@/components/landing/Pricing';
import FAQ from '@/components/landing/FAQ';
import Integrations from '@/components/landing/Integrations';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
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