import { Link } from 'react-router-dom';
import { Button } from '../components/button';

export const Navigation = () => {
  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-xl font-bold">
              Layrix UI
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/get-started" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Get Started
            </Link>
            <Link to="/docs" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Documentation
            </Link>
            <Link to="/components" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Components
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="primary" size="md">
              <Link to="/get-started" className="text-white">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-400 hover:text-white p-2 rounded-md">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
