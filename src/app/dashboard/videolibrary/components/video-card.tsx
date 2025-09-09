'use client';

import React, { useState } from 'react';

// Helper function to get tag background and text colors
const getTagColors = (index: number) => {
  switch (index) {
    case 0:
      return { bg: 'bg-primary/10', text: 'text-primary' };
    case 1:
      return { bg: 'bg-secondary/10', text: 'text-secondary' };
    case 2:
      return { bg: 'bg-accent1/10', text: 'text-accent1' };
    default:
      return { bg: 'bg-accent2/10', text: 'text-accent2' };
  }
};

// Helper function to get platform background color
const getPlatformBgColor = (platformColor: string) => {
  switch (platformColor) {
    case 'red-500':
      return 'bg-red-500';
    case 'blue-600':
      return 'bg-blue-600';
    case 'pink-500':
      return 'bg-pink-500';
    default:
      return 'bg-red-500';
  }
};

// Helper function to get expiration background color
const getExpirationBgColor = (expirationColor: string) => {
  switch (expirationColor) {
    case 'danger':
      return 'bg-danger/10';
    case 'accent2':
      return 'bg-accent2/10';
    default:
      return 'bg-accent2/10';
  }
};

// Helper function to get expiration text color
const getExpirationTextColor = (expirationColor: string) => {
  switch (expirationColor) {
    case 'danger':
      return 'text-danger';
    case 'accent2':
      return 'text-accent2';
    default:
      return 'text-accent2';
  }
};

export default function VideoCard({ video }: { video: any }) {
  const [title, setTitle] = useState(video.title);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div className="video-card bg-surface border border-gray-200 rounded-xl overflow-hidden card-hover">
      <div className="flex flex-col lg:flex-row">
        <div className="relative lg:w-80 flex-shrink-0">
          <input 
            type="checkbox" 
            className="absolute top-3 left-3 z-10 w-4 h-4 text-primary bg-white border-2 border-gray-300 rounded focus:ring-primary"
          />
          <img 
            className="w-full h-48 lg:h-full object-cover" 
            src={video.thumbnail} 
            alt={`${video.title} video thumbnail`}
          />
          <div className="absolute top-3 right-3">
            <span className={`${getPlatformBgColor(video.platformColor)} text-white text-xs px-2 py-1 rounded-full flex items-center`}>
              <i className={`fa-brands fa-${video.platform.toLowerCase()} mr-1`}></i>
              {video.platform}
            </span>
          </div>
          <div className="absolute bottom-3 right-3">
            <span className="bg-black/70 text-white text-xs px-2 py-1 rounded">{video.duration}</span>
          </div>
        </div>
        
        <div className="flex-1 p-4 lg:p-6">
          <div className="flex items-start justify-between mb-3">
            <input 
              type="text" 
              value={title} 
              onChange={handleTitleChange}
              className="font-poppins font-semibold text-xl text-gray-900 bg-transparent border-none p-0 focus:outline-none focus:bg-gray-50 focus:px-2 focus:py-1 focus:rounded w-full"
            />
            <button className="text-muted hover:text-gray-900 ml-2">
              <i className="fa-solid fa-ellipsis-h"></i>
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {video.tags.map((tag: string, index: number) => {
              const colors = getTagColors(index);
              return (
                <span 
                  key={index} 
                  className={`${colors.bg} ${colors.text} text-sm px-3 py-1 rounded-full font-medium`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
          
          <div className="text-sm text-muted mb-4 flex items-center space-x-3">
            <span>{video.videoLength}</span>
            <span>•</span>
            <span>{video.language}</span>
            <span>•</span>
            <span>{video.createdAt}</span>
          </div>
          
          <div className="mb-6 space-y-3">
            <div className="text-base text-gray-900">
              <strong className="text-primary">Hook:</strong> "{video.hook}"
            </div>
            <div className="text-base text-gray-900">
              <strong className="text-secondary">Caption:</strong> "{video.caption}"
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4 text-sm text-muted">
              <span className="flex items-center">
                <i className="fa-solid fa-download mr-1"></i>
                {video.exports} exports
              </span>
              <span>•</span>
              <span>Analyzed {video.analyzedAt}</span>
            </div>
            <span className={`${getExpirationBgColor(video.expirationColor)} ${getExpirationTextColor(video.expirationColor)} px-3 py-1 rounded-full text-sm font-medium`}>
              {video.expiration}
            </span>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="bg-primary text-white text-sm font-medium py-2.5 px-6 rounded-lg btn-hover flex-shrink-0">
              View Full Analysis
            </button>
            <button className="bg-secondary text-white text-sm font-medium py-2.5 px-4 rounded-lg btn-hover flex-shrink-0">
              Export JSON
            </button>
            <div className="relative">
              <button className="bg-gray-100 text-gray-600 p-2.5 rounded-lg hover:bg-gray-200">
                <i className="fa-solid fa-ellipsis-h"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}