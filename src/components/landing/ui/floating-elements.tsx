'use client';

import React from 'react';

const FloatingElements = () => {
  return (
    <>
      <div className="absolute top-10 -left-10 w-20 h-20 bg-pink-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-32 -right-8 w-16 h-16 bg-blue-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute -bottom-8 left-1/4 w-24 h-24 bg-green-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 -right-12 w-12 h-12 bg-yellow-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-20 -left-6 w-18 h-18 bg-purple-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '2s' }}></div>
    </>
  );
};

export default FloatingElements;