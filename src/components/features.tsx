import React from 'react';

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FeaturesProps {
  features: FeatureItem[];
  className?: string;
}

export const Features: React.FC<FeaturesProps> = ({ features, className = '' }) => {
  return (
    <section className={`py-20 ${className} bg-gray-900`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in">
            Our Features
          </h2>
          <p className="text-gray-300 animate-fade-in delay-200">
            Discover what makes us unique
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`p-8 bg-gray-800 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 ${index === 0 ? 'animate-fade-in delay-400' : index === 1 ? 'animate-fade-in delay-500' : 'animate-fade-in delay-600'}`}
            >
              <div className="w-16 h-16 mx-auto mb-8">
                <div className="relative">
                  {feature.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
