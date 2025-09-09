'use client';

import React from 'react';
import { Sidebar } from '@/components/dashboard/sidebar';
import { Header } from '@/components/dashboard/header';

export default function DashboardClientPage() {
  // Welcome Section Component
  const WelcomeSection = () => (
    <section id="welcome-section" className="mb-8">
      <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h2 className="font-poppins font-bold text-3xl mb-2">Welcome back, Sarah! 👋</h2>
            <p className="text-white/90 text-lg mb-4">Ready to create amazing marketing videos? You've generated 12 videos this week!</p>
            <div className="flex items-center space-x-4">
              <button className="bg-white text-primary font-semibold px-6 py-3 rounded-xl btn-hover">
                <i className="fa-solid fa-plus mr-2"></i>
                Create New Video
              </button>
              <button className="border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-xl btn-hover hover:bg-white/10">
                View Templates
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img className="w-48 h-48 rounded-xl opacity-90" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/db28acd4f7-5572c2896c88bcbf6356.png" alt="creative marketing video dashboard illustration, modern gradient style" />
          </div>
        </div>
      </div>
    </section>
  );

  // Stats Section Component
  const StatsSection = () => (
    <section id="stats-section" className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-surface border border-gray-200 rounded-xl p-6 card-hover">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <i className="fa-solid fa-video text-primary text-xl"></i>
            </div>
            <span className="text-accent2 text-sm font-medium">+23%</span>
          </div>
          <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-1">847</h3>
          <p className="text-muted">Videos Generated</p>
        </div>

        <div className="bg-surface border border-gray-200 rounded-xl p-6 card-hover">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
              <i className="fa-solid fa-lightbulb text-secondary text-xl"></i>
            </div>
            <span className="text-accent2 text-sm font-medium">+15%</span>
          </div>
          <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-1">1,234</h3>
          <p className="text-muted">AI Ideas Created</p>
        </div>

        <div className="bg-surface border border-gray-200 rounded-xl p-6 card-hover">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-accent1/10 rounded-xl flex items-center justify-center">
              <i className="fa-solid fa-eye text-accent1 text-xl"></i>
            </div>
            <span className="text-danger text-sm font-medium">-5%</span>
          </div>
          <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-1">2.4M</h3>
          <p className="text-muted">Total Views</p>
        </div>

        <div className="bg-surface border border-gray-200 rounded-xl p-6 card-hover">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-accent2/10 rounded-xl flex items-center justify-center">
              <i className="fa-solid fa-heart text-accent2 text-xl"></i>
            </div>
            <span className="text-accent2 text-sm font-medium">+31%</span>
          </div>
          <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-1">89.2%</h3>
          <p className="text-muted">Engagement Rate</p>
        </div>
      </div>
    </section>
  );

  // AI Generator Section Component
  const AiGeneratorSection = () => (
    <section id="ai-generator-section" className="mb-8">
      <div className="bg-surface border border-gray-200 rounded-xl p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-2">AI Video Ideas Generator</h2>
            <p className="text-muted">Generate creative marketing video concepts with AI</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="bg-accent2 text-white text-xs px-3 py-1 rounded-full font-medium">✨ AI Powered</span>
            <button className="text-muted hover:text-gray-900">
              <i className="fa-solid fa-question-circle"></i>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Industry/Niche</label>
              <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                <option>E-commerce & Retail</option>
                <option>SaaS & Technology</option>
                <option>Healthcare & Wellness</option>
                <option>Education & Training</option>
                <option>Real Estate</option>
                <option>Food & Restaurant</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Video Type</label>
              <div className="grid grid-cols-2 gap-3">
                <button className="p-3 border-2 border-primary bg-primary/5 text-primary rounded-xl text-sm font-medium">Product Demo</button>
                <button className="p-3 border border-gray-200 text-gray-600 rounded-xl text-sm font-medium hover:border-primary hover:text-primary">Testimonial</button>
                <button className="p-3 border border-gray-200 text-gray-600 rounded-xl text-sm font-medium hover:border-primary hover:text-primary">Tutorial</button>
                <button className="p-3 border border-gray-200 text-gray-600 rounded-xl text-sm font-medium hover:border-primary hover:text-primary">Brand Story</button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Target Audience</label>
              <input type="text" placeholder="e.g., Young professionals, Parents, Small business owners" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
            </div>

            <button className="w-full bg-primary text-white font-semibold py-4 px-6 rounded-xl btn-hover flex items-center justify-center">
              <i className="fa-solid fa-magic-wand-sparkles mr-2"></i>
              Generate AI Ideas
            </button>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-4">Recent AI Generated Ideas</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-gray-900">"30-Second Product Showcase"</h4>
                  <span className="text-xs text-accent1 bg-accent1/10 px-2 py-1 rounded-full">Trending</span>
                </div>
                <p className="text-sm text-muted mb-3">Quick product demo highlighting key features with dynamic transitions and call-to-action overlay.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-muted">E-commerce</span>
                    <span className="w-1 h-1 bg-muted rounded-full"></span>
                    <span className="text-xs text-muted">2 min read</span>
                  </div>
                  <button className="text-primary text-sm font-medium hover:underline">Use Template</button>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-gray-900">"Customer Success Story"</h4>
                  <span className="text-xs text-accent2 bg-accent2/10 px-2 py-1 rounded-full">Popular</span>
                </div>
                <p className="text-sm text-muted mb-3">Authentic testimonial format with before/after scenarios and emotional storytelling.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-muted">SaaS</span>
                    <span className="w-1 h-1 bg-muted rounded-full"></span>
                    <span className="text-xs text-muted">3 min read</span>
                  </div>
                  <button className="text-primary text-sm font-medium hover:underline">Use Template</button>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-gray-900">"Behind-the-Scenes Tour"</h4>
                  <span className="text-xs text-secondary bg-secondary/10 px-2 py-1 rounded-full">New</span>
                </div>
                <p className="text-sm text-muted mb-3">Humanize your brand with workplace culture and team introduction content.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-muted">Brand Story</span>
                    <span className="w-1 h-1 bg-muted rounded-full"></span>
                    <span className="text-xs text-muted">1 min read</span>
                  </div>
                  <button className="text-primary text-sm font-medium hover:underline">Use Template</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Recent Projects Section Component
  const RecentProjectsSection = () => (
    <section id="recent-projects-section" className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-poppins font-semibold text-xl text-gray-900">Recent Projects</h2>
        <div className="flex items-center space-x-3">
          <button className="text-muted hover:text-gray-900">
            <i className="fa-solid fa-filter"></i>
          </button>
          <button className="text-muted hover:text-gray-900">
            <i className="fa-solid fa-sort"></i>
          </button>
          <button className="text-primary font-medium hover:underline">View All</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-surface border border-gray-200 rounded-xl overflow-hidden card-hover">
          <div className="relative">
            <img className="w-full h-48 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f951e6eff0-9d098ab095a6cea66e18.png" alt="modern product showcase video thumbnail, sleek design" />
            <div className="absolute top-3 right-3">
              <span className="bg-accent2 text-white text-xs px-2 py-1 rounded-full">Completed</span>
            </div>
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
              <button className="bg-white text-primary w-12 h-12 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-play"></i>
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-poppins font-semibold text-lg text-gray-900">Summer Collection Launch</h3>
              <button className="text-muted hover:text-gray-900">
                <i className="fa-solid fa-ellipsis-h"></i>
              </button>
            </div>
            <p className="text-muted text-sm mb-4">Product showcase video for fashion e-commerce brand featuring new summer collection with dynamic transitions.</p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-muted">Duration: 45s</span>
                <span className="w-1 h-1 bg-muted rounded-full"></span>
                <span className="text-xs text-muted">1080p</span>
              </div>
              <span className="text-xs text-muted">2 days ago</span>
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex-1 bg-primary text-white font-medium py-2 px-4 rounded-lg btn-hover">
                <i className="fa-solid fa-download mr-2"></i>
                Download
              </button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors">
                <i className="fa-solid fa-share"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-gray-200 rounded-xl overflow-hidden card-hover">
          <div className="relative">
            <img className="w-full h-48 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/974db16bf6-a870629074c822f15c0a.png" alt="customer testimonial video thumbnail, professional business style" />
            <div className="absolute top-3 right-3">
              <span className="bg-accent1 text-white text-xs px-2 py-1 rounded-full">In Progress</span>
            </div>
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
              <button className="bg-white text-primary w-12 h-12 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-play"></i>
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-poppins font-semibold text-lg text-gray-900">Client Testimonials</h3>
              <button className="text-muted hover:text-gray-900">
                <i className="fa-solid fa-ellipsis-h"></i>
              </button>
            </div>
            <p className="text-muted text-sm mb-4">Customer success stories compilation for SaaS platform featuring real client experiences and results.</p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-muted">Duration: 2m 15s</span>
                <span className="w-1 h-1 bg-muted rounded-full"></span>
                <span className="text-xs text-muted">4K</span>
              </div>
              <span className="text-xs text-muted">5 hours ago</span>
            </div>
            <div className="mb-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-muted">Progress</span>
                <span className="text-xs text-muted">78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="gradient-progress h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex-1 bg-secondary text-white font-medium py-2 px-4 rounded-lg btn-hover">
                <i className="fa-solid fa-edit mr-2"></i>
                Continue Editing
              </button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors">
                <i className="fa-solid fa-eye"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-gray-200 rounded-xl overflow-hidden card-hover">
          <div className="relative">
            <img className="w-full h-48 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d97f711dac-f9914c2d5c258ee3fd8c.png" alt="brand story video thumbnail, corporate modern design" />
            <div className="absolute top-3 right-3">
              <span className="bg-muted text-white text-xs px-2 py-1 rounded-full">Draft</span>
            </div>
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
              <button className="bg-white text-primary w-12 h-12 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-play"></i>
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-poppins font-semibold text-lg text-gray-900">Brand Story 2024</h3>
              <button className="text-muted hover:text-gray-900">
                <i className="fa-solid fa-ellipsis-h"></i>
              </button>
            </div>
            <p className="text-muted text-sm mb-4">Company origin story and values presentation for corporate website and social media channels.</p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-muted">Duration: 1m 30s</span>
                <span className="w-1 h-1 bg-muted rounded-full"></span>
                <span className="text-xs text-muted">1080p</span>
              </div>
              <span className="text-xs text-muted">1 week ago</span>
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex-1 border border-primary text-primary font-medium py-2 px-4 rounded-lg hover:bg-primary hover:text-white transition-colors">
                <i className="fa-solid fa-edit mr-2"></i>
                Edit Draft
              </button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:border-danger hover:text-danger transition-colors">
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Template Library Section Component
  const TemplateLibrarySection = () => (
    <section id="template-library-section" className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-1">Popular Templates</h2>
          <p className="text-muted">Professional video templates to jumpstart your projects</p>
        </div>
        <button className="bg-secondary text-white font-medium px-6 py-2 rounded-xl btn-hover">
          Browse All Templates
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-surface border border-gray-200 rounded-xl overflow-hidden card-hover group">
          <div className="relative">
            <img className="w-full h-40 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1f28394add-41247934c602637d01a2.png" alt="social media video template, modern colorful design" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all"></div>
            <div className="absolute top-3 right-3">
              <button className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <i className="fa-solid fa-heart text-gray-600"></i>
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium text-gray-900 mb-1">Social Media Pack</h3>
            <p className="text-xs text-muted mb-3">Square & Story formats</p>
            <div className="flex items-center justify-between">
              <span className="text-accent2 text-sm font-semibold">Free</span>
              <button className="text-primary text-sm font-medium hover:underline">Use Template</button>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-gray-200 rounded-xl overflow-hidden card-hover group">
          <div className="relative">
            <img className="w-full h-40 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/a7a3cb0a5b-e0249a6fea6e9cc7f014.png" alt="product launch video template, professional business style" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all"></div>
            <div className="absolute top-3 right-3">
              <button className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <i className="fa-solid fa-heart text-gray-600"></i>
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium text-gray-900 mb-1">Product Launch</h3>
            <p className="text-xs text-muted mb-3">Professional showcase</p>
            <div className="flex items-center justify-between">
              <span className="text-accent1 text-sm font-semibold">Pro</span>
              <button className="text-primary text-sm font-medium hover:underline">Use Template</button>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-gray-200 rounded-xl overflow-hidden card-hover group">
          <div className="relative">
            <img className="w-full h-40 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/8606fcbb85-d8d617126fc2a7c47bdd.png" alt="testimonial video template, clean corporate design" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all"></div>
            <div className="absolute top-3 right-3">
              <button className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <i className="fa-solid fa-heart text-gray-600"></i>
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium text-gray-900 mb-1">Testimonials</h3>
            <p className="text-xs text-muted mb-3">Customer stories</p>
            <div className="flex items-center justify-between">
              <span className="text-accent2 text-sm font-semibold">Free</span>
              <button className="text-primary text-sm font-medium hover:underline">Use Template</button>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-gray-200 rounded-xl overflow-hidden card-hover group">
          <div className="relative">
            <img className="w-full h-40 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/92970a7e25-b54e51c88cc4d7893db4.png" alt="tutorial video template, educational modern style" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all"></div>
            <div className="absolute top-3 right-3">
              <button className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <i className="fa-solid fa-heart text-gray-600"></i>
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium text-gray-900 mb-1">How-To Guide</h3>
            <p className="text-xs text-muted mb-3">Step-by-step tutorials</p>
            <div className="flex items-center justify-between">
              <span className="text-accent1 text-sm font-semibold">Pro</span>
              <button className="text-primary text-sm font-medium hover:underline">Use Template</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Analytics Section Component
  const AnalyticsSection = () => (
    <section id="analytics-section" className="mb-8">
      <div className="bg-surface border border-gray-200 rounded-xl p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-1">Performance Analytics</h2>
            <p className="text-muted">Track your video marketing success</p>
          </div>
          <div className="flex items-center space-x-3">
            <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm">
              <option>Last 30 days</option>
              <option>Last 7 days</option>
              <option>Last 90 days</option>
            </select>
            <button className="text-primary font-medium hover:underline">View Detailed Report</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="font-medium text-gray-900 mb-2">Views & Engagement</h3>
              <div id="analytics-chart" className="h-64"></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-medium text-gray-900 mb-4">Top Performing Videos</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-play text-primary"></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Summer Collection Launch</h4>
                    <p className="text-xs text-muted">124K views • 8.2% CTR</p>
                  </div>
                  <div className="text-right">
                    <span className="text-accent2 text-xs">↗ 23%</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-play text-secondary"></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Client Success Stories</h4>
                    <p className="text-xs text-muted">98K views • 12.1% CTR</p>
                  </div>
                  <div className="text-right">
                    <span className="text-accent2 text-xs">↗ 31%</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent1/10 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-play text-accent1"></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Product Tutorial</h4>
                    <p className="text-xs text-muted">76K views • 6.8% CTR</p>
                  </div>
                  <div className="text-right">
                    <span className="text-danger text-xs">↘ 5%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-medium text-gray-900 mb-4">Platform Distribution</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <i className="fa-brands fa-youtube text-red-500"></i>
                    <span className="text-sm">YouTube</span>
                  </div>
                  <span className="text-sm font-medium">42%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '42%' }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <i className="fa-brands fa-instagram text-pink-500"></i>
                    <span className="text-sm">Instagram</span>
                  </div>
                  <span className="text-sm font-medium">28%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-pink-500 h-2 rounded-full" style={{ width: '28%' }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <i className="fa-brands fa-linkedin text-blue-600"></i>
                    <span className="text-sm">LinkedIn</span>
                  </div>
                  <span className="text-sm font-medium">30%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Team Collaboration Section Component
  const TeamCollaborationSection = () => (
    <section id="team-section" className="mb-8">
      <div className="bg-surface border border-gray-200 rounded-xl p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-1">Team Collaboration</h2>
            <p className="text-muted">Manage your video marketing team and projects</p>
          </div>
          <button className="bg-accent2 text-white font-medium px-6 py-2 rounded-xl btn-hover">
            <i className="fa-solid fa-user-plus mr-2"></i>
            Invite Member
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Active Team Members</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" alt="Team Member" className="w-10 h-10 rounded-lg" />
                  <div>
                    <h4 className="font-medium text-gray-900">Sarah Chen</h4>
                    <p className="text-sm text-muted">Creative Director</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-accent2 text-white text-xs px-2 py-1 rounded-full">Owner</span>
                  <button className="text-muted hover:text-gray-900">
                    <i className="fa-solid fa-ellipsis-h"></i>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="Team Member" className="w-10 h-10 rounded-lg" />
                  <div>
                    <h4 className="font-medium text-gray-900">Marcus Johnson</h4>
                    <p className="text-sm text-muted">Video Editor</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">Editor</span>
                  <button className="text-muted hover:text-gray-900">
                    <i className="fa-solid fa-ellipsis-h"></i>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" alt="Team Member" className="w-10 h-10 rounded-lg" />
                  <div>
                    <h4 className="font-medium text-gray-900">Emma Rodriguez</h4>
                    <p className="text-sm text-muted">Marketing Specialist</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-secondary text-white text-xs px-2 py-1 rounded-full">Viewer</span>
                  <button className="text-muted hover:text-gray-900">
                    <i className="fa-solid fa-ellipsis-h"></i>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" alt="Team Member" className="w-10 h-10 rounded-lg" />
                  <div>
                    <h4 className="font-medium text-gray-900">David Kim</h4>
                    <p className="text-sm text-muted">Content Strategist</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-accent1 text-white text-xs px-2 py-1 rounded-full">Collaborator</span>
                  <button className="text-muted hover:text-gray-900">
                    <i className="fa-solid fa-ellipsis-h"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="User" className="w-8 h-8 rounded-lg" />
                <div className="flex-1">
                  <p className="text-sm text-gray-900"><span className="font-medium">Marcus Johnson</span> completed editing <span className="font-medium">"Summer Collection Launch"</span></p>
                  <p className="text-xs text-muted mt-1">2 hours ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" alt="User" className="w-8 h-8 rounded-lg" />
                <div className="flex-1">
                  <p className="text-sm text-gray-900"><span className="font-medium">Emma Rodriguez</span> shared <span className="font-medium">"Client Testimonials"</span> project</p>
                  <p className="text-xs text-muted mt-1">4 hours ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" alt="User" className="w-8 h-8 rounded-lg" />
                <div className="flex-1">
                  <p className="text-sm text-gray-900"><span className="font-medium">David Kim</span> added new AI idea template <span className="font-medium">"Product Demo 2.0"</span></p>
                  <p className="text-xs text-muted mt-1">1 day ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" alt="User" className="w-8 h-8 rounded-lg" />
                <div className="flex-1">
                  <p className="text-sm text-gray-900"><span className="font-medium">Sarah Chen</span> created new project <span className="font-medium">"Brand Story 2024"</span></p>
                  <p className="text-xs text-muted mt-1">2 days ago</p>
                </div>
              </div>
            </div>

            <button className="w-full mt-4 text-primary font-medium py-2 border border-primary rounded-xl hover:bg-primary hover:text-white transition-colors">
              View All Activity
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  // Learning Resources Section Component
  const LearningResourcesSection = () => (
    <section id="learning-section" className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-1">Learning Center</h2>
          <p className="text-muted">Master video marketing with our tutorials and guides</p>
        </div>
        <button className="text-primary font-medium hover:underline">View All Resources</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-surface border border-gray-200 rounded-xl overflow-hidden card-hover">
          <div className="relative">
            <img className="w-full h-32 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/a8d30dd9cb-a58773f79999e792ca3b.png" alt="video marketing tutorial thumbnail, educational design" />
            <div className="absolute top-3 left-3">
              <span className="bg-accent2 text-white text-xs px-2 py-1 rounded-full">Tutorial</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">Getting Started with AI Video Ideas</h3>
            <p className="text-muted text-sm mb-4">Learn how to generate compelling video concepts using our AI-powered tools.</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <i className="fa-solid fa-play-circle text-primary"></i>
                <span className="text-sm text-muted">8 min read</span>
              </div>
              <button className="text-primary font-medium hover:underline">Start Learning</button>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-gray-200 rounded-xl overflow-hidden card-hover">
          <div className="relative">
            <img className="w-full h-32 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f9aa3d9e05-d2fa907b3050e18730f3.png" alt="video editing guide thumbnail, professional tutorial" />
            <div className="absolute top-3 left-3">
              <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">Guide</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">Advanced Editing Techniques</h3>
            <p className="text-muted text-sm mb-4">Master professional video editing with advanced techniques and best practices.</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <i className="fa-solid fa-book-open text-secondary"></i>
                <span className="text-sm text-muted">15 min read</span>
              </div>
              <button className="text-primary font-medium hover:underline">Start Learning</button>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-gray-200 rounded-xl overflow-hidden card-hover">
          <div className="relative">
            <img className="w-full h-32 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/9e61318bea-343d247227091a004dcd.png" alt="marketing strategy video thumbnail, business guide" />
            <div className="absolute top-3 left-3">
              <span className="bg-accent1 text-white text-xs px-2 py-1 rounded-full">Strategy</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">Video Marketing Strategy</h3>
            <p className="text-muted text-sm mb-4">Build effective video marketing campaigns that drive engagement and conversions.</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <i className="fa-solid fa-chart-line text-accent1"></i>
                <span className="text-sm text-muted">12 min read</span>
              </div>
              <button className="text-primary font-medium hover:underline">Start Learning</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Quick Actions Section Component
  const QuickActionsSection = () => (
    <section id="quick-actions-section" className="mb-8">
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8">
        <div className="text-center mb-8">
          <h2 className="font-poppins font-semibold text-2xl text-gray-900 mb-2">Ready to Create Something Amazing?</h2>
          <p className="text-muted text-lg">Choose your preferred way to start your next video project</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface border-2 border-dashed border-primary/30 rounded-xl p-8 text-center hover:border-primary/60 hover:bg-primary/5 transition-all card-hover group">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <i className="fa-solid fa-magic-wand-sparkles text-primary text-2xl"></i>
            </div>
            <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">Generate AI Ideas</h3>
            <p className="text-muted text-sm mb-4">Let AI create unique video concepts tailored to your brand and audience</p>
            <button className="bg-primary text-white font-medium px-6 py-3 rounded-xl btn-hover w-full">
              Start Generating
            </button>
          </div>

          <div className="bg-surface border-2 border-dashed border-secondary/30 rounded-xl p-8 text-center hover:border-secondary/60 hover:bg-secondary/5 transition-all card-hover group">
            <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
              <i className="fa-solid fa-template text-secondary text-2xl"></i>
            </div>
            <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">Use Template</h3>
            <p className="text-muted text-sm mb-4">Start with professionally designed templates and customize to your needs</p>
            <button className="bg-secondary text-white font-medium px-6 py-3 rounded-xl btn-hover w-full">
              Browse Templates
            </button>
          </div>

          <div className="bg-surface border-2 border-dashed border-accent2/30 rounded-xl p-8 text-center hover:border-accent2/60 hover:bg-accent2/5 transition-all card-hover group">
            <div className="w-16 h-16 bg-accent2/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent2/20 transition-colors">
              <i className="fa-solid fa-upload text-accent2 text-2xl"></i>
            </div>
            <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">Upload Content</h3>
            <p className="text-muted text-sm mb-4">Upload your existing content and enhance it with our editing tools</p>
            <button className="bg-accent2 text-white font-medium px-6 py-3 rounded-xl btn-hover w-full">
              Upload Files
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="space-y-6 md:space-y-8">
      <WelcomeSection />
      <StatsSection />
      <AiGeneratorSection />
      <RecentProjectsSection />
      <TemplateLibrarySection />
      <AnalyticsSection />
      <TeamCollaborationSection />
      <LearningResourcesSection />
      <QuickActionsSection />
    </div>
  );
}