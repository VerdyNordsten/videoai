'use client';

import React from 'react';

export default function RecentProjectsSection() {
  const handleProjectAction = (action: string, projectName: string) => {
    alert(`${action} project: ${projectName}`);
  };

  return (
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
            <img 
              className="w-full h-48 object-cover" 
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f951e6eff0-9d098ab095a6cea66e18.png" 
              alt="modern product showcase video thumbnail, sleek design"
            />
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
              <button 
                className="text-muted hover:text-gray-900"
                onClick={() => handleProjectAction('More', 'Summer Collection Launch')}
              >
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
              <button 
                className="flex-1 bg-primary text-white font-medium py-2 px-4 rounded-lg btn-hover"
                onClick={() => handleProjectAction('Download', 'Summer Collection Launch')}
              >
                <i className="fa-solid fa-download mr-2"></i>
                Download
              </button>
              <button 
                className="px-4 py-2 border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors"
                onClick={() => handleProjectAction('Share', 'Summer Collection Launch')}
              >
                <i className="fa-solid fa-share"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-gray-200 rounded-xl overflow-hidden card-hover">
          <div className="relative">
            <img 
              className="w-full h-48 object-cover" 
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/974db16bf6-a870629074c822f15c0a.png" 
              alt="customer testimonial video thumbnail, professional business style"
            />
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
              <button 
                className="text-muted hover:text-gray-900"
                onClick={() => handleProjectAction('More', 'Client Testimonials')}
              >
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
              <button 
                className="flex-1 bg-secondary text-white font-medium py-2 px-4 rounded-lg btn-hover"
                onClick={() => handleProjectAction('Continue Editing', 'Client Testimonials')}
              >
                <i className="fa-solid fa-edit mr-2"></i>
                Continue Editing
              </button>
              <button 
                className="px-4 py-2 border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors"
                onClick={() => handleProjectAction('View', 'Client Testimonials')}
              >
                <i className="fa-solid fa-eye"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-gray-200 rounded-xl overflow-hidden card-hover">
          <div className="relative">
            <img 
              className="w-full h-48 object-cover" 
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d97f711dac-f9914c2d5c258ee3fd8c.png" 
              alt="brand story video thumbnail, corporate modern design"
            />
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
              <button 
                className="text-muted hover:text-gray-900"
                onClick={() => handleProjectAction('More', 'Brand Story 2024')}
              >
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
              <button 
                className="flex-1 border border-primary text-primary font-medium py-2 px-4 rounded-lg hover:bg-primary hover:text-white transition-colors"
                onClick={() => handleProjectAction('Edit Draft', 'Brand Story 2024')}
              >
                <i className="fa-solid fa-edit mr-2"></i>
                Edit Draft
              </button>
              <button 
                className="px-4 py-2 border border-gray-200 rounded-lg hover:border-danger hover:text-danger transition-colors"
                onClick={() => handleProjectAction('Delete', 'Brand Story 2024')}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}