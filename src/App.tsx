import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { Hero } from './components/hero';
import { Features } from './components/features';
import { Pricing } from './components/pricing';
import { Testimonials } from './components/testimonials';
import { Footer } from './components/footer';
import { Button } from './components/button';
import GetStartedPage from './pages/get-started';
import ComponentsPage from './pages/components';
import DocsPage from './pages/docs';
import './index.css';

const features = [
  {
    title: 'Modern UI Components',
    description: 'Beautifully crafted components that work out of the box',
    icon: (
      <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'TypeScript Ready',
    description: 'All components are built with TypeScript for better type safety',
    icon: (
      <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Customizable',
    description: 'Easily customize components to match your brand colors and styles',
    icon: (
      <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  }
];

const pricingPlans = [
  {
    title: "Starter",
    price: "$29/month",
    features: [
      "10 Projects",
      "Basic Support",
      "100 Components",
      "Basic Features",
    ]
  },
  {
    title: "Professional",
    price: "$49/month",
    features: [
      "25 Projects",
      "Priority Support",
      "500 Components",
      "All Features",
      "API Access",
    ]
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited Projects",
      "Dedicated Support",
      "All Components",
      "All Features",
      "Custom Solutions",
    ]
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    content: "This UI library has transformed our development process. The components are beautiful and easy to use.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "John Smith",
    role: "CTO, Startup Inc",
    content: "The TypeScript support is a game-changer. It makes our code more maintainable and reliable.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Emily Davis",
    role: "Designer, Creative Agency",
    content: "The customization options are amazing. I can make the components look exactly how I want.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg"
  }
];

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero
                  title="Build Beautiful Web Applications"
                  description="Create stunning web applications with our modern UI components library"
                  ctaText="Get Started"
                  className="bg-gray-900"
                />

                <Features features={features} />

                <div className="py-20 bg-gray-800">
                  <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                      <h2 className="text-3xl font-bold text-white mb-4">
                        Pricing Plans
                      </h2>
                      <p className="text-gray-300">
                        Choose the plan that's right for you
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {pricingPlans.map((plan, index) => (
                        <Pricing
                          key={index}
                          {...plan}
                          variant={index === 1 ? 'featured' : 'default'}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <Testimonials testimonials={testimonials} />

                <div className="py-20 bg-gray-800">
                  <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                      <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to Get Started?
                      </h2>
                      <p className="text-gray-300">
                        Start building beautiful web applications today
                      </p>
                    </div>
                    <Button variant="primary" size="lg" className="mx-auto">
                      Get Started
                    </Button>
                  </div>
                </div>
              </>
            } />
            <Route path="/get-started" element={<GetStartedPage />} />
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/docs" element={<DocsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
