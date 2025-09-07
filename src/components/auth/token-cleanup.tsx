'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function TokenCleanup() {
  const pathname = usePathname();

  useEffect(() => {
    // Check if we're on the dashboard page and there are tokens in the URL
    if (pathname === '/dashboard' && typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      const hasTokenParams = url.searchParams.has('access_token') || 
                            url.searchParams.has('refresh_token') || 
                            url.searchParams.has('expires_at') ||
                            url.searchParams.has('expires_in') ||
                            url.searchParams.has('provider_token') ||
                            url.searchParams.has('token_type');

      if (hasTokenParams) {
        // Clean up the URL by removing token parameters
        url.search = '';
        window.history.replaceState({}, document.title, url.toString());
      }
    }
  }, [pathname]);

  return null;
}