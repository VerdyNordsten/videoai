'use client';

import { useEffect } from 'react';

export default function AuthCallback() {
  useEffect(() => {
    console.log("Auth callback page loaded");
    
    // Send message to parent window to indicate successful authentication
    if (window.opener) {
      console.log("Sending auth success message to parent window");
      window.opener.postMessage({ type: 'google-auth-success' }, window.location.origin);
    } else {
      console.log("No opener found, redirecting to dashboard");
    }
    
    // Redirect to dashboard after a short delay
    setTimeout(() => {
      console.log("Redirecting to dashboard");
      window.location.href = '/dashboard';
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Authentication Successful</h2>
        <p>You will be redirected to your dashboard shortly...</p>
        <p className="text-sm text-gray-500 mt-4">If you are not redirected automatically, please close this window.</p>
      </div>
    </div>
  );
}