import React from 'react';

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  icon,
  className = '',
}) => {
  return (
    <div className={`max-w-md ${className}`}>
      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-100 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
