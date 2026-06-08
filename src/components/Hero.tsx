import { motion } from 'framer-motion';
import { SocialButton } from './SocialButton';
import { ScrollArrow } from './ScrollArrow';
import { portfolioData } from '../data/portfolio-data';

interface HeroProps {
  onScrollToAbout: () => void;
}

export function Hero({ onScrollToAbout }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 md:px-10">
      <motion.div
        className="text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div
          variants={imageVariants}
          className="mb-8"
        >
          <motion.div
            className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden bg-gray-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={portfolioData.profileImage}
              alt={portfolioData.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"%3E%3Crect width="160" height="160" fill="%23ddd"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="60" fill="%23999"%3EPB%3C/text%3E%3C/svg%3E';
              }}
            />
          </motion.div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-light tracking-[0.3em] text-white mb-4"
        >
          {portfolioData.name}
        </motion.h1>

        {/* Divider Line */}
        <motion.div
          variants={lineVariants}
          className="w-20 h-0.5 bg-[#5DADE2] mb-6 origin-center"
        />

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-200 mb-8"
        >
          {portfolioData.title}
        </motion.p>

        {/* Social Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 mb-10"
        >
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
        </motion.div>

        {/* CTA Button */}
        <motion.a
          variants={itemVariants}
          href={portfolioData.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          VIEW RESUME
        </motion.a>

        {/* Scroll Arrow */}
        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <ScrollArrow onClick={onScrollToAbout} />
        </motion.div>
      </motion.div>
    </section>
  );
}
