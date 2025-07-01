import { useState } from 'react';
import { Button, Card, Modal, Input, Select, Checkbox, Radio, Textarea, Badge, Avatar, Tooltip, Alert, ProgressBar, Accordion, AccordionItem, CodePreview } from '@/components';

export default function DocsPage() {
  const [selected, setSelected] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Buttons */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Buttons</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Props</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-300">variant:</span>
                  <span className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-300">'primary' | 'default' | 'outline' | 'ghost'</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-300">size:</span>
                  <span className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-300">'sm' | 'md' | 'lg'</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-300">loading:</span>
                  <span className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-300">boolean</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-300">disabled:</span>
                  <span className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-300">boolean</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-2">Examples</h3>
              <div className="space-y-4">
                <Button variant="primary">Primary</Button>
                <Button variant="default">Default</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="primary" loading>Loading</Button>
                <Button variant="primary" disabled>Disabled</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Cards</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Props</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-300">variant:</span>
                  <span className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-300">'default' | 'elevated'</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-300">header:</span>
                  <span className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-300">ReactNode</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-300">className:</span>
                  <span className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-300">string</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-2">Examples</h3>
              <div className="space-y-4">
                <Card>
                  <h3 className="text-lg font-semibold mb-2">Card Title</h3>
                  <p className="text-gray-400">Card content goes here...</p>
                </Card>
                <Card header={<h2>Card Title</h2>}>
                  <p>Card content goes here</p>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Modal</h2>
          <div className="space-y-4">
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              title="Modal Title"
            >
              <p>Modal content goes here...</p>
            </Modal>
          </div>
        </div>

        {/* Input */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Input</h2>
          <div className="space-y-4">
            <Input placeholder="Enter text..." size="md" />
          </div>
        </div>

        {/* Select */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Select</h2>
          <div className="space-y-4">
            <Select
              options={['Option 1', 'Option 2']}
              value={selected}
              onChange={(val) => setSelected(val)}
              placeholder="Select an option..."
            />
          </div>
        </div>

        {/* Checkbox */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Checkbox</h2>
          <div className="space-y-4">
            <Checkbox label="Checkbox Label" />
          </div>
        </div>

        {/* Radio */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Radio</h2>
          <div className="space-y-4">
            <Radio value="option1" label="Option 1" />
            <Radio value="option2" label="Option 2" />
          </div>
        </div>

        {/* Textarea */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Textarea</h2>
          <div className="space-y-4">
            <Textarea placeholder="Enter text..." />
          </div>
        </div>

        {/* Badge */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Badge</h2>
          <div className="space-y-4">
            <Badge>Primary</Badge>
            <Badge variant="success">Success</Badge>
          </div>
        </div>

        {/* Avatar */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Avatar</h2>
          <div className="space-y-4">
            <Avatar src="/avatar.jpg" alt="User Avatar" />
          </div>
        </div>

        {/* Tooltip */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Tooltip</h2>
          <div className="space-y-4">
            <Tooltip content="This is a tooltip">
              <Button variant="primary">Hover me</Button>
            </Tooltip>
          </div>
        </div>

        {/* Alert */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Alert</h2>
          <div className="space-y-4">
            <Alert variant="success">Success message</Alert>
            <Alert variant="danger">Error message</Alert>
          </div>
        </div>

        {/* ProgressBar */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Progress Bar</h2>
          <div className="space-y-4">
            <ProgressBar value={50} />
          </div>
        </div>

        {/* Accordion */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Accordion</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Props</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-300">Accordion Props:</span>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-300">multiple:</span>
                      <span className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-300">boolean</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-300">className:</span>
                      <span className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-300">string</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-300">AccordionItem Props:</span>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-300">title:</span>
                      <span className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-300">string</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-300">open:</span>
                      <span className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-300">boolean</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-300">onToggle:</span>
                      <span className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-300">(open: boolean) {'>'} void</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-2">Examples</h3>
              <div className="space-y-4">
                <Accordion>
                  <AccordionItem title="Section 1">
                    Content 1
                  </AccordionItem>
                  <AccordionItem title="Section 2">
                    Content 2
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
