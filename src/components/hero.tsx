import React from 'react';

export interface HeroProps {
  title: string;
  description: string;
  ctaText: string;
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  description,
  ctaText,
  className = '',
}) => {
  return (
    <section className={`relative ${className} bg-gray-900 overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url(/assets/hero-bg.jpg)',
        opacity: 0.1
      }}></div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-gray-900 animate-gradient" />

      <div className="relative py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in delay-200">
              {description}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all transform hover:scale-105 animate-fade-in delay-400">
                {ctaText}
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all transform hover:scale-105 animate-fade-in delay-500">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
