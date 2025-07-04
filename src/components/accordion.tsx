import React, { useState } from 'react';
import cn from '@/lib/utils.js';

interface AccordionItemProps extends React.PropsWithChildren {
  title: string;
  open?: boolean;
  onToggle?: (open: boolean) => void;
  className?: string;
}

interface AccordionProps extends React.PropsWithChildren {
  multiple?: boolean;
  className?: string;
}

// Type guard to check if a child is an AccordionItem
function isAccordionItem(
  element: React.ReactElement
): element is React.ReactElement<AccordionItemProps> {
  return element.type === AccordionItem;
}

export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ title, open = false, onToggle, children, className, ...props }, ref) => {
    const handleClick = () => {
      onToggle?.(!open);
    };

    return (
      <div
        ref={ref}
        className={cn(
          'border-b border-gray-700 last:border-0',
          className
        )}
        {...props}
      >
        <button
          onClick={handleClick}
          className="w-full flex items-center justify-between p-4 text-left text-gray-300 hover:text-white"
        >
          <span>{title}</span>
          <svg
            className={cn(
              'w-5 h-5 transition-transform',
              open && 'rotate-180'
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {open && (
          <div className="p-4 border-t border-gray-700">
            {children}
          </div>
        )}
      </div>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  multiple?: boolean;
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, multiple = false, className, ...props }, ref) => {
    const [openItems, setOpenItems] = useState<string[]>([]);

    const handleToggle = (title: string) => {
      if (multiple) {
        setOpenItems((prev) =>
          prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
        );
      } else {
        setOpenItems(openItems.includes(title) ? [] : [title]);
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          'space-y-1',
          className
        )}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (child && React.isValidElement(child) && isAccordionItem(child)) {
            return React.cloneElement(child, {
              open: openItems.includes(child.props.title),
              onToggle: () => handleToggle(child.props.title),
            });
          }
          return child;
        })}
      </div>
    );
  }
);

Accordion.displayName = 'Accordion';
