import React from 'react';
import { motion } from 'framer-motion';
import { Download, Code, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../components/button';
import { AnimatedBadgeButton } from '../components/animatedBadgeButton';

const GetStartedPage: React.FC = () => {
  const steps = [
    {
      icon: <Download className="w-8 h-8" />,
      title: 'Install Layrix UI',
      description: 'Install Layrix UI using npm or yarn package manager',
      code: 'npm install @layrix-ui/react',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Import Components',
      description: 'Import the components you need in your React application',
      code: 'import { Button } from "@layrix-ui/react"',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Start Building',
      description: 'Use beautiful components to build amazing interfaces',
      code: '<Button variant="primary">Click me</Button>',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const featuredComponents = [
    {
      name: 'Button',
      description: 'Beautifully designed buttons with multiple variants and animations',
      preview: (
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" size="sm">Primary</Button>
          <Button variant="default" size="sm">Default</Button>
          <Button variant="outline" size="sm">Outline</Button>
          <Button variant="ghost" size="sm">Ghost</Button>
        </div>
      )
    },
    {
      name: 'Card',
      description: 'Flexible card component for content display with hover effects',
      preview: (
        <div className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-4 border border-gray-600 hover:border-primary-500/50 transition-all duration-300">
          <h4 className="text-white font-semibold mb-2">Card Title</h4>
          <p className="text-gray-300 text-sm">Beautiful card with smooth animations</p>
        </div>
      )
    },
    {
      name: 'Input',
      description: 'Styled input fields with validation states and focus effects',
      preview: (
        <input
          type="text"
          placeholder="Enter text..."
          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
        />
      )
    },
    {
      name: 'Badge',
      description: 'Small status indicators and labels with various styles',
      preview: (
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs font-medium border border-primary-500/30">
            New
          </span>
          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30">
            Success
          </span>
          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium border border-yellow-500/30">
            Warning
          </span>
        </div>
      )
    },
    {
      name: 'Modal',
      description: 'Beautiful modals and dialogs with backdrop blur effects',
      preview: (
        <div className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-4 border border-gray-600">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-white font-semibold">Modal Title</h4>
            <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
          </div>
          <p className="text-gray-300 text-sm mb-3">Modal content with beautiful styling</p>
          <div className="flex gap-2">
            <div className="px-3 py-1 bg-primary-500 rounded text-xs text-white">Confirm</div>
            <div className="px-3 py-1 bg-gray-600 rounded text-xs text-gray-300">Cancel</div>
          </div>
        </div>
      )
    },
    {
      name: 'Navigation',
      description: 'Responsive navigation components with smooth animations',
      preview: (
        <div className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-4 border border-gray-600">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary-500 rounded"></div>
              <span className="text-white font-semibold text-sm">Brand</span>
            </div>
            <div className="flex space-x-4">
              <div className="w-12 h-2 bg-gray-600 rounded"></div>
              <div className="w-12 h-2 bg-gray-600 rounded"></div>
              <div className="w-12 h-2 bg-primary-500 rounded"></div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div className="pt-16 min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 mb-8"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-gray-300 text-sm">Start building in minutes</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Get Started with
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Layrix UI
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Start building beautiful web applications today with our modern component library
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button variant="primary" size="lg" className="px-8 py-4 text-lg">
                Installation Guide
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <AnimatedBadgeButton text="npm install @layrix-ui/react" />
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Component Library
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quick Start Guide
              </h2>
              <p className="text-gray-400 text-lg">
                Get up and running with Layrix UI in just three simple steps
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300`}></div>
                  <div className="relative bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                    <div className="flex items-start space-x-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white font-bold text-xl">{index + 1}</span>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center mb-4">
                          <div className="text-primary-500 mr-3">
                            {step.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-white">
                            {step.title}
                          </h3>
                        </div>
                        
                        <p className="text-gray-300 mb-6">
                          {step.description}
                        </p>
                        
                        <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-400 text-sm font-medium">Terminal</span>
                            <AnimatedBadgeButton text={step.code} />
                          </div>
                          <pre className="text-sm text-green-400 font-mono">
                            <code>{step.code}</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Components */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Components
              </h2>
              <p className="text-gray-400 text-lg">
                Explore our most popular components with live previews
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredComponents.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                  <div className="relative bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 h-full">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {component.name}
                    </h3>
                    <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                      {component.description}
                    </p>
                    <div className="mt-auto">
                      {component.preview}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-700">
                      <Button variant="ghost" size="sm" className="w-full text-primary-400 hover:text-white">
                        View Documentation
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers who are already creating amazing applications with Layrix UI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="px-8 py-4 text-lg">
                Browse All Components
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                View Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GetStartedPage;