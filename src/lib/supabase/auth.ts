'use server'

import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Sign in with email and password
export async function signInWithEmail(email: string, password: string) {
  console.log('signInWithEmail called with email:', email);
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      console.error('signInWithEmail error:', error.message);
      return { error: error.message }
    }

    console.log('signInWithEmail successful');
    // Set session cookies
    const cookieStore = await cookies()
    cookieStore.set('sb-access-token', data.session?.access_token || '', {
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    })

    cookieStore.set('sb-refresh-token', data.session?.refresh_token || '', {
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    })

    return { success: true }
  } catch (error: any) {
    console.error('signInWithEmail exception:', error);
    return { error: error.message || 'An unexpected error occurred' }
  }
}

// Sign up with email and password
export async function signUpWithEmail(email: string, password: string) {
  console.log('signUpWithEmail called with email:', email);
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      console.error('signUpWithEmail error:', error.message);
      return { error: error.message }
    }

    console.log('signUpWithEmail successful');
    // If email confirmation is enabled, the user will receive an email
    // Otherwise, they'll be signed in immediately
    if (data.session) {
      // Set session cookie
      const cookieStore = await cookies()
      cookieStore.set('sb-access-token', data.session.access_token, {
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      })

      cookieStore.set('sb-refresh-token', data.session.refresh_token, {
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      })
    }

    return { success: true, requiresEmailConfirmation: !data.session }
  } catch (error: any) {
    console.error('signUpWithEmail exception:', error);
    return { error: error.message || 'An unexpected error occurred' }
  }
}

// Sign in with Google
export async function getGoogleSignInUrl() {
  console.log('getGoogleSignInUrl called');
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${process.env.BASE_URL}/dashboard`,
      }
    })

    if (error) {
      console.error('getGoogleSignInUrl error:', error.message);
      return { error: error.message }
    }

    console.log('getGoogleSignInUrl successful, url:', data.url);
    return { url: data.url }
  } catch (error: any) {
    console.error('getGoogleSignInUrl exception:', error);
    return { error: error.message || 'An unexpected error occurred' }
  }
}

// Sign up with Google
export async function getGoogleSignUpUrl() {
  console.log('getGoogleSignUpUrl called');
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${process.env.BASE_URL}/dashboard`,
      }
    })

    if (error) {
      console.error('getGoogleSignUpUrl error:', error.message);
      return { error: error.message }
    }

    console.log('getGoogleSignUpUrl successful, url:', data.url);
    return { url: data.url }
  } catch (error: any) {
    console.error('getGoogleSignUpUrl exception:', error);
    return { error: error.message || 'An unexpected error occurred' }
  }
}

// Sign out
export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut()

    if (error) {
      return { error: error.message }
    }

    // Clear session cookies
    const cookieStore = await cookies()
    cookieStore.delete('sb-access-token')
    cookieStore.delete('sb-refresh-token')

    redirect('/login')
  } catch (error: any) {
    return { error: error.message || 'An unexpected error occurred' }
  }
}

// Get current user
export async function getCurrentUser() {
  try {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('sb-access-token')?.value

    if (!accessToken) {
      return null
    }

    const { data, error } = await supabase.auth.getUser(accessToken)

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