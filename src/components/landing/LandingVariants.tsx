import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Typewriter from 'typewriter-effect';
import type { ReactNode } from 'react';

interface LandingProps {
  children?: ReactNode;
  className?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const ModernLanding = ({
  className,
  title = 'Build Beautiful Products',
  description = 'Layrix UI helps you deliver fast, stunning, and scalable web interfaces with ease.',
  buttonText = 'Get Started',
  buttonLink = '#',
  imageSrc = 'https://images.unsplash.com/photo-1720884413532-59289875c3e1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  imageAlt = 'Product preview'
}: LandingProps) => (
  <motion.div
    className={cn('min-h-screen bg-gradient-to-br from-gray-50 to-white px-6 py-16 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-10', className)}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="max-w-xl">
      <h1 className="text-5xl font-bold mb-4 text-gray-900">{title}</h1>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <motion.a
          href={buttonLink}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 inline-block"
        >
          {buttonText}
        </motion.a>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200"
        >
          View Docs
        </motion.button>
      </div>
    </div>
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex justify-center"
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="max-w-md w-full rounded-2xl shadow-2xl transition-transform duration-200 hover:scale-105"
      />
    </motion.div>
  </motion.div>
);

export const GlassLanding = ({
  className,
  title = 'Glass Effect Landing',
  description = 'A modern UI component library built with React and Tailwind CSS',
  buttonText = 'Explore',
  buttonLink = '#',
  imageSrc = 'https://images.unsplash.com/photo-1720884413532-59289875c3e1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  imageAlt = 'Glass Effect Preview'
}: LandingProps) => (
  <motion.div
    className={cn('min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center', className)}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="max-w-4xl w-full px-8 py-12 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4 text-white">{title}</h1>
          <p className="text-gray-300 mb-6">{description}</p>
          <motion.a
            href={buttonLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 inline-block"
          >
            {buttonText}
          </motion.a>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1"
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-w-md w-full rounded-2xl shadow-xl transition-transform duration-200 hover:scale-105"
          />
        </motion.div>
      </div>
    </motion.div>
  </motion.div>
);

export const HeroLanding = ({
  className,
  title = 'Hero Landing',
  description = 'A modern UI component library built with React and Tailwind CSS',
  buttonText = 'Learn More',
  buttonLink = '#',
  imageSrc = 'https://images.unsplash.com/photo-1720884413532-59289875c3e1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  imageAlt = 'Hero Preview'
}: LandingProps) => (
  <motion.div
    className={cn('min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center', className)}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="max-w-6xl w-full px-8 py-12"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4 text-white">{title}</h1>
          <p className="text-gray-300 mb-6">{description}</p>
          <motion.a
            href={buttonLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 inline-block"
          >
            {buttonText}
          </motion.a>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1"
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-w-md w-full rounded-2xl shadow-xl transition-transform duration-200 hover:scale-105"
          />
        </motion.div>
      </div>
    </motion.div>
  </motion.div>
);

export const MinimalLanding = ({
  className,
  title = 'Minimal Landing',
  description = 'A modern UI component library built with React and Tailwind CSS',
  buttonText = 'Start Now',
  buttonLink = '#',
  imageSrc = 'https://images.unsplash.com/photo-1720884413532-59289875c3e1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  imageAlt = 'Minimal Preview'
}: LandingProps) => (
  <motion.div
    className={cn('min-h-screen bg-white flex items-center justify-center', className)}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="max-w-4xl w-full px-8 py-12"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{title}</h1>
          <p className="text-gray-600 mb-6">{description}</p>
          <motion.a
            href={buttonLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-200 inline-block"
          >
            {buttonText}
          </motion.a>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1"
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-w-md w-full rounded-2xl shadow-xl transition-transform duration-200 hover:scale-105"
          />
        </motion.div>
      </div>
    </motion.div>
  </motion.div>
);

export const CreativeLanding = ({
  className,
  title = 'Creative Landing',
  description = 'A modern UI component library built with React and Tailwind CSS',
  buttonText = 'Get Creative',
  buttonLink = '#',
  imageSrc = 'https://images.unsplash.com/photo-1720884413532-59289875c3e1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  imageAlt = 'Creative Preview'
}: LandingProps) => (
  <motion.section
    className={cn(
      'min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 py-20 bg-gradient-to-br from-pink-100 via-white to-purple-100',
      className
    )}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    {/* Left Content */}
    <div className="max-w-xl text-center lg:text-left mb-10 lg:mb-0">
      <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
        <Typewriter
          options={{
            strings: [
              `${title} `,
              'Beautiful Interfaces',
              'Modern Design',
              'Fast & Responsive'
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30
          }}
        />
      </h1>

      <p className="text-xl text-gray-600 mb-4">
        Creative Components • Beautiful UI • Modern Design
      </p>

      <p className="mt-6 text-gray-700">{description}</p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <motion.a
          href={buttonLink}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-700 transition-all duration-200"
        >
          {buttonText}
        </motion.a>
        <motion.a
          href="#docs"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border border-pink-600 text-pink-600 px-6 py-3 rounded-xl font-semibold hover:bg-pink-50 transition-all duration-200"
        >
          View Docs
        </motion.a>
      </div>
    </div>

    {/* Right Image */}
    <div className="flex justify-center">
      <motion.img
        src={imageSrc}
        alt={imageAlt}
        className="max-w-md w-full rounded-2xl shadow-2xl"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      />
    </div>
  </motion.section>
);
