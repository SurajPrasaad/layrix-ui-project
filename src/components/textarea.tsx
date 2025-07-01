import React from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'default' | 'outlined';
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          'w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary',
          variant === 'default' && 'bg-gray-700 border border-gray-600',
          variant === 'outlined' && 'bg-gray-700 border border-gray-600',
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
