import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Create Supabase client
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
      },
    }
  )
  
  // Get user session
  const { data: { session } } = await supabase.auth.getSession()
  
  // Check if postAuth cookie exists
  const postAuth = request.cookies.get('postAuth')?.value === 'true'
  
  // Redirect authenticated users away from login page
  if (pathname === '/login' && session) {
    // If user has session, redirect to dashboard
    const url = request.nextUrl.clone()
    url.pathname = '/dashboard'
    return NextResponse.redirect(url)
  }
  
  // Protect dashboard - requires session
  if (pathname.startsWith('/dashboard')) {
    if (!session) {
      // No session, redirect to login
      const url = request.nextUrl.clone()
      url.pathname = '/login'
      return NextResponse.redirect(url)
    }
  }
  
  // Signing-back page - only accessible with postAuth cookie
  if (pathname === '/signing-back') {
    if (!postAuth) {
      // No postAuth cookie, redirect to login
      const url = request.nextUrl.clone()
      url.pathname = '/login'
      return NextResponse.redirect(url)
    }
  }
  
  // Allow the request to continue
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/login',
    '/dashboard/:path*',
    '/signing-back',
  ],
}