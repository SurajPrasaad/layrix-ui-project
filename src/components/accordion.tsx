import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  open?: boolean;
  onToggle?: (open: boolean) => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  open = false,
  onToggle,
}) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle?.(newState);
  };

  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={handleToggle}
        className="w-full flex items-center justify-between p-4 text-left bg-gray-800 hover:bg-gray-700 transition-colors"
      >
        <span className="text-white font-medium">{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-900/50 border-t border-gray-700">
          <div className="text-gray-300">{children}</div>
        </div>
      )}
    </div>
  );
};

interface AccordionProps {
  children: ReactNode;
  className?: string;
}

function isAccordionItem(
  element: React.ReactElement
): element is React.ReactElement<AccordionItemProps> {
  return element.type === AccordionItem;
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  className = '',
}) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const handleToggle = (title: string) => {
    setOpenItems(prev => prev.includes(title)
      ? prev.filter(t => t !== title)
      : [...prev, title]);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && isAccordionItem(child)) {
          return React.cloneElement(child, {
            open: openItems.includes(child.props.title),
            onToggle: () => handleToggle(child.props.title),
          });
        }
        return child;
      })}
    </div>
  );
};