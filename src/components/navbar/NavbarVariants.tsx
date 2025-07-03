import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useState, type ReactNode } from 'react';

interface NavbarProps {
  title?: string;
  links?: { href: string; label: string }[];
  className?: string;
}

const defaultLinks = [
  { href: '#features', label: 'Features' },
  { href: '#components', label: 'Components' },
  { href: '#contact', label: 'Contact' },
];

export const DefaultNavbar = ({ title = 'Layrix UI', links = defaultLinks, className }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={cn(
        'bg-white shadow-sm border-b w-full rounded-xl px-6 py-4',
        className
      )}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-black">{title}</span>
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <div className="hidden md:flex space-x-6 text-black">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 md:hidden flex flex-col gap-3 text-black">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export const TransparentNavbar = ({
  title = 'Layrix UI',
  links = defaultLinks,
  className,
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={cn(
        'w-full px-6 py-4 bg-transparent text-white rounded-xl border border-white/10',
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold">{title}</span>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 md:hidden flex flex-col gap-3">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export const GlassNavbar = ({
  title = 'Layrix Glass',
  links = defaultLinks,
  className,
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={cn(
        'w-full px-6 py-4 backdrop-blur-lg bg-white/30 border border-white/10 shadow-md rounded-xl',
        className
      )}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="flex items-center justify-between">
        <span className="text-xl font-semibold text-gray-800">{title}</span>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <div className="hidden md:flex space-x-4 text-gray-700">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 flex flex-col gap-2 text-gray-700 md:hidden">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export const DarkNavbar = ({
  title = 'Layrix Dark',
  links = defaultLinks,
  className,
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={cn(
        'w-full px-6 py-4 bg-black text-white shadow-lg rounded-xl',
        className
      )}
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex justify-between items-center">
        <span className="text-xl font-semibold">{title}</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
        <div className="hidden md:flex space-x-4">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-2">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export const PrimaryNavbar = ({
  title = 'Layrix Primary',
  links = defaultLinks,
  className,
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={cn(
        'w-full px-6 py-4 bg-blue-600 text-white rounded-xl',
        className
      )}
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      transition={{ type: 'tween', duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">{title}</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
};

interface FooterProps {
  children?: ReactNode;
  className?: string;
}

export const DefaultFooter = ({ children, className }: FooterProps) => (
  <footer className={cn('w-full py-6 px-4 bg-white text-gray-800 rounded-xl text-center border-t', className)}>
    {children ?? <p>&copy; {new Date().getFullYear()} Layrix UI. All rights reserved.</p>}
  </footer>
);

export const DarkFooter = ({ children, className }: FooterProps) => (
  <footer className={cn('w-full py-6 px-4 bg-gray-900 text-white rounded-xl text-center', className)}>
    {children ?? <p>&copy; {new Date().getFullYear()} Layrix UI - Built with 💙</p>}
  </footer>
);

export const GradientFooter = ({ children, className }: FooterProps) => (
  <footer className={cn('w-full py-6 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl text-center', className)}>
    {children ?? <p>&copy; {new Date().getFullYear()} Layrix UI - Powered by creativity ✨</p>}
  </footer>
);

export const MinimalFooter = ({ children, className }: FooterProps) => (
  <footer className={cn('w-full py-4 text-center text-sm text-gray-500', className)}>
    {children ?? <p>© {new Date().getFullYear()} Layrix. Simple. Clean. Elegant.</p>}
  </footer>
);

export const GlassFooter = ({ children, className }: FooterProps) => (
  <footer className={cn('w-full py-6 px-4 backdrop-blur-lg bg-white/30 border border-white/10 rounded-xl text-center text-gray-800', className)}>
    {children ?? <p>© {new Date().getFullYear()} Layrix Glass Footer</p>}
  </footer>
);
