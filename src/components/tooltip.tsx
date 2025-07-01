import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ children, content, placement = 'top', className, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <div
        ref={ref}
        className="relative inline-block"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        {...props}
      >
        {children}
        {isVisible && (
          <div
            className={cn(
              'absolute z-50 px-3 py-2 rounded-md text-sm font-medium bg-gray-800 text-white shadow-lg',
              placement === 'top' && 'bottom-full left-1/2 -translate-x-1/2 mb-2',
              placement === 'bottom' && 'top-full left-1/2 -translate-x-1/2 mt-2',
              placement === 'left' && 'right-full top-1/2 -translate-y-1/2 mr-2',
              placement === 'right' && 'left-full top-1/2 -translate-y-1/2 ml-2',
              className
            )}
          >
            {content}
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';
