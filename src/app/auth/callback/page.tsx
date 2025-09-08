'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createBrowserClient } from '@supabase/ssr';

export default function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  useEffect(() => {
    // If there's an error, redirect to login with error message
    if (error) {
      router.push(`/login?error=${encodeURIComponent(error)}`);
      return;
    }

    const handleAuth = async () => {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );

      // Get the current user
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        // Check if user already exists in our users table
        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('id')
          .eq('email', user.email)
          .single();
        
        // If user doesn't exist, they're a new user and should be redirected to dashboard
        // The server-side callback already handled existing users
        if (!userData && !userError) {
          // Send message to parent window to indicate successful authentication
          if (window.opener) {
            window.opener.postMessage({ type: 'google-auth-success' }, window.location.origin);
          }
          
          // Close the popup window immediately
          setTimeout(() => {
            window.close();
            
            // Fallback redirect for new users
            setTimeout(() => {
              router.push('/dashboard');
            }, 1000);
          }, 100);
          return;
        } else if (userData && !userError) {
          // User exists, send message to parent and close popup
          // The server-side callback should have redirected to signing-back page
          // but if user accessed this page directly, redirect to dashboard
          if (window.opener) {
            window.opener.postMessage({ type: 'google-auth-success' }, window.location.origin);
          }
          
          setTimeout(() => {
            window.close();
            
            // Fallback redirect for existing users
            setTimeout(() => {
              router.push('/dashboard');
            }, 1000);
          }, 100);
          return;
        }
      }
      
      // For cases where we can't determine the user status,
      // send message to parent and close popup
      if (window.opener) {
        window.opener.postMessage({ type: 'google-auth-success' }, window.location.origin);
      }
      
      setTimeout(() => {
        window.close();
        
        // Fallback redirect
        setTimeout(() => {
          router.push('/dashboard');
        }, 1000);
      }, 100);
    };

    handleAuth();
  }, [error, router]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Authentication Failed</h2>
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Authentication Successful</h2>
        <p>Redirecting...</p>
      </div>
    </div>
  );
}