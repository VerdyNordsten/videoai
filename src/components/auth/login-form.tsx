'use client';

import { useState, useEffect } from 'react';
import { useActionState } from 'react';
import { useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { FaSpinner, FaVideo } from 'react-icons/fa6';
import { ActionState } from '@/lib/auth/middleware';
import { signInWithEmail, signUpWithEmail, getGoogleSignInUrl, getGoogleSignUpUrl } from '@/lib/supabase/auth';
import { AuthTabs } from '@/components/blocks/modern-animated-sign-in';
import { FaInstagram, FaTiktok, FaYoutube, FaFacebook, FaSnapchat } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

interface LoginProps {
  mode?: 'signin' | 'signup';
}

export function Login({ mode = 'signin' }: LoginProps) {
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect');
  const priceId = searchParams.get('priceId');
  const inviteId = searchParams.get('inviteId');
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    mode === 'signin' ? 
      async (prevState: ActionState, formData: FormData) => {
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        
        const result = await signInWithEmail(email, password);
        
        if (result.error) {
          toast.error('Login failed', {
            description: result.error,
          });
          return { error: result.error };
        }
        
        toast.success('Login successful', {
          description: 'Welcome back! Redirecting to dashboard...',
        });
        
        // Redirect to dashboard on successful sign in
        window.location.href = '/dashboard';
        return { error: '' };
      } : 
      async (prevState: ActionState, formData: FormData) => {
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        
        const result = await signUpWithEmail(email, password);
        
        if (result.error) {
          toast.error('Registration failed', {
            description: result.error,
          });
          return { error: result.error };
        }
        
        toast.success('Account created successfully', {
          description: 'Welcome! Redirecting to dashboard...',
        });
        
        // Redirect to dashboard on successful sign up
        window.location.href = '/dashboard';
        return { error: '' };
      },
    { error: '' }
  );

  // Form state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Handle form input changes
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const value = event.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle Google authentication
  const handleGoogleAuth = async () => {
    const toastId = toast.loading('Redirecting to Google for authentication...');
    try {
      let result;
      if (mode === 'signin') {
        result = await getGoogleSignInUrl();
      } else {
        result = await getGoogleSignUpUrl();
      }

      if (result.error) {
        // If the error indicates that the account already exists, show a specific message
        if (result.error.includes('already exists')) {
          toast.error('Account already exists', {
            description: 'An account with this email already exists. Redirecting to login...',
            id: toastId,
          });
          // Redirect to login after a short delay
          setTimeout(() => {
            window.location.href = '/login';
          }, 2000);
        } else {
          toast.error('Google authentication failed', {
            description: result.error,
            id: toastId,
          });
        }
        return;
      }

      if (result.url) {
        // Update toast to show we're redirecting
        toast.loading('Opening Google authentication window...', { id: toastId });
        
        // Calculate centered position for the popup
        const width = 600;
        const height = 700;
        const left = (window.screen.width / 2) - (width / 2);
        const top = (window.screen.height / 2) - (height / 2);
        
        // Open the Google OAuth URL in a centered popup window
        // Using noopener to prevent COOP issues
        const authWindow = window.open(
          result.url, 
          'google-auth-popup', 
          `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
        );
        
        if (!authWindow) {
          toast.error('Failed to open Google authentication popup', { id: toastId });
          return;
        }
        
        // Listen for successful authentication message from the popup
        const handleAuthSuccess = (event: MessageEvent) => {
          // Verify the message is from our domain
          if (event.origin !== window.location.origin) {
            return;
          }
          
          // Check if the message indicates successful authentication
          if (event.data?.type === 'google-auth-success') {
            // Clean up the event listener
            window.removeEventListener('message', handleAuthSuccess);
            // Show success message
            toast.success('Google authentication successful', {
              description: 'Redirecting...',
              id: toastId,
            });
            // Redirect to dashboard - the server-side callback will handle the interstitial for existing users
            window.location.href = '/dashboard';
          }
        };
        
        // Add the event listener
        window.addEventListener('message', handleAuthSuccess);
        
        // Set up polling method to check if popup is closed
        const checkClosed = setInterval(() => {
          if (authWindow.closed) {
            clearInterval(checkClosed);
            window.removeEventListener('message', handleAuthSuccess);
            // Show success message
            toast.success('Google authentication successful', {
              description: 'Redirecting...',
              id: toastId,
            });
            // Redirect to dashboard - the server-side callback will handle the interstitial for existing users
            window.location.href = '/dashboard';
          }
        }, 1000);
      }
    } catch (error: any) {
      toast.error('Google authentication failed', {
        description: error.message || 'An unexpected error occurred',
        id: toastId,
      });
    }
  };

  // Add event listener for Google login click
  useEffect(() => {
    const handleGoogleLoginClick = () => {
      handleGoogleAuth();
    };

    window.addEventListener('google-login-click', handleGoogleLoginClick);

    return () => {
      window.removeEventListener('google-login-click', handleGoogleLoginClick);
    };
  }, [mode]);

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Show loading toast
    const toastId = toast.loading(
      mode === 'signin' 
        ? 'Logging in...' 
        : 'Creating account...'
    );
    
    // Create a new FormData object and append the form data
    const form = new FormData();
    form.append('email', formData.email);
    form.append('password', formData.password);
    
    // Call the appropriate action
    if (mode === 'signin') {
      const result = await signInWithEmail(formData.email, formData.password);
      if (result.error) {
        toast.error('Login failed', {
          description: result.error,
          id: toastId,
        });
      } else {
        toast.success('Login successful', {
          description: 'Welcome back! Redirecting to dashboard...',
          id: toastId,
        });
        // Redirect to dashboard on successful sign in
        window.location.href = '/dashboard';
      }
    } else {
      const result = await signUpWithEmail(formData.email, formData.password);
      if (result.error) {
        // If the error indicates that the account already exists, show a specific message
        if (result.error.includes('already exists')) {
          toast.error('Account already exists', {
            description: 'An account with this email already exists. Redirecting to login...',
            id: toastId,
          });
          // Redirect to login after a short delay
          setTimeout(() => {
            window.location.href = '/login';
          }, 2000);
        } else {
          toast.error('Registration failed', {
            description: result.error,
            id: toastId,
          });
        }
      } else {
        toast.success('Account created successfully', {
          description: 'Welcome! Redirecting to dashboard...',
          id: toastId,
        });
        // Redirect to dashboard on successful sign up
        window.location.href = '/dashboard';
      }
    }
  };

  // Handle "forgot password" click
  const goToForgotPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    window.location.href = '/forgot-password';
  };

  // Form fields configuration
  const formFields = {
    header: mode === 'signin' ? 'Welcome back' : 'Create your account',
    subHeader: mode === 'signin' 
      ? 'Sign in to turn videos into fresh ideas.' 
      : 'Sign up to start turning videos into fresh ideas.',
    fields: [
      {
        label: 'Email',
        required: true,
        type: 'email' as const,
        placeholder: 'Enter your email address',
        onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(event, 'email'),
      },
      {
        label: 'Password',
        required: true,
        type: 'password' as const,
        placeholder: 'Enter your password',
        onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(event, 'password'),
      },
    ],
    submitButton: mode === 'signin' ? 'Sign In' : 'Sign Up',
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left Panel - Ripple background with orbital icons */}
      <div className="hidden lg:flex flex-col justify-center items-center w-1/2 p-12 relative overflow-hidden">
        {/* Full ripple effect background from QWEN.md */}
        <div className="absolute inset-0 flex items-center justify-center dark:bg-white/5 bg-neutral-50 [mask-image:linear-gradient(to_bottom,black,transparent)] dark:[mask-image:linear-gradient(to_bottom,white,transparent)]">
          {Array.from({ length: 11 }, (_, i) => {
            const size = 210 + i * 70;
            const opacity = 0.24 - i * 0.03;
            const animationDelay = `${i * 0.06}s`;
            const borderStyle = i === 10 ? 'dashed' : 'solid';
            const borderOpacity = 5 + i * 5;

            return (
              <span
                key={i}
                className="absolute animate-ripple rounded-full bg-foreground/15 border"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity: opacity,
                  animationDelay: animationDelay,
                  borderStyle: borderStyle,
                  borderWidth: '1px',
                  borderColor: `hsl(0 0% 0% / ${borderOpacity / 100})`,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            );
          })}
        </div>
        
        {/* Orbital icons that orbit on the ripple background */}
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 z-10">
            {mode === 'signin' ? 'Welcome Back' : 'Join Us'}
          </span>

          {/* Orbit 1 - Aligned with ripple circle */}
          <div
            style={
              {
                '--duration': 20,
                '--radius': 140,
                '--delay': -10,
              } as React.CSSProperties
            }
            className="absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full border-0 bg-transparent [animation-delay:calc(var(--delay)*1000ms)]"
          >
            <div className="absolute bg-white dark:bg-gray-800 rounded-full p-2 shadow-md"
              style={{
                left: '50%',
                top: '0%',
                transform: "translate(-50%, -50%)",
              }}>
              <FaInstagram className="w-6 h-6" style={{ color: "#E1306C" }} />
            </div>
            <div className="absolute bg-white dark:bg-gray-800 rounded-full p-2 shadow-md"
              style={{
                left: '100%',
                top: '50%',
                transform: "translate(-50%, -50%)",
              }}>
              <FaTiktok className="w-6 h-6" style={{ color: "#000000" }} />
            </div>
            <div className="absolute bg-white dark:bg-gray-800 rounded-full p-2 shadow-md"
              style={{
                left: '50%',
                top: '100%',
                transform: "translate(-50%, -50%)",
              }}>
              <FaYoutube className="w-6 h-6" style={{ color: "#FF0000" }} />
            </div>
            <div className="absolute bg-white dark:bg-gray-800 rounded-full p-2 shadow-md"
              style={{
                left: '0%',
                top: '50%',
                transform: "translate(-50%, -50%)",
              }}>
              <FaFacebook className="w-6 h-6" style={{ color: "#1877F2" }} />
            </div>
            <div className="absolute bg-white dark:bg-gray-800 rounded-full p-2 shadow-md"
              style={{
                left: '25%',
                top: '15%',
                transform: "translate(-50%, -50%)",
              }}>
              <FaSnapchat className="w-6 h-6" style={{ color: "#FFFC00" }} />
            </div>
          </div>

          {/* Orbit 2 - Aligned with ripple circle */}
          <div
            style={
              {
                '--duration': 25,
                '--radius': 210,
                '--delay': -15,
              } as React.CSSProperties
            }
            className="absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full border-0 bg-transparent [animation-delay:calc(var(--delay)*1000ms)] [animation-direction:reverse]"
          >
            <div className="absolute bg-white dark:bg-gray-800 rounded-full p-2 shadow-md"
              style={{
                left: '50%',
                top: '0%',
                transform: "translate(-50%, -50%)",
              }}>
              <FaYoutube className="w-6 h-6" style={{ color: "#FF0000" }} />
            </div>
            <div className="absolute bg-white dark:bg-gray-800 rounded-full p-2 shadow-md"
              style={{
                left: '100%',
                top: '50%',
                transform: "translate(-50%, -50%)",
              }}>
              <FaInstagram className="w-6 h-6" style={{ color: "#E1306C" }} />
            </div>
            <div className="absolute bg-white dark:bg-gray-800 rounded-full p-2 shadow-md"
              style={{
                left: '50%',
                top: '100%',
                transform: "translate(-50%, -50%)",
              }}>
              <FaTiktok className="w-6 h-6" style={{ color: "#000000" }} />
            </div>
            <div className="absolute bg-white dark:bg-gray-800 rounded-full p-2 shadow-md"
              style={{
                left: '0%',
                top: '50%',
                transform: "translate(-50%, -50%)",
              }}>
              <FaFacebook className="w-6 h-6" style={{ color: "#1877F2" }} />
            </div>
            <div className="absolute bg-white dark:bg-gray-800 rounded-full p-2 shadow-md"
              style={{
                left: '25%',
                top: '15%',
                transform: "translate(-50%, -50%)",
              }}>
              <FaSnapchat className="w-6 h-6" style={{ color: "#FFFC00" }} />
            </div>
          </div>

          {/* Orbit 3 - Aligned with ripple circle */}
          <div
            style={
              {
                '--duration': 30,
                '--radius': 280,
                '--delay': -20,
              } as React.CSSProperties
            }
            className="absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full border-0 bg-transparent [animation-delay:calc(var(--delay)*1000ms)]"
          >
            <div className="absolute bg-white dark:bg-gray-800 rounded-full p-2 shadow-md"
              style={{
                left: '50%',
                top: '0%',
                transform: "translate(-50%, -50%)",
              }}>
              <FaFacebook className="w-6 h-6" style={{ color: "#1877F2" }} />
            </div>
            <div className="absolute bg-white dark:bg-gray-800 rounded-full p-2 shadow-md"
              style={{
                left: '100%',
                top: '50%',
                transform: "translate(-50%, -50%)",
              }}>
              <FaSnapchat className="w-6 h-6" style={{ color: "#FFFC00" }} />
            </div>
            <div className="absolute bg-white dark:bg-gray-800 rounded-full p-2 shadow-md"
              style={{
                left: '50%',
                top: '100%',
                transform: "translate(-50%, -50%)",
              }}>
              <FaInstagram className="w-6 h-6" style={{ color: "#E1306C" }} />
            </div>
            <div className="absolute bg-white dark:bg-gray-800 rounded-full p-2 shadow-md"
              style={{
                left: '0%',
                top: '50%',
                transform: "translate(-50%, -50%)",
              }}>
              <FaTiktok className="w-6 h-6" style={{ color: "#000000" }} />
            </div>
            <div className="absolute bg-white dark:bg-gray-800 rounded-full p-2 shadow-md"
              style={{
                left: '25%',
                top: '15%',
                transform: "translate(-50%, -50%)",
              }}>
              <FaYoutube className="w-6 h-6" style={{ color: "#FF0000" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Modern Animated Form */}
      <div className="flex flex-col justify-center items-center w-full p-6 relative">
        <AuthTabs
          formFields={formFields}
          goTo={goToForgotPassword}
          handleSubmit={handleSubmit}
          googleLogin="Continue with Google"
          additionalLink={
            mode === 'signin' 
              ? {
                  text: "Don't have an account yet?",
                  href: "/register"
                }
              : {
                  text: "Already have an account?",
                  href: "/login"
                }
          }
          forgotPasswordLink={
            mode === 'signin' 
              ? {
                  text: 'Forgot Password?',
                  href: '/forgot-password'
                }
              : undefined
          }
        />
      </div>
    </div>
  );
}