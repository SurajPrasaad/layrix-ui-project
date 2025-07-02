import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navigation } from './components/navigation';
import { Footer } from './components/footer';
import { Button } from './components/button';
import GetStartedPage from './pages/get-started';
import ComponentsPage from './pages/components';
import DocsPage from './pages/docs';
import './index.css';

const features = [
  {
    title: 'Beautiful Components',
    description: 'Ready-to-use, beautifully designed components out of the box.',
    icon: (
      <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Open Source',
    description: 'Completely open source and free to use. No strings attached.',
    icon: (
      <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'TypeScript',
    description: 'Built with TypeScript for type safety and autocomplete.',
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
    title: "Free",
    price: "Free",
    features: [
      "10 Projects",
      "Basic Support",
      "100 Components",
      "Basic Features",
    ]
  },
  {
    title: "Pro",
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



function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-900">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-24"
              >
                <motion.div variants={itemVariants}>
                  <section className="relative py-32">
                    <div className="container mx-auto px-4">
                      <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                          Build Beautiful Web Applications
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8">
                          Create stunning web applications with our modern UI components library
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                          <Button variant="primary" size="lg" className="mx-auto">
                            Get Started
                          </Button>
                          <Button variant="outline" size="lg" className="mx-auto">
                            View Components
                          </Button>
                        </div>
                      </div>
                    </div>
                  </section>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <section className="py-24">
                    <div className="container mx-auto px-4">
                      <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          Features
                        </h2>
                        <p className="text-gray-400">
                          Everything you need to build modern web applications
                        </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors"
                          >
                            <div className="w-12 h-12 mx-auto mb-4">
                              {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                              {feature.title}
                            </h3>
                            <p className="text-gray-400">
                              {feature.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </section>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <section className="py-24">
                    <div className="container mx-auto px-4">
                      <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          Pricing
                        </h2>
                        <p className="text-gray-400">
                          Choose the plan that's right for you
                        </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pricingPlans.map((plan, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
                          >
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {plan.title}
                            </h3>
                            <p className="text-gray-400 mb-4">
                              {plan.price}
                            </p>
                            <ul className="space-y-2 text-gray-300">
                              {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center">
                                  <svg className="w-4 h-4 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <Button 
                              variant="primary" 
                              className="mt-6 w-full"
                            >
                              {plan.title === "Free" ? "Get Started" : "Choose Plan"}
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </section>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <section className="py-24">
                    <div className="container mx-auto px-4">
                      <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          Ready to Get Started?
                        </h2>
                        <p className="text-gray-400">
                          Start building beautiful web applications today
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <Link to="/get-started">
                          <Button variant="primary" size="lg" className="mx-auto">
                            Get Started
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </section>
                </motion.div>
              </motion.div>
            } />
            <Route path="/get-started" element={<GetStartedPage />} />
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/docs/components" element={<ComponentsPage />} />
            <Route path="/docs" element={<DocsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
