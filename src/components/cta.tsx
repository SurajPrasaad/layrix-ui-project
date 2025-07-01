import React from 'react';
import { Button } from './button';

export interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonVariant?: 'default' | 'outline' | 'ghost';
  buttonSize?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const CTA: React.FC<CTAProps> = ({
  title,
  description,
  buttonText,
  buttonVariant = 'default',
  buttonSize = 'md',
  className = '',
}) => {
  return (
    <div className={`bg-blue-600 text-white py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl mb-4">{title}</h2>
        <p className="text-lg mb-8">{description}</p>
        <Button variant={buttonVariant} size={buttonSize} className="bg-white text-blue-600 hover:bg-gray-50">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
