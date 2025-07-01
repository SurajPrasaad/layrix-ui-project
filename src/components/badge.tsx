import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  pill?: boolean;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'primary', pill = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
          pill && 'rounded-full',
          variant === 'primary' && 'bg-primary/20 text-primary',
          variant === 'success' && 'bg-success/20 text-success',
          variant === 'warning' && 'bg-warning/20 text-warning',
          variant === 'danger' && 'bg-danger/20 text-danger',
          variant === 'info' && 'bg-info/20 text-info',
          className
        )}
        {...props}
      >
        {props.children}
      </div>
    );
  }
);

Badge.displayName = 'Badge';
