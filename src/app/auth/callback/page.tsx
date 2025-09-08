'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaSpinner } from 'react-icons/fa';

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    // Send message to parent window to indicate successful authentication
    if (window.opener) {
      window.opener.postMessage({ type: 'google-auth-success' }, window.location.origin);
    }
    
    // Close the popup window
    window.close();
    
    // Fallback redirect to dashboard (in case window.close() doesn't work)
    setTimeout(() => {
      router.push('/dashboard');
    }, 1000);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <FaSpinner className="animate-spin mx-auto text-4xl text-blue-500 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Authentication Successful</h2>
        <p className="text-gray-600">Closing window and redirecting to dashboard...</p>
      </div>
    </div>
  );
}