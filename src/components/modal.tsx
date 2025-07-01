import React from 'react';
import { cn } from '@/lib/utils';

interface ModalProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  isOpen: boolean;
  onClose: () => void;
  variant?: 'default' | 'fullscreen' | 'small' | 'large';
  title?: React.ReactNode;
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, onClose, variant = 'default', title, className, ...props }, ref) => {
    if (!isOpen) return null;

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          ref={ref}
          className={cn(
            'relative bg-gray-800 rounded-lg shadow-xl',
            variant === 'default' && 'max-w-md w-full',
            variant === 'fullscreen' && 'w-full h-full',
            variant === 'small' && 'max-w-sm w-full',
            variant === 'large' && 'max-w-2xl w-full',
            className
          )}
          onClick={(e) => e.stopPropagation()}
          {...props}
        >
          {title && (
            <div className="px-6 py-4 border-b border-gray-700 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white"
              >
                ×
              </button>
            </div>
          )}
          <div className="px-6 py-4">
            {props.children}
          </div>
        </div>
      </div>
    );
  }
);

Modal.displayName = 'Modal';
