import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  variant?: 'default' | 'striped' | 'animated';
  size?: 'sm' | 'md' | 'lg';
}

export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ className, value, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'w-full rounded-full bg-gray-700 overflow-hidden',
          size === 'sm' && 'h-2',
          size === 'md' && 'h-3',
          size === 'lg' && 'h-4',
          className
        )}
        {...props}
      >
        <div
          className={cn(
            'h-full bg-primary transition-all duration-300',
            variant === 'striped' && 'bg-gradient-to-r from-primary to-primary/80',
            variant === 'animated' && 'animate-progress'
          )}
          style={{ width: `${value}%` }}
        />
      </div>
    );
  }
);

ProgressBar.displayName = 'ProgressBar';
