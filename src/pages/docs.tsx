import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Book, 
  Code, 
  Zap, 
  Users, 
 
  Search,
  Eye,
  Settings,
  Palette,
  Shield,
  Sparkles
} from 'lucide-react';
import { Button } from '../components/button';
import { AnimatedBadgeButton } from '../components/animatedBadgeButton';

const DocsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: <Book className="w-5 h-5" />,
      description: 'Introduction to Layrix UI'
    },
    {
      id: 'installation',
      title: 'Installation',
      icon: <Code className="w-5 h-5" />,
      description: 'Getting started guide'
    },
    {
      id: 'components',
      title: 'Components',
      icon: <Zap className="w-5 h-5" />,
      description: 'Component documentation'
    },
    {
      id: 'theming',
      title: 'Theming',
      icon: <Palette className="w-5 h-5" />,
      description: 'Customization options'
    },
    {
      id: 'accessibility',
      title: 'Accessibility',
      icon: <Shield className="w-5 h-5" />,
      description: 'A11y best practices'
    },
    {
      id: 'community',
      title: 'Community',
      icon: <Users className="w-5 h-5" />,
      description: 'Join our community'
    }
  ];

  const components = [
    {
      name: 'Button',
      category: 'form',
      description: 'Versatile button component with multiple variants and animations',
      props: [
        { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'ghost'", default: "'primary'" },
        { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'" },
        { name: 'disabled', type: 'boolean', default: 'false' },
        { name: 'loading', type: 'boolean', default: 'false' },
        { name: 'children', type: 'ReactNode', default: '-' }
      ],
      example: (
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" size="sm">Primary</Button>
          <Button variant="default" size="sm">Default</Button>
          <Button variant="outline" size="sm">Outline</Button>
          <Button variant="ghost" size="sm">Ghost</Button>
        </div>
      ),
      code: `<Button variant="primary" size="md">
  Click me
</Button>`
    },
    {
      name: 'Card',
      category: 'layout',
      description: 'Flexible card component for content organization with hover effects',
      props: [
        { name: 'variant', type: "'default' | 'elevated'", default: "'default'" },
        { name: 'header', type: 'ReactNode', default: '-' },
        { name: 'className', type: 'string', default: '-' },
        { name: 'children', type: 'ReactNode', default: '-' }
      ],
      example: (
        <div className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600 hover:border-primary-500/50 transition-all duration-300 max-w-sm">
          <h3 className="text-white font-semibold mb-3">Card Title</h3>
          <p className="text-gray-300 text-sm mb-4">Beautiful card component with smooth animations and hover effects.</p>
          <Button variant="outline" size="sm">Learn More</Button>
        </div>
      ),
      code: `<Card>
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
</Card>`
    },
    {
      name: 'Input',
      category: 'form',
      description: 'Styled input field with validation states and focus effects',
      props: [
        { name: 'type', type: 'string', default: "'text'" },
        { name: 'placeholder', type: 'string', default: '-' },
        { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'" },
        { name: 'disabled', type: 'boolean', default: 'false' },
        { name: 'error', type: 'boolean', default: 'false' }
      ],
      example: (
        <div className="space-y-3 max-w-sm">
          <input
            type="text"
            placeholder="Default input"
            className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
          />
          <input
            type="text"
            placeholder="Error state"
            className="w-full bg-gray-700/50 border border-red-500 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
          />
        </div>
      ),
      code: `<Input 
  placeholder="Enter text..." 
  size="md" 
/>`
    },
    {
      name: 'Badge',
      category: 'display',
      description: 'Small status indicators and labels with various styles',
      props: [
        { name: 'variant', type: "'primary' | 'secondary' | 'success' | 'warning' | 'error'", default: "'primary'" },
        { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'" },
        { name: 'children', type: 'ReactNode', default: '-' }
      ],
      example: (
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs font-medium border border-primary-500/30">
            Primary
          </span>
          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30">
            Success
          </span>
          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium border border-yellow-500/30">
            Warning
          </span>
          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-medium border border-red-500/30">
            Error
          </span>
        </div>
      ),
      code: `<Badge variant="success">
  Success
</Badge>`
    },
    {
      name: 'Modal',
      category: 'overlay',
      description: 'Beautiful modals and dialogs with backdrop blur effects',
      props: [
        { name: 'isOpen', type: 'boolean', default: 'false' },
        { name: 'onClose', type: '() => void', default: '-' },
        { name: 'title', type: 'string', default: '-' },
        { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'" },
        { name: 'children', type: 'ReactNode', default: '-' }
      ],
      example: (
        <div className="space-y-4">
          <Button onClick={() => setIsModalOpen(true)} variant="primary">
            Open Modal
          </Button>
          {isModalOpen && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 max-w-md w-full mx-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">Modal Title</h3>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    ×
                  </button>
                </div>
                <p className="text-gray-300 mb-6">
                  This is a beautiful modal with backdrop blur and smooth animations.
                </p>
                <div className="flex gap-3 justify-end">
                  <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                    Confirm
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      ),
      code: `<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
  title="Modal Title"
>
  <p>Modal content goes here...</p>
</Modal>`
    },
    {
      name: 'Select',
      category: 'form',
      description: 'Dropdown select component with search and multi-select options',
      props: [
        { name: 'options', type: 'string[] | Option[]', default: '[]' },
        { name: 'value', type: 'string', default: '-' },
        { name: 'onChange', type: '(value: string) => void', default: '-' },
        { name: 'placeholder', type: 'string', default: '-' },
        { name: 'disabled', type: 'boolean', default: 'false' }
      ],
      example: (
        <div className="max-w-sm">
          <select 
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
            className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">Select an option...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      ),
      code: `<Select
  options={['Option 1', 'Option 2']}
  value={selected}
  onChange={setSelected}
  placeholder="Select an option..."
/>`
    }
  ];

  const filteredComponents = components.filter(component => {
    const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || component.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', name: 'All Components' },
    { id: 'form', name: 'Form' },
    { id: 'layout', name: 'Layout' },
    { id: 'display', name: 'Display' },
    { id: 'overlay', name: 'Overlay' },
    { id: 'navigation', name: 'Navigation' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Welcome to Layrix UI</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Layrix UI is a modern, accessible React component library designed to help you build beautiful web applications quickly and efficiently. Our components are built with TypeScript, follow accessibility best practices, and come with beautiful animations out of the box.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Sparkles className="w-8 h-8" />,
                  title: 'Beautiful Design',
                  description: 'Professionally designed components with modern aesthetics'
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: 'High Performance',
                  description: 'Optimized for speed with minimal bundle size'
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: 'Accessible',
                  description: 'Built with accessibility in mind following WCAG guidelines'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700"
                >
                  <div className="text-primary-500 mb-4">
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
          </motion.div>
        );

      case 'installation':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Installation</h2>
              <p className="text-gray-300 text-lg">
                Get started with Layrix UI in your React project.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Install via npm</h3>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Terminal</span>
                    <AnimatedBadgeButton text="npm install @layrix-ui/react" />
                  </div>
                  <pre className="text-green-400 font-mono text-sm">
                    <code>npm install @layrix-ui/react</code>
                  </pre>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Import Components</h3>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <pre className="text-blue-400 font-mono text-sm">
                    <code>{`import { Button, Card, Input } from '@layrix-ui/react';

function App() {
  return (
    <div>
      <Button variant="primary">Hello World</Button>
    </div>
  );
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'components':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Components</h2>
              <p className="text-gray-300 text-lg mb-8">
                Explore our comprehensive collection of React components.
              </p>

              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search components..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Components Grid */}
            <div className="space-y-12">
              {filteredComponents.map((component, index) => (
                <motion.div
                  key={component.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden"
                >
                  {/* Component Header */}
                  <div className="p-6 border-b border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">{component.name}</h3>
                      <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs font-medium border border-primary-500/30">
                        {component.category}
                      </span>
                    </div>
                    <p className="text-gray-300">{component.description}</p>
                  </div>

                  {/* Component Preview */}
                  <div className="p-6 bg-gray-900/50">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Eye className="w-5 h-5 mr-2" />
                      Preview
                    </h4>
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                      {component.example}
                    </div>
                  </div>

                  {/* Code Example */}
                  <div className="p-6 border-t border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-white flex items-center">
                        <Code className="w-5 h-5 mr-2" />
                        Code
                      </h4>
                      <AnimatedBadgeButton text={component.code} />
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                      <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                        <code>{component.code}</code>
                      </pre>
                    </div>
                  </div>

                  {/* Props Table */}
                  <div className="p-6 border-t border-gray-700">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Props
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-700">
                            <th className="text-left py-2 px-4 text-gray-300 font-medium">Name</th>
                            <th className="text-left py-2 px-4 text-gray-300 font-medium">Type</th>
                            <th className="text-left py-2 px-4 text-gray-300 font-medium">Default</th>
                          </tr>
                        </thead>
                        <tbody>
                          {component.props.map((prop, propIndex) => (
                            <tr key={propIndex} className="border-b border-gray-700/50">
                              <td className="py-2 px-4 text-white font-mono text-sm">{prop.name}</td>
                              <td className="py-2 px-4 text-primary-400 font-mono text-sm">{prop.type}</td>
                              <td className="py-2 px-4 text-gray-400 font-mono text-sm">{prop.default}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      default:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-400">This section is under development.</p>
          </motion.div>
        );
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800/50 backdrop-blur-sm border-r border-gray-700 min-h-screen sticky top-16">
          <div className="p-6">
            <h2 className="text-xl font-bold text-white mb-6">Documentation</h2>
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  {section.icon}
                  <div>
                    <div className="font-medium">{section.title}</div>
                    <div className="text-xs text-gray-400">{section.description}</div>
                  </div>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;