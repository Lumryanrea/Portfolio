import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ScrollArrowProps {
  onClick?: () => void;
  className?: string;
}

export function ScrollArrow({ onClick, className = '' }: ScrollArrowProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`w-12 h-12 bg-[#5DADE2] rounded-full flex items-center justify-center cursor-pointer ${className}`}
      animate={{ y: [0, 8, 0] }}
      transition={{ 
        duration: 2, 
        repeat: Infinity, 
        ease: 'easeInOut' 
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Scroll down"
    >
      <ChevronDown className="w-6 h-6 text-white" />
    </motion.button>
  );
}
