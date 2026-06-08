import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';
import { SocialButton } from './SocialButton';
import { portfolioData } from '../data/portfolio-data';
import { ChevronDown } from 'lucide-react';

interface FooterProps {
  onScrollToTop?: () => void;
}

export function Footer({ onScrollToTop }: FooterProps) {
  return (
    <footer className="px-6 py-16 md:px-10 border-t border-white/10">
      {/* Scroll Arrow */}
      <ScrollReveal>
        <div className="flex justify-center mb-8">
          <motion.button
            onClick={onScrollToTop}
            className="w-12 h-12 bg-[#5DADE2] rounded-full flex items-center justify-center cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ChevronDown className="w-6 h-6 text-white rotate-180" />
          </motion.button>
        </div>
      </ScrollReveal>

      {/* Thanks Content */}
      <ScrollReveal delay={0.1}>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
            {portfolioData.footer.title}
          </h2>
          <p className="body-text mb-2">
            {portfolioData.footer.message}
          </p>
          <p className="body-text">
            {portfolioData.footer.cta}
          </p>
        </div>
      </ScrollReveal>

      {/* Social Buttons */}
      <ScrollReveal delay={0.2}>
        <div className="flex justify-center gap-4 mb-10">
          <SocialButton 
            type="linkedin" 
            href={portfolioData.socialLinks.linkedin}
            label="LinkedIn"
          />
          <SocialButton 
            type="email" 
            href={portfolioData.socialLinks.email}
            label="Email"
          />
        </div>
      </ScrollReveal>

      {/* Copyright */}
      <ScrollReveal delay={0.3}>
        <p className="text-center text-gray-500 text-sm">
          {portfolioData.footer.copyright}
        </p>
      </ScrollReveal>
    </footer>
  );
}
