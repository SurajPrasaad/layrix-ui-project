import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface DefaultNavbarProps {
  className?: string;
}

export const DefaultNavbar: React.FC<DefaultNavbarProps> = ({ className = '' }) => {
  return (
    <nav className={`bg-white shadow-md ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center"
          >
            <Link to="/">
              <span className="text-xl font-bold text-gray-800">Layrix UI</span>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex space-x-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Link to="/">Home</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Link to="/components">Components</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Link to="/docs">Docs</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Link to="/get-started">Get Started</Link>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900">
              Menu
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
