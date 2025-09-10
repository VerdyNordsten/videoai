'use client';

import React, { useState } from 'react';

export default function AIGeneratorSection() {
  const [industry, setIndustry] = useState('E-commerce & Retail');
  const [selectedVideoType, setSelectedVideoType] = useState('Product Demo');
  const [targetAudience, setTargetAudience] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const industries = [
    'E-commerce & Retail',
    'SaaS & Technology',
    'Healthcare & Wellness',
    'Education & Training',
    'Real Estate',
    'Food & Restaurant'
  ];

  const videoTypes = [
    'Product Demo',
    'Testimonial',
    'Tutorial',
    'Brand Story'
  ];

  const handleGenerateAI = async () => {
    setIsGenerating(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsGenerating(false);
    alert(`Generated AI ideas for ${selectedVideoType} in ${industry} industry for audience: ${targetAudience}`);
  };

  const handleUseTemplate = (templateName: string) => {
    alert(`Using template: ${templateName}`);
  };

  return (
    <section id="ai-generator-section" className="mb-8">
      <div className="bg-surface border border-gray-200 rounded-xl p-4 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-2">AI Video Ideas Generator</h2>
            <p className="text-muted text-sm">Generate creative marketing video concepts with AI</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="bg-accent2 text-white text-xs px-3 py-1 rounded-full font-medium">✨ AI Powered</span>
            <button className="text-muted hover:text-gray-900">
              <i className="fa-solid fa-question-circle"></i>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Industry/Niche</label>
              <select 
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                {industries.map((industryOption) => (
                  <option key={industryOption} value={industryOption}>{industryOption}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Video Type</label>
              <div className="grid grid-cols-2 gap-3">
                {videoTypes.map((type) => (
                  <button
                    key={type}
                    className={`p-3 border rounded-xl text-sm font-medium ${
                      selectedVideoType === type
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
                    }`}
                    onClick={() => setSelectedVideoType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Target Audience</label>
              <input
                type="text"
                placeholder="e.g., Young professionals, Parents, Small business owners"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
              />
            </div>

            <button
              className="w-full bg-primary text-white font-semibold py-3 md:py-4 px-6 rounded-xl btn-hover flex items-center justify-center"
              onClick={handleGenerateAI}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                  Generating...
                </>
              ) : (
                <>
                  <i className="fa-solid fa-magic-wand-sparkles mr-2"></i>
                  Generate AI Ideas
                </>
              )}
            </button>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 md:p-6">
            <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-4">Recent AI Generated Ideas</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h4 className="font-medium text-gray-900">"30-Second Product Showcase"</h4>
                  <span className="text-xs text-accent1 bg-accent1/10 px-2 py-1 rounded-full self-start">Trending</span>
                </div>
                <p className="text-sm text-muted mb-3">Quick product demo highlighting key features with dynamic transitions and call-to-action overlay.</p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-muted">E-commerce</span>
                    <span className="w-1 h-1 bg-muted rounded-full"></span>
                    <span className="text-xs text-muted">2 min read</span>
                  </div>
                  <button 
                    className="text-primary text-sm font-medium hover:underline"
                    onClick={() => handleUseTemplate('30-Second Product Showcase')}
                  >
                    Use Template
                  </button>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h4 className="font-medium text-gray-900">"Customer Success Story"</h4>
                  <span className="text-xs text-accent2 bg-accent2/10 px-2 py-1 rounded-full self-start">Popular</span>
                </div>
                <p className="text-sm text-muted mb-3">Authentic testimonial format with before/after scenarios and emotional storytelling.</p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-muted">SaaS</span>
                    <span className="w-1 h-1 bg-muted rounded-full"></span>
                    <span className="text-xs text-muted">3 min read</span>
                  </div>
                  <button 
                    className="text-primary text-sm font-medium hover:underline"
                    onClick={() => handleUseTemplate('Customer Success Story')}
                  >
                    Use Template
                  </button>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h4 className="font-medium text-gray-900">"Behind-the-Scenes Tour"</h4>
                  <span className="text-xs text-secondary bg-secondary/10 px-2 py-1 rounded-full self-start">New</span>
                </div>
                <p className="text-sm text-muted mb-3">Humanize your brand with workplace culture and team introduction content.</p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-muted">Brand Story</span>
                    <span className="w-1 h-1 bg-muted rounded-full"></span>
                    <span className="text-xs text-muted">1 min read</span>
                  </div>
                  <button 
                    className="text-primary text-sm font-medium hover:underline"
                    onClick={() => handleUseTemplate('Behind-the-Scenes Tour')}
                  >
                    Use Template
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}