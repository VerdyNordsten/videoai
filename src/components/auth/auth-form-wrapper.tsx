'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface AuthFormWrapperProps {
  title: string;
  description: string;
  children: ReactNode;
  mode: 'signin' | 'signup';
  redirect?: string | null;
  priceId?: string | null;
  error?: string;
  action: (payload: FormData) => void;
  socialLoginButtons?: ReactNode;
}

export function AuthFormWrapper({
  title,
  description,
  children,
  mode,
  redirect,
  priceId,
  error,
  action,
  socialLoginButtons
}: AuthFormWrapperProps) {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 relative dark:bg-gray-800 dark:border-gray-700">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="font-bold text-2xl lg:text-3xl text-foreground mb-2 dark:text-white">
          {title}
        </h1>
        <p className="text-muted-foreground dark:text-muted-foreground/80">
          {description}
        </p>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl animate-shake dark:bg-red-900/20 dark:border-red-800">
          <div className="flex items-center">
            <span className="text-red-700 text-sm dark:text-red-300">{error}</span>
          </div>
        </div>
      )}

      {/* Form */}
      <form className="space-y-6" action={action}>
        {children}
      </form>

      {/* Divider */}
      <div className="my-8 flex items-center">
        <div className="flex-1 border-t border-gray-200 dark:border-gray-700"></div>
        <span className="px-4 text-sm text-muted-foreground dark:text-muted-foreground/80">or continue with</span>
        <div className="flex-1 border-t border-gray-200 dark:border-gray-700"></div>
      </div>

      {/* Social Login */}
      {socialLoginButtons && (
        <div className="mb-6">
          {socialLoginButtons}
        </div>
      )}

      {/* Register Link */}
      <div className="text-center">
        <span className="text-muted-foreground dark:text-muted-foreground/80">
          {mode === 'signin' ? 'No account? ' : 'Already have an account? '}
        </span>
        <Link
          href={`/${mode === 'signin' ? 'register' : 'login'}${redirect ? `?redirect=${redirect}` : ''}${priceId ? `&priceId=${priceId}` : ''}`}
          className="text-blue-500 hover:text-purple-500 transition-colors font-semibold dark:text-blue-400 dark:hover:text-purple-400"
        >
          {mode === 'signin' ? 'Create one' : 'Sign in'}
        </Link>
      </div>
    </div>
  );
}