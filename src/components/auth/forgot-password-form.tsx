'use client';

import { useState } from 'react';
import { useActionState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { FaSpinner, FaVideo } from 'react-icons/fa6';
import { FaInstagram, FaTiktok, FaYoutube, FaFacebook, FaSnapchat } from 'react-icons/fa';
import { ActionState } from '@/lib/auth/middleware';
import { AuthTabs } from '@/components/blocks/modern-animated-sign-in';

interface ForgotPasswordProps {}

export function ForgotPassword() {
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    async (prevState: ActionState, formData: FormData) => {
      // Implement forgot password logic here
      const email = formData.get('email') as string;
      
      // Show loading toast
      const toastId = toast.loading('Sending password reset instructions...');
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Password reset instructions sent', {
        description: `We've sent password reset instructions to ${email}`,
        id: toastId,
      });
      
      return { error: '' };
    },
    { error: '' }
  );

  // Form state
  const [formData, setFormData] = useState({
    email: '',
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

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Show loading toast
    const toastId = toast.loading('Sending password reset instructions...');
    
    // Create a new FormData object and append the form data
    const form = new FormData();
    form.append('email', formData.email);
    
    // Call the action
    formAction(form);
  };

  // Handle "back to login" click
  const goToLogin = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    window.location.href = '/login';
  };

  // Form fields configuration
  const formFields = {
    header: 'Forgot Password',
    subHeader: 'Enter your email address and we will send you a link to reset your password.',
    fields: [
      {
        label: 'Email',
        required: true,
        type: 'email' as const,
        placeholder: 'Enter your email address',
        onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(event, 'email'),
      },
    ],
    submitButton: 'Send Reset Link',
    textVariantButton: 'Back to Login',
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
            Reset Password
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
          goTo={goToLogin}
          handleSubmit={handleSubmit}
          bottomLink={{
            text: 'Remember your password?',
            linkText: 'Sign in here',
            href: '/login'
          }}
        />
      </div>
    </div>
  );
}