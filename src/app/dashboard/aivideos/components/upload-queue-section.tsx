'use client';

import React, { useState } from 'react';

interface UploadItem {
  id: string;
  name: string;
  size: number;
  status: 'uploading' | 'analyzing' | 'completed';
  progress: number;
  thumbnail?: string;
  ideasCount?: number;
  hook?: string;
  timestamp: string;
}

export default function UploadQueueSection() {
  const [uploadItems, setUploadItems] = useState<UploadItem[]>([
    {
      id: '1',
      name: 'summer-collection-demo.mp4',
      size: 2.4,
      status: 'completed',
      progress: 100,
      thumbnail: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/b91a6b90ae-9dc2a3caa415a0faea2f.png',
      ideasCount: 5,
      hook: 'Transform your summer style...',
      timestamp: '2 min ago'
    },
    {
      id: '2',
      name: 'client-testimonial-sarah.mp4',
      size: 8.7,
      status: 'analyzing',
      progress: 78,
      thumbnail: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/974db16bf6-46d204cdd4116426e90d.png',
      timestamp: '5 min ago'
    },
    {
      id: '3',
      name: 'brand-story-behind-scenes.mov',
      size: 15.2,
      status: 'uploading',
      progress: 45,
      timestamp: '10 min ago'
    },
    {
      id: '4',
      name: 'how-to-use-app.mp4',
      size: 12.1,
      status: 'completed',
      progress: 100,
      thumbnail: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/ed1fb1b0c8-c3eb81e37909ffb6ceab.png',
      ideasCount: 7,
      hook: 'Master this in 60 seconds...',
      timestamp: '15 min ago'
    }
  ]);

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'completed': return 'border-accent2';
      case 'analyzing': return 'border-accent1';
      case 'uploading': return 'border-secondary';
      default: return 'border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'analyzing': return 'Analyzing';
      case 'uploading': return 'Uploading';
      default: return '';
    }
  };

  const getStatusBgClass = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-accent2';
      case 'analyzing': return 'bg-accent1';
      case 'uploading': return 'bg-secondary';
      default: return 'bg-gray-200';
    }
  };

  const removeItem = (id: string) => {
    setUploadItems(uploadItems.filter(item => item.id !== id));
  };

  const clearCompleted = () => {
    setUploadItems(uploadItems.filter(item => item.status !== 'completed'));
  };

  return (
    <section id="upload-queue-section" className="mb-6 md:mb-8">
      <div className="bg-surface border border-gray-200 rounded-xl p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 md:mb-6">
          <div>
            <h2 className="font-poppins font-semibold text-lg md:text-xl text-gray-900 mb-1">Upload Queue</h2>
            <p className="text-muted text-sm md:text-base">Track your video analysis progress</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="text-muted hover:text-gray-900">
              <i className="fa-solid fa-filter"></i>
            </button>
            <button 
              className="text-primary font-medium hover:underline text-sm md:text-base"
              onClick={clearCompleted}
            >
              Clear Completed
            </button>
          </div>
        </div>

        <div id="queue-list" className="space-y-4">
          {uploadItems.map((item) => (
            <div 
              key={item.id} 
              className={`upload-item flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-xl border-l-4 ${getStatusClass(item.status)}`}
            >
              <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
                <div className="w-16 h-12 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                  {item.thumbnail ? (
                    <img className="w-full h-full object-cover" src={item.thumbnail} alt={`${item.name} thumbnail`} />
                  ) : (
                    <i className="fa-solid fa-file-video text-muted text-xl"></i>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 text-sm md:text-base">{item.name}</h3>
                  <p className="text-sm text-muted">Video file • {item.size} MB</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`${getStatusBgClass(item.status)} text-white text-xs px-2 py-1 rounded-full`}>
                      {getStatusText(item.status)}
                    </span>
                    <span className="text-xs text-muted">
                      {item.status === 'completed' 
                        ? `• Analyzed ${item.timestamp}` 
                        : `• ${item.progress}% complete`}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-3">
                {item.status === 'completed' ? (
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{item.ideasCount} Marketing Ideas Generated</p>
                    <p className="text-xs text-muted">Hook: "{item.hook}"</p>
                  </div>
                ) : (
                  <div className="w-full sm:w-32">
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                      <div 
                        className={`${
                          item.status === 'analyzing' ? 'gradient-progress' : 
                          item.status === 'uploading' ? 'bg-secondary' : 'bg-gray-200'
                        } h-2 rounded-full`} 
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-muted">
                      {item.status === 'analyzing' 
                        ? 'Extracting key moments...' 
                        : `${(item.size * item.progress / 100).toFixed(1)} MB / ${item.size} MB`}
                    </p>
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  {item.status === 'completed' ? (
                    <button className="bg-primary text-white font-medium px-3 py-2 md:px-4 md:py-2 rounded-lg btn-hover text-sm">
                      <i className="fa-solid fa-eye mr-2"></i>
                      <span className="hidden md:inline">View Analysis</span>
                      <span className="md:hidden">View</span>
                    </button>
                  ) : (
                    <button 
                      className="text-danger hover:text-red-600 px-2 py-2 rounded-lg hover:bg-red-50 transition-colors"
                      onClick={() => removeItem(item.id)}
                    >
                      <i className="fa-solid fa-times"></i>
                    </button>
                  )}
                  <button className="text-muted hover:text-gray-900">
                    <i className="fa-solid fa-ellipsis-h"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}