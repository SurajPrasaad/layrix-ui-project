import React from 'react';
import { cn } from '@/lib/utils';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'filled';
  label?: string;
  value: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, variant = 'default', label, value, ...props }, ref) => {
    return (
      <label className="flex items-center space-x-3">
        <input
          ref={ref}
          type="radio"
          value={value}
          className={cn(
            'rounded-full focus:ring-primary focus:ring-2',
            variant === 'default' && 'bg-gray-800 border border-gray-700',
            variant === 'filled' && 'bg-gray-800 border border-primary',
            className
          )}
          {...props}
        />
        {label && (
          <span className="text-gray-300">{label}</span>
        )}
      </label>
    );
  }
);

Radio.displayName = 'Radio';
