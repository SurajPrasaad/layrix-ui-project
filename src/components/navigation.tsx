import { Link } from 'react-router-dom';
import { Button } from '../components/button';
import { useState } from 'react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-center ">
        <div className="flex items-center justify-between h-16 w-full max-w-7xl">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-white text-xl font-bold">Layrix UI</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-4">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                to="/get-started" 
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Get Started
              </Link>
              <Link 
                to="/docs" 
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Documentation
              </Link>
              <Link 
                to="/components" 
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Components
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="primary" 
              size="md"
              className="ml-4"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={handleMenuToggle}
              className="text-gray-400 hover:text-white p-2 rounded-md"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 h-screen w-full bg-gray-900 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <Link 
              to="/" 
              className="text-white text-xl font-bold"
              onClick={handleMenuToggle}
            >
              Layrix UI
            </Link>
            <button 
              onClick={handleMenuToggle}
              className="text-gray-400 hover:text-white p-2 rounded-md"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="space-y-4">
            <Link 
              to="/" 
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={handleMenuToggle}
            >
              Home
            </Link>
            <Link 
              to="/get-started" 
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={handleMenuToggle}
            >
              Get Started
            </Link>
            <Link 
              to="/docs" 
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={handleMenuToggle}
            >
              Documentation
            </Link>
            <Link 
              to="/docs/components" 
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={handleMenuToggle}
            >
              Components
            </Link>
            <Link 
              to="/docs" 
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={handleMenuToggle}
            >
              Documentation
            </Link>
            <div className="mt-6">
              <Button 
                variant="primary" 
                size="md"
                className="w-full"
                onClick={handleMenuToggle}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
