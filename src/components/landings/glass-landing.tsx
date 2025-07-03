import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

interface GlassLandingProps {
  className?: string;
}

export const GlassLanding: React.FC<GlassLandingProps> = ({ className = '' }) => {
  return (
    <div className={`min-h-screen ${className}`}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Build Modern Web Applications
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 mb-8"
            >
              Layrix UI provides beautiful, modern components that help you build stunning web applications faster.
            </motion.p>
            <div className="flex justify-center mb-8">
              <FaGithub className="w-6 h-6 text-white/80 hover:text-white cursor-pointer transition-colors mx-2" />
              <FaTwitter className="w-6 h-6 text-white/80 hover:text-white cursor-pointer transition-colors mx-2" />
              <FaLinkedin className="w-6 h-6 text-white/80 hover:text-white cursor-pointer transition-colors mx-2" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col md:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-white/50 text-white rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                View Docs
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl text-white mb-4"
            >
              ⚡
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
            <p className="text-white/80">Optimized components that load quickly and perform smoothly.</p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl text-white mb-4"
            >
              🎨
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-2">Beautiful Design</h3>
            <p className="text-white/80">Modern and clean design that looks great on any device.</p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl text-white mb-4"
            >
              🛠️
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-2">Developer Friendly</h3>
            <p className="text-white/80">Easy to use components with great documentation.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-xl mb-8">Join thousands of developers building amazing applications with Layrix UI.</p>
            <button className="px-8 py-4 bg-white text-primary-500 rounded-lg hover:bg-gray-100 transition-colors">
              Start Building Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
