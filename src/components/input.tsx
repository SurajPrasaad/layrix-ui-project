import React from 'react';
import { cn } from '@/lib/utils';

type InputSize = 'sm' | 'md' | 'lg';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'default' | 'outlined' | 'underlined';
  size?: InputSize;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary',
          variant === 'default' && 'bg-gray-700 border border-gray-600',
          variant === 'outlined' && 'bg-gray-700 border border-gray-600',
          variant === 'underlined' && 'bg-gray-700 border-b border-gray-600',
          size === 'sm' && 'px-3 py-2 text-sm',
          size === 'md' && 'px-4 py-3',
          size === 'lg' && 'px-5 py-4 text-lg',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
