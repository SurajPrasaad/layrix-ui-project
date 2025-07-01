import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface SelectProps {
  variant?: 'default' | 'outlined';
  options: string[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, variant = 'default', options, placeholder, value, onChange, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedValue = event.target.value;
      onChange?.(selectedValue);
    };

    return (
      <div className="relative">
        <select
          ref={ref}
          value={value ?? ''}
          onChange={handleChange}
          className={cn(
            'w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary',
            variant === 'default' && 'bg-gray-700 border border-gray-600 text-white',
            variant === 'outlined' && 'bg-white border border-gray-300 text-black',
            className
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        {isFocused && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
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
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
