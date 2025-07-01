import React from 'react';
import { cn } from '@/lib/utils';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'success' | 'warning' | 'danger' | 'info';
  title?: string;
  closable?: boolean;
  onClose?: () => void;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({
    className,
    variant = 'info',
    title,
    closable = true,
    onClose,
    ...props
  },
  ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg p-4 flex items-center',
          variant === 'success' && 'bg-success/10 text-success',
          variant === 'warning' && 'bg-warning/10 text-warning',
          variant === 'danger' && 'bg-danger/10 text-danger',
          variant === 'info' && 'bg-info/10 text-info',
          className
        )}
        {...props}
      >
        <div className="flex-1">
          {title && (
            <h3 className="font-medium mb-1">{title}</h3>
          )}
          <p>{props.children}</p>
        </div>
        {closable && onClose && (
          <button
            onClick={onClose}
            className="ml-4 text-gray-400 hover:text-gray-300"
          >
            ×
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';
