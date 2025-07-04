import { Link } from 'react-router-dom';
import { Button } from '../components/button';

const GetStartedPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Get Started with Layrix UI
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Start building beautiful web applications today
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                <Link to="/docs/installation">Installation Guide</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/docs/components">Component Library</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Quick Start Guide</h2>
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="bg-gray-800 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center mr-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Install Layrix UI</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Install Layrix UI using npm or yarn
                </p>
                <pre className="bg-gray-700 rounded-lg p-4 text-sm text-gray-200">
                  <code>
                    npm install @layrix/ui
                  </code>
                </pre>
              </div>

              {/* Step 2 */}
              <div className="bg-gray-800 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center mr-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Import Components</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Import the Button component
                </p>
                <pre className="bg-gray-700 rounded-lg p-4 text-sm text-gray-200">
                  <code>
                    {/* import { Button } from '@layrix/ui'; */}
                  </code>
                  <div className="mt-4 bg-gray-700 p-4 rounded-lg">
                    <Button variant="primary" size="md">Example Button</Button>
                  </div>
                </pre>
              </div>

              {/* Step 3 */}
              <div className="bg-gray-800 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center mr-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Start Building</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Use the Button component in your application
                </p>
                <pre className="bg-gray-700 rounded-lg p-4 text-sm text-gray-200">
                  <code>
                    &lt;Button variant="primary"&gt;Click me&lt;/Button&gt;
                  </code>
                </pre>
                <div className="mt-4 flex gap-4">
                  <div className="bg-gray-700 rounded-lg p-4">
                    <code className="text-sm text-gray-200">&lt;Button variant="primary"&gt;Primary&lt;/Button&gt;</code>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <code className="text-sm text-gray-200">&lt;Button variant="outline"&gt;Outline&lt;/Button&gt;</code>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <code className="text-sm text-gray-200">&lt;Button variant="ghost"&gt;Ghost&lt;/Button&gt;</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Components */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Button Component */}
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Button</h3>
                <p className="text-gray-300 mb-6">
                  Beautifully designed buttons with multiple variants
                </p>
                <div className="flex gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </div>

              {/* Card Component */}
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Card</h3>
                <p className="text-gray-300 mb-6">
                  Flexible card component for content display
                </p>
                <div className="bg-gray-700 rounded-xl p-6">
                  <h4 className="text-white font-semibold">Card Title</h4>
                  <p className="text-gray-300">Card content goes here</p>
                </div>
              </div>

              {/* Modal Component */}
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Modal</h3>
                <p className="text-gray-300 mb-6">
                  Beautiful modals for dialogs and forms
                </p>
                <div className="bg-gray-700 rounded-xl p-6">
                  <h4 className="text-white font-semibold">Modal Title</h4>
                  <p className="text-gray-300">Modal content goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStartedPage;
