import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaHeart } from 'react-icons/fa';

interface GlassFooterProps {
  className?: string;
}

export const GlassFooter: React.FC<GlassFooterProps> = ({ className = '' }) => {
  return (
    <footer className={`bg-gray-900/30 backdrop-blur-sm ${className}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xl">Layrix UI</h3>
            <p className="text-white/80">
              Modern React components for beautiful web applications
            </p>
            <div className="flex space-x-4">
              <FaGithub className="w-5 h-5 text-white/80 hover:text-white cursor-pointer transition-colors" />
              <FaTwitter className="w-5 h-5 text-white/80 hover:text-white cursor-pointer transition-colors" />
              <FaLinkedin className="w-5 h-5 text-white/80 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Components</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Examples</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Guide</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm">
            © 2025 Layrix UI. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-white/80 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <FaHeart className="w-4 h-4 text-red-500" />
            <span>by Suraj</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
