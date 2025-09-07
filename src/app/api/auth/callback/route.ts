import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const cookieStore = await cookies();
    
    // Create Supabase client with cookie handling
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value;
          },
          set(name: string, value: string, options: CookieOptions) {
            // Ensure the cookie is set with proper domain and path
            const cookieOptions = {
              ...options,
              domain: undefined, // Don't set domain in development
              path: '/',
              sameSite: 'lax',
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production', // Set secure flag in production
            }
            cookieStore.set(name, value, cookieOptions);
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.delete(name);
          },
        },
      }
    )
    
    // Exchange the code for a session
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (error) {
      return NextResponse.redirect(`${requestUrl.origin}/login?error=auth_failed&message=${encodeURIComponent(error.message)}`);
    }
  }

  // Redirect to the client-side callback page
  return NextResponse.redirect(`${requestUrl.origin}/auth/callback`);
}