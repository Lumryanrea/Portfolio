import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SocialButtonProps {
  type: 'linkedin' | 'email';
  href: string;
  label?: string;
}

const icons: Record<string, LucideIcon> = {
  linkedin: Linkedin,
  email: Mail
};

export function SocialButton({ type, href, label }: SocialButtonProps) {
  const Icon = icons[type];
  
  return (
    <motion.a
      href={href}
      target={type === 'linkedin' ? '_blank' : undefined}
      rel={type === 'linkedin' ? 'noopener noreferrer' : undefined}
      className="social-btn"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label || type}
    >
      <Icon className="w-5 h-5 text-white" />
    </motion.a>
  );
}
