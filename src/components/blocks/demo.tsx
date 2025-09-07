'use client';
import { useState, ChangeEvent, FormEvent, ReactNode } from 'react';

import {
  Ripple,
  AuthTabs,
  TechOrbitDisplay,
} from '@/components/blocks/modern-animated-sign-in';
import { FaInstagram, FaTiktok, FaYoutube, FaFacebook, FaSnapchat } from 'react-icons/fa';

type FormData = {
  email: string;
  password: string;
};

interface OrbitIcon {
  component: () => ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  reverse?: boolean;
}

// Updated iconsArray with social media icons from the landing page
const iconsArray: OrbitIcon[] = [
  {
    component: () => (
      <FaInstagram className="w-8 h-8" style={{ color: "#E1306C" }} />
    ),
    className: "size-[30px] border-none bg-transparent",
    duration: 20,
    delay: 10,
    radius: 100,
    path: false,
    reverse: false,
  },
  {
    component: () => (
      <FaTiktok className="w-8 h-8" style={{ color: "#000000" }} />
    ),
    className: "size-[30px] border-none bg-transparent",
    duration: 20,
    delay: 20,
    radius: 100,
    path: false,
    reverse: false,
  },
  {
    component: () => (
      <FaYoutube className="w-8 h-8" style={{ color: "#FF0000" }} />
    ),
    className: "size-[50px] border-none bg-transparent",
    radius: 210,
    duration: 20,
    delay: 10,
    path: false,
    reverse: false,
  },
  {
    component: () => (
      <FaFacebook className="w-8 h-8" style={{ color: "#1877F2" }} />
    ),
    className: "size-[50px] border-none bg-transparent",
    radius: 210,
    duration: 20,
    delay: 20,
    path: false,
    reverse: false,
  },
  {
    component: () => (
      <FaSnapchat className="w-8 h-8" style={{ color: "#FFFC00" }} />
    ),
    className: "size-[30px] border-none bg-transparent",
    duration: 20,
    delay: 10,
    radius: 150,
    path: false,
    reverse: true,
  },
  {
    component: () => (
      <FaInstagram className="w-8 h-8" style={{ color: "#E1306C" }} />
    ),
    className: "size-[30px] border-none bg-transparent",
    duration: 20,
    delay: 20,
    radius: 150,
    path: false,
    reverse: true,
  },
  {
    component: () => (
      <FaTiktok className="w-8 h-8" style={{ color: "#000000" }} />
    ),
    className: "size-[50px] border-none bg-transparent",
    radius: 270,
    duration: 20,
    delay: 10,
    path: false,
    reverse: true,
  },
  {
    component: () => (
      <FaYoutube className="w-8 h-8" style={{ color: "#FF0000" }} />
    ),
    className: "size-[50px] border-none bg-transparent",
    radius: 270,
    duration: 20,
    delay: 60,
    path: false,
    reverse: true,
  },
  {
    component: () => (
      <FaFacebook className="w-8 h-8" style={{ color: "#1877F2" }} />
    ),
    className: "size-[50px] border-none bg-transparent",
    radius: 320,
    duration: 20,
    delay: 10,
    path: false,
    reverse: false,
  },
];

export function Demo() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const goToForgotPassword = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    event.preventDefault();
    console.log('forgot password');
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    name: keyof FormData
  ) => {
    const value = event.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted', formData);
  };

  const formFields = {
    header: 'Welcome back',
    subHeader: 'Sign in to your account',
    fields: [
      {
        label: 'Email',
        required: true,
        type: 'email' as const,
        placeholder: 'Enter your email address',
        onChange: (event: ChangeEvent<HTMLInputElement>) =>
          handleInputChange(event, 'email'),
      },
      {
        label: 'Password',
        required: true,
        type: 'password' as const,
        placeholder: 'Enter your password',
        onChange: (event: ChangeEvent<HTMLInputElement>) =>
          handleInputChange(event, 'password'),
      },
    ],
    submitButton: 'Sign in',
    textVariantButton: 'Forgot password?',
  };

  return (
    <section className='flex max-lg:justify-center'>
      {/* Left Side */}
      <span className='flex flex-col justify-center w-1/2 max-lg:hidden'>
        <Ripple mainCircleSize={100} />
        <TechOrbitDisplay iconsArray={iconsArray} />
      </span>

      {/* Right Side */}
      <span className='w-1/2 h-[100dvh] flex flex-col justify-center items-center max-lg:w-full max-lg:px-[10%]'>
        <AuthTabs
          formFields={formFields}
          goTo={goToForgotPassword}
          handleSubmit={handleSubmit}
        />
      </span>
    </section>
  );
}