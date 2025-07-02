import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  children?: React.ReactNode;
  image?: string;
  title?: string;
  description?: string;
  button?: {
    text: string;
    onClick?: () => void;
    variant?: 'primary' | 'outline' | 'ghost';
  };
  hoverEffect?: 'scale' | 'lift' | 'fade';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      children,
      image,
      title,
      description,
      button,
      hoverEffect = 'scale'
    },
    ref
  ) => {
    const containerVariants = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 }
    };

    const cardVariants = {
      scale: {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 }
      },
      lift: {
        whileHover: { y: -5 },
        whileTap: { y: 2 }
      },
      fade: {
        whileHover: { opacity: 0.95 },
        whileTap: { opacity: 0.9 }
      }
    };

    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className={cn(
          'group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg',
          'border border-gray-200 dark:border-gray-700',
          'transition-all duration-300',
          className
        )}
      >
        {image && (
          <motion.div
            className="relative w-full h-48"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src={image}
              alt={title || 'Card'}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </motion.div>
        )}

        <motion.div
          className="p-6"
          variants={cardVariants[hoverEffect]}
        >
          {title && (
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {description}
            </p>
          )}
          {children}
          {button && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={button.onClick}
              className={cn(
                'inline-flex items-center px-4 py-2 rounded-md font-medium transition-all duration-200',
                button.variant === 'primary' && 'bg-primary text-white hover:bg-primary/90',
                button.variant === 'outline' && 'border border-primary text-primary hover:bg-primary/10',
                button.variant === 'ghost' && 'text-primary hover:bg-primary/10'
              )}
            >
              {button.text}
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
