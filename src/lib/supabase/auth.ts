'use server'

import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

// Sign in with email and password
export async function signInWithEmail(email: string, password: string) {
  try {
    // Create Supabase client with cookie handling
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set(name, value, options)
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.delete(name)
          },
        },
      }
    )
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return { error: error.message }
    }

    return { success: true }
  } catch (error: any) {
    return { error: error.message || 'An unexpected error occurred' }
  }
}

// Sign up with email and password
export async function signUpWithEmail(email: string, password: string) {
  try {
    // Create Supabase client with cookie handling
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set(name, value, options)
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.delete(name)
          },
        },
      }
    )
    
    // Check if Supabase auth already has this user
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser();
    if (authUser && !authError) {
      // Check if the user's email matches the one we're trying to sign up with
      if (authUser.email === email) {
        return { error: 'An account with this email already exists. Please sign in instead.' };
      }
    }
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      // Check if the error is about email already in use
      if (error.message && error.message.toLowerCase().includes('email')) {
        return { error: 'An account with this email already exists. Please sign in instead.' };
      }
      return { error: error.message };
    }

    return { success: true, requiresEmailConfirmation: !data.session };
  } catch (error: any) {
    // Also check if the error is about email already in use
    if (error.message && error.message.toLowerCase().includes('email')) {
      return { error: 'An account with this email already exists. Please sign in instead.' };
    }
    return { error: error.message || 'An unexpected error occurred' };
  }
}

// Sign in with Google
export async function getGoogleSignInUrl() {
  try {
    // Create Supabase client with cookie handling
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set(name, value, options)
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.delete(name)
          },
        },
      }
    )
    
    // Use the correct redirect URL for our callback
    const redirectUrl = `${process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL || 'http://localhost:3000'}/api/auth/callback`;
    
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: redirectUrl,
        skipBrowserRedirect: true,
        queryParams: {
          prompt: 'select_account consent',
          access_type: 'offline',
          include_granted_scopes: 'true'
        }
      }
    })

    if (error) {
      return { error: error.message }
    }

    return { url: data.url }
  } catch (error: any) {
    return { error: error.message || 'An unexpected error occurred' }
  }
}

// Sign up with Google
export async function getGoogleSignUpUrl() {
  try {
    // Create Supabase client with cookie handling
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set(name, value, options)
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.delete(name)
          },
        },
      }
    )
    
    // Use the correct redirect URL for our callback
    const redirectUrl = `${process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL || 'http://localhost:3000'}/api/auth/callback`;
    
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: redirectUrl,
        skipBrowserRedirect: true,
        queryParams: {
          prompt: 'select_account consent',
          access_type: 'offline',
          include_granted_scopes: 'true'
        }
      }
    })

    if (error) {
      return { error: error.message }
    }

    return { url: data.url }
  } catch (error: any) {
    return { error: error.message || 'An unexpected error occurred' }
  }
}

// Sign out
export async function signOut() {
  try {
    // Create Supabase client with cookie handling
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set(name, value, options)
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.delete(name)
          },
        },
      }
    )
    
    const { error } = await supabase.auth.signOut()

    if (error) {
      return { error: error.message }
    }

    redirect('/login')
  } catch (error: any) {
    return { error: error.message || 'An unexpected error occurred' }
  }
}

// Get current user
export async function getCurrentUser() {
  try {
    // Create Supabase client with cookie handling
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set(name, value, options)
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.delete(name)
          },
        },
      }
    )
    
    const { data, error } = await supabase.auth.getUser()

    if (error) {
      return null
    }

    return data.user
  } catch (error) {
    return null
  }
}

// Reset password
export async function resetPassword(email: string) {
  try {
    // Create Supabase client with cookie handling
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set(name, value, options)
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.delete(name)
          },
        },
      }
    )
    
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.BASE_URL}/reset-password`,
    })

    if (error) {
      return { error: error.message }
    }

    return { success: true }
  } catch (error: any) {
    return { error: error.message || 'An unexpected error occurred' }
  }
}