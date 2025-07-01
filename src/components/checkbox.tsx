import React from 'react';
import { cn } from '@/lib/utils';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'filled';
  label?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, variant = 'default', label, ...props }, ref) => {
    return (
      <label className="flex items-center space-x-3">
        <input
          ref={ref}
          type="checkbox"
          className={cn(
            'rounded focus:ring-primary focus:ring-2',
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

Checkbox.displayName = 'Checkbox';
