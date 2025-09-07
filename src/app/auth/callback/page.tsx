'use client';

import { useEffect } from 'react';

export default function AuthCallback() {
  useEffect(() => {
    // Send message to parent window to indicate successful authentication
    if (window.opener) {
      window.opener.postMessage({ type: 'google-auth-success' }, window.location.origin);
    }
    
    // Close the popup window immediately
    // Using a slight delay to ensure the message is sent first
    setTimeout(() => {
      window.close();
      
      // Fallback: if window.close() doesn't work, redirect to dashboard
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1000);
    }, 100);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Authentication Successful</h2>
        <p>Redirecting to your dashboard...</p>
      </div>
    </div>
  );
}