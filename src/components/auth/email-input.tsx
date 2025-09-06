'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface EmailInputProps {
  id?: string;
  name: string;
  label: string;
  defaultValue?: string;
  required?: boolean;
  maxLength?: number;
  placeholder?: string;
  autoComplete?: string;
}

export function EmailInput({
  id = 'email',
  name,
  label,
  defaultValue,
  required = false,
  maxLength,
  placeholder,
  autoComplete
}: EmailInputProps) {
  return (
    <div>
      <Label
        htmlFor={id}
        className="block text-sm font-semibold text-foreground mb-2"
      >
        {label}
      </Label>
      <Input
        id={id}
        name={name}
        type="email"
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        required={required}
        maxLength={maxLength}
        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-background font-inter text-foreground placeholder-muted-foreground focus:border-blue-400 focus:bg-white transition-all"
        placeholder={placeholder}
      />
    </div>
  );
}