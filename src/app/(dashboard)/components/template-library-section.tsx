'use client';

import React, { useState } from 'react';

export default function TemplateLibrarySection() {
  const [likedTemplates, setLikedTemplates] = useState<number[]>([]);

  const handleUseTemplate = (templateName: string) => {
    alert(`Using template: ${templateName}`);
  };

  const handleLikeTemplate = (templateId: number) => {
    if (likedTemplates.includes(templateId)) {
      setLikedTemplates(likedTemplates.filter(id => id !== templateId));
    } else {
      setLikedTemplates([...likedTemplates, templateId]);
    }
  };

  return (
    <section id="template-library-section" className="mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-1">Popular Templates</h2>
          <p className="text-muted text-sm">Professional video templates to jumpstart your projects</p>
        </div>
        <button className="bg-secondary text-white font-medium px-4 py-2 rounded-xl btn-hover text-sm sm:text-base">
          Browse All Templates
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-surface border border-gray-200 rounded-xl overflow-hidden card-hover group">
          <div className="relative">
            <img 
              className="w-full h-40 object-cover" 
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1f28394add-41247934c602637d01a2.png" 
              alt="social media video template, modern colorful design"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all"></div>
            <div className="absolute top-3 right-3">
              <button 
                className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => handleLikeTemplate(1)}
              >
                {likedTemplates.includes(1) ? (
                  <i className="fa-solid fa-heart text-red-500"></i>
                ) : (
                  <i className="fa-regular fa-heart text-gray-600"></i>
                )}
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium text-gray-900 mb-1">Social Media Pack</h3>
            <p className="text-xs text-muted mb-3">Square & Story formats</p>
            <div className="flex items-center justify-between">
              <span className="text-accent2 text-sm font-semibold">Free</span>
              <button 
                className="text-primary text-sm font-medium hover:underline"
                onClick={() => handleUseTemplate('Social Media Pack')}
              >
                Use Template
              </button>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-gray-200 rounded-xl overflow-hidden card-hover group">
          <div className="relative">
            <img 
              className="w-full h-40 object-cover" 
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/a7a3cb0a5b-e0249a6fea6e9cc7f014.png" 
              alt="product launch video template, professional business style"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all"></div>
            <div className="absolute top-3 right-3">
              <button 
                className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => handleLikeTemplate(2)}
              >
                {likedTemplates.includes(2) ? (
                  <i className="fa-solid fa-heart text-red-500"></i>
                ) : (
                  <i className="fa-regular fa-heart text-gray-600"></i>
                )}
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium text-gray-900 mb-1">Product Launch</h3>
            <p className="text-xs text-muted mb-3">Professional showcase</p>
            <div className="flex items-center justify-between">
              <span className="text-accent1 text-sm font-semibold">Pro</span>
              <button 
                className="text-primary text-sm font-medium hover:underline"
                onClick={() => handleUseTemplate('Product Launch')}
              >
                Use Template
              </button>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-gray-200 rounded-xl overflow-hidden card-hover group">
          <div className="relative">
            <img 
              className="w-full h-40 object-cover" 
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/8606fcbb85-d8d617126fc2a7c47bdd.png" 
              alt="testimonial video template, clean corporate design"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all"></div>
            <div className="absolute top-3 right-3">
              <button 
                className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => handleLikeTemplate(3)}
              >
                {likedTemplates.includes(3) ? (
                  <i className="fa-solid fa-heart text-red-500"></i>
                ) : (
                  <i className="fa-regular fa-heart text-gray-600"></i>
                )}
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium text-gray-900 mb-1">Testimonials</h3>
            <p className="text-xs text-muted mb-3">Customer stories</p>
            <div className="flex items-center justify-between">
              <span className="text-accent2 text-sm font-semibold">Free</span>
              <button 
                className="text-primary text-sm font-medium hover:underline"
                onClick={() => handleUseTemplate('Testimonials')}
              >
                Use Template
              </button>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-gray-200 rounded-xl overflow-hidden card-hover group">
          <div className="relative">
            <img 
              className="w-full h-40 object-cover" 
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/92970a7e25-b54e51c88cc4d7893db4.png" 
              alt="tutorial video template, educational modern style"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all"></div>
            <div className="absolute top-3 right-3">
              <button 
                className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => handleLikeTemplate(4)}
              >
                {likedTemplates.includes(4) ? (
                  <i className="fa-solid fa-heart text-red-500"></i>
                ) : (
                  <i className="fa-regular fa-heart text-gray-600"></i>
                )}
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium text-gray-900 mb-1">How-To Guide</h3>
            <p className="text-xs text-muted mb-3">Step-by-step tutorials</p>
            <div className="flex items-center justify-between">
              <span className="text-accent1 text-sm font-semibold">Pro</span>
              <button 
                className="text-primary text-sm font-medium hover:underline"
                onClick={() => handleUseTemplate('How-To Guide')}
              >
                Use Template
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}