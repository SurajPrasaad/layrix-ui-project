import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered' | 'compact';
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', header, footer, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg overflow-hidden',
          variant === 'default' && 'bg-gray-800',
          variant === 'elevated' && 'bg-gray-800 shadow-lg',
          variant === 'bordered' && 'bg-gray-800 border border-gray-700',
          variant === 'compact' && 'bg-gray-800 p-4',
          className
        )}
        {...props}
      >
        {header && <div className="px-6 py-4 border-b border-gray-700">{header}</div>}
        <div className="px-6 py-4">
          {props.children}
        </div>
        {footer && <div className="px-6 py-4 border-t border-gray-700">{footer}</div>}
      </div>
    );
  }
);

Card.displayName = 'Card';
