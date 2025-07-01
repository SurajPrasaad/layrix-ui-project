import React from 'react';
import { cn } from '@/lib/utils';

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
  variant?: 'rounded' | 'circular' | 'square';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
  ({ src, alt, className, variant = 'circular', size = 'md' }, ref) => {
    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={cn(
          'object-cover',
          variant === 'rounded' && 'rounded-lg',
          variant === 'circular' && 'rounded-full',
          variant === 'square' && 'rounded-none',
          size === 'sm' && 'w-8 h-8',
          size === 'md' && 'w-12 h-12',
          size === 'lg' && 'w-16 h-16',
          size === 'xl' && 'w-20 h-20',
          className
        )}
      />
    );
  }
);

Avatar.displayName = 'Avatar';
