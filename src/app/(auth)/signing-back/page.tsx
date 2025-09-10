'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createBrowserClient } from '@supabase/ssr';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Link from 'next/link';

export default function SigningBackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';
  const provider = searchParams.get('provider') || 'google';
  const [isLoading, setIsLoading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  // If no email is provided, redirect to login
  useEffect(() => {
    if (!email) {
      router.push('/login');
    }
    
    // Check if postAuth cookie exists
    const postAuth = document.cookie
      .split('; ')
      .find(row => row.startsWith('postAuth='));
    
    if (!postAuth) {
      router.push('/login');
    }
  }, [email, router]);

  const handleContinue = async () => {
    setIsLoading(true);
    try {
      // Remove postAuth cookie
      document.cookie = 'postAuth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      
      // Redirect to explore
      router.push('/explore');
    } catch (error) {
      console.error('Error continuing sign in:', error);
      setIsLoading(false);
    }
  };

  const handleCancel = async () => {
    try {
      // Sign out to clear the session
      await supabase.auth.signOut();
      
      // Remove postAuth cookie
      document.cookie = 'postAuth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      
      // Redirect to login
      router.push('/login');
    } catch (error) {
      console.error('Error canceling sign in:', error);
      router.push('/login');
    }
  };

  // Extract initials from email for avatar fallback
  const getInitials = (email: string) => {
    if (!email) return 'U';
    const [name] = email.split('@');
    return name.charAt(0).toUpperCase();
  };

  if (!email) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-6">
          <h1 className="text-2xl font-bold">You're signing back in to VideoAI</h1>
          <div className="flex flex-col items-center space-y-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">
                {getInitials(email)}
              </span>
            </div>
            <div className="bg-muted rounded-full px-4 py-1 text-sm">
              {email}
            </div>
          </div>
        </CardHeader>
        <CardContent className="text-center text-sm text-muted-foreground">
          <p>By continuing, you agree to our <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link> and <Link href="/terms" className="underline hover:text-primary">Terms of Service</Link>.</p>
        </CardContent>
        <div className="my-2 border-t border-border mx-6"></div>
        <CardFooter className="flex flex-col gap-2">
          <Button 
            className="w-full" 
            onClick={handleContinue}
            disabled={isLoading}
          >
            {isLoading ? 'Continuing...' : 'Continue'}
          </Button>
          <Button 
            variant="ghost" 
            className="w-full" 
            onClick={handleCancel}
            disabled={isLoading}
          >
            Cancel
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}