'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useActionState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Loader2, Video } from 'lucide-react';
import { signIn, signUp } from './actions';
import { ActionState } from '@/lib/auth/middleware';

export function Login({ mode = 'signin' }: { mode?: 'signin' | 'signup' }) {
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect');
  const priceId = searchParams.get('priceId');
  const inviteId = searchParams.get('inviteId');
  const [showPassword, setShowPassword] = useState(false);
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    mode === 'signin' ? signIn : signUp,
    { error: '' }
  );

  // Floating animation classes
  const floatingAnimation = "absolute inset-0 pointer-events-none";
  const floatingElement = "absolute rounded-full bg-white/20 floating-animation";

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      {/* Left Panel - Product Value */}
      <div className="hidden lg:flex flex-col justify-center items-center p-12 relative overflow-hidden bg-gradient-to-br from-pink-200 via-blue-200 to-purple-200">
        {/* Floating Elements */}
        <div className={floatingAnimation}>
          <div className={`${floatingElement} top-20 left-16 w-16 h-16 opacity-20 animate-float`} style={{ animationDelay: '0s' }}></div>
          <div className={`${floatingElement} top-40 right-20 w-12 h-12 opacity-25 animate-float`} style={{ animationDelay: '-1.5s' }}></div>
          <div className={`${floatingElement} bottom-32 left-24 w-20 h-20 opacity-15 animate-float`} style={{ animationDelay: '-3s' }}></div>
          <div className={`${floatingElement} bottom-20 right-16 w-14 h-14 opacity-30 animate-float`} style={{ animationDelay: '-4.5s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-md text-center text-white">
          {/* Logo/Brand */}
          <div className="mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <Video className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-xl">VideoAI</h3>
          </div>

          {/* Main Pitch */}
          <h2 className="font-bold text-3xl lg:text-4xl mb-6 leading-tight">
            Turn Reels into Fresh Marketing Ideas
          </h2>

          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Upload any short video and get AI-powered hooks, scripts, and captions that convert.
          </p>

          {/* Benefits */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center text-left">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 backdrop-blur-sm">
                <span className="text-sm">✨</span>
              </div>
              <span className="text-white/95">AI analyzes video structure & hooks</span>
            </div>
            <div className="flex items-center text-left">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 backdrop-blur-sm">
                <span className="text-sm">🚀</span>
              </div>
              <span className="text-white/95">Generate viral marketing variations</span>
            </div>
            <div className="flex items-center text-left">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 backdrop-blur-sm">
                <span className="text-sm">📊</span>
              </div>
              <span className="text-white/95">Export to Notion, Docs & more</span>
            </div>
          </div>

          {/* Illustration Icons */}
          <div className="flex justify-center space-x-6 opacity-80">
            <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <span>📤</span>
            </div>
            <div className="w-2 h-2 bg-white/40 rounded-full self-center"></div>
            <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <span>🧠</span>
            </div>
            <div className="w-2 h-2 bg-white/40 rounded-full self-center"></div>
            <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center backdrop-blur-sm">
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
            <Video className="h-6 w-6 text-white" />
          </div>
          <h3 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">VideoAI</h3>
        </div>

        {/* Login Card */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 relative">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-bold text-2xl lg:text-3xl text-foreground mb-2">
              {mode === 'signin' ? 'Welcome back' : 'Create your account'}
            </h1>
            <p className="text-muted-foreground">
              {mode === 'signin' 
                ? 'Sign in to turn videos into fresh ideas.' 
                : 'Sign up to start turning videos into fresh ideas.'}
            </p>
          </div>

          {/* Error Alert */}
          {state?.error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl animate-shake">
              <div className="flex items-center">
                <span className="text-red-700 text-sm">{state.error}</span>
              </div>
            </div>
          )}

          {/* Login Form */}
          <form className="space-y-6" action={formAction}>
            <input type="hidden" name="redirect" value={redirect || ''} />
            <input type="hidden" name="priceId" value={priceId || ''} />
            <input type="hidden" name="inviteId" value={inviteId || ''} />
            
            {/* Email Field */}
            <div>
              <Label
                htmlFor="email"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                defaultValue={state.email}
                required
                maxLength={50}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-background font-inter text-foreground placeholder-muted-foreground focus:border-blue-400 focus:bg-white transition-all"
                placeholder="creator@example.com"
              />
            </div>

            {/* Password Field */}
            <div>
              <Label
                htmlFor="password"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
                  defaultValue={state.password}
                  required
                  minLength={8}
                  maxLength={100}
                  className="w-full px-4 py-3 pr-12 rounded-xl border-2 border-gray-200 bg-background font-inter text-foreground placeholder-muted-foreground focus:border-blue-400 focus:bg-white transition-all"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-blue-400 transition-colors focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Actions Row */}
            <div className="flex items-center justify-between text-sm">
              {mode === 'signin' ? (
                <>
                  <Label className="flex items-center text-muted-foreground cursor-pointer">
                    <input
                      type="checkbox"
                      id="remember"
                      name="remember"
                      className="mr-2 rounded border-gray-300 text-blue-400 focus:ring-blue-400 focus:ring-2"
                    />
                    Remember me
                  </Label>
                  <span className="text-blue-500 hover:text-purple-500 transition-colors font-semibold cursor-pointer">
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
                  <Loader2 className="animate-spin mr-2 h-4 w-4" />
                  {mode === 'signin' ? 'Signing In...' : 'Signing Up...'}
                </>
              ) : mode === 'signin' ? (
                'Sign In'
              ) : (
                'Sign Up'
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-4 text-sm text-muted-foreground">or continue with</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <Button
              variant="outline"
              className="flex items-center justify-center py-3 px-4 rounded-xl border-2 border-blue-200/30 bg-white hover:border-blue-400 hover:bg-blue-400/5 transition-all hover:scale-105"
            >
              <span className="font-semibold text-foreground">Google</span>
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center py-3 px-4 rounded-xl border-2 border-purple-200/30 bg-white hover:border-purple-400 hover:bg-purple-400/5 transition-all hover:scale-105"
            >
              <span className="font-semibold text-foreground">GitHub</span>
            </Button>
          </div>

          {/* Register Link */}
          <div className="text-center">
            <span className="text-muted-foreground">
              {mode === 'signin' ? 'No account? ' : 'Already have an account? '}
            </span>
            <Link
              href={`/${mode === 'signin' ? 'signup' : 'sign-in'}${redirect ? `?redirect=${redirect}` : ''}${priceId ? `&priceId=${priceId}` : ''}`}
              className="text-blue-500 hover:text-purple-500 transition-colors font-semibold"
            >
              {mode === 'signin' ? 'Create one' : 'Sign in'}
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 VideoAI. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <span className="hover:text-blue-500 transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-blue-500 transition-colors cursor-pointer">Terms</span>
            <span className="hover:text-blue-500 transition-colors cursor-pointer">Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}