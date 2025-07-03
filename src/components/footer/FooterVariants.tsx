import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface FooterProps {
  children?: ReactNode;
  className?: string;
  title?: string;
  description?: string;
  productLinks?: { label: string; href: string; }[];
  companyLinks?: { label: string; href: string; }[];
  followLinks?: { label: string; href: string; }[];
}

export const DefaultFooter = ({
  className,
  title = 'Layrix UI',
  description = 'Beautiful, reusable UI components built for developers.',
  productLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Documentation', href: '#docs' }
  ],
  companyLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Blog', href: '#blog' }
  ],
  followLinks = [
    { label: 'Twitter', href: '#twitter' },
    { label: 'GitHub', href: '#github' },
    { label: 'LinkedIn', href: '#linkedin' }
  ]
}: FooterProps) => (
  <motion.footer
    className={cn('bg-white text-gray-800 px-6 py-10', className)}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
      <div>
        <h4 className="text-lg font-semibold mb-4">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">Product</h4>
        <ul className="space-y-2 text-gray-600">
          {productLinks.map((link, index) => (
            <li key={index}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">Company</h4>
        <ul className="space-y-2 text-gray-600">
          {companyLinks.map((link, index) => (
            <li key={index}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
        <ul className="space-y-2 text-gray-600">
          {followLinks.map((link, index) => (
            <li key={index}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
      </div>
    </div>
    <div className="text-center text-gray-500 mt-10 text-sm">
      © {new Date().getFullYear()} Layrix UI. All rights reserved.
    </div>
  </motion.footer>
);

export const DarkFooter = ({
  className,
  title = 'Layrix UI',
  description = 'Beautiful, reusable UI components built for developers.',
  productLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Documentation', href: '#docs' }
  ],
  companyLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Blog', href: '#blog' }
  ],
  followLinks = [
    { label: 'Twitter', href: '#twitter' },
    { label: 'GitHub', href: '#github' },
    { label: 'LinkedIn', href: '#linkedin' }
  ]
}: FooterProps) => (
  <motion.footer
    className={cn('bg-gray-900 text-white px-6 py-10', className)}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
      <div>
        <h4 className="text-lg font-semibold mb-4">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">Product</h4>
        <ul className="space-y-2 text-gray-400">
          {productLinks.map((link, index) => (
            <li key={index}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">Company</h4>
        <ul className="space-y-2 text-gray-400">
          {companyLinks.map((link, index) => (
            <li key={index}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
        <ul className="space-y-2 text-gray-400">
          {followLinks.map((link, index) => (
            <li key={index}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
      </div>
    </div>
    <div className="text-center text-gray-500 mt-10 text-sm">
      © {new Date().getFullYear()} Layrix UI. All rights reserved.
    </div>
  </motion.footer>
);

export const GradientFooter = ({
  className,
  title = 'Layrix UI',
  description = 'Beautiful, reusable UI components built for developers.',
  productLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Documentation', href: '#docs' }
  ],
  companyLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Blog', href: '#blog' }
  ],
  followLinks = [
    { label: 'Twitter', href: '#twitter' },
    { label: 'GitHub', href: '#github' },
    { label: 'LinkedIn', href: '#linkedin' }
  ]
}: FooterProps) => (
  <motion.footer
    className={cn('bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-10', className)}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
      <div>
        <h4 className="text-lg font-semibold mb-4">{title}</h4>
        <p className="text-gray-200">{description}</p>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">Product</h4>
        <ul className="space-y-2 text-gray-200">
          {productLinks.map((link, index) => (
            <li key={index}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">Company</h4>
        <ul className="space-y-2 text-gray-200">
          {companyLinks.map((link, index) => (
            <li key={index}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
        <ul className="space-y-2 text-gray-200">
          {followLinks.map((link, index) => (
            <li key={index}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
      </div>
    </div>
    <div className="text-center text-gray-300 mt-10 text-sm">
      © {new Date().getFullYear()} Layrix UI. All rights reserved.
    </div>
  </motion.footer>
);

export const MinimalFooter = ({
  className,
  title = 'Layrix UI',
  description = 'Beautiful, reusable UI components built for developers.',
  productLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Documentation', href: '#docs' }
  ],
  companyLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Blog', href: '#blog' }
  ],
  followLinks = [
    { label: 'Twitter', href: '#twitter' },
    { label: 'GitHub', href: '#github' },
    { label: 'LinkedIn', href: '#linkedin' }
  ]
}: FooterProps) => (
  <motion.footer
    className={cn('bg-gray-50 text-gray-800 px-6 py-10', className)}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
      <div>
        <h4 className="text-lg font-semibold mb-4">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">Product</h4>
        <ul className="space-y-2 text-gray-600">
          {productLinks.map((link, index) => (
            <li key={index}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">Company</h4>
        <ul className="space-y-2 text-gray-600">
          {companyLinks.map((link, index) => (
            <li key={index}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
        <ul className="space-y-2 text-gray-600">
          {followLinks.map((link, index) => (
            <li key={index}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
      </div>
    </div>
    <div className="text-center text-gray-500 mt-10 text-sm">
      © {new Date().getFullYear()} Layrix UI. All rights reserved.
    </div>
  </motion.footer>
);

export const GlassFooter = ({
  className,
  title = 'Layrix UI',
  description = 'Beautiful, reusable UI components built for developers.',
  productLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Documentation', href: '#docs' }
  ],
  companyLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Blog', href: '#blog' }
  ],
  followLinks = [
    { label: 'Twitter', href: '#twitter' },
    { label: 'GitHub', href: '#github' },
    { label: 'LinkedIn', href: '#linkedin' }
  ]
}: FooterProps) => (
  <motion.footer
    className={cn('w-full py-6 px-4 backdrop-blur-lg bg-white/30 border border-white/10 rounded-xl text-center text-gray-800', className)}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
      <div>
        <h4 className="text-lg font-semibold mb-4">{title}</h4>
        <p className="text-black-400">{description}</p>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">Product</h4>
        <ul className="space-y-2 text-black-400">
          {productLinks.map((link, index) => (
            <li key={index}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">Company</h4>
        <ul className="space-y-2 text-black-400">
          {companyLinks.map((link, index) => (
            <li key={index}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
        <ul className="space-y-2 text-black-400">
          {followLinks.map((link, index) => (
            <li key={index}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
      </div>
    </div>
    <div className="text-center text-white-500 mt-10 text-sm">
      © {new Date().getFullYear()} Layrix UI. All rights reserved.
    </div>
  </motion.footer>
);

export const AdvancedFooter = ({
  className,
  title = 'Layrix UI',
  description = 'Beautiful, reusable UI components built for developers.',
  productLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Documentation', href: '#docs' }
  ],
  companyLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Blog', href: '#blog' }
  ],
  followLinks = [
    { label: 'Twitter', href: '#twitter' },
    { label: 'GitHub', href: '#github' },
    { label: 'LinkedIn', href: '#linkedin' }
  ]
}: FooterProps) => (
  <motion.footer
    className={cn('bg-gray-900 text-white px-6 py-10', className)}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
      <div>
        <h4 className="text-lg font-semibold mb-4">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">Product</h4>
        <ul className="space-y-2 text-gray-400">
          {productLinks.map((link, index) => (
            <li key={index}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">Company</h4>
        <ul className="space-y-2 text-gray-400">
          {companyLinks.map((link, index) => (
            <li key={index}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
        <ul className="space-y-2 text-gray-400">
          {followLinks.map((link, index) => (
            <li key={index}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
      </div>
    </div>
    <div className="text-center text-white-500 mt-10 text-sm">
      © {new Date().getFullYear()} Layrix UI. All rights reserved.
    </div>
  </motion.footer>
);
