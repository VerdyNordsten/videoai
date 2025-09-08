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
            cookieStore.set(name, value, options);
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
    
    // If we have a user, check if they already exist in our database using Supabase
    if (data.user) {
      // Check if user already exists in our users table
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('id')
        .eq('email', data.user.email)
        .single();
      
      // If user exists, set postAuth cookie and redirect to signing-back page
      if (userData && !userError) {
        // Set postAuth cookie that expires in 5 minutes
        const expires = new Date(Date.now() + 5 * 60 * 1000);
        cookieStore.set('postAuth', 'true', {
          path: '/',
          expires,
          httpOnly: true,
          sameSite: 'lax',
        });
        
        return NextResponse.redirect(`${requestUrl.origin}/signing-back?email=${encodeURIComponent(data.user.email || '')}&provider=google`);
      }
      // If user doesn't exist, redirect to client-side callback for new users
      else {
        return NextResponse.redirect(`${requestUrl.origin}/auth/callback`);
      }
    }
  }

  // Redirect to the client-side callback page for all other cases
  return NextResponse.redirect(`${requestUrl.origin}/auth/callback`);
}