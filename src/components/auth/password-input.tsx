'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

interface PasswordInputProps {
  id: string;
  name: string;
  label: string;
  defaultValue?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  autoComplete?: string;
}

export function PasswordInput({
  id,
  name,
  label,
  defaultValue,
  required = false,
  minLength,
  maxLength,
  placeholder,
  autoComplete
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Label
        htmlFor={id}
        className="block text-sm font-semibold text-foreground mb-2"
      >
        {label}
      </Label>
      <div className="relative">
        <Input
          id={id}
          name={name}
          type={showPassword ? "text" : "password"}
          autoComplete={autoComplete}
          defaultValue={defaultValue}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          className="w-full px-4 py-3 pr-12 rounded-xl border-2 border-gray-200 bg-background font-inter text-foreground placeholder-muted-foreground focus:border-blue-400 focus:bg-white transition-all"
          placeholder={placeholder}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-blue-400 transition-colors focus:outline-none"
        >
          {showPassword ? (
            <FaEyeSlash className="h-5 w-5" />
          ) : (
            <FaEye className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
}