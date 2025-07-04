import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaHeart } from 'react-icons/fa';

interface MinimalFooterProps {
  className?: string;
}

export const MinimalFooter: React.FC<MinimalFooterProps> = ({ className = '' }) => {
  return (
    <footer className={`bg-gray-900 border-t border-gray-800 ${className}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <h3 className="text-xl font-bold text-white">Layrix UI</h3>
            <div className="flex space-x-4">
              <FaGithub className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <FaTwitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Layrix UI. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm">
            <span>Made with</span>
            <FaHeart className="w-4 h-4 text-red-500" />
            <span>by Suraj</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
