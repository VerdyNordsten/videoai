import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createServerClient, type CookieOptions } from '@supabase/ssr';

export async function middleware(request: NextRequest) {
  // Set COOP headers to fix Google OAuth popup issues
  const response = NextResponse.next();
  
  // Set Cross-Origin-Opener-Policy header
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  
  // Set Cross-Origin-Embedder-Policy header to allow loading images from external domains
  response.headers.set('Cross-Origin-Embedder-Policy', 'credentialless');
  
  // Create a Supabase client configured to use cookies
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          // No additional logging needed
        },
        remove(name: string, options: CookieOptions) {
          // No additional logging needed
        },
      },
    }
  );

  // Refresh session if expired - required for Server Components
  const { data: { session } } = await supabase.auth.getSession();

  // Define public paths that don't require authentication
  const publicPaths = [
    '/',
    '/login',
    '/register',
    '/auth/callback',
    '/api/auth/callback'
  ];

  // Check if the current path is public
  const isPublicPath = publicPaths.some(path => 
    request.nextUrl.pathname === path || 
    (path.endsWith('/') && request.nextUrl.pathname.startsWith(path))
  );

  // Check if the current path is a dashboard route
  const isDashboardRoute = request.nextUrl.pathname.startsWith('/dashboard');

  // If the user is not authenticated and trying to access a protected route, redirect to login
  if (!session && (isDashboardRoute || !isPublicPath)) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // If the user is authenticated and trying to access auth pages, redirect to dashboard
  if (session && (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register')) {
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
  runtime: 'nodejs'
};
