import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';
import { SectionDivider } from './SectionDivider';
import { portfolioData } from '../data/portfolio-data';

export function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="px-6 py-16 md:px-10">
      <ScrollReveal>
        <div className="text-center mb-8">
          <h2 className="section-title mb-4">Certifications</h2>
          <p className="text-gray-300 mb-4">
            My growing list of proprietary, exam-based certifications
          </p>
          <SectionDivider width={60} />
        </div>
      </ScrollReveal>

      <motion.div
        className="space-y-8 max-w-lg mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {portfolioData.certifications.map((cert) => (
          <motion.div
            key={cert.name}
            variants={itemVariants}
            className="flex items-center gap-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Badge Image */}
            <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
              <img
                src={cert.badge}
                alt={cert.organization}
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96"%3E%3Crect width="96" height="96" rx="12" fill="%230078D4"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="14" fill="white"%3E${cert.organization.slice(0, 2)}%3C/text%3E%3C/svg%3E`;
                }}
              />
            </div>
            
            {/* Certification Text */}
            <p className="text-white text-base md:text-lg">
              {cert.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
