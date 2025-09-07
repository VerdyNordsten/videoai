import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Define protected routes
const protectedRoutes = ['/dashboard']

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the route is protected
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))

  if (isProtectedRoute) {
    // Get session from cookies
    const accessToken = request.cookies.get('sb-access-token')?.value

    if (!accessToken) {
      // Redirect to login if no session
      const url = request.nextUrl.clone()
      url.pathname = '/login'
      return NextResponse.redirect(url)
    }

    // Validate session
    try {
      const { data, error } = await supabase.auth.getUser(accessToken)

      if (error || !data.user) {
        // Redirect to login if session is invalid
        const url = request.nextUrl.clone()
        url.pathname = '/login'
        return NextResponse.redirect(url)
      }
    } catch (error) {
      // Redirect to login if there's an error validating session
      const url = request.nextUrl.clone()
      url.pathname = '/login'
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

// Configure which paths the middleware should run on
export const config = {
  matcher: ['/dashboard/:path*'],
}