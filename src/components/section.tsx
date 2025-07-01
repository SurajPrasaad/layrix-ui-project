import React from 'react';

export interface SectionProps {
  variant?: 'default' | 'pricing';
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  variant = 'default',
  children,
  className = '',
}) => {
  const baseStyles = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16';
  const variantStyles = {
    default: '',
    pricing: 'bg-gray-50'
  }[variant];

  return (
    <section className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </section>
  );
};
