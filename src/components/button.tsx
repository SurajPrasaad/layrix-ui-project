import React from 'react';
import { cn } from '@/lib/utils';
import { motion, type Transition } from 'framer-motion';
import type { MouseEvent } from 'react';

interface CustomProps {
  variant?: 'default' | 'outline' | 'ghost' | 'primary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  loading?: boolean;
  animated?: boolean;
  animatedBorder?: boolean;
  fancyHover?: boolean;
  entrance?: boolean;
}

type ButtonProps = CustomProps & {
  ref?: React.Ref<HTMLButtonElement>;
  animated?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonInner = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'default',
      size = 'md',
      className = '',
      children,
      loading = false,
      animated = false,
      animatedBorder = false,
      fancyHover = false,
      entrance = false,
      onClick,
      onDrag,
      ...props
    }: ButtonProps,
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden';

    const variantStyles = {
      default: 'bg-zinc-800 text-white hover:bg-zinc-700 focus:ring-zinc-500',
      outline: 'bg-transparent border border-white/30 text-white hover:bg-white/10 focus:ring-white',
      ghost: 'bg-transparent text-white hover:bg-white/10 focus:ring-white',
      primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-600',
    }[variant];

    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2',
      lg: 'px-6 py-3 text-lg',
    }[size];

    const motionProps = animated
      ? {
          initial: entrance ? { opacity: 0, y: 10 } : undefined,
          animate: entrance ? { opacity: 1, y: 0 } : undefined,
          whileHover: fancyHover
            ? {
                scale: 1.06,
                rotate: 1,
                boxShadow: '0px 0px 16px rgba(255, 255, 255, 0.4)',
              }
            : { scale: 1.03 },
          whileTap: { scale: 0.95 },
          transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } as Transition,
        }
      : {};

    return (
      <>
        {animated ? (
          <motion.button
            ref={ref}
            {...motionProps}
            className={cn(
              baseStyles,
              variantStyles,
              sizeStyles,
              className
            )}
            disabled={loading}
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              if (onClick) {
                onClick(e);
              }
            }}
          >
            {children}
          </motion.button>
        ) : (
          <button
            ref={ref}
            className={cn(
              baseStyles,
              variantStyles,
              sizeStyles,
              className
            )}
            disabled={loading}
            {...props}
          >
            {children}
          </button>
        )}
        {animatedBorder && (
          <span
            className="absolute inset-0 border border-primary-500 rounded-lg animate-border-glow pointer-events-none"
            aria-hidden
          />
        )}
      </>
    );
  }
);

ButtonInner.displayName = 'ButtonInner';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <ButtonInner {...props} ref={ref} />
);

Button.displayName = 'Button';
