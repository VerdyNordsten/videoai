'use client';

import { useState } from 'react';
import { useActionState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { FaSpinner, FaVideo } from 'react-icons/fa6';
import { ActionState } from '@/lib/auth/middleware';
import { 
  EmailInput, 
  PasswordInput, 
  SocialLoginButtons, 
  AuthFormWrapper 
} from '@/components/auth';
import { signIn, signUp } from '@/lib/auth/actions';

interface LoginProps {
  mode?: 'signin' | 'signup';
}

export function Login({ mode = 'signin' }: LoginProps) {
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect');
  const priceId = searchParams.get('priceId');
  const inviteId = searchParams.get('inviteId');
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    mode === 'signin' ? signIn : signUp,
    { error: '' }
  );

  // Floating animation classes
  const floatingAnimation = "absolute inset-0 pointer-events-none";
  const floatingElement = "absolute rounded-full bg-white/20 dark:bg-white/10 floating-animation";

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      {/* Left Panel - Product Value */}
      <div className="hidden lg:flex flex-col justify-center items-center p-12 relative overflow-hidden bg-gradient-to-br from-pink-500 via-blue-500 to-purple-500 dark:from-pink-900 dark:via-blue-900 dark:to-purple-900">
        {/* Floating Elements */}
        <div className={floatingAnimation}>
          <div className={`${floatingElement} top-20 left-16 w-16 h-16 opacity-20 dark:opacity-10 animate-float`} style={{ animationDelay: '0s' }}></div>
          <div className={`${floatingElement} top-40 right-20 w-12 h-12 opacity-25 dark:opacity-15 animate-float`} style={{ animationDelay: '-1.5s' }}></div>
          <div className={`${floatingElement} bottom-32 left-24 w-20 h-20 opacity-15 dark:opacity-10 animate-float`} style={{ animationDelay: '-3s' }}></div>
          <div className={`${floatingElement} bottom-20 right-16 w-14 h-14 opacity-30 dark:opacity-20 animate-float`} style={{ animationDelay: '-4.5s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-md text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm dark:bg-white/10">
              <FaVideo className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-xl text-white">VideoAI</h3>
          </div>

          {/* Main Pitch */}
          <h2 className="font-bold text-3xl lg:text-4xl mb-6 leading-tight text-white">
            Turn Reels into Fresh Marketing Ideas
          </h2>

          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Upload any short video and get AI-powered hooks, scripts, and captions that convert.
          </p>

          {/* Benefits */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center text-left">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 backdrop-blur-sm dark:bg-white/10">
                <span className="text-sm">✨</span>
              </div>
              <span className="text-white/95 dark:text-white/85">AI analyzes video structure & hooks</span>
            </div>
            <div className="flex items-center text-left">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 backdrop-blur-sm dark:bg-white/10">
                <span className="text-sm">🚀</span>
              </div>
              <span className="text-white/95 dark:text-white/85">Generate viral marketing variations</span>
            </div>
            <div className="flex items-center text-left">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 backdrop-blur-sm dark:bg-white/10">
                <span className="text-sm">📊</span>
              </div>
              <span className="text-white/95 dark:text-white/85">Export to Notion, Docs & more</span>
            </div>
          </div>

          {/* Illustration Icons */}
          <div className="flex justify-center space-x-6 opacity-80">
            <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center backdrop-blur-sm dark:bg-white/10">
              <span>📤</span>
            </div>
            <div className="w-2 h-2 bg-white/40 rounded-full self-center dark:bg-white/30"></div>
            <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center backdrop-blur-sm dark:bg-white/10">
              <span>🧠</span>
            </div>
            <div className="w-2 h-2 bg-white/40 rounded-full self-center dark:bg-white/30"></div>
            <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center backdrop-blur-sm dark:bg-white/10">
              <span>💡</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex flex-col justify-center items-center p-6 lg:p-12 relative">
        {/* Mobile Header */}
        <div className="lg:hidden w-full mb-8 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
            <FaVideo className="h-6 w-6 text-white" />
          </div>
          <h3 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">VideoAI</h3>
        </div>

        {/* Updated Login Form using reusable components */}
        <AuthFormWrapper
          title={mode === 'signin' ? 'Welcome back' : 'Create your account'}
          description={
            mode === 'signin' 
              ? 'Sign in to turn videos into fresh ideas.' 
              : 'Sign up to start turning videos into fresh ideas.'
          }
          mode={mode}
          redirect={redirect}
          priceId={priceId}
          error={state?.error}
          action={formAction}
          socialLoginButtons={<SocialLoginButtons />}
        >
          <input type="hidden" name="redirect" value={redirect || ''} />
          <input type="hidden" name="priceId" value={priceId || ''} />
          <input type="hidden" name="inviteId" value={inviteId || ''} />
          
          {/* Email Field */}
          <EmailInput
            id="email"
            name="email"
            label="Email Address"
            defaultValue={state.email}
            required
            maxLength={50}
            placeholder="creator@example.com"
            autoComplete={mode === 'signin' ? 'email' : 'email'}
          />

          {/* Password Field */}
          <PasswordInput
            id="password"
            name="password"
            label="Password"
            defaultValue={state.password}
            required
            minLength={8}
            maxLength={100}
            placeholder="Enter your password"
            autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
          />

          {/* Actions Row */}
          <div className="flex items-center justify-between text-sm">
            {mode === 'signin' ? (
              <>
                <label className="flex items-center text-muted-foreground cursor-pointer dark:text-muted-foreground/80">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    className="mr-2 rounded border-gray-300 text-blue-400 focus:ring-blue-400 focus:ring-2 dark:border-gray-600 dark:bg-gray-800"
                  />
                  Remember me
                </label>
                <span className="text-blue-500 hover:text-purple-500 transition-colors font-semibold cursor-pointer dark:text-blue-400 dark:hover:text-purple-400">
                  Forgot password?
                </span>
              </>
            ) : (
              <div></div>
            )}
          </div>

          {/* Sign In Button */}
          <Button
            type="submit"
            disabled={pending}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:scale-105 shadow-lg transition-all focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {pending ? (
              <>
                <FaSpinner className="animate-spin mr-2 h-4 w-4" />
                {mode === 'signin' ? 'Signing In...' : 'Signing Up...'}
              </>
            ) : mode === 'signin' ? (
              'Sign In'
            ) : (
              'Sign Up'
            )}
          </Button>
        </AuthFormWrapper>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-muted-foreground dark:text-muted-foreground/80">
          <p>© 2024 VideoAI. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <span className="hover:text-blue-500 transition-colors cursor-pointer dark:hover:text-blue-400">Privacy</span>
            <span className="hover:text-blue-500 transition-colors cursor-pointer dark:hover:text-blue-400">Terms</span>
            <span className="hover:text-blue-500 transition-colors cursor-pointer dark:hover:text-blue-400">Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}