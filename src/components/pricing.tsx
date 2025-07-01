import React from 'react';

export interface PricingProps {
  title: string;
  price: string;
  features: string[];
  variant?: 'default' | 'featured';
  className?: string;
}

export const Pricing: React.FC<PricingProps> = ({
  title,
  price,
  features,
  variant = 'default',
  className = '',
}) => {
  const baseStyles = 'p-8 rounded-lg text-center';
  const variantStyles = {
    default: 'bg-white',
    featured: 'bg-primary-50 border border-primary-200'
  }[variant];

  return (
    <div className={`${baseStyles} ${variantStyles} ${className}`}>
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      <div className="text-4xl font-bold text-primary-600 mb-6">{price}</div>
      <ul className="space-y-4 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors">
        Get Started
      </button>
    </div>
  );
};
