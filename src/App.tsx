import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navigation } from './components/navigation';
import { Footer } from './components/footer';
import { Button } from './components/button';
import { AnimatedBadgeButton } from './components/animatedBadgeButton';
import GetStartedPage from './pages/get-started';
import ComponentsPage from './pages/components';
import DocsPage from './pages/docs';
import { Sparkles, Zap, Code2, Palette, Shield, Rocket } from 'lucide-react';

const features = [
  {
    title: 'Beautiful Components',
    description: 'Professionally designed components with modern aesthetics and smooth animations.',
    icon: <Palette className="w-8 h-8" />
  },
  {
    title: 'TypeScript Ready',
    description: 'Built with TypeScript for better developer experience and type safety.',
    icon: <Code2 className="w-8 h-8" />
  },
  {
    title: 'Highly Performant',
    description: 'Optimized for performance with minimal bundle size and fast rendering.',
    icon: <Rocket className="w-8 h-8" />
  },
  {
    title: 'Accessible',
    description: 'All components follow accessibility best practices and WCAG guidelines.',
    icon: <Shield className="w-8 h-8" />
  },
  {
    title: 'Customizable',
    description: 'Easily customize colors, spacing, and styles to match your brand.',
    icon: <Sparkles className="w-8 h-8" />
  },
  {
    title: 'Developer Friendly',
    description: 'Simple API, great documentation, and excellent developer experience.',
    icon: <Zap className="w-8 h-8" />
  }
];

const pricingPlans = [
  {
    title: "Open Source",
    price: "Free",
    period: "forever",
    features: [
      "All components",
      "MIT License",
      "Community support",
      "Regular updates",
      "TypeScript support"
    ],
    popular: false
  },
  {
    title: "Pro",
    price: "$49",
    period: "one-time",
    features: [
      "Premium components",
      "Advanced templates",
      "Priority support",
      "Custom themes",
      "Figma design system",
      "Commercial license"
    ],
    popular: true
  },
  {
    title: "Enterprise",
    price: "Custom",
    period: "contact us",
    features: [
      "White-label solution",
      "Custom development",
      "Dedicated support",
      "SLA guarantee",
      "Team training",
      "Priority features"
    ],
    popular: false
  }
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={
              <div className="relative overflow-hidden">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 px-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_70%)]"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.1),transparent_70%)]"></div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto text-center relative z-10"
                  >
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 mb-8"
                    >
                      <Sparkles className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-300 text-sm">New components added weekly</span>
                    </motion.div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                      <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                        Build Beautiful
                      </span>
                      <br />
                      <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                        Web Applications
                      </span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                      Create stunning interfaces with our modern, accessible component library. 
                      Built for developers who care about design and performance.
                    </p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                      <Link to="/get-started">
                        <Button variant="primary" size="lg" className="px-8 py-4 text-lg">
                          Get Started Free
                        </Button>
                      </Link>
                      <AnimatedBadgeButton text="npm install @layrix-ui/react" />
                      <Link to="/components">
                        <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                          View Components
                        </Button>
                      </Link>
                    </motion.div>
                  </motion.div>
                </section>

                {/* Features Section */}
                <section className="py-20 px-4">
                  <div className="container mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-center mb-16"
                    >
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Why Choose Layrix UI?
                      </h2>
                      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Everything you need to build modern web applications with confidence
                      </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="group relative"
                        >
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                          <div className="relative bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                            <div className="text-primary-500 mb-4">
                              {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                              {feature.title}
                            </h3>
                            <p className="text-gray-400">
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Pricing Section */}
                <section className="py-20 px-4 bg-gray-800/50">
                  <div className="container mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-center mb-16"
                    >
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Simple, Transparent Pricing
                      </h2>
                      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Choose the plan that fits your needs. Start free, upgrade when you're ready.
                      </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                      {pricingPlans.map((plan, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className={`relative group ${plan.popular ? 'scale-105' : ''}`}
                        >
                          {plan.popular && (
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                                Most Popular
                              </span>
                            </div>
                          )}
                          
                          <div className={`relative bg-gray-800 rounded-xl p-8 border transition-all duration-300 ${
                            plan.popular 
                              ? 'border-primary-500 shadow-lg shadow-primary-500/25' 
                              : 'border-gray-700 hover:border-gray-600'
                          }`}>
                            <div className="text-center mb-8">
                              <h3 className="text-2xl font-bold text-white mb-2">
                                {plan.title}
                              </h3>
                              <div className="mb-4">
                                <span className="text-4xl font-bold text-white">
                                  {plan.price}
                                </span>
                                <span className="text-gray-400 ml-2">
                                  {plan.period}
                                </span>
                              </div>
                            </div>

                            <ul className="space-y-3 mb-8">
                              {plan.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-gray-300">
                                  <svg className="w-4 h-4 text-primary-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  {feature}
                                </li>
                              ))}
                            </ul>

                            <Button 
                              variant={plan.popular ? "primary" : "outline"} 
                              className="w-full"
                            >
                              {plan.title === "Open Source" ? "Get Started Free" : 
                               plan.title === "Enterprise" ? "Contact Sales" : "Get Pro"}
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4">
                  <div className="container mx-auto text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="max-w-3xl mx-auto"
                    >
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Build Something Amazing?
                      </h2>
                      <p className="text-xl text-gray-300 mb-8">
                        Join thousands of developers who are already building beautiful applications with Layrix UI.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/get-started">
                          <Button variant="primary" size="lg" className="px-8 py-4 text-lg">
                            Start Building Now
                          </Button>
                        </Link>
                        <Link to="/components">
                          <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                            Explore Components
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </section>
              </div>
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