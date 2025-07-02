import { motion } from 'framer-motion';

interface AnimatedBadgeButtonProps {
  text: string;
}

export const AnimatedBadgeButton = ({ text }: AnimatedBadgeButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mx-auto px-4 py-1.5 text-sm font-mono rounded-full border border-primary text-primary bg-primary/10 hover:bg-primary/20 transition-colors duration-300 text-white"
    >
      {text}
    </motion.button>
  );
};
