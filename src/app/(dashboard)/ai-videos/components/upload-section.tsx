'use client';

import React, { useState, useRef } from 'react';

export default function UploadSection() {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files: FileList) => {
    // Handle file processing logic would go here
    // For now, we'll just log the files
    Array.from(files).forEach(file => {
      if (file.type.startsWith('video/')) {
        console.log('Processing video file:', file.name);
        // In a real implementation, this would add the file to the upload queue
      }
    });
  };

  return (
    <section id="upload-section" className="mb-6 md:mb-8">
      <div className="bg-surface border border-gray-200 rounded-xl p-6 md:p-8">
        <div 
          id="drag-drop-zone" 
          className={`drag-zone border-2 border-dashed border-gray-300 rounded-xl p-8 md:p-12 text-center hover:border-primary hover:bg-primary/5 transition-all cursor-pointer ${isDragOver ? 'dragover' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="max-w-md mx-auto">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid fa-cloud-upload-alt text-primary text-xl md:text-2xl"></i>
            </div>
            <h3 className="font-poppins font-semibold text-lg md:text-xl text-gray-900 mb-2">Drop videos here to generate AI Ideas</h3>
            <p className="text-muted mb-6 text-sm md:text-base">Upload MP4, MOV, AVI files up to 100MB each. Multiple files supported.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                id="upload-btn" 
                className="bg-primary text-white font-medium px-4 py-2 md:px-6 md:py-3 rounded-xl btn-hover w-full sm:w-auto"
                onClick={handleFileInput}
              >
                <i className="fa-solid fa-plus mr-2"></i>
                Choose Files
              </button>
              <button className="border border-gray-300 text-gray-700 font-medium px-4 py-2 md:px-6 md:py-3 rounded-xl hover:border-primary hover:text-primary transition-colors w-full sm:w-auto">
                <i className="fa-solid fa-link mr-2"></i>
                Paste URL
              </button>
            </div>
            <p className="text-xs text-muted mt-4">Supported formats: MP4, MOV, AVI • Max size: 100MB per file</p>
          </div>
        </div>
      </div>
      <input 
        type="file" 
        ref={fileInputRef}
        className="hidden" 
        multiple 
        accept="video/*"
        onChange={handleFileInputChange}
      />
    </section>
  );
}